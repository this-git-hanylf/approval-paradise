import {async} from '@firebase/util';
import {err} from 'react-native-svg/lib/typescript/xml';
import UserController from '../controllers/UserController';
import axios from 'axios';

export const actionTypes = {
  LOGIN: 'LOGIN',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT: 'LOGOUT',

  RESETPASS: 'RESETPASS',
  RESETPASS_REQUEST: 'RESETPASS_REQUEST',
  RESETPASS_ERROR: 'RESETPASS_ERROR',
  RESETPASS_SUCCESS: 'RESETPASS_SUCCESS',

  CHANGEPASS: 'CHANGEPASS',
  CHANGEPASS_REQUEST: 'CHANGEPASS_REQUEST',
  CHANGEPASS_ERROR: 'CHANGEPASS_ERROR',
  CHANGEPASS_SUCCESS: 'CHANGEPASS_SUCCESS',

  EDIT: 'EDIT',

  REMOVE_USER: 'REMOVE_USER',

  DATA_REQUEST: 'DATA_REQUEST',
  DATA_SUCCESS_REQUEST: 'DATA_SUCCESS_REQUEST',
  DATA_SUCCESS_APPROVE: 'DATA_SUCCESS_APPROVE',
  DATA_SUCCESS_CLOSE: 'DATA_SUCCESS_CLOSE',
  DATA_ERROR: 'DATA_ERROR',
  DELETE: 'DELETE',
  UPDATE_DATA: 'UPDATE_DATA',

  // LOAD_LOTNO: 'LOAD_LOTNO'
};
export const LOGOUT = 'LOGOUT';
export const LOGIN = 'LOGIN';
export const DELETE = 'DELETE';

const loginRequest = () => ({
  type: actionTypes.LOGIN_REQUEST,
});

const loginError = error => ({
  type: actionTypes.LOGIN_ERROR,
  error,
});

const loginSuccess = (user, data) => ({
  type: actionTypes.LOGIN_SUCCESS,
  login: data,
  user,
});

const resetPassRequest = () => ({
  type: actionTypes.RESETPASS_REQUEST,
});

const resetPassError = error => ({
  type: actionTypes.RESETPASS_ERROR,
  error,
});

const resetPassSuccess = user => ({
  type: actionTypes.RESETPASS_SUCCESS,
  user,
});

const changePassRequest = () => ({
  type: actionTypes.CHANGEPASS_REQUEST,
});

const changePassError = error => ({
  type: actionTypes.CHANGEPASS_ERROR,
  error,
});

const changePassSuccess = user => ({
  type: actionTypes.CHANGEPASS_SUCCESS,
  user,
});

const editRequest = () => ({
  type: actionTypes.EDIT,
  // user,
});

const logoutRequest = () => ({
  type: actionTypes.LOGOUT,
});

const removeUser = user => ({
  type: actionTypes.REMOVE_USER,
  user: null,
});

const dataRequest = () => ({
  type: actionTypes.DATA_REQUEST,
});

const dataError = error => ({
  type: actionTypes.DATA_ERROR,
  load: {
    success: false,
  },
  data: null,
  error: error,
});

const dataSuccessRequest = (load, data) => ({
  type: actionTypes.DATA_SUCCESS_REQUEST,
  load,
  data,
});
const dataSuccessApprove = (load, data) => ({
  type: actionTypes.DATA_SUCCESS_APPROVE,
  load,
  data,
});
const dataSuccessClose = (load, data) => ({
  type: actionTypes.DATA_SUCCESS_CLOSE,
  load,
  data,
});

const dataDelete = (load, data) => ({
  type: actionTypes.DELETE,
  load,
  data: data,
});

const dataUpdate = (load, data) => ({
  type: actionTypes.UPDATE_DATA,
  data: data,
  load,
});

export const getdata = status => async dispatch => {
  console.log('status di user action', status);
  dispatch(dataRequest());
  try {
    await axios
      .get(
        `http://dev.ifca.co.id:8080/apiifcares/api/getapproval_mobile/${status}`,
      )
      .then(result => {
        let load = {
          success: true,
        };
        const pasing = result.data.Data;
        console.log('pasing di useraction', pasing);
        if (pasing.length !== 0) {
          console.log('first result', pasing[0].status);
          if (pasing[0].status == 'C') {
            dispatch(dataSuccessClose(load, pasing));
          } else if (pasing[0].status == 'R') {
            dispatch(dataSuccessRequest(load, pasing));
          } else if (pasing[0].status == 'P') {
            dispatch(dataSuccessApprove(load, pasing));
          }
        } else {
          console.log('User Action Null');
        }
      })
      .catch(error => console.log(error.response.data));
    // .finally(() => );
  } catch (error) {
    alert(error);
    console.log('ini konsol eror data', error);
    dispatch(dataError(error));
  }
};

export const login = (email, password, token_firebase) => async dispatch => {
  dispatch(loginRequest());
  try {
    const user = await UserController.login(email, password, token_firebase);
    let data = {
      success: true,
    };
    // user.Data.login = {success: true};
    // console.log('user di useraction', user.Data.login);
    // console.log('user Data di useraction', user.Data);
    // user.push(data);
    dispatch(loginSuccess(user.Data, data));
    console.log('userrrrr', user);
    // alert("JSON.stringify(user)");
  } catch (error) {
    alert(error);
    console.log('ini konsol eror', error);
    dispatch(loginError(error));
  }
};

export const reset = (newPass, conPass, email) => async dispatch => {
  dispatch(resetPassRequest());
  try {
    const user = await UserController.resetPassword(newPass, conPass, email);
    console.log(user);

    alert('Please Back to Login');
    dispatch(resetPassSuccess(user.Data));
    dispatch(logout());
  } catch (error) {
    console.log(error);

    dispatch(resetPassError(error));
  }
};

export const logout = () => async dispatch => {
  UserController.logout();
  dispatch(logoutRequest());
  // dispatch(logout());
  dispatch(removeUser());
};

export const saveProfile = data => async dispatch => {
  console.log('user action save profile', data);
  const res = await UserController.saveProfile(data);
  console.log('res save profil', res);
  alert(res.Pesan);
  dispatch(editRequest(res.Data));
};

export const changePass = (email, pass, conpass) => async dispatch => {
  dispatch(changePassRequest());
  try {
    const res = await UserController.changePassword(email, pass, conpass);
    alert(res.Pesan);
    dispatch(changePassSuccess(res.Data));
  } catch (error) {
    dispatch(changePassError(error));
  }
};

// export const loadLotno = () => async dispatch => {
//   dispatch(loginRequest());
//   try {
//     const user = await UserController.login(email, password, token_firebase);
//     dispatch(loginSuccess(user.Data));
//     console.log('userrrrr', user);
//     // alert("JSON.stringify(user)");
//   } catch (error) {
//     alert(error);
//     dispatch(loginError(error));
//   }
// };
