import "./App.css";
import rocks from "./assets/rocks.png";
import Page from "./Page.jsx";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Headers from "./Header.jsx";
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useGSAP(() => {
    gsap.to(".rocks", {
  y: -600,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});
  gsap.to(".black", {
  height: 600,
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});
  });

  return (
    <>
      <Headers />
      <div className="hero">
        <img src={rocks} className="rocks" alt="rocks" />
        <div className="hero-title">Aditya Raj Bhakta</div>
        <div className="hero-content">I build things for the web.</div>
        <div className="black"></div>
      </div>

      <AboutMe />
      <Page />
    </>
  );
}