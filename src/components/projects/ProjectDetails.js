import React, { Component } from "react";

import { connect } from "react-redux"; // to connect to store

class ProjectDetails extends Component {
  render() {
    // filter the projects, normally do this in constructor?
    const project = this.props.projects.filter(project => {
      if (project.id == this.props.match.params.id) {
        return project;
      }
    });

    const { id, title, name, content, date } = project[0];

    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">
              Project Name: {title}, ID: {id}{" "}
            </span>
            <p>{content}</p>
            <div className="card-action grey lighten-4 grey-text">
              <div>Posted by {name}</div>
              <div>{date}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.project.projects
  };
};

export default connect(mapStateToProps)(ProjectDetails);
