import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import DishDetail from "./DishDetailComponent";

//menu array is returned, an array of cards and divs, each card has an onClick attribute
//
/*
formerly inside return of rednerDish
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
 */

class Menu extends Component {
  constructor(props) {
    super(props);

    console.log("Menu component constructor is invoked");

    this.state = {
      selectedDish: null

    };
  }

  componentDidMount() {
    console.log("Menu Component componentDidMount is invoked.");
  }

  testFunction() {
    console.log(this.props.dishes[1].name);
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
    console.log("Menu Component onDishSelect was called");
  }

  renderDish(dish) {
    console.log("Menu Component renderDish is called");
    if (dish != null) {
      return (
       <DishDetail dish={dish} />
      );
    } else {
      return <div></div>;
    }
  }

  // we changed this.state.dishes to this.props.dishes because the dishes array is getting passed through
  // the props variable passed in the constructor i think.

  // we also added an onClick attribute to the entire Card, when we click the card,
  // the onDishSelect function is called and the selectedDish: attribute is assigned dish object of the
  // current iteration of the map function
  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    console.log("Menu Component render method was invoked");    

    return (
      <div className="container">
        <div className="row">{menu}</div>
        <div className="row">{this.renderDish(this.state.selectedDish)}</div>
      </div>
    );
  }
}

export default Menu;
