import React from "react";
import ProjectSummary from "./ProjectSummary";

const ProjectList = props => {
  return (
    <div className="project-list section">
      {/* props && ... checks first if there are any props. */}
      {props &&
        props.projects.map((project, index) => {
          return (
            <ProjectSummary
              key={index}
              project={{
                id: project.id,
                title: project.title,
                name: project.name,
                content: project.content,
                date: project.date
              }}
              deleteClick={props.deleteClick}
            />
          );
        })}
    </div>
  );
};

export default ProjectList;
