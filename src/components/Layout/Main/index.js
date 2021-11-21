import React from "react";
import "./style.scss";

const Main = props => {
  const { children, navbarHeight, positionScroll } = props;
  return (
    <main
      className={`content${positionScroll === 0 ? "" : " scrolled"}`}
      style={{
        minHeight: `calc(100vh - (${navbarHeight}px + 16px))`,
      }}
    >
      {children}
    </main>
  );
};

export default Main;
