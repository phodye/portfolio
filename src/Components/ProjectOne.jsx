import React from "react";
import { useTransition, useSpring, animated } from '@react-spring/web';
import Description from './ProjectOne/Description.jsx'
import SlideNeighborlyHome from './ProjectOne/SlideNeighborlyHome.jsx'
import SlideNeighborlyGroup from './ProjectOne/SlideNeighborlyGroup.jsx'
import SlideNeighborlyGroupAdmin from './ProjectOne/SlideNeighborlyGroupAdmin.jsx'

const { useState, useEffect } = React;

const ProjectOne = ({visible}) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const transitions = useTransition([visible], {
    from: { x: 2000, opacity: 0, display: "none" },
    enter: { x: 0, opacity: 1, display: "block" },
    leave: { x: -2000, opacity: 0, display: "none" },
    item: (item) => item,
    config: {
      mass: 5,
      friction: 120,
      tension: 120,
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

  const slides = [<SlideNeighborlyHome cycleSlide={cycleSlide} currentSlide={currentSlide} />, <SlideNeighborlyGroup cycleSlide={cycleSlide} currentSlide={currentSlide} />, <SlideNeighborlyGroupAdmin cycleSlide={cycleSlide} currentSlide={currentSlide} />,]

  return (
    <>
        <div className="projectOne">
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

export default ProjectOne
