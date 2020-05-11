import React from 'react';
import { Link } from 'react-router-dom';

function PaymentIcon() {
  return (
    <Link to="/pay" className="social">
      <svg className="social-image" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" width="100%" height="100%" viewBox="0 0 24 24" fill="#595959">
        <path d="M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
      </svg>
    </Link>
  );
}

export default PaymentIcon;
