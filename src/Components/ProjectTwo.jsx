import React from "react";

const { useState, useEffect } = React;

const ProjectTwo = ({visible}) => {

  return (
    <>
      <div className="projectTwo">
        <div>Project Two</div>
      </div>
    </>
  );
}

export default ProjectTwo

/*
import React from "react";
import { useSpring, animated } from '@react-spring/web';

const { useState, useEffect } = React;

const ProjectTwo = ({ visible }) => {

  const springs = useSpring({
    from: { x: -2000 },
    to: { x: 0 },
  })

  return (
    <animated.div className="projectTwo" style={{ ...springs, }}>
      <div>Project Two</div>
    </animated.div>
  );
}

export default ProjectTwo
*/