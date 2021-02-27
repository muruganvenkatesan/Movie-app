import React, { useState, useEffect } from "react";
import './header.css';
const Header = (props) => {
  return(
    <div className="bgBlack">
      <div className="d-flex align-items-centerflex-row  pl-5">
        <h5 className="rounded-circle bgGray p-2">
          MC
        </h5>
        <h3 className="ml-2">
          Movie Cart
        </h3>
      </div>
    </div>)
}
export default Header;