import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './styles.css';

export default class Main extends Component {

  
  render() {
    return(
        <section>
        <section className="infos">

        <header>
            <div className="anchors">
                <ul>
                    <NavLink style={styles.link} to="/AboutMe" ><li>Sobre Mim</li></NavLink>
                    <NavLink style={styles.link} to="/Portfolio" ><li>Portfolio</li></NavLink>
                    <NavLink style={styles.link} to="/Skills" ><li>Skills</li></NavLink>
                    <NavLink style={styles.link} to="/Contato" ><li>Contato</li></NavLink>
                </ul>
            </div>
        </header>
        
        <section className="slideControl">
            <a  href="/AboutMe" ><button className="controller"></button></a>
        </section>

        <section className="footer">
                <img src={ require('../../assets/github.svg') } />
                <img src={ require('../../assets/facebook.svg') } />
                <img src={ require('../../assets/linkedin.svg') } />
                <img src={ require('../../assets/behance.svg') } />
        </section>

        </section>
        </section>
    )
  }
}

const styles = {
    link: {
      textDecoration: 'none',
    }
};


