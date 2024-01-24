import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { useUserContext } from "../context/userscontext";

const NotificationPortal = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { notifyMessage, notifyColor } = useUserContext();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  return ReactDOM.createPortal(
    <Wrapper>
      <div
        className={`notification ${isVisible ? "visible" : "hidden"}`}
        style={{ backgroundColor: notifyColor }}
      >
        {notifyMessage}
      </div>
    </Wrapper>,
    document.getElementById("notification-portal-root")
  );
};

const Wrapper = styled.div`
  .notification {
    position: fixed;
    top: 20px;
    left: 50%;
    width: 90%;
    max-width: 400px;
    transform: translateX(-50%);
    color: #fff;
    padding: 16px;
    border-radius: 12px;
    opacity: 0;
    z-index: 102;
    font-size: 1.6rem;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background-color: #333; /* Background color for notification */
    animation: slideInDown 0.5s ease-in-out forwards;
    font-family: "Helvetica Neue", sans-serif; /* Font family similar to iOS */
  }

  .notification.visible {
    opacity: 1;
  }

  @keyframes slideInDown {
    0% {
      top: -100px;
      opacity: 0;
    }
    100% {
      top: 20px;
      opacity: 1;
    }
  }

  @keyframes slideOutUp {
    0% {
      top: 20px;
      opacity: 1;
    }
    100% {
      top: -100px;
      opacity: 0;
    }
  }

  .notification.hidden {
    animation: slideOutUp 0.5s ease-in-out forwards;
  }

  @media (max-width: 998px) {
    .notification {
      width: 80vw;
    }
  }

  @media (max-width: 768px) {
    .notification {
      width: 80vw;
    }
  }
`;

export default NotificationPortal;
