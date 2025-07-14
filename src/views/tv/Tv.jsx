import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Iframe from "react-iframe";
import Heading from "../../components/heading/Heading";
import Side from "../../components/sideContent/side/Side";
import axios from "axios";
import Share from "../../components/share/Share";
import "./tv.css";

const Tv = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [posts, setPosts] = useState([]);
  const [searched, setSearched] = useState(false);
  const searchLowerCase = search.toLocaleLowerCase();
  const baseUrl = "https://api-sites-en.vercel.app/admin";

{/* Botando aqui o ajuste */}
const getPosts = async () => {
  try {
    const res = await axios.get(`${baseUrl}/tv`);
    console.log("Resposta da API:", res.data);
    setPosts(res.data.data); // <-- Corrigido aqui
  } catch (err) {
    console.log(err);
  }
};

  useEffect(() => {
    getPosts();
  }, []);

  const filterNewsByMunicipio = (munis) => {
    if (posts.length === 0) {
      return [];
    }
    return posts
      .filter((item) => munis.includes(item.muni))
      .slice(-4)
      .sort((a, b) => b.id - a.id);
  };

  const filtered = filterNewsByMunicipio(["quatipuru", "pará"]);

  useEffect(() => {
    const filteredResults = filtered.filter((item) =>
      item.title.toLocaleLowerCase().includes(searchLowerCase)
    );
    setResults(filteredResults);
    if (search !== "") {
      setSearched(true);
    }
  }, [search, filtered, searchLowerCase]);

  let countResults = searched
    ? "Nenhum vídeo foi encontrado"
    : "Pesquise por um vídeo específico";
  const count = results.length;
  if (count > 0) {
    const noun = count > 1 ? " vídeos encontrados" : "vídeo encontrado";
    countResults = `${count} ${noun}`;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>TV | EN Quatipuru</title>
          <meta property="og:title" content="TV É Notícia Quatipuru" />
          <meta
            property="og:description"
            content="Tv de notícias Paraense, atualizado diariamente com notícias de todos os jornais convencionais e fontes seguras"
          />
          <meta property="og:image" content="../images/logo.png" />
        </Helmet>
      </HelmetProvider>

      <main>
        <div className="container">
          <section className="mainContent tv ">
            <Heading title={"TV EN QUATIPURU"} />

            <div className="live">
              <Iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/36YnV9STBqc?si=6qkhBe1OsSqKxEQk"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></Iframe>
            </div>

            <div className="searchForm">
              <h1>Pesquisar vídeos: </h1>
              <input
                type="text"
                placeholder="Pesquisar por um vídeo específico..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="cards">
              <Heading title={countResults} />
              {search === ""
                ? filtered.map((val) => (
                    <div key={val.id} className="box flexSB">
                      <a
                        href={val.link}
                        target="_blank"
                        rel="noreferrer"
                        className="img"
                      >
                        <img src={val.cover} alt="" />
                      </a>
                      <div className="text">
                        <a href={val.link} target="_blank" rel="noreferrer">
                          <h1 className="title">{val.title}</h1>
                        </a>
                        <Share link={val.link} />
                      </div>
                    </div>
                  ))
                : results.map((val) => (
                    <div key={val.id} className="box flexSB">
                      <div className="img">
                        <img src={val.cover} alt="" />
                      </div>
                      <div className="text">
                        <h1 className="title">{val.title}</h1>
                        <Share link={val.link} />
                      </div>
                    </div>
                  ))}
            </div>
          </section>
          <section className="sideContent">
            <Side />
          </section>
        </div>
      </main>
    </>
  );
};

export default Tv;
