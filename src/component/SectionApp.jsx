import React from "react";
import { AppearOnScroll } from "./ScrollEffect";
import { SubTitleFadeIn } from "./ScrollEffect";
// presentaion des filière du lycée classqieu
export function FiliereSection() {
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
                {/* <img src={img1} alt="" srcset="" className="w-30 h-30" /> */}
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
                  La filière professionel est une filière de formation générale
                  et technique qui prépare les élèves aux études supérieures
                  dans les domaines de l'informatique et de la gestion.
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
  return (
    <div
      className="container d-flex flex-column align-items-center p-3"
      id="equipe"
    >
      <h4 style={{ fontFamily: "LatoFont", fontWeight: "bold" }}>
        Découvrez notre équipe Pédagogique{" "}
      </h4>
      <p>
        L'équipe pédagogique du lycée classique de Dschang est composée de
        professeurs qualifiés et expérimentés. Elle est chargée de dispenser les
        cours et de suivre les élèves dans leur apprentissage. L'équipe
        pédagogique est attentive aux besoins des élèves et met tout en œuvre
        pour les aider à réussir.
      </p>

      <div
        id="carouselExampleIndicators"
        className="carousel slide container d-flex justify-content-center"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>

        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="row">
              <div className="col-12 col-md-4">
                <SubTitleFadeIn delay={0.5}>
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      src="/src/assets/provi.jpg"
                      className="card-img-top"
                      alt="proviseur"
                    />
                    <div className="card-body">
                      <h5 className="card-title">MR. ATEM NDE JEAN CLAUDE</h5>
                      <p className="card-text">Proviseur</p>
                    </div>
                  </div>
                </SubTitleFadeIn>
              </div>
              <div className="col-12 col-md-4">
                <SubTitleFadeIn delay={0.6}>
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      src="/src/assets/8.jpg"
                      className="card-img-top"
                      alt="mr fouetlefack"
                    />
                    <div className="card-body">
                      <h5 className="card-title">MR. FOUETLEFACK</h5>
                      <p className="card-text">
                        Censeur ( <i>coach ministre urgentiste</i> )
                      </p>
                    </div>
                  </div>
                </SubTitleFadeIn>
              </div>
              <div className="col-12 col-md-4">
                <SubTitleFadeIn delay={0.7}>
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      src="/src/assets/kj9.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Mme. Bernard</h5>
                      <p className="card-text">
                        Conseil Orientation Scolaire ( <i>CSO</i> )
                      </p>
                    </div>
                  </div>
                </SubTitleFadeIn>
              </div>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

// a propos
export function AboutSection() {
  return <div></div>;
}
