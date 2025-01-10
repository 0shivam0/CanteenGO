import React from 'react'
import "./Home.css";
import { assets } from "d:/CGo/frontend/src/assets/assets";

const Home = () => {
  return (
    <div>
      <img className="my-image" src={assets.home} alt="" />
    </div>
  )
}

export default Home;