import React, { useState } from 'react';
import { LoginForm, InputField, LoginButton, LogoutForm, LogoutButton } from './index'
import { notify } from './../App';
import instaDataLogo from './../Assets/instaData.png'
import axios from 'axios'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import config from './../config.json'

const tryLogin = async (username, password) => {
    return await axios({
        method: 'post',
        url: `${config.protocol}://${config.host}:${config.port}${config.urls.login}`,
        data: {
            username: username,
            password: password
        }
    })
}

const logout = async (username) => {
    return await axios({
        method: 'post',
        url: `${config.protocol}://${config.host}:${config.port}${config.urls.logout}`,
        data: {
            username: username,
        }
    })
}

const handleLogin = async (username, password, setLoggedIn, setLoader) => {
    setLoader(true)
    if (username.length === 0 || password.length === 0) {
        notify('Empty fields')
        return
    }
    const result = await tryLogin(username, password)
    setLoader(false)
    console.log(result);
    if (result.data === 'success') {
        sessionStorage.setItem('session', `${username}`)
        setLoggedIn(true)
        notify(`Welcome ${username}`)
    }
    else {
        notify(`Wrong Username or Password`)
    }
    return
}

const handleLogout = async (username, setLoggedIn, setLoader) => {
    setLoader(true)
    await logout(username)
    sessionStorage.removeItem('session')
    setLoggedIn(false)
    setLoader(false)
    notify(`Bye Bye ${username}`)
    return
}

const SignIn = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loader, setLoader] = useState(false)
    return (
        <div style={{ textAlign: 'center' }}>
            <img src={instaDataLogo} alt="instaDataLogo" height="280px" width="350px" />
            {props.loggedIn ?
                <LogoutForm>
                    <LogoutButton onClick={() => handleLogout(sessionStorage.getItem('session'), props.setLoggedIn, setLoader)}>Logout</LogoutButton>
                    {
                        loader &&
                        <Loader
                            type="ThreeDots"
                            color="#fff"
                            height={70}
                            width={70}
                        />
                    }
                </LogoutForm>
                :
                <LoginForm>
                    <InputField placeholder="Username" autocomplete="off" id="username" name="username" onChange={e => setUsername(e.target.value)} /><br />
                    <InputField type="password" placeholder="Password" autocomplete="off" id="password" name="password" onChange={e => setPassword(e.target.value)} /><br /> <br />
                    <LoginButton onClick={() => handleLogin(username, password, props.setLoggedIn, setLoader)}>Sign In</LoginButton>
                    {
                        loader &&
                        <Loader
                            type="ThreeDots"
                            color="#fff"
                            height={70}
                            width={70}
                        />
                    }
                </LoginForm>
            }
        </div>
    )
}

export default SignIn;