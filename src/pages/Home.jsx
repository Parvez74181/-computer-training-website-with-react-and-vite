import { useEffect, useState } from "react";
import CoursesForHomeSection from "../components/CoursesForHomeSection";
import HeroSection from "../components/HeroSection";
import SpecialServices from "../components/SpecialServices";

const Home = (props) => {
  const { updateProgress } = props;
  useEffect(() => {
    updateProgress(0);
    updateProgress(100);
    // document.title = "Futurisers.com";
  }, []);

  return (
    <>
      <main className="">
        <HeroSection />
        <SpecialServices />
        <CoursesForHomeSection />
      </main>
    </>
  );
};

export default Home;
