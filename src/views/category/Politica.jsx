import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Side from "../../components/sideContent/side/Side";
import axios from "axios";
import NewSection from "../../components/cards/Sections";

const Politica = () => {
  const [news, setNews] = useState([]);
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

  const filterNewsByMunicipio = (munis) => {
    if (news.length === 0) {
      return [];
    }
    return news
      .filter((item) => munis.includes(item.muni))
      .slice(-4)
      .sort((a, b) => b.id - a.id);
  };

  const filtered = filterNewsByMunicipio(["quatipuru", "pará"]);

  const filteredItems = () => {
    if (filtered.length === 0) {
      return <p>Carregando...</p>;
    }
    return filtered.filter((item) => item.cat === "cultura");
  };

  const filtro = filteredItems();

  if (!Array.isArray(filtro)) return null;

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Categorias | EN Quatipuru</title>
        </Helmet>
      </HelmetProvider>

      <main>
        <div className="container">
          <section className="mainContent">
            <NewSection
              regionTitle={"Notícias com a tag Cultura"}
              newsData={filtro}
            />
          </section>
          <section className="sideContent">
            <Side />
          </section>
        </div>
      </main>
    </>
  );
};

export default Politica;
