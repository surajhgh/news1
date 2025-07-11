// src/pages/about/NavLinks.jsx
import React from "react";

const NavLinks = ({ scrollToId }) => {
  return (
    <nav className="bg-white shadow px-6 py-4 sticky top-0 z-10">
      <div className="flex flex-wrap gap-4 justify-center text-blue-700 font-semibold cursor-pointer">
        <span onClick={() => scrollToId("whoweare")}>Who We Are</span>
        <span onClick={() => scrollToId("whatwedo")}>What We Do</span>
        <span onClick={() => scrollToId("team")}>Meet Our Team</span>
        <span onClick={() => scrollToId("testimonials")}>Testimonials</span>
        <span onClick={() => scrollToId("feedback")}>Audience Feedback</span>
      </div>
    </nav>
  );
};

export default NavLinks;
