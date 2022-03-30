import React, { useState } from "react";
import { Input, Label, Navbar } from "components";
import { useDocumentTitle } from "hooks";
import { BiEye, BiEyeSlash } from "assets";
import { Link } from "react-router-dom";
import styles from "./login.module.css";

export function Login() {
  useDocumentTitle("Login");
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    isRememberMe: true,
  });

  const [showPassWord, setShowPassword] = useState(false);

  return (
    <div className='container'>
      <Navbar />
      <main className={`${styles.loginMain} flex-column`}>
        <div className={`${styles.formContainer} card`}>
          <h2 className={styles.formHeading}>Login</h2>
          <form>
            <div className='form-set'>
              <Label labelFor='email' labelName='Email' />
              <Input
                type='email'
                id='email'
                name='email'
                placeholder='testsingh@gmail.com'
                value={userDetails.email}
                setUserDetails={setUserDetails}
                userDetails={userDetails}
              />
            </div>

            <div className='form-set'>
              <Label labelFor='password' labelName='Password' />
              <Input
                type={showPassWord ? `text` : `password`}
                id='password'
                name='password'
                placeholder='********'
                value={userDetails.password}
                setUserDetails={setUserDetails}
                userDetails={userDetails}
              />
              <span
                className={styles.togglePassword}
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassWord ? <BiEye /> : <BiEyeSlash />}
              </span>
            </div>

            <div className='form-check md-vt-1 flex-row'>
              <input
                type='checkbox'
                value={userDetails.isRememberMe}
                onChange={() =>
                  setUserDetails({
                    ...userDetails,
                    isRememberMe: !userDetails.isRememberMe,
                  })
                }
                id='remember-me'
              />
              <label
                className='form-label-inline text-sm text-primary'
                htmlFor='remember-me'
              >
                Remember Me
              </label>
              <Link
                className={`text-sm text-bold-500 ${styles.forgotPassword}`}
                to='forgot-pwd'
                role='button'
              >
                Forgot password?
              </Link>
            </div>

            <div className='flex-column '>
              <input
                type='submit'
                className={`btn btn-primary form-btn text-center`}
                value='Sign In'
              />
              <button className='btn btn-secondary form-btn text-center'>
                Guest Login
              </button>
              <p
                className={`text-sm text-center text-bold-500 text-primary ${styles.formLinkText}`}
              >
                New to shuttle shopy ?
              </p>
              <Link
                className={`btn btn-secondary text-center ${styles.btnCreateAccount}`}
                to='/sign-up'
                role='button'
              >
                Create Your Account
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
