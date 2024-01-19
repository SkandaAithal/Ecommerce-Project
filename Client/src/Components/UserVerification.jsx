import React, { useState } from "react";
import ReactDom from "react-dom";
import Login from "./Login";
import OTPverify from "./OTPverify";
function UserVerification() {
  const [openOtp, setOpenOtp] = useState(false);
  const [fdata, setFdata] = useState({ email: "", password: "" });
  return ReactDom.createPortal(
    <>
      {openOtp ? (
        <OTPverify otpLength={6} fdata={fdata} setOpenOtp={setOpenOtp} />
      ) : (
        <Login setFdata={setFdata} fdata={fdata} setOpenOtp={setOpenOtp} />
      )}
    </>,
    document.getElementById("user-validation")
  );
}

export default UserVerification;
