import React from "react";
import CCHome from "../../Assets/CCHome.png";
import { ArrowLeftCircle, ArrowRightCircle } from 'react-feather';

const { useState, useEffect } = React;

const SlideHome = ({ cycleSlide, currentSlide }) => {

  return (
    <>
      <div className="projectSlide">
        <div className="slideNavigation">
          <ArrowLeftCircle size={48} className="navArrow" onClick={()=>{cycleSlide(currentSlide - 1)}} />
          <img src={CCHome} />
          <ArrowRightCircle size={48} className="navArrow" onClick={()=>{cycleSlide(currentSlide + 1)}} />
        </div>
        <h2>Home Screen</h2>
        <p>From here the user can navigate into a session of the game, check info about the available towers and enemies and check out the leader board.</p>
      </div>
    </>
  );
}

export default SlideHome