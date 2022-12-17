import React from "react";

const { useState, useEffect } = React;

const Contact = ({ visible }) => {

  return (
    <>
      <div className="contact">
        <h2>Contact</h2>
        <form action="https://getform.io/f/59d6db24-a19b-484e-a4b7-8ae4ff588efc" method="POST">
        <input type="text" name="name" placeholder="name" />
        <input type="email" name="email" placeholder="email" />
        <textarea type="text" name="message" placeholder="message" />
        <input type="hidden" name="_gotcha" style={{display:"none"}} />
        <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
}

export default Contact