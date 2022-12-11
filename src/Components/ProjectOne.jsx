import React from "react";
import { useTransition, useSpring, animated } from '@react-spring/web';

const { useState, useEffect } = React;

const ProjectOne = ({visible}) => {

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
        <div className="projectOne">
          <div>Neighborly</div>
        </div>
    </>
  );
}

export default ProjectOne
