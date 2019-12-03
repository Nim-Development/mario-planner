import { CREATE_PROJECT, FETCH_PROJECTS, DELETE_PROJECT } from "./types";

export const fetchProjects = () => {
  return (dispatch, getState) => {
    // async action
    dispatch({
      type: FETCH_PROJECTS,
      payload: {
        //
      }
    });
  };
};

export const createProject = project => {
  return (dispatch, getState) => {
    // async action
    dispatch({
      type: CREATE_PROJECT,
      payload: {
        project: project
      }
    });
  };
};

export const deleteProject = id => {
  // perform some thunk to the datebase here.
  return (dispatch, getState) => {
    // async action
    dispatch({
      type: DELETE_PROJECT,
      payload: {
        id: id
      }
    });
  };
};
