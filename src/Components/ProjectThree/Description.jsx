import React from "react";

const { useState, useEffect } = React;

const Description = () => {

  return (
    <>
      <div className="projectDescription">
        <h1>Atelier</h1>
        <p>
        Atelier is a modern e-commerce web application with over 1 million products built with ReactJS, ExpressJS and PostgreSQL. I worked on this project with a team of four engineers. We practiced agile methodology and held daily standups to keep track of each member's progress on the sub-components of the project. I was tasked specifically with building out the Questions and Answers Component on the front and backend of the site. In addition to building out the database and queries I deployed the server across multiple instances and utilized NGINIX to optimize query times with a load balancer and a cache.
        </p>
        <a href="https://github.com/Front-End-Retail/Atelier-Front-End">Front end Github Repo</a>
        <a href="https://github.com/hr-fox-sdc/FOX-SDC-DYE">Back end Github Repo</a>
      </div>
    </>
  );
}

export default Description