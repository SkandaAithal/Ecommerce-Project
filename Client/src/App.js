import React, { Suspense, lazy, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";
import { useUserContext } from "./context/userscontext";
import NotificationPortal from "./Components/Notification";
import ConfirmModal from "./Components/ConfirmModal";
const SellerProducts = lazy(() => import("./Components/SellerProducts"));
const UserVerification = lazy(() => import("./Components/UserVerification"));
const AddProduct = lazy(() => import("./Components/AddProduct"));
const SignUp = lazy(() => import("./pages/SignUp"));
const UpdateProduct = lazy(() => import("./Components/UpdateProduct"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Products = lazy(() => import("./pages/Products"));
const Contact = lazy(() => import("./pages/Contact"));
const SingleProduct = lazy(() => import("./pages/SingleProduct"));
const Cart = lazy(() => import("./pages/Cart"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

const App = () => {
  const [isloading, setIsLoading] = useState(true);
  const { openLogin, isNotify, openConfirm, productData } = useUserContext();

  let perloader = document.getElementById("preloader");
  if (perloader) {
    setTimeout(() => {
      perloader.style.display = "none";
      setIsLoading(false);
    }, 3000);
  }

  const encryptedtoken = localStorage.getItem("userToken");
  if (!encryptedtoken) {
    localStorage.setItem("isLoggedIn", JSON.stringify(false));
  } else {
    localStorage.setItem("isLoggedIn", JSON.stringify(true));
  }
  let isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
  let userRole = localStorage.getItem("role");
  if (!userRole) {
    userRole = "customer";
  }

  const theme = {
    colors: {
      bg: "#e5d7f0",
      cart: "#8854e7",
      text: "#714794c1",
      text1: " #481b6dc1",
      border: "rgba(98,84,243.0.5)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      hr: "#fff",
      white: "#fff",
      black: "#000",
      gradient:
        "linear-gradient(0deg,rgb(132 144 255) 0%,rgb(98 189 252) 100%)",
      shadow:
        "rgba(0,0,0,0.02) 0px 1px 3px 0px,rgba(27,31,35,0.15) 0px 0px 0px 1px;",
      shadowSupport: "rgba(0,0,0,0.2) 0px 1px 5px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };
  return (
    !isloading && (
      <div>
        <ThemeProvider theme={theme}>
          <Router>
            <GlobalStyle />

            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Header userRole={userRole} isLoggedIn={isLoggedIn} />
                    <Suspense fallback={<Loader />}>
                      {isNotify && <NotificationPortal />}
                      {openLogin && <UserVerification />}
                      {openConfirm && (
                        <ConfirmModal
                          id={productData.id}
                          name={productData.name}
                        />
                      )}

                      <Outlet />
                    </Suspense>

                    <Footer />
                  </>
                }
              >
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/singleproduct/:id" element={<SingleProduct />} />
                <Route path="/signup" element={<SignUp />} />
                {userRole === "customer" ? (
                  <>
                    <Route path="/cart" element={<Cart />} />
                  </>
                ) : (
                  <>
                    <Route path="/addproduct" element={<AddProduct />} />
                    <Route
                      path="/sellerproducts"
                      element={<SellerProducts />}
                    />
                    <Route
                      path="/updateproduct/:id"
                      element={<UpdateProduct />}
                    />
                  </>
                )}
                <Route path="*" element={<ErrorPage />} />
              </Route>
            </Routes>
          </Router>
        </ThemeProvider>
      </div>
    )
  );
};

export default App;
