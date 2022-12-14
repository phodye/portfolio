import React from "react";
import CCLeader from "../../Assets/CCLeader.png";
import { ArrowLeftCircle, ArrowRightCircle } from 'react-feather';

const { useState, useEffect } = React;

const SlideLeader = ({ cycleSlide, currentSlide }) => {

  return (
    <>
      <div className="projectSlide">
        <div className="slideNavigation">
          <ArrowLeftCircle size={48} className="navArrow" onClick={()=>{cycleSlide(currentSlide - 1)}} />
          <img src={CCLeader} />
          <ArrowRightCircle size={48} className="navArrow" onClick={()=>{cycleSlide(currentSlide + 1)}} />
        </div>
        <h2>Leader Board</h2>
        <p>A leader board in the style of classic arcade games- only the top five scores are displayed.</p>
      </div>
    </>
  );
}

export default SlideLeader