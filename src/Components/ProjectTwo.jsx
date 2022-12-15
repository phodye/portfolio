import React from "react";
import { useTransition, useSpring, animated } from '@react-spring/web';
import Description from './ProjectTwo/Description.jsx'
import SlideHome from './ProjectTwo/SlideHome.jsx'
import SlideGamePlay from './ProjectTwo/SlideGamePlay.jsx'
import SlideInfo from './ProjectTwo/SlideInfo.jsx'
import SlideLeader from './ProjectTwo/SlideLeader.jsx'

const { useState, useEffect } = React;

const ProjectTwo = ({ visible }) => {
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

  const slides = [<SlideHome cycleSlide={cycleSlide} currentSlide={currentSlide} />, <SlideGamePlay cycleSlide={cycleSlide} currentSlide={currentSlide} />, <SlideInfo cycleSlide={cycleSlide} currentSlide={currentSlide} />, <SlideLeader cycleSlide={cycleSlide} currentSlide={currentSlide} />]

  return (
    <>
      <div className="projectTwo">
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
      </div>
    </>
  );
}

export default ProjectTwo