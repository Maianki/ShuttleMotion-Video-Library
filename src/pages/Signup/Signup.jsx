import React, { useState } from "react";
import { Input, Label, Navbar } from "components";
import { useDocumentTitle } from "hooks";
import { BiEye, BiEyeSlash } from "assets";
import { Link } from "react-router-dom";
import { useAuth, useSnackbar } from "context";
import styles from "./signup.module.css";

export function Signup() {
  useDocumentTitle("Sign Up");

  const { addSnackbar } = useSnackbar();

  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { handleSignup } = useAuth();

  const [showPassWord, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const submitHandler = (e) => {
    e.preventDefault();

    if (userDetails.password !== userDetails.confirmPassword) {
      addSnackbar(
        "Password and confirm password doesn't match",
        "snackbar-danger"
      );
    } else {
      handleSignup(userDetails);
      setUserDetails({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };
  return (
    <div className='container'>
      <Navbar />
      <main className={`${styles.signupMain} flex-column`}>
        <div className={`${styles.formContainer} card`}>
          <h2 className={styles.formHeading}>Sign Up</h2>
          <form onSubmit={submitHandler}>
            <div className='form-set'>
              <Label labelFor='firstName' labelName='First Name' />
              <Input
                type='text'
                id='firstName'
                name='firstName'
                placeholder='John'
                value={userDetails.firstName}
                setUserDetails={setUserDetails}
                userDetails={userDetails}
              />
            </div>

            <div className='form-set'>
              <Label labelFor='lastName' labelName='Last Name' />
              <Input
                type='text'
                id='lastName'
                name='lastName'
                placeholder='Doe'
                value={userDetails.lastName}
                setUserDetails={setUserDetails}
                userDetails={userDetails}
              />
            </div>

            <div className='form-set'>
              <Label labelFor='email' labelName='Email' />
              <Input
                type='email'
                id='email'
                name='email'
                placeholder='johndoe@gmail.com'
                value={userDetails.email}
                setUserDetails={setUserDetails}
                userDetails={userDetails}
              />
            </div>

            <div className='form-set'>
              <Label labelFor='password' labelName='Password' />
              <Input
                type={showPassWord.password ? `text` : `password`}
                id='password'
                name='password'
                placeholder='Enter password'
                value={userDetails.password}
                setUserDetails={setUserDetails}
                userDetails={userDetails}
              />
              <span
                className={styles.togglePassword}
                onClick={() =>
                  setShowPassword({
                    ...showPassWord,
                    password: !showPassWord.password,
                  })
                }
              >
                {showPassWord.password ? <BiEye /> : <BiEyeSlash />}
              </span>
            </div>

            <div className='form-set'>
              <Label labelFor='confirm-password' labelName='Confirm Password' />
              <Input
                type={showPassWord.confirmPassword ? `text` : `password`}
                id='confirm-password'
                name='confirmPassword'
                placeholder='Enter pasword again'
                value={userDetails.confirmPassword}
                setUserDetails={setUserDetails}
                userDetails={userDetails}
              />
              <span
                className={styles.togglePassword}
                onClick={() =>
                  setShowPassword({
                    ...showPassWord,
                    confirmPassword: !showPassWord.confirmPassword,
                  })
                }
              >
                {showPassWord.confirmPassword ? <BiEye /> : <BiEyeSlash />}
              </span>
            </div>

            <div className='flex-column'>
              <button type='submit' className='btn btn-primary form-btn'>
                Sign up
              </button>
              <p
                className={`text-sm text-center text-bold-500  ${styles.formLinkText}`}
              >
                Existing user ?
                <Link className='text-primary text-sm' to='/login'>
                  Login Here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
