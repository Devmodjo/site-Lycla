import React from "react";
import { AppearOnScroll } from "./ScrollEffect";

// presentaion des filière du lycée classqieu
export function FiliereSection( {img1, img2, img3} ) {
  return (
    <div
      className="container d-flex flex-column align-items-center p-3"
      id="filiere"
    >
      <h4 style={{ fontFamily: "LatoFont", fontWeight: "bold" }}>
        Découvrez Les Filières du Lycée Classique de Dschang.
      </h4>
      <p>
        Le lycée classique de Dschang est un établissement d'enseignement
        secondaire général. Il propose des filières de formation générale et
        technique. Les filières générales sont les filières scientifiques,
        littéraires et économiques. Les filières techniques sont les filières de
        formation professionnelle.
      </p>
      <div className="row w-100">
        <AppearOnScroll>
          <div className="col-12 col-md-4 mb-2 w-100">
            <div className="card">
              <div className="card-body">
                <img src={img1} alt="" srcset="" className="w-30 h-30" />
                <h5 className="card-title">Filière Scientifique(C & D)</h5>
                <p className="card-text">
                  La filière scientifique est une filière de formation générale
                  qui prépare les élèves aux études supérieures dans les
                  domaines des sciences et de la technologie.
                </p>
              </div>
            </div>
          </div>
        </AppearOnScroll>
        <AppearOnScroll>
          <div className="col-12 col-md-4 mb-2 w-100">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Filière Littéraire(A)</h5>
                <p className="card-text">
                  La filière littéraire est une filière de formation générale
                  qui prépare les élèves aux études supérieures dans les
                  domaines des lettres et des sciences humaines.
                </p>
              </div>
            </div>
          </div>
        </AppearOnScroll>
        <AppearOnScroll>
          <div className="col-12 col-md-4 mb-2 w-100">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Filière Professionel(TI)</h5>
                <p className="card-text">
                  La filière professionel est une filière de formation générale et technique
                  qui prépare les élèves aux études supérieures dans les
                  domaines de l'informatique et de la gestion.
                </p>
              </div>
            </div>
          </div>
        </AppearOnScroll>
      </div>
    </div>
  );
}

// presentation de l'equipe pedagogique
export function EquipePedaSection() {
  return <div></div>;
}

// a propos
export function AboutSection() {
  return <div></div>;
}
