import React from "react";
import Regiao from "./Regiao";
import Side from "../../../components/sideContent/side/Side";
import "./style.css";

const Home = () => {
  return (
    <>
      <main>
        <div className="container">
          <section className="mainContent">
            <Regiao />
          </section>
          <section className="sideContent">
            <Side />
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
