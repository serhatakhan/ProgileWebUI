import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import styles from "../styles/auth/auth.module.css";
import httpService from "../services/httpClientService";
import authUrls from "../constants/auth.js";
import staticValues from "../constants/staticValues.js";
import toasterService from "../services/ToastrComponent.js";

const AuthPage = () => {
    // tıklama olayının state'ini tut
    const [isSignUp, setIsSignUp] = useState(true);

    const handleSignUpClick = () => setIsSignUp(true);
    const handleSignInClick = () => setIsSignUp(false);

    // hesap oluşturulduğunda formun gönderilme olayını izler
    const registerSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const registerData = Object.fromEntries(formData.entries());

        await httpService
            .post(authUrls.REGISTER_URL, registerData, {
                "X-Tunnel-Authorization": staticValues.X_TUNNEL_HEADER,
            })
            .then((resp) => {
                toasterService.success(resp.data.message)
            }).catch((err) => {
                toasterService.error(resp.data.message, undefined, undefined, 'red', undefined, undefined)
            });
    };

    // giriş yapılırken formun gönderilme olayını izler
    const loginSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const loginData = Object.fromEntries(formData.entries());

        await httpService.post(authUrls.LOGIN_URL, loginData, {
            "X-Tunnel-Authorization": staticValues.X_TUNNEL_HEADER,
        });
    };

    const joje = (e) => {
        e.preventDefault();

        toasterService.info(
            "deneme"
        );
    };

    return (
        <div className={styles.content}>
            <button onClick={joje}>TIKLA</button>
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

                            <button type="submit">Sign In</button>
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
