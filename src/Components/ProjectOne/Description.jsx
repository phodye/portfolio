import React from "react";

const { useState, useEffect } = React;

const Description = () => {

  return (
    <>
      <div className="projectDescription">
        <h1>Neighborly</h1>
        <p>
          I worked with a team of five engineers tasked with building a private social media site where communication occurs within user administered groups with the goal of keep communities small and acrimony limited. I built the main feed as well as the group administration and group creation components. I also designed the user interface of the website.
        </p>
        <a href="https://github.com/Neighborly-Saffron/Neighborly">Github Repo</a>
      </div>
    </>
  );
}

export default Description