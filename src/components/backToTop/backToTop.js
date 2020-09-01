import React, { Component } from "react";

import "./topstyles.css";

class BackToTop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showButton: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { showButton } = this.state;

    if (window.scrollY > 200 && !showButton) {
      this.setState({ showButton: true });
    } else if (window.scrollY < 200 && showButton) {
      this.setState({ showButton: false });
    }
  };

  toTopAction = () => window.scrollTo(0, 0);

  render() {
    const { showButton } = this.state;

    return (
      showButton && (
        <div className="toTop" onClick={this.toTopAction}>
          <button className="btn-t">To Top</button>
        </div>
      )
    );
  }
}

export default BackToTop;
