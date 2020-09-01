import React from "react";

import "./aboutStyles.css";

const AboutMe = () => {
  return (
    <div id="aboutMe" className="aboutMe fullHeight d-flex">
      <div className="aboutContent mobile-column d-flex">
        <div className="photo d-flex" />
        <div className="paragraf d-flex">
          <div className="paragraf_content">
            <p>
              My name is Karolina and I am 22 years old. I am from Częstochowa,
              but I live in Warsaw. I graduated in Microbiology from the
              University of Wroclaw. I am cat mama of 8 months old Maine Coon -
              Ginger.
            </p>
            <hr />
            <p>
              I started programming because, it was always fascinating for me
              how apps work and I wanted to build something by myself. Now I know
              that programming is what I would like to do in my life and I am
              ready to work.
            </p>
            <hr />
            <p>
              In my free time I like playing with my cat, learning new things
              and meeting with friends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
