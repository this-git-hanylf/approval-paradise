import {actionTypes} from '../actions/UserActions';

const initialState = {
  login: {
    success: true,
  },
  user: null,
};

const userReducer = (state = initialState, action = {}) => {
  console.log('action', action);
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        // ...state.login,
        login: action.login,
        user: action.user,
      };
    case actionTypes.LOGOUT:
      return {
        // ...state,
        login: {
          success: false,
        },
        user: null,
      };
    case actionTypes.REMOVE_USER:
      return {
        // ...state,
        user: null,
      };

    default:
      return state;
  }
};

export default userReducer;
