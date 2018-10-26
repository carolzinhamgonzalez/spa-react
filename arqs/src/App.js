import React, { Component } from 'react';
import Home from './Home';
import Country from './Country';
import './App.css';
import { Route, Link} from 'react-router-dom';
import PropTypes from "prop-types";

class App extends Component {

  componentDidMount(){
      const regex_year = new RegExp(/(2017)/g);
      const options = {
        method: "get",
        headers: {'Content-Type': 'application/json'}
      };
      fetch("http://magicbox-open-api.azurewebsites.net/api/v1/cases/kinds/zika/weekTypes/epi", options)
        .then(res => res.json())
        .then(data => console.log((Object.keys(data.cases)).filter((value) => {
          if (value.match(regex_year)){
            return true
          } else {
            return false
          }
        })));
  }

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
