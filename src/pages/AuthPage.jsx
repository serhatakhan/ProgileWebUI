import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import styles from "../styles/auth/auth.module.css";

const AuthPage = () => {
    // tıklama olayının state'ini tut
    const [isSignUp, setIsSignUp] = useState(true);

    const handleSignUpClick = () => {
        setIsSignUp(true);
    };
    const handleSignInClick = () => {
        setIsSignUp(false);
    };


    // hesap oluşturulduğunda formun gönderilme olayını izler
    const registerSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const registerData = Object.fromEntries(formData.entries())

        console.log(registerData)

        // api'ye veriyi yolla-post

        // hesap oluşturma başarılı ise kullanıcıya bildir

    }

    // giriş yapılırken formun gönderilme olayını izler
    const loginSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const loginData = Object.fromEntries(formData.entries())

        console.log(loginData)

        // 

        // 
    }




    return (
        <div className={styles.content}>
            <div className={styles.auth_sec}>
                <div
                    className={`${styles.container} ${
                        isSignUp ? styles.right_panel_active : ""
                    }`}
                    id={styles.main}
                >
                    {/* <img
                        src="/progile_logo3.png"
                        className={styles.login_logo}
                        alt="logo"
                    /> */}

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
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
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
                                name="password"
                                placeholder="Password"
                                required=""
                            />
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
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                required
                            />
                            <a href="#" style={{ color: "#fff" }}>
                                Forget your Password?
                            </a>
                            {/* <button>Sign In</button> */}

                            <span className={styles.btn}>
                              <img src="../../public/postit2.png" className={styles.postit}/>
                              <span className={styles.front}>Sign In 🚀</span>
                              <span className={styles.back}></span>
                            </span>
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
