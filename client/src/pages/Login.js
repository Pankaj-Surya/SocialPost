import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    console.log(error)
    const handleLogin = (e) => {
        e.preventDefault();
        if (username == "" && password == "") {
            toast.error("All fields are required", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                })
            console.log("ddd")
            return
        }
        console.log(username, password)
        const data = { username: username, password: password };
       axios.post("http://localhost:3001/auth/login", data).then((response) => {
            console.log(response.data);
            if (response.data.error) {
                setError(true)
                toast.error(response.data.error, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
                return;
            }
            setUsername("");
            setPassword("")
            //localStorage.setItem("accesqqqsToken", "ssssssssssss");
            sessionStorage.setItem("accessToken", response.data);
            console.log(sessionStorage.getItem("accessToken"))
            navigate("/")
        }).catch((error) => {
            toast.error(error, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            setError(true)
        });

    };
    return (

        <div className="loginContainer">
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <label>Username:</label>
            <input
                type="text"
                onChange={(event) => {
                    setUsername(event.target.value);
                }}
            />
            <label>Password:</label>
            <input
                type="password"
                onChange={(event) => {
                    setPassword(event.target.value);
                }}
            />
            {error && <span>Please enter valid credentional</span>}
            <button onClick={handleLogin}> Login </button>
        </div>
    );
}

export default Login;