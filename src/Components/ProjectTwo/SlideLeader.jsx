import React from "react";
import { ArrowLeftCircle, ArrowRightCircle } from 'react-feather';

const { useState, useEffect } = React;

const SlideLeader = ({ cycleSlide, currentSlide }) => {

  return (
    <>
      <div className="projectSlide">
        <div className="slideNavigation">
          <ArrowLeftCircle size={48} className="navArrow" onClick={()=>{cycleSlide(currentSlide - 1)}} />
          <img src="https://drive.google.com/uc?id=14NBJi3rj8o3vzSSi9uD_oClU_u8S-0ay" />
          <ArrowRightCircle size={48} className="navArrow" onClick={()=>{cycleSlide(currentSlide + 1)}} />
        </div>
        <h2>Leader Board</h2>
        <p>A leader board in the style of classic arcade games- only the top five scores are displayed.</p>
      </div>
    </>
  );
}

export default SlideLeader