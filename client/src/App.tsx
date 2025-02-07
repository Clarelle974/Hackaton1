import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";

import "./App.css";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const body = document.body;
    if (isHomePage) {
      body.style.backgroundImage = "url('/HomePage.jpg')";
      body.style.backgroundColor = "transparent";
      body.style.overflow = "hidden";
      body.style.backgroundSize = "cover";
    } else {
      body.style.backgroundImage = "";
      body.style.backgroundColor = "#1a1919";
      body.style.overflow = "auto";
    }
  }, [isHomePage]);

  return (
    <>
      {isHomePage ? (
        <Homepage />
      ) : (
        <div className="menucomponents">
          <Header />
          <Navbar />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
