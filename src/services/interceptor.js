import axios from 'axios'
import store from '../store';
// require('dotenv').config()

let primaryServer = axios.create({
    baseURL: "https://d3dn7x5dibgl9.cloudfront.net",
    headers: { "content-Type": "application/json" }
})

primaryServer.interceptors.request.use(
    (response) => {
        console.log("Starting fetch token")
        const token = (store.getState().Auth.userDetails) ? store.getState().Auth.userDetails.access_token : null;
        console.log("Token from interceptor", token)
        if (token != null) {
            response.headers.Authorization = `Bearer ${token}`;
        }
        console.log("Printing from response!!")
        console.log(response)
        console.log(response.status)
        return response
    },
    (error) => {
        console.log("Printing from Error!")
        console.log(error)
        return error
    }
)

export default primaryServer;