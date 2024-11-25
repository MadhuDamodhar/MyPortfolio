import React from "react";
import "./Loader.css"
function Loader() {
  return (
    <div className="loading-part">   
  <div class="loader">
  <p class="heading">Loading</p>
  <div class="loading">
    <div class="load"></div>
    <div class="load"></div>
    <div class="load"></div>
    <div class="load"></div>
  </div>
</div>
    </div>
  );
}

export default Loader;
