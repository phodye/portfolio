import React from "react";
import AtelierQModal from "../../Assets/AtelierQModal.png";
import { ArrowLeftCircle, ArrowRightCircle } from 'react-feather';

const { useState, useEffect } = React;

const SlideAskQuestion = ({ cycleSlide, currentSlide }) => {

  return (
    <>
      <div className="projectSlide">
        <div className="slideNavigation">
          <ArrowLeftCircle size={48} className="navArrow" onClick={()=>{cycleSlide(currentSlide - 1)}} />
          <img src={AtelierQModal} />
          <ArrowRightCircle size={48} className="navArrow" onClick={()=>{cycleSlide(currentSlide + 1)}} />
        </div>
        <h2>Ask A Question Modal</h2>
        <p>A modal will pop up when a user clicks "Add a Question +", prompting them to fill out some basic information and ask their question. The information will be verified on the client side before sending to the server and if there is a problem the user will be alerted and asked to make edits before resubmitting.</p>
      </div>
    </>
  );
}

export default SlideAskQuestion