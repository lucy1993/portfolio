import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// anv
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';

// components
import Hola from './components/Hola';
import About from './components/About';
import Technologies from './components/Technologies';
import Game from './components/Game';

// style
import './App.css';

function App() {
  
  const [socialMedia, setSocialMedia] = useState([
    {
      icon: 'fab fa-github',
      color: 'black',
      link: 'https://github.com/lucy1993'
    },
    {
      icon: 'fas fa-basketball-ball',
      color: 'pink',
      link: 'https://dribbble.com/LyusiSDX'
    },
    {
      icon: 'fab fa-linkedin-in',
      color: 'blue',
      link: 'https://www.linkedin.com/in/lyusi-baghdagyulyan/'
    },
    {
      icon: 'fab fa-codepen',
      color: 'black',
      link: 'https://codepen.io/Bagh'
    },
    {
      icon: 'fab fa-instagram',
      color: 'pink',
      link: 'https://www.instagram.com/lyusi_baghdagyulyan/'
    }
  ])

  return (
    <div className="main-app">
          <Router>
            <div className='app-navigation'>
              <Navigation />
              <a href="mailto:lyusibaghagyulyan@gmail.com">
                <div className='contact-me-btn'>
                Contact Me
                </div>
              </a>
            </div>
              <Switch>
                <Route  exact path="/portfolio/hola">
                  <Hola />
                </Route>
              </Switch>
              <Switch>
                <Route exact path="/portfolio/technologies">
                  <Technologies />
                </Route>
              </Switch>
              <Switch>
                <Route exact path="/portfolio/about">
                  <About />
                </Route>
              </Switch>
              <Switch>
                <Route exact path="/portfolio/play">
                  <Game />
                </Route>
              </Switch>
              <Switch>
                <Route  exact path="/portfolio/">
                  <Hola />
                </Route>
              </Switch>
              <div className='social-media'>
                {socialMedia && socialMedia.map(social => 
                <a href={social.link} key={uuidv4()}  target="_blank">
                  <div className={`circle ${social.color} circle-icon`}>
                    <i className={`${social.icon}`}></i>
                  </div>
                </a>

                )}
              </div>
              <div className='preserved-rights'>
                <div> © 2021 Lyusi </div>
                <div> all rights reserved </div>
              </div>
            </Router>
      </div>
  );
}

export default App;
