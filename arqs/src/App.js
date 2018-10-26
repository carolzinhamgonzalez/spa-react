import React, { Component } from 'react';
import Home from './Home';
import Country from './Country';
import './App.css';
import { Route, Link} from 'react-router-dom';
import PropTypes from "prop-types";

class App extends Component {

  render() {
    return (
      <div>
        <header>
          <Link className="link-h1 d-flex justify-content-center" to="/"> <h1>Prevenir é a solução</h1> </Link>
        </header>

          <Route path="/" exact render={Home}/>
          <Route path="/bra" component={Country}/>
          <Route path="/chl" component={Country}/>
          <Route path="/bol" component={Country}/>

        <footer className="d-flex justify-content-center">
          <p class="p-footer d-flex">Os dados utilizados nesta página são da equipe de ciência de dados do Escritório de Inovação da UNICEF.</p>
        </footer>

      </div>
    );
  }
}


export default App;
