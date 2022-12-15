import React from "react";
import { useTransition, useSpring, animated } from '@react-spring/web';
import AtelierAModal from "../../Assets/AtelierAModal.png";
import AtelierAModalVerified from "../../Assets/AtelierAModal_verification.png";
import { ArrowLeftCircle, ArrowRightCircle } from 'react-feather';

const { useState, useEffect } = React;

const SlideAnswerQuestion = ({ cycleSlide, currentSlide }) => {
  const [isVerified, setIsVerified] = useState(0)

  const transitions = useTransition([isVerified], {
    from: {opacity: 0, },
    enter: {opacity: 1, },
    leave: {opacity: 0, },
    item: (item) => item,
    config: {
      duration: 300,
    },
  });

  const modalImages = [<img src={AtelierAModal} />, <img src={AtelierAModalVerified} />]

  return (
    <>
      <div className="projectSlide">
        <div className="slideNavigation">
          <ArrowLeftCircle size={48} className="navArrow" onClick={()=>{cycleSlide(currentSlide - 1)}} />
          <img src={AtelierAModal} />
          <ArrowRightCircle size={48} className="navArrow" onClick={()=>{cycleSlide(currentSlide + 1)}} />
        </div>
        <h2>Answer A Question Modal</h2>
        <p>A modal will pop up when a user clicks "Add Answer" prompting them to fill out some basic information and ask their question. The information will be verified on the client side before sending to the server and if there is a problem the user will be alerted and asked to make edits before resubmitting.</p>
      </div>
    </>
  );
}

export default SlideAnswerQuestion