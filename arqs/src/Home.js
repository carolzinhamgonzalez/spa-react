import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

function Home (){
  return (
    <main className="d-flex">
      <div className="container d-flex justify-content-center">
        <div className="row d-flex align-items-center">
          <div className="col" id="introduction">
            <h2>Zika vírus no mundo</h2>
            <p> O aumento da disseminação do Zika vírus foi acompanhado por um aumento nos casos de microcefalia e
              síndrome de Guillain-Barré. Identificada pela primeira vez em Uganda em 1947 em macacos, o Zika foi
              posteriormente identificado em humanos em 1952. O primeiro grande surto de doença causado pelo Zika
              foi relatado na Ilha de Yap em 2007.
            </p>
            <p> Atualmente, vários países estão sofrendo de surtos do vírus Zika. Diante disso organizações de saúde de todo o mundo trabalham para conter o surto atual e na
              prevenção no aumento de casos.
            </p>
          </div>
          <div className="col ml-2" id="flags">
            <h2 className="mb-1">Veja como cada país foi afetado</h2>
            <div class="mt-3">
              <Link to="/bra"><img class="img-country" src="/img/bra.png"></img></Link>
              <Link to="/chl"><img class="img-country" src="/img/chl.png"></img></Link>
              <Link to="/bol"><img class="img-country" src="/img/bol.jpg"></img></Link>
            </div>
            <h3 className="mt-5"><a className="link-externo" href="https://www.unicef.org/brazil/pt/activities_32722.html">Saiba como se previnir</a></h3>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
