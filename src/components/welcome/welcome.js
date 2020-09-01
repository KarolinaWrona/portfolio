import React from "react";
import "./welcomeStyles.css";
import Menu from "../menu/menu";
import { scrollById } from "../../utils/Tools";

const Welcome = () => {
  return (
    <div className="welcome fullHeight d-flex">
      <Menu />
      <div className="welcome-content d-flex center-all">
        <div>
          <h1>Welcome</h1>
        </div>
        <div>
          <p>
            My name is Karolina and this is my portfolio. I am avaiable to work.
          </p>
        </div>
        <div>
          <button onClick={() => scrollById('aboutMe')} className="btn">Let's start!</button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
