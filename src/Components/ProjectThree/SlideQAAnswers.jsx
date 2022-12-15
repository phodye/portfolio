import React from "react";
import AtelierHomeAnswers from "../../Assets/AtelierHome_withAnswers.png";
import { ArrowLeftCircle, ArrowRightCircle } from 'react-feather';

const { useState, useEffect } = React;

const SlideQAAnswers = ({ cycleSlide, currentSlide }) => {

  return (
    <>
      <div className="projectSlide">
        <div className="slideNavigation">
          <ArrowLeftCircle size={48} className="navArrow" onClick={()=>{cycleSlide(currentSlide - 1)}} />
          <img src={AtelierHomeAnswers} />
          <ArrowRightCircle size={48} className="navArrow" onClick={()=>{cycleSlide(currentSlide + 1)}} />
        </div>
        <h2>Answers Accordion</h2>
        <p>A question with asssociated answers becomes clickable. On user click the list of answers will accordion open. Answers include the text of the answer, username, time posted and any photos that were uploaded with the answer. Users can vote the answer as helpful, pushing it up in visibility, as well as report the answer- removing it from the site until it is reviewed. The accordion initially loads the two most helpful answers but users can click to display more until they're all displayed.</p>
      </div>
    </>
  );
}

export default SlideQAAnswers