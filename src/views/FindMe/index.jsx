import React from 'react';

import './style.css';
import GithubIcon from '../../components/GithubIcon';
import LinkedinIcon from '../../components/LinkedinIcon';
import EmailIcon from '../../components/EmailIcon';
import ResumeIcon from '../../components/ResumeIcon';

function FindMe() {
  return (
    <div className="container find-me" id="find-me">
      <h1 className="fm-title">Find/Contact Me</h1>
      <div className="socials">
        <GithubIcon />
        <LinkedinIcon />
        <EmailIcon />
        <ResumeIcon />
      </div>
    </div>
  );
}

export default FindMe;
