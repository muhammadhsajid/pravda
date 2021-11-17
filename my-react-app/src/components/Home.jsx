import React from "react";

//import { useState } from 'react'
import GlobalNewsList from './GlobalNewsList';
import Header from './Header';
//import Articles from './components/Articles';
import HomeNewsList from './HomeNewsList';
//import './App.css';

function Home() {
  return (
    <div className="container">
      <Header />
      <div className="featured-article">
        <h2>Featured Article</h2>
      </div>

      <div className="container-child" style={{backgroundColor: '#fff0f0'}}>
        <h2>Domestic News</h2>
        <HomeNewsList />
      </div>

      <div className="container-child" style={{backgroundColor: '#fff0f0'}}>
        <h2>Foreign News</h2>
        <GlobalNewsList />
      </div>
    </div>
  );
}

export default Home;
