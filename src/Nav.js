import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scroll > 100) {
        handleShow(true);
      } else handleShow(false);
    });
  });

  return (
    <div className={`nav ${show && `nav_black`}`}>
      <img
        className="nav_logo"
        src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo-700x394.png"
        alt="Netflix Logo"
      />

      <img
        className="nav_avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
