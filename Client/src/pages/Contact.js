import styled from "styled-components";
import RenderOnViewportEntry from "../helpers/RenderOnViewportEntry";
import { lazy } from "react";
const ContactForm = lazy(() => import("../Components/ContactForm"));
const Contact = () => {
  const Wrapper = styled.section`
    padding: 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input {
            border: 1px solid black !important;
          }
          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h1 className="common-heading">Feel free to Contact Us</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.775010601143!2d77.5332142554199!3d12.911336699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3faf5fb6b8af%3A0x9ae38b2cd3c2487c!2sReliance%20SMART%20Superstore!5e0!3m2!1sen!2sin!4v1700982491255!5m2!1sen!2sin"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <RenderOnViewportEntry threshold={1} style={{ minHeight: "0px" }}>
        <div className="container">
          <ContactForm />
        </div>
      </RenderOnViewportEntry>
    </Wrapper>
  );
};

export default Contact;
