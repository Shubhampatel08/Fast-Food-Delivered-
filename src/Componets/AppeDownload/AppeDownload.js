import React from "react";
import "./AppeDownload.css";
import { assets } from "../../assets/assets";

const AppeDownload = () => {
  return (
    <div className="appe-download" id="appe-download">
      <p>
        For Better Exprince Download <br /> FastFood Delivery App
      </p>
      <div className="food-app-img">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
};

export default AppeDownload;
