import React from "react";
import Card from "../Card";
import "./style.scss";

const ProjectList = ({ projects }) => {
  return (
    <section id="project" className="project">
      <div className="title">Projects</div>
      {projects && Array.isArray(projects) && (
        <div className="project-list">
          {projects.map(project => (
            <Card data={project} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProjectList;
