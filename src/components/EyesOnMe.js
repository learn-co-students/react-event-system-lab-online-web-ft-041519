import React from "react";
// Code EyesOnMe Component Here

class EyesOnMe extends React.Component {
  focus = () => console.log("Good!");
  handleBlur = () => console.log("Hey! Eyes on me!");

  render() {
    return (
      <div>
        <button onFocus={this.focus} onBlur={this.handleBlur}></button>
      </div>
    );
  }
}

export default EyesOnMe;
