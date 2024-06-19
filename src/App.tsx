import { useState } from "react";
import reactLogo from "./assets/react.svg";
import gg from "./assets/gg.png";
import ap from "./assets/ap.png";
import Privacy from "./uicomponent/PrivacyPolicy";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Navbar from "./uicomponent/Navbar";
import { MainCarousel } from "./uicomponent/MainCarousel";

function Home() {
  return (
    <>
      <h1 className="text-4xl font-mono pt-5">
        Find Your Accomodation on Easy Rent
      </h1>
      <div className="flex justify-center items-center gap-4 my-2">
        <a
          href="https://apps.apple.com/gh/app/easy-rent-ghana-homes-more/id1658827141"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={ap} className="w-40" alt="" />
        </a>
        <img src={gg} className="w-40" alt="" />
      </div>
      <MainCarousel />
    </>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      {/* Navbar */}
      <div className="w-full h-screen ">
        <main className="flex justify-center items-center flex-col">
          <Routes>
            {/* <h1 className="text-3xl">Find Your Accomodation on Easy Rent</h1>
          <div className="flex justify-center items-center gap-4 my-2">
            <img src={ap} className="w-40" alt="" />
            <img src={gg} className="w-40" alt="" />
          </div>
          <MainCarousel /> */}

            <Route path="/privacy" element={<Privacy />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>

      {/* <Privacy /> */}
    </BrowserRouter>
  );
}

export default App;
