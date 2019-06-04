import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-app-ea050.firebaseio.com/'
});

export default instance;