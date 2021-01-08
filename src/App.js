
import React, { Component } from "react";
import "./App.css";
import NavigationBar from "./components/NavbarComponent";
import Menu from "./components/MenuComponent";
import { DISHES } from "./shared/dishes";
import Main from "./components/MainComponent";

class App extends Component {
  constructor(props) {
    super(props);

    console.log("App Component constructor is called.");

    
  }

  // Main Component is now the primary wrapper component
  // everything App.js did, main now does.
  render() {
    return (
      <div className="App">
        <Main />
        
      </div>
    );
  }
}

export default App;
