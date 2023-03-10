import axios from "axios";


const BASE_URL = process.env.REACT_APP_URL;

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create( {
    baseURL : BASE_URL,
})


// export const userRequest = axios.create({
//     baseURL: BASE_URL,
//     header: { token: `Bearer ${TOKEN}` },
//   })

// export const makePaymentRequest = axios.create({
//     baseURL: BASE_URL,
//     headers: {
//         Authorization: "bearer " + process.env.REACT_APP_STRIPE,
//     },
// });