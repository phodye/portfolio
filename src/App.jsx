import React from "react";
import { useTransition, useSpring, animated } from '@react-spring/web';
import ProjectOne from './Components/ProjectOne.jsx'
import ProjectTwo from './Components/ProjectTwo.jsx'
import ProjectThree from './Components/ProjectThree.jsx'

const { useState, useEffect } = React;

const App = () => {
  const [visible, setVisible] = useState(0)

  const updateCard = (cardIndex) => {
    setVisible(cardIndex)
  }

  const slides = [<ProjectOne />, <ProjectTwo />, <ProjectThree />]

  const transitions = useTransition([visible], {
    from: { opacity: 0, display: "none" },
    enter: { opacity: 1, display: "block" },
    leave: { opacity: 0, display: "none" },
    item: (item) => item
  });

  return (
    <>
      <div className="home">
        <div className="header">
          <button>Bio</button>
          <button>Resume</button>
        </div>
        <div>
        {transitions((style, item) => (
          <animated.div style={style}>{slides[visible]}</animated.div>
        ))}
      </div>
        <div className="footer">
          <button onClick={() => { updateCard(0) }}>Project 1</button>
          <button onClick={() => { updateCard(1) }}>Project 2</button>
          <button onClick={() => { updateCard(2) }}>Project 3</button>
        </div>
      </div>
    </>
  );
}

export default App