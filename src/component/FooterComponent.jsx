import { text } from "framer-motion/client";
import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const styleLink = { textDecoration: "none", color: "grey" };
export function Footer() {
  return (
    <footer className="bg-light w-100">
      <div
        className="container d-flex containFooter"
        style={{ paddingTop: "30px" }}
      >
        <div
          className="nosReseaux d-flex  flex-column"
          style={{ marginRight: "25px" }}
        >
          <h3 style={{ fontFamily: "PoppinsFont" }}>Nos réseaux</h3>
          <div className="socialMedia media1">
            <FaFacebook /> <a href="https://web.facebook.com/profile.php?id=61556309039229" target="_blank" style={styleLink}>Facebook</a>
          </div>
          <div className="socialMedia media2">
            <FaInstagram /> <a href="#" style={styleLink}>Instagram</a>
          </div>
          <div className="socialMedia media3">
            <FaWhatsapp /> <a href="#" style={styleLink}>Whatsapp</a>
          </div>
        </div>
        <div className="info  d-flex flex-column container">
          <h3 style={{ fontFamily: "PoppinsFont" }}>Infos</h3>
          <div className="containInfo d-flex flex-column">
            <span>P.O BOX : 1080</span>
            <span>Ouvert de 6h à 15h45</span>
            <span>support@gmail.com</span>
          </div>
        </div>
        <div className="horaire container">
          <h3 style={{ fontFamily: "PoppinsFont" }}>Nos Horaires</h3>
          <div className="containHoraire" style={{ textAlign: "justify" }}>
            <span>
              Ouvert du lundi au Vendredi de 6h à 15h45 <br />
              <b>
                <u>NB:</u>
              </b>{" "}
              le portail est fermé le lundi a partir de 7h15 et le reste de la
              semaine à 7h45.
            </span>
          </div>
        </div>

        <div className="historique d-flex flex-column container">
          <h3 style={{ fontFamily: "PoppinsFont" }}>Historique</h3>
          <div
            className="containHistorique d-flex justify-content-center"
            style={{ textAlign: "justify" }}
          >
            Le lycée classique de Dschang est un établissement public
            francophone, d'enseignement secondaire, fondé en 1960 et situé dans
            la ville de Dschang, préfecture du département de la Menoua, au
            Cameroun. Il est l'un des plus anciens du Cameroun.
          </div>
        </div>
      </div>
      <div className="Faq container">
          <h3 style={{ fontFamily: "PoppinsFont", marginTop: "2rem" }}>FaQ</h3>
          <div className="containFaq d-flex " style={{ textAlign: "justify"}}>
            <span>
              Posé nous vos questions<br />
              <form method="post" className="d-flex">
                <input type="text" className="form-control" placeholder="votre question" /> 
                <input type="submit" value="envoyer" className="btn btn-primary" /> 
              </form>
            </span>
          </div>
        </div>
      <br />
      <span className="container d-flex justify-content-center"><i>develloped by <a href="https://modjovictor.netlify.app" target="_blank" style={styleLink}><b>Modjo victor</b></a> &copy; all right reserved</i></span>
    </footer>
  );
}
