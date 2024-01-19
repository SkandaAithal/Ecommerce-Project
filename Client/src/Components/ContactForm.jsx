import React from "react";

function ContactForm() {
  return (
    <div className="contact-form">
      <form
        className="contact-inputs"
        action="https://formspree.io/f/xqkvvpqz"
        method="POST"
      >
        <input
          type="text"
          placeholder="User Name"
          name="username"
          required
          autoComplete="off"
        />

        <input
          type="email"
          placeholder="Email"
          name="Email"
          autoComplete="off"
          required
        />

        <textarea
          autoComplete="off"
          name="Message"
          placeholder="Enter Your Message"
          required
          cols="30"
          rows="10"
        ></textarea>

        <input type="submit" value="send" />
      </form>
    </div>
  );
}

export default ContactForm;
