import styled from "./AnimatedBorder.module.css";
import { useEffect, useRef } from "react";

export const AnimatedBorder = ({ children }) => {
  const refCard = useRef();

  useEffect(() => {
    const card = refCard?.current;
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--x", `${x}px`);
      card.style.setProperty("--y", `${y}px`);
    });
  }, []);

  return (
    <>
      <div className={styled.card} ref={refCard}>
        <div className={styled.card_inner}>{children}</div>
      </div>
    </>
  );
};
