import React from "react";
import NeighborlyHome from "../../Assets/NeighborlyHome.png";
import { ArrowLeftCircle, ArrowRightCircle } from 'react-feather';

const { useState, useEffect } = React;

const SlideNeighborlyHome = ({ cycleSlide, currentSlide }) => {

  return (
    <>
      <div className="projectSlide">
        <div className="slideNavigation">
          <ArrowLeftCircle size={48} className="navArrow" onClick={()=>{cycleSlide(currentSlide - 1)}} />
          <img src={NeighborlyHome} />
          <ArrowRightCircle size={48} className="navArrow" onClick={()=>{cycleSlide(currentSlide + 1)}} />
        </div>
        <h2>Home Feed</h2>
        <p>The feed displays user’s comments and responses to those comments. The feed is a central component of many of the main pages of Neighborly but it exists in different iterations depending on where the user is viewing it. For instance- the home feed displays all of the recent activity in the user’s groups, the profile feed displays all of the user’s recent activities across all of their groups and the group feeds display the activity in the specific groups. This was achieved by utilizing conditional database requests. Additionally users can like posts, comment on them and delete any posts they created.</p>
      </div>
    </>
  );
}

export default SlideNeighborlyHome