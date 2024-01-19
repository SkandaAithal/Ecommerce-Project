import React, { useState } from "react";

import { useUserContext } from "../context/userscontext";
import styled from "styled-components";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import axios from "axios";
function Login({ setOpenOtp, fdata, setFdata }) {
  const { dispatchUser } = useUserContext();
  const LOGIN_URL = "http://localhost:4000/users/login";
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const verifyFormData = (name, value) => {
    if (name === "email") {
      if (!value) {
        return { email: "email is empty" };
      } else if (
        !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value
        )
      ) {
        return { email: "email is not in right format" };
      } else {
        return { email: "" };
      }
    } else if (name === "password") {
      if (!value) {
        return { password: "password is empty" };
      } else if (value.length < 8) {
        return { password: "password should more than 8 characters" };
      } else if (!/^[A-Za-z0-9\@!#$%&*^?]+$/.test(value)) {
        return { password: "password is not in right format" };
      } else {
        return { password: "" };
      }
    }
  };
  const getFormData = ({ target: { name, value } }) => {
    setFdata({ ...fdata, [name]: value });
    let returnedErrorObject = verifyFormData(name, value);
    setErrors({ ...errors, ...returnedErrorObject });
  };

  async function sendLoginData(e) {
    try {
      setIsLoading(true);
      e.preventDefault();
      if (
        Object.values(errors).every((emsg) => emsg === "") &&
        Object.values(fdata).every((data) => data !== "")
      ) {
        const { data } = await axios.post(LOGIN_URL, fdata);
        setIsLoading(false);
        dispatchUser({
          type: "SHOW_NOTIFICATION",
          payload: { message: data.message, color: "green" },
        });
        setOpenOtp(true);
      } else {
        for (const key in fdata) {
          if (fdata[key] === "") {
            setErrors((prev) => {
              return { ...prev, [key]: `${key} is empty` };
            });
          }
        }
        setIsLoading(false);
      }
    } catch (err) {
      setIsLoading(false);
      dispatchUser({
        type: "SHOW_NOTIFICATION",
        payload: {
          message: err.response.data.message,
          color: "red",
        },
      });
    }
  }
  return (
    <Wrapper>
      <div
        className="overlay"
        onClick={() => {
          dispatchUser({ type: "CLOSE_LOGIN" });
        }}
      ></div>
      <div className="login">
        <div className="login-close">
          <CgClose
            onClick={() => {
              dispatchUser({ type: "CLOSE_LOGIN" });
            }}
            className="login-close-icon"
          />
        </div>
        <div className="login-body">
          <h2>Login..</h2>

          <form onSubmit={sendLoginData}>
            <div className="login-body-inputs">
              <input
                type="email"
                id="email"
                onChange={getFormData}
                name="email"
                placeholder="Email"
              />
              {errors.email && <p>{errors.email}</p>}
            </div>
            <div className="login-body-inputs">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={getFormData}
              />
              {errors.password && <p>{errors.password}</p>}
            </div>
            {isLoading ? (
              <input type="submit" value={"Loading..."} disabled />
            ) : (
              <input type="submit" value={"Get OTP"} />
            )}
          </form>

          <Link to="/signup">
            <p
              className="login-body-end"
              onClick={() => {
                dispatchUser({ type: "CLOSE_LOGIN" });
              }}
            >
              Not Logged In? Create Your Account
            </p>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  p {
    color: red;
  }
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.253);
    z-index: 100;
  }
  .login {
    border-radius: 10px;
    background-color: #ffffff;
    width: 50dvw;
    height: 45rem;
    position: fixed;
    inset: 0;
    margin: auto;
    z-index: 101;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    &-close {
      display: flex;
      padding: 1.5rem 1.5rem 0;
      justify-content: end;

      &-icon {
        font-size: 3rem;
      }
    }

    &-body {
      text-align: center;
      max-width: 50rem;
      margin: auto;
      padding-inline: 2rem;
      &-inputs {
        display: flex;
        flex-direction: column;
        margin-top: 3rem;
      }

      &-end {
        color: #f52f2f;
        font-weight: bold;
        margin-block: 2rem;
      }
      input {
        border: 1px solid black !important;
      }
      input[type="submit"] {
        cursor: pointer;
        transition: all 0.2s;
        margin-top: 3rem;

        &:hover {
          background-color: ${({ theme }) => theme.colors.white};
          border: 1px solid ${({ theme }) => theme.colors.btn};
          color: ${({ theme }) => theme.colors.btn};
          transform: scale(0.9);
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .login {
      width: 80dvw;
    }
  }
`;
export default Login;
