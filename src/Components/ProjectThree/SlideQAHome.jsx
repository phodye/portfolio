import React from "react";
import AtelierHome from "../../Assets/AtelierHome.png";
import { ArrowLeftCircle, ArrowRightCircle } from 'react-feather';

const { useState, useEffect } = React;

const SlideQAHome = ({ cycleSlide, currentSlide }) => {

  return (
    <>
      <div className="projectSlide">
        <div className="slideNavigation">
          <ArrowLeftCircle size={48} className="navArrow" onClick={()=>{cycleSlide(currentSlide - 1)}} />
          <img src={AtelierHome} />
          <ArrowRightCircle size={48} className="navArrow" onClick={()=>{cycleSlide(currentSlide + 1)}} />
        </div>
        <h2>Questions and Answers Component</h2>
        <p>The questions and answers components allows users to view previously asked questions and their associated answers for the selected product. Users can also ask questions and add answers. Questions and answers are organized according to user voted 'helpfulness.' Users can search through the questions with the search bar at the top of the screen. Users can load more answered questions as long as they are available- the component becomes scrollable to accomodate the new content. </p>
      </div>
    </>
  );
}

export default SlideQAHome