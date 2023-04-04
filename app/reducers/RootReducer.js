import {combineReducers} from 'redux';
// import error from './ErrorReducer';
import UserReducer from './UserReducer';
import DataReducerClose from './DataReducerClose';
// import status from './StatusReducer';
import AuthReducer from './auth';
import ApplicationReducer from './application';
import DataReducerRequest from './DataReducerRequest';
import DataReducerApprove from './DataReducerApprove';
// import notifDataRed from './NotifReducer';
// import counter from './reduceNotif';
// import apiReducer from '../config/ApiReducer';
// import Dataproject from './ProjectReducer';
// import DataCart from './cartReducer';

const rootReducer = combineReducers({
  //   error,
  user: UserReducer,
  data_close: DataReducerClose,
  data_request: DataReducerRequest,
  data_approve: DataReducerApprove,
  //   status,
  auth: AuthReducer,
  application: ApplicationReducer,
  //   notifDataRed,
  //   counter,
  //   apiReducer,
  //   Dataproject,
  //   DataCart,
});

export default rootReducer;
