import React from 'react';
import { Link } from 'react-router-dom';
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

import './style.css';
import { API_URL } from '../../config';

function Payments() {
  const stripe = useStripe();
  const elements = useElements();
  const [alert, setAlert] = React.useState('');
  const [alertType, setAlertType] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [reason, setReason] = React.useState('');
  const [formVisible, setFormVisible] = React.useState(true);

  const updateAlert = (type, text) => {
    setAlertType(type);
    setAlert(text);
  };

  const clearForm = () => {
    setAmount('');
    setEmail('');
    setReason('');
    setFormVisible(false);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    setAlert('');
    if (!stripe || !elements) {
      updateAlert('error', 'Whoa there cowboy we are still connecting to the Stripe API. Please try again momentarily.');
      return;
    }
    if (Number(amount) < 1 || email === '' || reason === '') {
      updateAlert('error', 'Please fill out all fields of the form.')
      return;
    }

    let paymentData = {};

    try {
      const card = elements.getElement(CardElement);
      const result = await stripe.createToken(card);
      if (result.error) {
        updateAlert('error', result.error.message);
        return;
      }
      paymentData = {
        charge: {
          amount: Number(amount),
          email,
          reason,
        },
        token: result.token,
      }
    } catch (error) {
      updateAlert('error', 'We couldn\'t reach the Stripe servers. Check your connection to the internet and try again.');
      return;
    }

    try {
      const chargeResult = await fetch(`${API_URL}/payment`, {
        method: 'POST',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
      });
      const chargeJson = await chargeResult.json();
      if (chargeJson.status !== 200) {
        updateAlert('error', chargeJson.message);
      } else {
        updateAlert('success', `Payment of $${chargeJson.amount} succeeded! You should recieve an email receipt at ${paymentData.charge.email}`);
        clearForm();
      }
    } catch (error) {
      updateAlert('error', 'We couldn\'t reach our server. Check your connection to the internet and try again.');
    }
  };

  return (
    <div className="container payments" id="payments">
      <div className="pay-info text-center">
        <h2>Make a payment to Joshua Ferris</h2>
        <p>All payments are processed using Stripe. At no point does my website hold your card information. Stripe charges processing fees so the actual amount I will recieve is currently: ${(amount - (amount * .029 + .3)).toFixed(2)}</p>
      </div>
      {alert  && <div className={`alert ${alertType}`}>{alert}</div>}
      {formVisible &&
        <form className="pay-form" onSubmit={handleSubmit}>
          <input type="number" placeholder="Amount in USD" required min="1" max="100" step="0.01" value={amount} onChange={e => setAmount(e.target.value)} />
          <input type="email" placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)} />
          <input type="text" placeholder="Reason" required value={reason} onChange={e => setReason(e.target.value)} />
          <CardElement
            options={({
              style: {
                base: {
                  fontSize: "16px",                  color: "#595959",
                  letterSpacing: "0.025em",
                  fontFamily: "Source Code Pro, monospace",
                  "::placeholder": {
                    color: "#aab7c4"
                  },
                }
              }
            })}
          />
          <button className="pay-button" type="submit" disabled={!stripe}>Pay</button>
        </form>
      }
      <Link to="/" className="pay-linkback">Return to my website</Link>
    </div>
  );
}

export default Payments;
