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

class Country extends Component {

componentDidMount(){
    const objCountries = [];
    const options = {
      method: "get",
      headers: {'Content-Type': 'application/json'}
    };
    console.log("HAHAHA")
    fetch("http://magicbox-open-api.azurewebsites.net/api/v1/cases/kinds/zika/weekTypes/epi", options)
      .then(res => res.json())
      .then(data => {objectKeys(data).forEach((week) => {
      objCountries.push(data.cases[week]);
      })
        console.log(objCountries)
      })
}

  render() {
    return (
      <div>
        turu bom
      </div>
    );
  }
}

export default Country;
