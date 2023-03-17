// import * as actionTypes from './actionTypes';
import * as actionTypes from './UserActions';
// console.log('actionTypes', actionTypes.LOGOUT);

// const onLogin = data => {
//   if (data.success == true) {
//     return {
//       type: actionTypes.LOGIN,
//       data,
//     };
//   } else {
//     return {
//       type: actionTypes.LOGOUT,
//       login: data,
//       user: null,
//     };
//   }
// };

const onLogin = data => {
  return {
    type: actionTypes.LOGOUT,
    user: null,
    login: data,
  };
};

export const authentication = (login, callback) => dispatch => {
  console.log('login di userauth', login);
  console.log('callback di userauth', callback);
  //call api and dispatch action case
  setTimeout(() => {
    let data = {
      success: login,
    };
    dispatch(onLogin(data));
    if (typeof callback === 'function') {
      callback({success: true});
    }
  }, 500);
};
