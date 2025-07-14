import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Aqui você pode trocar depois por 'api' se usar um arquivo api.js
import "./header.css";

const Head = () => {
  const [ad, setAd] = useState([]);

  // ❌ Antes (com erro 404): const baseUrl = "https://api-sites-en.vercel.app/admin";
  // ✅ Corrigido: removemos /admin, pois a API pública está diretamente na raiz
  const baseUrl = "https://api-sites-en.vercel.app";

  const getAd = async () => {
    try {
      // ❌ Antes: `${baseUrl}/ad` => resultava em /admin/ad (erro 404)
      // ✅ Agora: faz GET para https://api-sites-en.vercel.app/ad, que é o endpoint correto
      const res = await axios.get(`${baseUrl}/ad`);
      setAd(res.data); // Salva os anúncios no state
    } catch (err) {
      console.log("Erro ao buscar anúncios:", err); // Log amigável de erro
    }
  };

  useEffect(() => {
    getAd();
  }, [setAd]); // Executa a função ao carregar o componente

  // 🔍 Função que filtra os anúncios pela posição "banner header"
  const filterBannerPosition = (position) => {
    if (!Array.isArray(ad) || ad.length === 0) {
      return [];
    }
    return ad.filter((item) => item.position === position);
  };

  const filteredBanner = filterBannerPosition("banner header");

  return (
    <>
      <section className="head">
        <div className="container flexSB paddingTB">
          <div className="logo">
            <Link to="/">
              <img src="../images/logo.png" alt="Logo do É notícia Pará" />
            </Link>
          </div>

          {/* Mostra os banners filtrados pela posição */}
          {filteredBanner.map((item, index) => (
            <div key={index} className="ad">
              <Link to={item.link} target="_blank" rel="noopener noreferrer">
                <img src={item.cover} alt="Banner publicitário" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Head;
