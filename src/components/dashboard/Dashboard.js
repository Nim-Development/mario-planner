import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { deleteProject } from "../../store/actions/projectActions";

import { connect } from "react-redux"; // to connect to store
//import { fetchProjects } from "../../actions/projectActions";

class Dashboard extends Component {
  state = {};

  deleteClick = (id, e) => {
    // dispatch
    this.props.deleteProject(id);
  };

  render() {
    const { projects } = this.props;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} deleteClick={this.deleteClick} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
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

const mapActionsToProps = {
  deleteProject
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Dashboard);
