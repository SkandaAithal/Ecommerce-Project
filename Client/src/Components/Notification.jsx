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
    top: -100px;
    left: 50%;
    width: max-content;
    transform: translateX(-50%);
    color: #fff;
    padding: 2rem;
    border-radius: 5px;
    opacity: 0;
    z-index: 102;
    font-size: 2rem;
    text-align: center;
    animation: slideInDown 0.5s ease-in-out forwards;
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
      width: 80dvw;
    }
  }

  @media (max-width: 768px) {
    .notification {
      width: 80dvw;
    }
  }
`;
export default NotificationPortal;
