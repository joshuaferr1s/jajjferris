import React from 'react';

function EmailIcon() {
  return (
    <a href="mailto:jajjferris@gmail.com" className="social" rel="noopener noreferrer nofollow" target="_blank">
      <svg className="social-image" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" width="100%" height="100%" viewBox="0 0 24 24" fill="#595959">
        <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
      </svg>
    </a>
  );
}

export default EmailIcon;
