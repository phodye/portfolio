import React from "react";
import CCGame from "../../Assets/CCGame.png";
import { ArrowLeftCircle, ArrowRightCircle } from 'react-feather';

const { useState, useEffect } = React;

const SlideGamePlay = ({ cycleSlide, currentSlide }) => {

  return (
    <>
      <div className="projectSlide">
        <div className="slideNavigation">
          <ArrowLeftCircle size={48} className="navArrow" onClick={()=>{cycleSlide(currentSlide - 1)}} />
          <img src={CCGame} />
          <ArrowRightCircle size={48} className="navArrow" onClick={()=>{cycleSlide(currentSlide + 1)}} />
        </div>
        <h2>Game Play</h2>
        <p>The user starts with 100 gold to place towers. Towers can be selected from the cards on the right and placed anywhere on the map except on the path or other towers. Users begin a wave by pressing the button in the bottom right corner of the screen. Only one wave can be active at a time.</p>
      </div>
    </>
  );
}

export default SlideGamePlay