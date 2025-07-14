import React from "react";
import LinksFooter from "./LinksFooter";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="containerFooter">
          <nav className="linksBox">
            <h1>
              <i className="fa-solid fa-filter"></i> EN Munícipais:
            </h1>
            <LinksFooter />
          </nav>

          <section className="box">
            <div className="logo">
              <img src="../images/logo.png" alt="" />
            </div>
            <div className="text">
              <p>
                Deseja anunciar aqui? entre em contato com nossa central de
                atendimento.
              </p>
              <span>
                <i className="fa fa-envelope"></i> contato@enoticiapara.com.br
              </span>
              <br />
              <span>
                <i className="fa fa-headphones"></i> +55 (91) 98224-0561
              </span>
            </div>
          </section>
        </div>
      </footer>

      <div className="legal  ">
        <div className="container flexSB">
          <p>© Todos os direitos reservados para VirtuConnect</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
