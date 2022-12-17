import React from "react";

const { useState, useEffect } = React;

const Bio = ({updateCard}) => {

  return (
    <>
        <div className="bio">
          <div>
            <h2>Hello World!</h2>
              <p> I'm Andrew, I like to work hard and have a good time. I’m a fullstack developer and a former <a href="https://www.andrewdyephoto.com"> journalist.</a> I love learning and I can help your company. </p>
          </div>
          <div className="bioLinks">
              <p onClick={() => { updateCard(4) }}>Resume ></p>
              <p onClick={() => { updateCard(0) }}>Projects ></p>
              <p onClick={() => { updateCard(5) }}>Contact Me ></p>
          </div>
          <img src="https://ca.slack-edge.com/T01J1BRG8E4-U04170QLG1Z-9d3bc73e100d-512"/>
        </div>
    </>
  );
}

export default Bio