import "./home.css";
import React from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="homeContainer">
        <Posts />
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
