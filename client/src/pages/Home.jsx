import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import LeftHero from "../components/LeftHero";
import RightHero from "../components/RightHero";
import UploadCard from "../components/UploadCard";
import Dashboard from "../components/Dashboard";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";

function Home() {
  const [result, setResult] = useState(null);
  const dashboardRef = useRef(null);

  useEffect(() => {
    if (result && dashboardRef.current) {
      dashboardRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [result]);

  return (
    <div className="overflow-x-hidden bg-white">

      <Navbar />

      <section
        id="hero-section"
        className="pt-24 pb-14 px-9 lg:px-12 bg-white"
      >
        <div className="px-12 py-7 max-w-6xl mx-auto grid lg:grid-cols-2 gap-13 items-center">
          <LeftHero />
          <RightHero />
        </div>
      </section>

 
      <section id="upload-section" className="px-6 lg:px-12">
        <UploadCard setResult={setResult} />
      </section>

      <HowItWorks />

      {result && (
        <div ref={dashboardRef} className="mt-16 px-6 lg:px-12">
          <Dashboard result={result} />
        </div>
      )}

      <Footer />

    </div>
  );
}

export default Home;

