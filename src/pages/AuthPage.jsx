import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const AuthPage = () => {
    // tıklama olayının state'ini tut
    const [isSignUp, setIsSignUp] = useState(true);

    const handleSignUpClick = () => {
        setIsSignUp(true);
    };

    const handleSignInClick = () => {
        setIsSignUp(false);
    };

    return (
        <div className="content">
            <link rel="stylesheet" href="src\styles\auth.css" />
            {/* <div className="header">
                <img src="../progile_logo3.png" alt="logo" />
            </div> */}

            <div className="auth-sec">
                <div
                    className={`container ${
                        isSignUp ? "right-panel-active" : ""
                    }`}
                    id="main"
                >
                    <img
                        src="/progile_logo3.png"
                        className="login_logo"
                        alt="logo"
                    />

                    <div className="sign-up">
                        <form action="#">
                            <h1>Create Account</h1>
                            <div className="social-container">
                                <a href="#" className="social">
                                    <FaGoogle />
                                </a>
                                <a href="#" className="social">
                                    <IoLogoGithub />
                                </a>
                                <a href="#" className="social">
                                    <FaLinkedin />
                                </a>
                            </div>
                            <p>or use your email for registration</p>
                            <input
                                type="text"
                                name="txt"
                                placeholder="Name"
                                required=""
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required=""
                            />
                            <input
                                type="password"
                                name="pswd"
                                placeholder="Password"
                                required=""
                            />
                            <button>Register</button>
                        </form>
                    </div>
                    <div className="sign-in">
                        <form action="#">
                            <h1>Sign in</h1>
                            <div className="social-container">
                                <a href="#" className="social">
                                    <FaGoogle />
                                </a>
                                <a href="#" className="social">
                                    <IoLogoGithub />
                                </a>
                                <a href="#" className="social">
                                    <FaLinkedin />
                                </a>
                            </div>
                            <p>or use your account</p>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required=""
                            />
                            <input
                                type="password"
                                name="pswd"
                                placeholder="Password"
                                required=""
                            />
                            <a href="#" style={{ color: "#fff" }}>
                                Forget your Password?
                            </a>
                            <button>Sign In</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-left">
                                <button id="signIn" onClick={handleSignInClick}>
                                    Sign In
                                </button>
                            </div>
                            <div className="overlay-right">
                                <button id="signUp" onClick={handleSignUpClick}>
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