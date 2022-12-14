import React from "react";

const { useState, useEffect } = React;

const Description = () => {

  return (
    <>
      <div className="projectDescription">
        <h1>Castle Crusher</h1>
        <p>
          Ever since I played a modified version of Warcraft 3 as a middle schooler I've loved tower defense games. I've always wanted to learn how to build one and I saw my opportunity when I explored the Phaser 3 game engine as a path to learning more about object oriented programming.
        </p>
        <a href="https://github.com/phodye/TD_HR_MVP_NWP">Github Repo</a>
      </div>
    </>
  );
}

export default Description