import axios from 'axios';

export default () => {
    return axios.create({
        baseURL: `http://34.139.42.66:8085`,
        withCredentials: true

    });

}