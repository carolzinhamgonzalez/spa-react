import React, { Component } from 'react';
// import PropTypes from "prop-types";

class Country extends Component {

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
        turu bom
      </div>
    );
  }
}

export default Country;
