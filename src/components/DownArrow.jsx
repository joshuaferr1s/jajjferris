import React from 'react';

function DownArrow({ color='white', navigateTo }) {
  return (
    <svg className="down-arrow" fill={color} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" onClick={() => document.getElementById(navigateTo) ? document.getElementById(navigateTo).scrollIntoView() : null}>
      <title />
      <g id="Fill">
        <path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z" />
        <path d="M16,18l-5.29-5.29L9.29,14.12l5.3,5.29a2,2,0,0,0,2.82,0l5.3-5.29-1.42-1.41Z" />
      </g>
    </svg>
  );
}

export default DownArrow;
