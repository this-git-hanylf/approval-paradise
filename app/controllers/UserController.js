// import axios from 'axios';
import {setAuthStorage} from '../config/Storage';
import httpClient from './HttpClient';

class UserController {
  constructor() {
    // this.basePath = '/login_mobile';
    // this.basePath = 'http://apps.pakubuwono-residence.com/apiwebpbi/api';
  }

  login = async (email, password, token_firebase) => {
    console.log('token firebase yg akan dikirim', token_firebase);
    console.log('email yg akan dikirim', email);
    console.log('password yg akan dikirim', password);
    try {
      const result = await httpClient.request({
        url: '/login_approval',
        method: 'POST',
        data: {
          email,
          password,
          token: '',
          device: 'ios',
          mac: 'mac',
          token_firebase: token_firebase,
        },
      });
      // alert(result.Pesan);
      console.log('vardums result -->', result);
      // ini ada isreset dalemnya, sementara dihilangin, buat biar ga nyangkut insert token firebase
      if (result.Error) {
        console.log('first pesan', result.Pesan);
        return Promise.reject(result.Pesan);
      } else {
        console.log('if succes', result);
        return result;
      }
    } catch (error) {
      console.log('if errorz', error);
      return Promise.reject(error);
    }
  };

  resetPassword = async (conPass, newPass, email) => {
    try {
      const result = await httpClient.request({
        url: '/Resetpass',

        method: 'POST',
        data: {
          conpass: conPass,
          newpass: newPass,
          email: email,
        },
      });
      return result;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  logout = () => {
    try {
      //  const result = await httpClient.request({
      //    url: '/login_mobile',
      //    method: 'POST',
      //    data: {
      //      email,
      //      password,
      //      token: '',
      //      device: 'ios',
      //      mac: 'mac',
      //      token_firebase,
      //    },
      //  });
      //  // alert(result.Pesan);

      //  if (result.Error) {
      //    return Promise.reject(result.Pesan);
      //  } else {
      //    return result;
      //  }
      console.log('logout');
    } catch (error) {
      return Promise.reject(error);
    }
  };

  // logout = () => null;

  saveProfile = async data => {
    console.log('save profile daata controler', data);
    try {
      const result = await httpClient.request({
        url: '/changeprofile_mobile',

        method: 'POST',
        data: {
          email: data.emails,
          name: data.name,
          hp: data.phone,
          gender: data.genders,
        },
      });
      return result;
    } catch (error) {
      return Promise.reject(error);
    }
  };
}

export default new UserController();
