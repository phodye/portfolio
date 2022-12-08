import React from "react";

const { useState, useEffect } = React;

const Bio = ({visible}) => {

  return (
    <>
        <div className="bio">
          <div>
            <p>Hello World! <br/><br/> I'm Andrew, I like to work hard and have a good time. I’m a fullstack developer <a href="https://www.andrewdyephoto.com">and a former journalist.</a> I have experience in the MERN stack and with SQL databases. I deeply enjoy learning new technologies. Reach out to me! </p>
          </div>
          <img src="https://ca.slack-edge.com/T01J1BRG8E4-U04170QLG1Z-9d3bc73e100d-512"/>
        </div>
    </>
  );
}

export default Bio