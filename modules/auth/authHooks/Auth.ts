import axios from 'axios';
import { urls } from '../../../api/urls';

type loginInput = {
  email: string;
  password: string;
};

type registerInput = {
  email: string;
  password: string;
  name: string;
  tel: string;
  personal_number: string;
};

type requestChangePasswordInput = {
  email: string;
};

type resetTokenInput = {
  token: string | undefined;
};

type resetInput = {
  password: string;
};

class Atuh {
  static async login({ email, password }: loginInput) {
    const results = await axios
      .post(urls.auth.login, { email, password })
      .then((result) => result.data);

    return results;
  }

  static async register(inputs: registerInput) {
    const results = await axios
      .post(urls.auth.register, inputs)
      .then((result) => result.data);

    return results;
  }

  static async requestChangePassword(inputs: requestChangePasswordInput) {
    const results = await axios
      .post(urls.auth.requestChangePassword, inputs)
      .then((result) => result.data);

    return results;
  }

  static async validateRestToken(inputs: resetTokenInput) {
    const results = await axios
      .post(urls.auth.ValidateToken, inputs)
      .then((result) => result.data);

    return results;
  }

  static async resetPassword(inputs: resetInput) {
    const results = await axios
      .post(urls.auth.reset, inputs)
      .then((result) => result.data);

    return results;
  }
}

export default Atuh;
