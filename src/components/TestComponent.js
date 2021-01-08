import React, { Component } from "react";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {};
   // this.renderTheCommentPassedFromMainComponent();
  }

  renderTheCommentPassedFromMainComponent() {
    console.log(this.props.testField);
    const dishOneName = this.props.testField;
    return (
      <div>
        <h2> {dishOneName} </h2>
      </div>
    );
  }
  //renderTheCommentPassedFromMainComponent()

  render() {
    return (
      <div>
        {this.renderTheCommentPassedFromMainComponent()}
        <h2>This is a test</h2>
      </div>
    );
  }
}

export default Test;
