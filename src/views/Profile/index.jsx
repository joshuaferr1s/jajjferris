import React from 'react';

import './style.css';
import DownArrow from '../../components/DownArrow';

function Profile() {
  return (
    <div className="container profile" id="profile">
      <div className="text-center">
        <img src="Me.jpg" className="avatar" alt="Joshua Ferris's face" />
        <h2 className="pr-name">
          Joshua Ferris
        </h2>
        <p className="pr-headline">
          Fall 2020 Masters of Business Analytics Student
        </p>
        <DownArrow navigateTo="my-story" />
      </div>
    </div>
  );
}

export default Profile;
