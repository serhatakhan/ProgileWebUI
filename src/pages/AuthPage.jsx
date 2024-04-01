const AuthPage = () => {
  return (
    <div className="auth-sec">
      <div className="left-sec">
        <form>
          <h3>Log in</h3>

          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Email or Phone" id="username" />

          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" id="password" />

          <button type="submit">Log In</button>

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
            <div className="go">Google logo koy</div>
            <div className="fb">Github logo koy</div>
            <div className="in">Linkedın logo koy</div>
          </div>

          <div className="sign">
            Don't have an account? <span>Sign up</span>
          </div>
        </form>
      </div>

      <div className="right-sec">
        <img src="/bg-right.png" height={650} />
      </div>
    </div>
  );
};

export default AuthPage;
