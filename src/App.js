import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Homepage from "./views/home/Homepage";
import Politica from "./views/category/Politica";
import Foco from "./views/category/Foco";
import Seguranca from "./views/category/Seguranca";
import Esportes from "./views/category/Esportes";
import Noticia from "./views/singlepage/Noticia";
import Search from "./views/search/Search";
import Tv from "./views/tv/Tv";
import "./App.css";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/politica",
        element: <Politica />,
      },
      {
        path: "/seguranca",
        element: <Seguranca />,
      },
      {
        path: "/esportes",
        element: <Esportes />,
      },
      {
        path: "/foco",
        element: <Foco />,
      },
      {
        path: "/noticia/:id",
        element: <Noticia />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/tv-en-quatipuru",
        element: <Tv />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
