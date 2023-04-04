import ApprovalController from '../controllers/ApprovalController';

export const data = status => async dispatch => {
  // dispatch(loginRequest());
  try {
    const user = await ApprovalController.getData(status);
    //   let data = {
    //     success: true,
    //   };
    // user.Data.login = {success: true};
    // console.log('user di useraction', user.Data.login);
    // console.log('user Data di useraction', user.Data);
    // user.push(data);
    //   dispatch(loginSuccess(user.Data, data));
    console.log('userrrrr', user);
    // alert("JSON.stringify(user)");
  } catch (error) {
    alert(error);
    console.log('ini konsol eror', error);
    dispatch(loginError(error));
  }
};
