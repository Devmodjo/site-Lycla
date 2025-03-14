import React from "react";
import { FadeInSection, SubTitleFadeIn } from "./ScrollEffect.jsx";

const styleTitle = {
  fontFamily: "PoppinsFont",
  fontWeight: "bold",
  // color: "purple",
  color: "white",
};

const linkStyle = {
  fontFamily: "LatoFont",
  fontWeight: "bold",
  color: "whitesmoke",
  // color: "rgb(192, 222, 241)",
};

export function Banner() {
  return (
    <section className="banner" id="home">
      <header>
        <Navbar />
      </header>
      <div className="container c1">
        <div
          className="leftBox welcome-container"
          style={{
            fontFamily: "LatoFont",
            fontSize: "35px",
            fontWeight: "bold",
            color : 'white'
          }}
        >
          <FadeInSection>
            <b>Lycée Classique </b>
            <br />
            <SubTitleFadeIn delay={.6}>
              <b>de Dschang</b>
            </SubTitleFadeIn>
          </FadeInSection>
        </div>
        <div className="rightBox"></div>
      </div>
    </section>
  );
}

export function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light shadow-lg p-3">
        <div className="container">
          <a className="navbar-brand" style={styleTitle} href="#">
            Lycla Dschang
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#" style={linkStyle}>
                  Acceuil
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={linkStyle}>
                  Nos Filères
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={linkStyle}>
                  Equipe pedagogique
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={linkStyle}>
                  A propos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
