import React, { useState } from "react";
import NavBar from "./Componets/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlaceOrders/PlaceOrder";
import Footer from "./Componets/Footer/Footer";
import GoToTop from "./Componets/GoToTop/GoToTop";
import LoginPopup from "./Componets/LoginPopup/LoginPopup";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Verifyed from "./Pages/Verify/Verifyed";
import MyOrders from "./Pages/MyOrders/MyOrders";

const App = () => {
  const [showlogin, setShowlogin] = useState(false);

  return (
    <>
      {showlogin ? <LoginPopup setShowlogin={setShowlogin} /> : <></>}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
        bodyClassName="toastBody"
      />
      <div className="app">
        <NavBar setShowlogin={setShowlogin} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verifyed />} />
          <Route path="/myorders" element={<MyOrders />} />
        </Routes>
      </div>
      <GoToTop />
      <Footer />
    </>
  );
};

export default App;
