import {actionTypes} from '../actions/UserActions';

const initialStateData = {
  load: {
    success: true,
  },
  data: null,
};

const DataReducerRequest = (state = initialStateData, action = {}) => {
  console.log('action', action);
  switch (action.type) {
    case actionTypes.DATA_REQUEST:
      return {
        ...state,
      };
    case actionTypes.DATA_SUCCESS_REQUEST:
      return {
        // ...state.login,
        load: action.load,
        data: action.data,
      };
    case actionTypes.DATA_ERROR:
      return {
        // ...state.login,
        load: action.load,
        data: action.data,
      };
    case actionTypes.DELETE:
      return {
        // ...state,
        load: {
          success: false,
        },
        data: null,
      };
    case actionTypes.UPDATE_DATA:
      return {
        // ...state,
        data: null,
      };

    default:
      return state;
  }
};

export default DataReducerRequest;
