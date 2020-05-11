import React from 'react';

import './style.css';
import DownArrow from '../../components/DownArrow';

function MyStory() {
  return (
    <div className="container my-story" id="my-story">
      <h1 className="my-title">My Story</h1>
      <p className="my-text text-center">
        I was born and raised in the United Kingdom. Throughout high school, I spent my time studying mathematics and programming text based RPG games in Batch, Python, and Javascript. I attended the University of York to get my bachelors in mathematics, in which I obtained an upper second-class.
      </p>
      <p className="my-text text-center">
        In the summer of 2016, I flew to Ohio with Camp America to work at YMCA Camp Kern as an equestrian camp counselor. It was there I found my confidence and many other things. During staff training, I was sent to lifeguard training. Igniting my love for aquatic safety and leading me to become not only a <a className="my-link" href="assets/lifeguard.pdf">certified lifeguard</a>, but also a <a className="my-link" href="/assets/lifeguard-instructor.pdf">lifeguard instructor</a> and <a className="my-link" href="assets/ashi-instructor.pdf">first aid, CPR, and emergency oxygen instructor</a>. Over the next four years, I went from counselor to assistant ranch director, to aquatics director.
      </p>
      <p className="my-text text-center">
        Since graduating from the University of York in 2018, I married my wife and immigrated to the USA. My first year was spent awaiting approval from USCIS to work in the states. During which time I focused on developing my programming skills. I created websites for Camp Kern, as well as working in partnership with the University of Cincinnati’s Dr. Karla Washington on a tool for her research in speech-language pathology. This past year, I have been working part-time at YMCA Camp Kern as a barn hand. I'm looking forward to my next opportunity: a masters in business analytics at Miami University, starting this fall.
      </p>
      <DownArrow color="rgb(212, 221, 221)" navigateTo="find-me" />
    </div>
  );
}

export default MyStory;
