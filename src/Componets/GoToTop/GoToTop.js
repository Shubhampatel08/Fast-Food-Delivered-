import React, { useEffect, useState } from "react";
import "./GoToTop.css";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [isvisibel, setIsvisibel] = useState(false);

  const goTobtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    // console.log(
    //   " ~ file: GoToTop.jsx ~ line 13 ~ listenToScroll ~ winScroll",
    //   winScroll
    // );

    if (winScroll > heightToHidden) {
      setIsvisibel(true);
    } else {
      setIsvisibel(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
      {isvisibel && (
        <div className="top-btn" onClick={goTobtn}>
          <FaArrowUp className="top-btn-icon" />
        </div>
      )}
    </>
  );
};

export default GoToTop;
