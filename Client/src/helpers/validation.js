function validation(name, value) {
  if (name === "name") {
    if (!value) {
      return { name: "Name is empty" };
    } else if (!/^[A-Za-z\s]+$/g.test(value)) {
      return { name: "Name should contain only alphabets" };
    } else {
      return { name: "" };
    }
  } else if (name === "email") {
    if (!value) {
      return { email: "Email is empty" };
    } else if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        value
      )
    ) {
      return { email: "Email is not in the right format" };
    } else {
      return { email: "" };
    }
  } else if (name === "password") {
    if (!value) {
      return { password: "Password is empty" };
    } else if (value.length < 8) {
      return { password: "Password should be more than 8 characters" };
    } else if (!/^[A-Za-z0-9\@!#$%&*^?]+$/.test(value)) {
      return { password: "Password is not in the right format" };
    } else {
      return { password: "" };
    }
  } else if (name === "confirmPassword") {
    if (!value) {
      return { confirmPassword: "Confirm Password is empty" };
    } else if (value.length < 8) {
      return {
        confirmPassword: "Confirm Password should be more than 8 characters",
      };
    } else if (!/^[A-Za-z0-9\@!#$%&*^?]+$/.test(value)) {
      return {
        confirmPassword: "Confirm Password is not in the right format",
      };
    } else {
      return { confirmPassword: "" };
    }
  } else if (name === "mobile") {
    if (!value) {
      return { mobile: "Mobile is empty" };
    } else if (!/^[6-9][0-9]{9}$/.test(value)) {
      return { mobile: "Mobile should contain only 10 numbers" };
    } else {
      return { mobile: "" };
    }
  } else if (name === "address") {
    if (!value) {
      return { address: "Address is empty" };
    } else {
      return { address: "" };
    }
  } else if (name === "country") {
    if (!value) {
      return { country: "Country is empty" };
    } else {
      return { country: "" };
    }
  } else if (name === "region") {
    if (!value) {
      return { region: "Region is empty" };
    } else {
      return { region: "" };
    }
  } else if (name === "zipCode") {
    if (!value) {
      return { zipCode: "ZIP Code is empty" };
    } else if (!/^\d{6}$/.test(value)) {
      return { zipCode: "ZIP Code is not in the right format" };
    } else {
      return { zipCode: "" };
    }
  } else if (name === "dob") {
    if (!value) {
      return { dob: "Date of Birth is empty" };
    } else {
      return { dob: "" };
    }
  } else if (name === "organizationName") {
    if (!value) {
      return { organizationName: "Organization Name is empty" };
    } else {
      return { organizationName: "" };
    }
  }
}

export default validation;
