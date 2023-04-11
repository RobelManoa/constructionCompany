import React from "react";
import load from "../image/loading.gif";
function Preloader() {
  return (
    <div id="preloader">
        <img src={load} alt="Loading..."/>
    </div>
  );
}

export default Preloader;
