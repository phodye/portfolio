import React from "react";
import NeighborlyGroupAdmin from "../../Assets/NeighborlyGroupAdmin_Modal.png";
import { ArrowLeftCircle, ArrowRightCircle } from 'react-feather';

const { useState, useEffect } = React;

const SlideNeighborlyHome = ({ cycleSlide, currentSlide }) => {

  return (
    <>
      <div className="projectSlide">
        <div className="slideNavigation">
          <ArrowLeftCircle size={48} className="navArrow" onClick={()=>{cycleSlide(currentSlide - 1)}} />
          <img src={NeighborlyGroupAdmin} />
          <ArrowRightCircle size={48} className="navArrow" onClick={()=>{cycleSlide(currentSlide + 1)}} />
        </div>
        <h2>Group Administration</h2>
        <p>A user is automatically assigned administration privileges to any group they create. Any user requesting to join a group must be approved by a group administrator. From their home page a user will be notified of any requests to join groups they administer. Clicking on the requests will open a modal where a user can either approve or deny the request.</p>
      </div>
    </>
  );
}

export default SlideNeighborlyHome