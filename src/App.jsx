import React from "react";
import { useTransition, useSpring, animated } from '@react-spring/web';
import Bio from './Components/Bio.jsx'
import ProjectOne from './Components/ProjectOne.jsx'
import ProjectTwo from './Components/ProjectTwo.jsx'
import ProjectThree from './Components/ProjectThree.jsx'

const { useState, useEffect } = React;

const App = () => {
  const [visible, setVisible] = useState(3)

  const updateCard = (cardIndex) => {
    setVisible(cardIndex)
  }

  const slides = [<ProjectOne />, <ProjectTwo />, <ProjectThree />, <Bio />]

  const transitions = useTransition([visible], {
    from: { x: -2000, opacity: 0, display: "none" },
    enter: { x: 0, opacity: 1, display: "block" },
    leave: { x: 2000, opacity: 0, display: "none" },
    item: (item) => item,
    config: {
      mass: 5,
      friction: 120,
      tension: 120,
      duration: 500,
    },
  });

  return (
    <>
      <div className="home">
        <div className="header">
          <button className="bioButton" onClick={() => { updateCard(3) }}>Bio</button>
          <button className="bioButton" >Resume</button>
        </div>
        <div>
          {transitions((style, item) => (
            <animated.div style={style}>{slides[visible]}</animated.div>
          ))}
        </div>
        <div className="footer">
          <button className="projectButton" onClick={() => { updateCard(0) }}>Neighborly</button>
          <button className="projectButton" onClick={() => { updateCard(1) }}>Castle Crusher</button>
          <button className="projectButton" onClick={() => { updateCard(2) }}>Atelier</button>
        </div>
      </div>
    </>
  );
}

export default App