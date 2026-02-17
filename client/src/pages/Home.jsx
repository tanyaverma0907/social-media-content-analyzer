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
      dashboardRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [result]);

  return (
    <div className="overflow-x-hidden">

      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-40">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <LeftHero />
          <RightHero />
        </div>
      </section>

      <UploadCard setResult={setResult} />

      <HowItWorks />

      {result && (
        <div ref={dashboardRef} className="mt-20">
          <Dashboard result={result} />
        </div>
      )}

      <Footer />

    </div>
  );
}

export default Home;
