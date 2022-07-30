import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import AuthProvider from "./containers/AuthProvider";
import Footer from "./containers/Footer";
import Header from "./containers/Header";
import Error from "./pages/Error";
import Detail from "./pages/Detail";
import Favorite from "./pages/Favorite";
import Games from "./pages/Games";
import Home from "./pages/Home";
import SignupOrSignin from "./pages/SignupOrSignin";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./services/fireBase";

const App = () => {
  const [user, isLoading] = useAuthState(auth);
  let navigate = useNavigate();
  const handleNavigation = (address) => {
    navigate(address.toLowerCase());
  };

  if (!isLoading) {
    return (
      <div
        className="App"
        style={{
          backgroundColor: "#334155",
          height: "auto",
          paddingBottom: "5rem",
        }}
      >
        <header>
          <Header navHandler={handleNavigation} user={user} />
        </header>
        <main sx={{ backgroundColor: "#334155", overflow: "scroll" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/games"
              element={<Games handleNav={handleNavigation} />}
            />
            <Route
              path="/games/:id"
              element={
                <AuthProvider>
                  <Detail handleNav={handleNavigation} user={user?.email} />
                </AuthProvider>
              }
            />
            <Route
              path="/signin"
              element={<SignupOrSignin isSignUp={false} />}
            />
            <Route
              path="/signup"
              element={<SignupOrSignin isSignUp={true} />}
            />
            <Route
              path="/favorite"
              element={
                <AuthProvider>
                  <Favorite user={user?.email} navHandler={handleNavigation} />
                </AuthProvider>
              }
            />
            <Route path="/denied" element={<Error error="denied" />} />
            <Route element={<Error error="missing" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    );
  }
};

export default App;
