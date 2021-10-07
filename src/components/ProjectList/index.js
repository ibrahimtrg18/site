import React from "react";
import Card from "../Card";
import "./style.scss";

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.map(project => (
        <Card data={project} />
      ))}
    </div>
  );
};

export default ProjectList;
