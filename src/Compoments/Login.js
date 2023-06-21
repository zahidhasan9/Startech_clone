import React from "react";

const Login = () => (
    <>
      <section className="after-header p-tb-10">
        <div className="container">
          <ul className="breadcrumb">
            <li>
              <a href="https://www.startech.com.bd/">
                <i className="material-icons" title="Home">
                  home
                </i>
              </a>
            </li>
            <li>
              <a href="https://www.startech.com.bd/account/account">Account</a>
            </li>
            <li>
              <a href="https://www.startech.com.bd/account/login">Login</a>
            </li>
          </ul>
        </div>
      </section>
      <div className="container ac-layout before-login">
        <div className="panel m-auto">
          <div className="p-head">
            {" "}
            <h2 className="text-center">Account Login</h2>
          </div>
          <div className="p-body">
            <form
              action="https://www.startech.com.bd/account/login"
              method="post"
              encType="multipart/form-data"
            >
              <div className="form-group">
                <label className="control-label" htmlFor="input-username">
                  Phone / E-Mail
                </label>
                <input
                  type="text"
                  name="username"
                  defaultValue=""
                  placeholder="Phone / E-Mail"
                  id="input-username"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label className="control-label" htmlFor="input-password">
                  Password
                </label>
                <a
                  className="forgot-password"
                  href="https://www.startech.com.bd/account/forgotten"
                >
                  Forgotten Password?
                </a>
                <input
                  type="password"
                  name="password"
                  defaultValue=""
                  placeholder="Password"
                  id="input-password"
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
            <p className="no-account-text">
              <span>Don't have an account?</span>
            </p>
            <a
              className="btn st-outline"
              href="https://www.startech.com.bd/account/register/init"
            >
              Create Your Account
            </a>
          </div>
        </div>
      </div>
    </>
  )
  export default Login
  