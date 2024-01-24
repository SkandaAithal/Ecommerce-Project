import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useUserContext } from "../context/userscontext";
import axios from "axios";
import { encrypt } from "../helpers/encryptdecrypt";
import { useSellerContext } from "../context/sellercontext";

function OTPverify({ otpLength, fdata, setOpenOtp }) {
  const { email, password } = fdata;
  const [isLoading, setIsLoading] = useState(false);
  const OTPVERIFY_URL = "http://localhost:4000/users/verifyotp";
  const LOGIN_URL = "http://localhost:4000/users/login";
  const [otpInput, setOtpInput] = useState(Array(otpLength).fill(""));
  const inputRef = useRef([]);
  const [otpTime, setOtpTime] = useState(60);
  const { dispatchUser } = useUserContext();
  const { dispatchSeller } = useSellerContext();
  const secretKey = process.env.REACT_APP_SECRET_KEY;

  // ! to get the value from input field
  const handleInputChange = (index, value) => {
    let newOtp = [...otpInput];
    newOtp[index] = value;
    setOtpInput(newOtp);
  };

  useEffect(() => {
    let interval = setInterval(() => {
      setOtpTime((prev) => prev - 1);
    }, 1000);
    if (otpTime <= 0) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [otpTime]);

  // ! to handle backspace and if value already exists then to change that value

  const handleKeyUp = (index, e) => {
    e.preventDefault();
    let newOtp = [...otpInput];

    if (e.key === "Backspace" && index > 0) {
      newOtp[index] = "";
      inputRef.current[index - 1].focus();
    } else if (e.key === "Backspace" && index === 0) {
      newOtp[index] = "";
      inputRef.current[index].focus();
    }

    if (e.key.replace(/[^0-9]/g, "") && index < otpInput.length - 1) {
      newOtp[index] = e.key.replace(/[^0-9]/g, "");
      inputRef.current[index + 1].focus();
    } else if (e.key.replace(/[^0-9]/g, "") && index < otpInput.length) {
      newOtp[index] = e.key.replace(/[^0-9]/g, "");
      inputRef.current[index].focus();
    }

    setOtpInput(newOtp);
  };

  // ! to paste the otp
  const handlePaste = (e) => {
    let pastedData = e.clipboardData.getData("text");
    pastedData = pastedData.slice(0, 6).replace(/[^0-9]/g, "");
    let otpArray = pastedData.split("");

    otpArray.forEach((digit, index) => {
      setOtpInput((prevOtp) => {
        const updatedOtp = [...prevOtp];
        updatedOtp[index] = digit;
        return updatedOtp;
      });
    });
  };

  //! otp submit

  async function otpSubmit(e) {
    try {
      e.preventDefault();
      setIsLoading(true);
      let otp = otpInput.join("");

      if (!otpTime) {
        dispatchUser({
          type: "SHOW_NOTIFICATION",
          payload: {
            message: "OTP is Expired. Click on Send New OTP",
            color: "red",
          },
        });
        setIsLoading(false);
      } else if (otp.length !== 6) {
        dispatchUser({
          type: "SHOW_NOTIFICATION",
          payload: { message: "OTP should have 6 numbers", color: "red" },
        });
        setIsLoading(false);
      } else {
        const { data } = await axios.post(OTPVERIFY_URL, { email, otp });
        localStorage.setItem("role", data.userData.role);
        const encrypteddata = encrypt(data.token, secretKey);
        localStorage.setItem("userToken", encrypteddata);

        setIsLoading(false);
        setOpenOtp(false);
        dispatchUser({
          type: "LOGIN_SUCCESSFULL",
          payload: {
            message: data.message,
            userData: data.userData,
          },
        });
        dispatchSeller({ type: "REFRESH" });
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

  const sendNewOtp = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(LOGIN_URL, { email, password });
      setOtpTime(60);
      setIsLoading(false);
      dispatchUser({
        type: "SHOW_NOTIFICATION",
        payload: { message: data.message, color: "green" },
      });
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
  };
  useEffect(() => {
    inputRef.current[0].focus();
  }, []);
  return (
    <Wrapper>
      <div
        className="overlay"
        onClick={() => {
          dispatchUser({ type: "CLOSE_LOGIN" });
        }}
      ></div>
      <div className="otp">
        <h2>OTP Verification</h2>
        <form className="otp-form" onSubmit={otpSubmit}>
          <div className="otp-form-wrapper">
            {otpInput.map((ele, index) => {
              return (
                <input
                  type="text"
                  value={otpInput[index]}
                  ref={(ref) => (inputRef.current[index] = ref)}
                  key={index}
                  className="otp-form-input"
                  maxLength={1}
                  onChange={(e) => {
                    handleInputChange(
                      index,
                      e.target.value.replace(/[^0-9]/g, "")
                    );
                  }}
                  onKeyUp={(e) => {
                    handleKeyUp(index, e);
                  }}
                  onPaste={(e) => {
                    handlePaste(e);
                  }}
                />
              );
            })}
          </div>
          <p className="otp-form-message">
            {otpTime ? (
              `OTP expires in ${otpTime}s`
            ) : (
              <>
                OTP Expired <span onClick={sendNewOtp}>Send New OTP</span>
              </>
            )}
          </p>
          {isLoading ? (
            <input type="submit" value={"Loading..."} disabled />
          ) : (
            <input type="submit" value={"Login"} />
          )}
        </form>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.253);
    z-index: 100;
  }
  .otp {
    border-radius: 10px;
    background-color: #ffffff;
    width: 40dvw;
    height: 35rem;
    position: fixed;
    inset: 0;
    gap: 3rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-block: 4.5rem;
    margin: auto;
    z-index: 101;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);

    &-form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;

      &-input {
        width: 5.5rem;
        padding: 2rem;
        border: 1px solid black;
        font-size: 2rem;
      }
      &-message {
        color: #9c0049;
        font-weight: bold;
        font-size: 1.75rem;

        span {
          text-decoration: underline;
          font-size: 2rem;
          color: #000000;
          cursor: pointer;
        }
      }
      &-wrapper {
        display: flex;
        gap: 1rem;
      }
    }
  }
  input[type="submit"] {
    cursor: pointer;
    transition: all 0.2s;
    margin: 0;
    &:hover {
      background-color: ${({ theme }) => theme.colors.white};
      border: 1px solid ${({ theme }) => theme.colors.btn};
      color: ${({ theme }) => theme.colors.btn};
      transform: scale(0.9);
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .otp {
      width: 90dvw;
    }
  }
  @media (max-width: 998px) and (min-width: 768px) {
    .otp {
      width: 70vw;
    }
  }
`;
export default OTPverify;
