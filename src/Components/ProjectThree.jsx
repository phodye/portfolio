import React from "react";
import { useTransition, useSpring, animated } from '@react-spring/web';
import Description from './ProjectThree/Description.jsx'
import SlideQAHome from './ProjectThree/SlideQAHome.jsx'
import SlideQAAnswers from './ProjectThree/SlideQAAnswers.jsx'
import SlideAskQuestion from './ProjectThree/SlideAskQuestion.jsx'
import SlideAnswerQuestion from './ProjectThree/SlideAnswerQuestion.jsx'

const { useState, useEffect } = React;

const ProjectThree = ({visible}) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const transitions = useTransition([visible], {
    from: {opacity: 0, },
    enter: {opacity: 1, },
    leave: {opacity: 0, },
    item: (item) => item,
    config: {
      duration: 300,
    },
  });

  const cycleSlide = (slideNumber) => {
    if (slideNumber < 0) {
      slideNumber = slides.length - 1
    } else if (slideNumber > slides.length - 1) {
      slideNumber = 0
    }
    setCurrentSlide(slideNumber)
  }

  const slides = [<SlideQAHome cycleSlide={cycleSlide} currentSlide={currentSlide} />, <SlideQAAnswers cycleSlide={cycleSlide} currentSlide={currentSlide} />, <SlideAskQuestion cycleSlide={cycleSlide} currentSlide={currentSlide} />, <SlideAnswerQuestion cycleSlide={cycleSlide} currentSlide={currentSlide} />]

  return (
    <>
      <div className="projectThree">
        <div className="projectContainer">
          <div className="projectPaneLeft">
            <Description />
          </div>
          <div className="projectPaneRight">
            <div style={{ display: "inline-block" }}>
              {transitions((style, item) => (
                <animated.div style={style}>{slides[currentSlide]}</animated.div>
              ))}
            </div>
          </div>
        </div>
      </div>import Description from './ProjectTwo/Description.jsx'
    </>
  );
}

export default ProjectThree