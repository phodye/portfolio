import React from "react";
import NeighborlyGroup from "../../Assets/NeighborlyCreateGroup.png";
import { ArrowLeftCircle, ArrowRightCircle } from 'react-feather';

const { useState, useEffect } = React;

const SlideNeighborlyGroup = ({ cycleSlide, currentSlide }) => {

  return (
    <>
      <div className="projectSlide">
        <div className="slideNavigation">
          <ArrowLeftCircle size={48} className="navArrow" onClick={()=>{cycleSlide(currentSlide - 1)}} />
          <img src={NeighborlyGroup} />
          <ArrowRightCircle size={48} className="navArrow" onClick={()=>{cycleSlide(currentSlide + 1)}} />
        </div>
        <h2>Group Creation</h2>
        <p>User’s can create groups by opening up a modal and providing some basic information as well as a profile photo. User’s are automatically assigned as administrators of any groups they create, this gives them the ability to approve or deny any requests for membership. Only group members can view and participate in the group.</p>
      </div>
    </>
  );
}

export default SlideNeighborlyGroup