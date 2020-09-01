import React from "react";
import Slider from "../slider/slider";

import "./projectsStyles.css";

const Projects = () => {
  return (
    <div id="projects" className="projects mobile-column fullHeight">
      <div className="projects-row">
        <div className="project-photo">
          <Slider
            slides={[
              "./assets/weather1.png",
              "./assets/weather2.png",
              "./assets/weather3.png",
            ]}
          />
        </div>
        <div className="project-desc">
          Simple weather app in React and Redux technology. I used
          openweathermap to get weather details by city name. This is web app,
          but it is responsive,so we can use this app also on moblie devices.
          <a
            href="https://github.com/KarolinaWrona/Weather"
            className="btn-github"
          >
            Github
          </a>
        </div>
      </div>
      <div className="projects-row">
        <div className="project-photo">
          <Slider
            slides={[
              "./assets/cats1.png",
              "./assets/cats2.png",
              "./assets/cats3.png",
            ]}
          />
        </div>

        <div className="project-desc">
          Cats is a project made in React, because I wanted to upgrade my skills
          in React. This webpage could be created in HTML and CSS, but why not
          use React to learn! :)
          <a
            href="https://github.com/KarolinaWrona/cats"
            className="btn-github"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
