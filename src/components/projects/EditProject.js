import React, { Component } from "react";

import { connect } from "react-redux"; // to connect to store

class EditProject extends Component {
  state = {};

  // replace for constructor!
  componentDidMount() {
    // set state to prop.
    // filter the projects, normally do this in constructor?
    const project = this.props.projects.filter(project => {
      if (project.id == this.props.match.params.id) {
        return project;
      }
    });
    this.setState({
      ...project
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    const { id, title, name, content, date } = this.props.state;

    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">
              <label htmlFor="title">Title</label>
              <input type="text" id="title" onChange={this.handleChange} />
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

export default connect(mapStateToProps)(EditProject);
