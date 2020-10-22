import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './App.css';
import './normalize.scss';
import routers from './routers';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import "animate.css/sourse/animate.css";

const data = [
  1,2,3,4,5,6,7,8
]

const App = () => {
  
  return (
    <Router>
      <Switch>
        {routers.map(({path, Component}) => {
          const render = () => <React.Suspense fallback={(<div/>)}>
            <Component/>
          </React.Suspense>
          return(
          <Route path={path} render={render}/>
        )})}
      </Switch>
    </Router>
  );
}

export const Scroll = () => {
  return (
    <div className="App">
        {data.map((el) => (
          <ScrollAnimation 
            animateIn='bounceInRight'
            className="block-2"
            animateOnce={true}
            >
            <div  className="block">{el}</div>
          </ScrollAnimation>
        ))}
    </div>
  );
}

export default App;
