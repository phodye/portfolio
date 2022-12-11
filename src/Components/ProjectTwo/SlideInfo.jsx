import React from "react";
import { ArrowLeftCircle, ArrowRightCircle } from 'react-feather';

const { useState, useEffect } = React;

const SlideInfo = ({ cycleSlide, currentSlide }) => {

  return (
    <>
      <div className="projectSlide">
        <div className="slideNavigation">
          <ArrowLeftCircle size={48} className="navArrow" onClick={()=>{cycleSlide(currentSlide - 1)}} />
          <img src="https://drive.google.com/uc?id=1C2KzSg6W0itl6zqhaSlOkuvlhBrd0q-6" />
          <ArrowRightCircle size={48} className="navArrow" onClick={()=>{cycleSlide(currentSlide + 1)}} />
        </div>
        <h2>Information</h2>
        <p>Users can view information about the towers for defense and the enemies they will face in the game.</p>
      </div>
    </>
  );
}

export default SlideInfo