import React, { useEffect, useState } from "react";
import Button from "../Button/Button.jsx";
import "./ScrollToTopButton.css";

export default function ScrollToTopButton() {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        window.scrollY > 50
          ? setBackToTopButton(true)
          : setBackToTopButton(false)
      );
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="to_top_button">
      {backToTopButton && <Button onClick={scrollUp}>^</Button>}
    </div>
  );
}
