import React, { Component } from "react";

import "./contactStyles.css";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subject: "",
      message: "",
    };
  }

  handleSubmit = (e) => {
    const { subject, message } = this.state;
    e.preventDefault();
    window.location.href = `mailto:karolinawrona9804@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;
  };

  onChangeValue = (key, value) => {
    this.setState({ [key]: value });
  };

  render() {
    const { subject, message } = this.state;

    return (
      <div id="contact" className="fullHeight d-flex ">
        <div className="d-flex contactContent">
          <div className="d-flex contactSocial center-all">
            <h3>Contact details</h3>
            <p>Phone: 880 100 614</p>
            <p>E-mail: karolinawrona9804@gmail.com</p>
            <p>
              <a href="https://www.linkedin.com/in/karolina-wrona-b69bb21aa">
                Linkedin
              </a>
            </p>
            <p>
              <a href="https://github.com/KarolinaWrona">Github</a>
            </p>
          </div>
          <div className="d-flex contactForm">
            <form onSubmit={this.handleSubmit} className="form d-flex">
              <label className="d-flex">Send me a message</label>
              <input
                id="sub"
                className="input"
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => this.onChangeValue("subject", e.target.value)}
                required
                autoComplete="off"
              />
              <textarea
                id="mes"
                className="input"
                type="text"
                placeholder="Message"
                value={message}
                onChange={(e) => this.onChangeValue("message", e.target.value)}
                required
                autoComplete="off"
              />
              <button className="btn-f" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
