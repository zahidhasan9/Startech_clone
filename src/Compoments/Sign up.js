import React from "react"
const SignUp = () => (
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
              <a href="https://www.startech.com.bd/account/register">Register</a>
            </li>
          </ul>
        </div>
      </section>
      
      <div className="container ac-layout before-login">
        <div className="panel m-auto">
          <div className="p-head">
            <h2 className="text-center">Register Account</h2>
          </div>
          <div className="p-body">
            <form
              action="https://www.startech.com.bd/account/register"
              method="post"
              id="form-register"
              encType="multipart/form-data"
            >
              <input
                type="hidden"
                id="input-token"
                name="token"
                defaultValue=""
              />
              <input type="hidden" name="step" defaultValue={1} />
              <div className="multiple-form-group">
                <div className="form-group required">
                  <label htmlFor="input-firstname">First Name</label>
                  <input
                    type="text"
                    name="firstname"
                    defaultValue=""
                    placeholder="First Name"
                    id="input-firstname"
                    className="form-control"
                  />
                </div>
                <div className="form-group required">
                  <label htmlFor="input-lastname">Last Name</label>
                  <input
                    type="text"
                    name="lastname"
                    defaultValue=""
                    placeholder="Last Name"
                    id="input-lastname"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group required">
                <label htmlFor="input-email">E-Mail</label>
                <input
                  type="email"
                  name="email"
                  defaultValue=""
                  placeholder="E-Mail"
                  id="input-email"
                  className="form-control"
                />
              </div>
              <div className="form-group required">
                <label htmlFor="input-telephone">Telephone</label>
                <input
                  type="tel"
                  name="telephone"
                  defaultValue=""
                  placeholder="Telephone"
                  id="input-telephone"
                  className="form-control"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary g-recaptcha"
                data-sitekey="6LdMc2UeAAAAAFdL7ez158dH-tnsTyYHOCiBYud4"
                data-callback="onSubmit"
                data-action="submit"
              >
                Continue
              </button>
              <p className="no-account-text">
                <span>Already have an account?</span>
              </p>
              <p>
                If you already have an account with us, please login at the{" "}
                <a href="https://www.startech.com.bd/account/login">login page</a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
      <div className="overlay" />
    </>
  )

  export default SignUp
  