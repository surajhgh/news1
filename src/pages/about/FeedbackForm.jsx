// src/pages/about/FeedbackForm.jsx
import React from "react";
import emailjs from "emailjs-com";

const FeedbackForm = ({ formRef }) => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "surajthapa", // replace with your EmailJS service ID
        "template_8012awl", // replace with your EmailJS template ID
        formRef.current,
        "7NyXxt-W1WUOfNOG3" // replace with your EmailJS public user key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          alert("Failed to send message. Try again later.");
          console.error(error);
        }
      );
  };

  return (
    <section id="feedback" className="bg-gray-50 py-16 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Audience Feedback
      </h2>
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="bg-white shadow-md rounded p-6 space-y-4"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full border p-2 rounded"
        />
        <textarea
          name="message"
          placeholder="Your Feedback"
          required
          className="w-full border p-2 rounded h-32"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Submit Feedback
        </button>
      </form>
    </section>
  );
};

export default FeedbackForm;
