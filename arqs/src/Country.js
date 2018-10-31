import React, { Component } from 'react';
import PropTypes from "prop-types";

function objectKeys(data) {
  const regex_year = new RegExp(/(2017)/g);
  return (
    Object.keys(data.cases).filter((value) => {
      if (value.match(regex_year)){
        return true
      } else {
        return false
      }
    })
  )
}

function cases(country, api){
  let dataCountry = [];
  for (let i in api){
    dataCountry.push(api[i][country])
  }
  const result = dataCountry.slice(-1)[0];
  return result;
}

function ClickCountry(data){
  return(
    <div className="container d-flex justify-content-center">
      <div className="row d-flex align-items-center">
        <div className="col">
          <p>Segundo a Onu até o momento, 38 países e territórios confirmaram a transmissão local do vírus zika na
          Região das Américas desde 2015.</p>
          <p> No <strong>{data.country}</strong> somente em 2017 foram registrados:</p>
          <div id="show-data">
          <p className="mb-0"> {data.autochthonous_cases_confirmed} casos contraídos no país.</p>
          <p className="mb-0"> {data.imported_cases} casos contraídos no exterior.</p>
          <p className="mb-0"> {data.deaths} mortes.</p>
          <p className="mb-0"> {data.confirmed_congenital} crianças que nasceram com o zika vírus</p>
          <p className="mb-0">{data.congenital_probable} casos com probabilidade de vir a nascer com o vírus. </p>
          </div>
          <h4 className="mt-4"><a class="link-externo" href="http://www.who.int/emergencies/diseases/zika/en">Zika vírus no mundo </a></h4>
        </div>
        <div className="col">
          <a className="link-externo" href="https://www.unicef.org/brazil/pt/activities_32722.html"><img className="img-prev" src="dist/img/prev3.png"></img></a>
        </div>
      </div>
    </div>
  );
}

class Country extends Component {

  constructor(props){
    super(props);
    this.state = {objCountries: null,
    }
  }

componentDidMount(){
    const objCountries = [];
    const options = {
      method: "get",
      headers: {'Content-Type': 'application/json'}
    };

    fetch("http://magicbox-open-api.azurewebsites.net/api/v1/cases/kinds/zika/weekTypes/epi", options)
      .then(res => res.json())
      .then(data => {objectKeys(data).forEach((week) => {
      objCountries.push(data.cases[week]);
      this.setState({objCountries: objCountries})
      })
    })
}

  render() {
    return (
      <div>
        {ClickCountry(cases('bra', this.state.objCountries))}

      </div>
    );
  }
}

export default Country;
