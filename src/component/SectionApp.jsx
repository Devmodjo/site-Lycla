import React from "react";
import { AppearOnScroll } from "./ScrollEffect";
import { SubTitleFadeIn } from "./ScrollEffect";
import kj9 from "../assets/kj9.jpg";
import provi from "../assets/provi.jpg";
import cs from "../assets/8.jpg";

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
                    <img src={provi} className="card-img-top" alt="proviseur" />
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
                      src={cs}
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
                    <img src={kj9} className="card-img-top" alt="Mme Daouda" />
                    <div className="card-body">
                      <h5 className="card-title">Mme. DAOUDA</h5>
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

export function ContactSection() {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");
  return (
    <div
      className="container d-flex flex-column align-items-center"
      id="contact"
    >
      <h4 style={{ fontFamily: "LatoFont", fontWeight: "bold" }}>
        Contactez-nous !
      </h4>
      <div className="d-flex flex-column align-items-center">
        <div
          className="textContact justify-content-center"
          style={{ textAlign: "justify" }}
        >
          <b>
            <h5>📨 Envoyez-nous un message</h5>
          </b>
          Vous pouvez également nous écrire en remplissant le formulaire
          ci-dessous. Nous nous engageons à vous répondre dans les plus brefs
          délais. Nous vous remercions de votre intérêt pour notre établissement
          et espérons pouvoir vous aider rapidement. À très bientôt !
        </div> <br />
        <div className="form w-100">
          <SubTitleFadeIn delay={0.5}>
            <form>
              <div className="" style={{ width: "100%", overflowX: "hidden" }}>
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="example@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="">
                <label htmlFor="exampleInputName" className="form-label">
                  Nom
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName"
                  placeholder="ex: Kenfack Rosquine"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="">
                <label htmlFor="exampleInputMessage" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleInputMessage"
                  placeholder="ex: je voudrais avoir des informations sur les inscriptions"
                  rows="3"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Envoyer
              </button>
            </form>
          </SubTitleFadeIn>
        </div>
      </div>
    </div>
  );
}

// a propos
export function AboutSection() {
  return (
    <div
      className="container d-flex flex-column align-items-center p-3"
      id="about"
    >
      <h4 style={{ fontFamily: "LatoFont", fontWeight: "bold" }}>
        À propos de nous !
      </h4>
    </div>
  );
}
