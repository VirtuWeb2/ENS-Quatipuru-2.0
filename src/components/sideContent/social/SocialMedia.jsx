import React from "react";
import "./socialmedia.css";

const SocialMedia = () => {
  return (
    <>
      <section className="social">
        <a
          href={"https://www.facebook.com/#"}
          target="_blank"
          rel="noopener noreferrer"
          className="socBox"
        >
          <i className="fa-brands fa-facebook-f"></i>
          <span>Siga nossa página!</span>
        </a>

        <a
          href={"https://chat.whatsapp.com/FQALnigzbGECNQHWM6Q0BO"}
          target="_blank"
          rel="noopener noreferrer"
          className="socBox"
        >
          <i className="fa-brands fa-whatsapp"></i>
          <span>Receba as notícias do dia no WhatsApp!</span>
        </a>

        <a
          href={"https://x.com/enoticiapara?t=2YSTHp6xinePK-qMPlLrnA&s=08"}
          target="_blank"
          rel="noopener noreferrer"
          className="socBox"
        >
          <i className="fa-brands fa-x-twitter"></i>
          <span> Siga-nos no Twitter!</span>
        </a>

        <a
          href={"https://www.instagram.com/#/"}
          target="_blank"
          rel="noopener noreferrer"
          className="socBox"
        >
          <i className="fa-brands fa-instagram"></i>
          <span> Siga-nos no Instagram!</span>
        </a>

        <a
          href={"http://tiktok.com/@en_para"}
          target="_blank"
          rel="noopener noreferrer"
          className="socBox"
        >
          <i className="fa-brands fa-tiktok"></i>
          <span> Siga-nos no Tiktok!</span>
        </a>

        <a
          href={"https://whatsapp.com/channel/0029Vaabq2rCxoB0DVaDvZ3v"}
          target="_blank"
          rel="noopener noreferrer"
          className="socBox"
        >
          <i className="fa-solid fa-podcast"></i>
          <span>Inscreva-se no nosso canal do Whatsapp!</span>
        </a>
      </section>
    </>
  );
};

export default SocialMedia;
