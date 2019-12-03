import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";

class CreateProject extends Component {
  state = {
    title: "",
    content: ""
  };

  emptyState = this.state;

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createProject(this.state);

    this.setState({
      title: "",
      content: ""
    });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Content</label>
            <textarea
              className="materialize-textarea"
              id="content"
              rows="3"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = null;
const mapDispatchToProps = {
  createProject
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProject);
