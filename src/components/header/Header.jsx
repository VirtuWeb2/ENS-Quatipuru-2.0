import React, { useState } from "react";
import Head from "./Head";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [navbar, setnavbar] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      <Head />
      <header>
        <div className="container paddingSmall">
          <nav>
            <ul
              className={navbar ? "navbar" : "flex"}
              onClick={() => setnavbar(false)}
            >
              <li>{pathname !== "/" && <Link to="/">Home</Link>}</li>
              <li>
                {pathname !== "/tv-en-quatipuru" && (
                  <Link to="/tv-en-quatipuru">Tv é Notícia Quatipuru</Link>
                )}
              </li>
              {/* <li>
                {pathname !== "/cultura" && <Link to="/cultura">Cultura</Link>}
              </li> */}
              <li>
                {pathname !== "/politica" && (
                  <Link to="/politica">Política</Link>
                )}
              </li>
              {/* <li>{pathname !== "/saude" && <Link to="/saude">Saúde</Link>}</li> */}
              <li>
                {pathname !== "/seguranca" && (
                  <Link to="/seguranca">Segurança</Link>
                )}
              </li>
              <li>
                {pathname !== "/esportes" && (
                  <Link to="/esportes">Esportes</Link>
                )}
              </li>
              {/* <li>
                {pathname !== "/diversas" && (
                  <Link to="/diversas">Diversas</Link>
                )}
              </li> */}
              <li>{pathname !== "/foco" && <Link to="/foco">Foco</Link>}</li>
            </ul>
            <button className="barIco" onClick={() => setnavbar(!navbar)}>
              {navbar ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </nav>

          <div className="searchButton">
            {pathname !== "/search" && (
              <Link to="/search">
                <i className="fa-solid fa-magnifying-glass"></i> Pesquisar{" "}
              </Link>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
