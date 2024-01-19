import React, { useState } from "react";

import styled from "styled-components";
import countryOptions from "../helpers/countryOptions";
import validation from "../helpers/validation";
import { useUserContext } from "../context/userscontext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const SIGNUP_URL = "http://localhost:4000/users/signup";
  const { dispatchUser } = useUserContext();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: "",
    dob: "",
    mobile: "",
    role: "customer",
    region: "",
    country: "",
    zipCode: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    let returnedErrorObject = validation(name, value);
    setErrors({ ...errors, ...returnedErrorObject });
  };

  const handleRoleChange = (role) => {
    setFormData((prevData) => ({
      ...prevData,
      role,
      organizationName: "",
    }));
  };

  const handleSubmit = async (e) => {
    try {
      setIsLoading(true);
      e.preventDefault();
      if (formData.role === "customer") {
        delete formData.organizationName;
        delete errors.organizationName;
      }

      if (
        Object.values(errors).every((emsg) => emsg === "") &&
        Object.values(formData).every((data) => data !== "")
      ) {
        if (formData.password !== formData.confirmPassword) {
          setIsLoading(false);
          dispatchUser({
            type: "SHOW_NOTIFICATION",
            payload: { message: "Password is not matching", color: "red" },
          });
        } else {
          let userData = { ...formData, password: formData.confirmPassword };
          delete userData.confirmPassword;

          const { data } = await axios.post(SIGNUP_URL, userData);

          setIsLoading(false);

          dispatchUser({
            type: "SHOW_NOTIFICATION",
            payload: {
              message: data.message,
              color: "green",
            },
          });
          dispatchUser({ type: "OPEN_LOGIN" });
          navigate("/");
          window.scrollTo(0, 0);
        }
      } else {
        for (const key in formData) {
          if (formData[key] === "") {
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
  };

  return (
    <Wrapper>
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
            {errors.name && <p>{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {errors.email && <p>{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
            {errors.password && <p>{errors.password}</p>}
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
          </div>

          <div>
            <label htmlFor="mobile">Mobile Number:</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter your mobile number"
            />
            {errors.mobile && <p>{errors.mobile}</p>}
          </div>

          <div>
            <label htmlFor="address">Address:</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="4"
              placeholder="Enter your address"
            />
            {errors.address && <p>{errors.address}</p>}
          </div>

          <div>
            <label htmlFor="country">Country:</label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Select your country"
              className="customSelect"
            >
              <option value="" disabled>
                Select your country
              </option>
              {countryOptions.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
            {errors.country && <p>{errors.country}</p>}
          </div>

          <div>
            <label htmlFor="region">Region:</label>
            <input
              type="text"
              id="region"
              name="region"
              value={formData.region}
              onChange={handleChange}
              placeholder="Enter your region"
            />
            {errors.region && <p>{errors.region}</p>}
          </div>

          <div>
            <label htmlFor="zipCode">Zip Code:</label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              placeholder="Enter your zip code"
            />
            {errors.zipCode && <p>{errors.zipCode}</p>}
          </div>

          <div>
            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              placeholder="Select your date of birth"
            />
            {errors.dob && <p>{errors.dob}</p>}
          </div>

          <div className="radio-container">
            <label className="radio-label" htmlFor="customer">
              Select Role:
            </label>
            <div className="radio-role">
              <label htmlFor="customer">Customer</label>
              <input
                type="radio"
                id="customer"
                name="role"
                value="customer"
                checked={formData.role === "customer"}
                onChange={() => handleRoleChange("customer")}
              />
              <div
                className={`custom-radio ${
                  formData.role === "customer" ? "checked" : ""
                }`}
                onClick={() => handleRoleChange("customer")}
              ></div>
            </div>
            <div className="radio-role">
              <label htmlFor="seller">Seller</label>
              <input
                type="radio"
                id="seller"
                name="role"
                value="seller"
                checked={formData.role === "seller"}
                onChange={() => handleRoleChange("seller")}
              />
              <div
                className={`custom-radio ${
                  formData.role === "seller" ? "checked" : ""
                }`}
                onClick={() => handleRoleChange("seller")}
              ></div>
            </div>
          </div>

          {formData?.role === "seller" && (
            <div>
              <label htmlFor="organizationName">Organization Name:</label>
              <input
                type="text"
                id="organizationName"
                name="organizationName"
                value={formData.organizationName}
                onChange={handleChange}
                placeholder="Enter your organization name"
              />
              {errors.organizationName && <p>{errors.organizationName}</p>}
            </div>
          )}

          {isLoading ? (
            <input type="submit" value={"Loading.."} disabled />
          ) : (
            <input type="submit" value={"Sign up"} />
          )}
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .signup-container {
    display: grid;
    gap: 3rem;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 60dvw;
    margin: 0 auto;
    padding: 20px;
  }
  p {
    color: #fe0f0f;
  }
  select {
    max-width: 50rem;
    color: ${({ theme }) => theme.colors.black};
    padding: 1.6rem 2.4rem;
    border: 1px solid black;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
  }
  option {
    font-size: 1.5rem;
  }

  .radio-container {
    display: flex;
    flex-direction: column;
  }
  .radio-role {
    display: flex;
    gap: 1rem;
  }

  .radio-label {
    font-weight: bold;
    margin-bottom: 5px;
  }

  input[type="radio"] {
    display: none;
  }

  .custom-radio {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid #007bff;
    border-radius: 50%;
    margin-right: 5px;
    cursor: pointer;
    background-color: #fff;
  }

  input[type="radio"]:checked + .custom-radio {
    background-color: #002e8a;
    border-color: #002e8a;
  }

  input[type="radio"] + .custom-radio::before {
    content: "";
    display: block;
    width: 11px;
    height: 12px;
    margin: 2.35px;
    border-color: #007bff;
    border-radius: 50%;
    background-color: #3a63b3;
    visibility: hidden;
  }

  input[type="radio"]:checked + .custom-radio::before {
    visibility: visible;
  }

  form {
    display: grid;
    grid-gap: 2rem;

    div {
      display: grid;
      gap: 1rem;
      text-align: start;
    }
  }

  label {
    font-size: 1.75rem;
    font-weight: bold;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }
  input,
  textarea {
    min-width: 35dvw;
    border: 1px solid black !important;
  }
  input[type="submit"] {
    cursor: pointer;
    transition: all 0.2s;

    min-width: fit-content;
    margin: 3rem auto;
    &:hover {
      background-color: ${({ theme }) => theme.colors.white};
      border: 1px solid ${({ theme }) => theme.colors.btn};
      color: ${({ theme }) => theme.colors.btn};
      transform: scale(0.9);
    }
  }

  textarea {
    resize: none;
  }

  @media (max-width: 998px) {
    .signup-container {
      width: 100dvw;
    }
    input,
    textarea {
      min-width: 60dvw;
    }
  }

  @media (max-width: 768px) {
    .signup-container {
      width: 100dvw;
    }
    input,
    textarea {
      min-width: 70dvw;
    }
  }
  @media (max-width: 400px) {
    .signup-container {
      width: 100dvw;
    }
    input,
    textarea {
      min-width: 90dvw;
    }
  }
`;
export default SignUp;
