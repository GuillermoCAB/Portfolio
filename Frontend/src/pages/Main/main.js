import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';

export default class Main extends Component {
    state = {
        item: []
    };

    async componentDidMount() {
        const response = await api.get('/post');

        this.setState({ item: response.data });
    };


  render() {
    return(
        <section>
        <section className="infos">

        <header>
            <div className="anchors">
                <ul>
                    <li href="#habilidades" >Sobre Mim</li>
                    <li href="#portfolio">Portfolio</li>
                    <li href="#portfolio">Skills</li>
                    <li href="#contato">Contato</li>
                </ul>
            </div>
        </header>
        
        <section className="slideControl">
            <button className="controller">></button>
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
