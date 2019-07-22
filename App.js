import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import About from './components/About';
import ValidationForm from "./components/ValidationForm";
import BuyPackage from "./components/BuyPackage";

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />

    }
    return (
      <Router>
      <div style={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{marginTop: '64px'}}>
           <Route path="/about" component ={About}/>
         <center>  <div>
           <Route path="/validationForm" component ={ValidationForm}/>
           </div></center>
           <center>  <div>
           <Route path="/buyPackage" component ={BuyPackage}/>
           </div></center>
        </main>
      </div>
      </Router>
    );
  }
}

export default App;