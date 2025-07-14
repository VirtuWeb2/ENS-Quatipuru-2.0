import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Heading from "../../heading/Heading";
import axios from "axios";
import "./tvposts.css";

const TvPosts = () => {
  const [posts, setPosts] = useState([]);
  const baseUrl = "https://api-sites-en.vercel.app";

  const getPosts = async () => {
    try {
      const res = await axios.get(`${baseUrl}/tv`);
      setPosts(res.data);
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

  const renderedItems = filtered.slice(-6);
  return (
    <>
      <section className="tpost">
        <Link to={"/tv-en-acara"}>
          <Heading title={"TV EN QUATIPURU"} />
          {renderedItems.map((val) => {
            return (
              <div key={val.id} className="box flexSB">
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text">
                  <h1 className="title">{val.title.slice(0, 30)}...</h1>
                </div>
              </div>
            );
          })}
        </Link>
      </section>
    </>
  );
};

export default TvPosts;
