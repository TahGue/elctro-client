import { Address } from './../../../types/DBTypes';
import axios from 'axios';
import axiosInstance from '../../../api/axiosinstance';
import { urls } from '../../../api/urls';



class Profile {

static async getAddress () {

    return axiosInstance.get(urls.address.user).then((res) => res.data);
}
    static async saveAddress (address:Address) {

    return axiosInstance.patch(urls.address.user,address).then((res) => res.data);
}
}

export default Profile;

