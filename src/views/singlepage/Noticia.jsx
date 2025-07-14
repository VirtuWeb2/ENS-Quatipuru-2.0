import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ShareSocial } from "../../components/share/ShareSocial";
import Side from "../../components/sideContent/side/Side";
import axios from "axios";
import moment from "moment";
import DOMPurify from "dompurify";
import "../home/mainContent/style.css";
import "../../components/sideContent/social/socialmedia.css";
import "./noticia.css";

const Noticia = () => {
  const location = useLocation();
  const [news, setNews] = useState([]);
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [ad, setAd] = useState([]);
  const baseUrl = "https://api-sites-en.vercel.app/admin";

  const getNews = async () => {
    try {
      const res = await axios.get(`${baseUrl}/news`);

      setNews(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  useEffect(() => {
    if (news.length) {
      const foundItem = news.find((item) => item.id === parseInt(id));
      window.scrollTo(0, 0);
      if (foundItem) {
        setItem(foundItem);
      }
    }
  }, [id, news]);

  const getAd = async () => {
    try {
      const res = await axios.get(`${baseUrl}/ad`);
      setAd(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAd();
  }, [setAd]);

  const filterBannerPosition = (position) => {
    if (!Array.isArray(ad) || ad.length === 0) {
      return [];
    }
    return ad.filter((item) => item.position === position);
  };

  const filteredBanner = filterBannerPosition("banner single page");

  return (
    <>
      {item ? (
        <main>
          <HelmetProvider>
            <Helmet>
              <title>{item.title.slice(0, 10)}.. | EN Quatipuru</title>
              <meta property="og:title" content={item.title} />
              <meta property="og:image" content={item.cover} />
            </Helmet>
          </HelmetProvider>

          <div className="container">
            <section key={id} className="mainContent details">
              <h1 className="title">{item.title}</h1>

              <div className="date">
                <p>
                  {item.muni} | {item.cat}
                </p>
                <p> postado no dia: </p>
                <label>{moment(item.date).format("DD-MM-YYYY")}</label>
              </div>

              <div className="social">
                {ShareSocial.map((link) => (
                  <Link
                    key={link.id}
                    className="socBox"
                    to={`${link.url}${encodeURIComponent(location.href)}`}
                    target="blank"
                  >
                    <i className={link.icon}></i>
                    <span>Compartilhar</span>
                  </Link>
                ))}
              </div>

              <img src={item.cover} alt="" />

              <div className="desc">
                <p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(item.desc),
                  }}
                ></p>
              </div>

              {filteredBanner.map((item, index) => (
                <section key={index} className="singleAd">
                  <Link to={item.link} target="_blank">
                    <img src={item.cover} alt="" />
                  </Link>
                </section>
              ))}
            </section>
            <section className="sideContent">
              <Side />
            </section>
          </div>
        </main>
      ) : (
        <h1 style={{ width: "100%", textAlign: "center" }}>carregando...</h1>
      )}
    </>
  );
};

export default Noticia;
