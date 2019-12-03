import React from "react";
import { Link } from "react-router-dom";

const ProjectSummary = props => {
  return (
    <div className="project-list section">
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <Link to={`/project/${props.project.id}`}>
            <span className="card-title">{props.project.title}</span>
          </Link>
          <p>Posted By: {props.project.name}</p>
          <p className="grey-text">{props.project.date}</p>
        </div>
        <button onClick={props.deleteClick.bind(this, props.project.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProjectSummary;
