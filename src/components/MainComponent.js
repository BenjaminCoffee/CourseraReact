import React, { Component } from "react";
import NavigationBar from "./NavbarComponent";
import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent";
import Test from "./TestComponent";
import { DISHES } from "../shared/dishes";

class Main extends Component {
  constructor(props) {
    super(props);

    console.log("Main Component constructor is called.");

    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  render() {
    return (
      <div>
        <Test testField={this.state.dishes[1].name} />
        <h1>Hello from the Main Component!</h1>
        <NavigationBar />
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default Main;
