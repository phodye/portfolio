import React from "react";
import { useTransition, useSpring, animated } from '@react-spring/web';
import Bio from './Components/Bio.jsx'
import Resume from './Components/Resume.jsx'
import ProjectOne from './Components/ProjectOne.jsx'
import ProjectTwo from './Components/ProjectTwo.jsx'
import ProjectThree from './Components/ProjectThree.jsx'
import Contact from './Components/Contact.jsx'

const { useState, useEffect } = React;

const App = () => {
  const [visible, setVisible] = useState(3)
  const [footerVisible, setFooterVisible] = useState(false)

  const updateCard = (cardIndex) => {
    setVisible(cardIndex)
  }

  const updateFooter = () => {
    if (visible === 3 || visible === 4 || visible === 5) {
      setFooterVisible(false)
    } else {
      setFooterVisible(true)
    }
  }

  useEffect(() => {
    updateFooter()
  }, [visible])

  const slides = [<ProjectOne />, <ProjectTwo />, <ProjectThree />, <Bio updateCard={updateCard} />, <Resume updateCard={updateCard}/>, <Contact updateCard={updateCard}/>]

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

  return (
    <>
      <div className="home">
        <div className="header">
          <div className="bioButton" onClick={() => { updateCard(3) }}>Bio</div>
          <div className="bioButton" onClick={() => { updateCard(4) }}>Resume</div>
          <div className="bioButton" onClick={() => { updateCard(0) }}>Projects</div>
        </div>
        <div className="projectHolder">
          {transitions((style, item) => (
            <animated.div style={style}>{slides[visible]}</animated.div>
          ))}
        </div>
        {footerVisible ? <div className="footer">
          <div className="projectButton" onClick={() => { updateCard(0) }}>Neighborly</div>
          <div className="projectButton" onClick={() => { updateCard(1) }}>Castle Crusher</div>
          <div className="projectButton" onClick={() => { updateCard(2) }}>Atelier</div>
        </div> : null}
      </div>
    </>
  );
}

export default App