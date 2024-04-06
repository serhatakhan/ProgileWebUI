import { FaGoogle } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const AuthPage = () => {
    return (
        <div className="content">
            <div className="auth-sec">
                <div className="left-sec">
                    {/* <form> */}
                    <h3>Log in</h3>

                    <img src="/postit2.png" height={100} className="postit" />

                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        placeholder="Email or Phone"
                        id="username"
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        id="password"
                    />

                    <button>Log In</button>

                    <div className="social-option">
                        <div>
                            <hr className="social-line" />
                        </div>
                        <div className="social-p">or</div>
                        <div>
                            <hr className="social-line" />
                        </div>
                    </div>

                    <div className="social">
                        <div className="go soc-icon">
                            <FaGoogle />{" "}
                        </div>
                        <div className="fb soc-icon">
                            <IoLogoGithub />
                        </div>
                        <div className="in soc-icon">
                            <FaLinkedin />
                        </div>
                    </div>

                    <div className="sign">
                        Don't have an account? <span>Sign up</span>
                    </div>
                    {/* </form> */}
                </div>

                <div className="right-sec">
                    <img src="/bg-right.png" height={650} />
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
