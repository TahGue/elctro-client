import axios from 'axios';
import axiosInstance from '../../../api/axiosinstance';
import { urls } from '../../../api/urls';



class Profile {

static async getAddress () {

    return axiosInstance.get(urls.address.user).then((res) => res.data);
}
}

export default Profile;

