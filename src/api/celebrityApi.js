import axios from "axios";

const celebrityApi = axios.create({
    baseURL: 'https://zemoga-fcb8b-default-rtdb.firebaseio.com',
});

export default celebrityApi;