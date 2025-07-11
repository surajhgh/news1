
// src/pages/About.jsx
import React, { useRef, lazy, Suspense } from "react";
import NavLinks from "./about/NavLinks";

const WhoWeAre = lazy(() => import("./about/WhoWeAre"));
const WhatWeDo = lazy(() => import("./about/WhatWeDo"));
const MeetOurTeam = lazy(() => import("./about/MeetOurTeam"));
const Testimonials = lazy(() => import("./about/Testimonials"));
const FeedbackForm = lazy(() => import("./about/FeedbackForm"));

const About = () => {
  const formRef = useRef();

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <NavLinks scrollToId={scrollToSection} />

      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <WhoWeAre />
        <WhatWeDo />
        <MeetOurTeam />
        <Testimonials />
        <FeedbackForm formRef={formRef} />
      </Suspense>
    </div>
  );
};

export default About;

