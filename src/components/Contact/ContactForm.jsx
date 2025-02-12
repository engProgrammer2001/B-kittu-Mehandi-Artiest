import React, { useState } from "react";

const ContactForm = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Message Sending....");

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "33842416-bccc-402b-b9b7-645278634f9d");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const data = await response.json();
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Submission failed:", error);
      setResult("Failed to submit the form. Please try again.");
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto mt-12 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Contact Us
        </h2>
        <form onSubmit={onSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          {/* Number Field */}
          <div>
            <label
              htmlFor="number"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Your Number
            </label>
            <input
              type="number"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          {/* Email Field */}
          <div>
            <label
              htmlFor="date"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Your Booking Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              rows="4"
              required
            />
          </div>
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-[#ff9a32] text-white text-lg font-medium rounded-lg shadow-md hover:bg-[#ff9a32] transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
        <span className="text-green-500">{result}</span>
      </div>
    </div>
  );
};

export default ContactForm;
