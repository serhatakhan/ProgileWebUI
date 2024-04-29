import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import styles from "../styles/auth/auth.module.css";
import axios from "axios";
import httpService from "../services/httpClientService";
import authUrls from '../constants/auth.js'
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
    // tıklama olayının state'ini tut
    const [isSignUp, setIsSignUp] = useState(true);
    const navigate = useNavigate()

    const handleSignUpClick = () => setIsSignUp(true);
    const handleSignInClick = () => setIsSignUp(false);

    // hesap oluşturulduğunda formun gönderilme olayını izler
    const registerSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const registerData = Object.fromEntries(formData.entries());

        console.log(registerData);

        // api'ye veriyi yolla-post
        axios
            .post(
                "https://96de-212-2-212-128.ngrok-free.app/api/Users/CreateUser",
                registerData,
                {
                    auth: {
                        username: "srht1",
                        password: "P@ssw0rd1",
                    },
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Basic c3JodDE6UEBzc3cwcmQx",
                    },
                }
            )
            .then((resp) => {
                console.log(resp);
                if (resp.data.responseStatus == 2) {
                    alert(resp.data.errors[0]);
                }
            })
            .catch((err) => {
                console.log(err);
            });

        // hesap oluşturma başarılı ise kullanıcıya bildir
    };

    // giriş yapılırken formun gönderilme olayını izler
    const loginSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const loginData = Object.fromEntries(formData.entries());

        console.log(loginData);

        // let config = {
        //     url: "https://l0jjdd7c-7212.euw.devtunnels.ms/api/Users/LoginUser",
        //     data: loginData,
        //     headers: {
        //         "X-Tunnel-Authorization":
        //             "tunnel eyJhbGciOiJFUzI1NiIsImtpZCI6IjJENTIwNkFFNjVBOTQ5RTlBQTlDRUQ4QTU2M0QxRTBCQzYyRUVENjIiLCJ0eXAiOiJKV1QifQ.eyJjbHVzdGVySWQiOiJldXciLCJ0dW5uZWxJZCI6ImwwampkZDdjIiwic2NwIjoiY29ubmVjdCIsImV4cCI6MTcxNDI0ODM3MCwiaXNzIjoiaHR0cHM6Ly90dW5uZWxzLmFwaS52aXN1YWxzdHVkaW8uY29tLyIsIm5iZiI6MTcxNDE2MTA3MH0.BCcNwX3jSA6z9n-38LfhiUUzorG90mdFRxYIQWGaTHApNy4BqNoA8qjIkwWqZs91LyzTkTjSiEkJx2LvUpn24g",
        //     },
        // };

        // await httpService.post(authUrls.LOGIN_URL, config.data, config.headers)

        axios.post('https://fakestoreapi.com/auth/login', {
            username: "mor_2314",
            password: "83r5^_"
        })
        .then(res => {
            console.log(res.data); 
            localStorage.setItem("token", JSON.stringify(res.data.token))
            navigate("/todo")
        })
        .catch(error => {
            console.error('Hata:', error);
        });








    //     axios
    //         .post(config.url, loginData, {
    //             headers: config.headers,
    //         })
    //         .then((res) => console.log(res.data))
    //         .catch((err) => console.log(err));
    };

    return (
        <div className={styles.content}>
            <div className={styles.auth_sec}>
                <div
                    className={`${styles.container} ${
                        isSignUp ? styles.right_panel_active : ""
                    }`}
                    id={styles.main}
                >

                    <div className={styles.sign_up}>
                        <form action="#" onSubmit={registerSubmit}>
                            <h1>Create Account</h1>
                            <div className={styles.social_container}>
                                <a href="#" className={styles.social}>
                                    <FaGoogle />
                                </a>
                                <a href="#" className={styles.social}>
                                    <IoLogoGithub />
                                </a>
                                <a href="#" className={styles.social}>
                                    <FaLinkedin />
                                </a>
                            </div>
                            <p>or use your email for registration</p>

                            <div className={styles.inputs}>
                                <div className={styles.first_column}>
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="Firstname"
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Lastname"
                                        required
                                    />
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        required=""
                                    />
                                </div>
                                <div className={styles.second_column}>
                                    <input
                                        type="text"
                                        name="userName"
                                        placeholder="Username"
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        required=""
                                    />
                                    <input
                                        type="password"
                                        name="passwordConfirm"
                                        placeholder="Password Confirm"
                                        required=""
                                    />
                                </div>
                            </div>

                            <button type="submit">Register</button>
                        </form>
                    </div>
                    <div className={styles.sign_in}>
                        <form action="#" onSubmit={loginSubmit}>
                            <h1>Sign in</h1>
                            <div className={styles.social_container}>
                                <a href="#" className={styles.social}>
                                    <FaGoogle />
                                </a>
                                <a href="#" className={styles.social}>
                                    <IoLogoGithub />
                                </a>
                                <a href="#" className={styles.social}>
                                    <FaLinkedin />
                                </a>
                            </div>
                            <p>or use your account</p>
                            <div className={styles.signin_inputs}>
                                <input
                                    type="text"
                                    name="usernameOrEmail"
                                    placeholder="Username or Email"
                                    required
                                />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    required
                                />
                            </div>

                            <a href="#" style={{ color: "#fff" }}>
                                Forget your Password?
                            </a>

                            <button type="submit" className={styles.btn}>
                                <img
                                    src="./postit_4.png"
                                    className={styles.postit}
                                />
                                <span className={styles.front}>Sign In</span>
                                <span className={styles.back}></span>
                            </button>
                        </form>
                    </div>
                    <div className={styles.overlay_container}>
                        <div className={styles.overlay}>
                            <div className={styles["overlay-left"]}>
                                <button
                                    id={styles.signIn}
                                    onClick={handleSignInClick}
                                >
                                    Sign In
                                </button>
                            </div>
                            <div className={styles["overlay-right"]}>
                                <button
                                    id={styles.signUp}
                                    onClick={handleSignUpClick}
                                >
                                    Register
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
