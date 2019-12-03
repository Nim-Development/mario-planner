import {
  FETCH_PROJECTS,
  CREATE_PROJECT,
  DELETE_PROJECT
} from "../actions/types";

const initialState = {
  projects: [
    {
      id: 1,
      title: "help me go to Bali",
      name: "Nick",
      content: "bla blag blahh",
      date: "4 AM, Thursday, 27DEC"
    },
    {
      id: 2,
      title: "collect all the knowledge",
      name: "Nick",
      content: "bla blag blahh",
      date: "4 AM, Thursday, 27DEC"
    },
    {
      id: 3,
      title: "apply soft skillset",
      name: "Nick",
      content: "bla blag blahh",
      date: "4 AM, Thursday, 27DEC"
    }
  ]
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PROJECT:
      // state.projects = [action.payload.project, ...state.projects];

      return {
        ...state,
        projects: [action.payload.project, ...state.projects]
      };

    // return state;
    case DELETE_PROJECT:
      // delete project at action.payload.id
      return {
        ...state,
        projects: state.projects.filter(project => {
          if (project.id !== action.payload.id) {
            return project;
          }
        })
      };
    default:
      return state;
  }
};

export default projectReducer;
