import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({});
  const [status, setStatus] = useState(""); // to show response

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({}); // clear form
      } else {
        setStatus("❌ Error: " + data.error || "Something went wrong.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setStatus("❌ Network error or server not running.");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name || ""}
          required
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email || ""}
          required
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message || ""}
          required
          onChange={handleChange}
          className="w-full p-2 border rounded h-32"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Send
        </button>
      </form>

      {status && (
        <p className="mt-4 text-center text-sm text-green-600 dark:text-green-400">
          {status}
        </p>
      )}
    </div>
  );
};

export default ContactForm;
