import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
// import Navbar from "./components/Navbar";

function App() {
  const location = useLocation();

  useEffect(() => {
    const body = document.body;
    const url = location.pathname;

    const applyStyles = () => {
      if (url === "/") {
        body.style.backgroundImage = `url("/public/HomePage.jpg")`;
        body.style.overflow = "hidden";
      } else {
        body.style.backgroundColor = "black";
      }
    };

    const resetStyles = () => {
      body.style.backgroundImage = "";
      body.style.backgroundColor = "";
      body.style.overflow = "";
    };
    applyStyles();

    return () => {
      resetStyles();
    };
  }, [location]);

  return (
    <>
      <div className="menucomponents">
        <Header />
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
export default App;
