import React, { useEffect, useState } from "react";
import axios from "axios";
import NewSection from "../../../components/cards/Sections";


const Regiao = () => {
  const [news, setNews] = useState([]);
   const baseUrl = "https://api-sites-en.vercel.app";
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

  return (
    <>
      <NewSection
        regionLink={"/search"}
        regionTitle={"Notícias de Quatipuru"}
        newsData={filtered}
      />
    </>
  );
};

export default Regiao;
