import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import styles from "../styles/auth/auth.module.css";
import httpService from "../services/httpClientService";
import authUrls from "../constants/auth.js";
import staticValues from "../constants/staticValues.js";
import toasterService from "../services/ToastrComponent.js";
import { useNavigate } from "react-router-dom";
import ResponseStatus from "../constants/responseStatus.js";
import { newLineToaster } from "../extensions/stringExtensions.js";

const AuthPage = ({ setLoading }) => {
  // tıklama olayının state'ini tut
  const [isSignUp, setIsSignUp] = useState(true);
  const navigate = useNavigate();

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
        if (resp.data.responseStatus === ResponseStatus.SUCCESS) {
          toasterService.success(resp.data.message);
        } else if (resp.data.responseStatus === ResponseStatus.INFO) {
          toasterService.info(resp.data.message);
        } else {
          const errorMessages = resp.data.errors.map((element) => `${element}`);
          // Her bir hatayı '-' işareti ile başlayarak yeni satıra yazdır
          const errorMessageString = errorMessages.join("\n");
          toasterService.error(newLineToaster(errorMessageString));
        }
      })
      .catch((err) => {
        toasterService.error(
          err,
          undefined,
          undefined,
          "red",
          undefined,
          undefined
        );
      });
  };

  // giriş yapılırken formun gönderilme olayını izler
  const loginSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const loginData = Object.fromEntries(formData.entries());

    // istek çıkmadan loaderı göster
    setLoading(true);

    await httpService
      .post(authUrls.LOGIN_URL, loginData, staticValues.X_TUNNEL_HEADER)
      .then((resp) => {
        console.log(resp);
        if (resp.data.responseStatus === ResponseStatus.SUCCESS) {
          localStorage.setItem("access_token", resp.data.data.accessToken);
          navigate("/home");
          toasterService.success(resp.data.message);
        } else if (resp.data.responseStatus === ResponseStatus.INFO) {
          toasterService.info(resp.data.message);
        } else {
          toasterService.error(resp.data.message);
        }
      })
      .catch((err) => {
        toasterService.error(newLineToaster(err.message));
        console.log(err);
      });
      
    // istekler sona erince loaderı kapat
    setLoading(false);
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

              <a href="#" style={{ color: "#fff", fontSize: "16px" }}>
                Forget your Password?
              </a>

              <button type="submit">Sign In</button>
            </form>
          </div>
          <div className={styles.overlay_container}>
            <div className={styles.overlay}>
              <div className={styles["overlay-left"]}>
                <button id={styles.signIn} onClick={handleSignInClick}>
                  Sign In
                </button>
              </div>
              <div className={styles["overlay-right"]}>
                <button id={styles.signUp} onClick={handleSignUpClick}>
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
