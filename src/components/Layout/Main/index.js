import React from "react";
import "./style.scss";

const Main = props => {
  const { children, navbarHeight } = props;
  return (
    <main
      className="content"
      style={{
        minHeight: `calc(100vh - (${navbarHeight}px + 16px))`,
      }}
    >
      {children}
    </main>
  );
};

export default Main;
