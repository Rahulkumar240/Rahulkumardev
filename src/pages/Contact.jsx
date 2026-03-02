import React, { useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(e.target);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      setStatus("SUCCESS");
      e.target.reset();
    } else {
      setStatus("ERROR");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full flex items-center justify-center px-6 py-24"
    >
      <div className="w-full max-w-2xl bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10 shadow-xl">

        <h2 className="text-3xl font-bold text-center mb-3">
          Let’s Connect
        </h2>

        <p className="text-gray-400 text-center mb-8">
          Open to internships, entry-level roles, and collaborations in
          Software Development & AI/ML.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* 🔑 Replace with your Web3Forms key */}
          <input
            type="hidden"
            name="access_key"
            value="079e37d8-38a3-47c5-ba3f-7c7304fd5466"
          />

          <input
            type="hidden"
            name="subject"
            value="New Message from Portfolio"
          />

          {/* Name */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Message *
            </label>
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Write your message here..."
              className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition resize-none"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-3 rounded-xl transition duration-300 shadow-md shadow-cyan-500/20 disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Status */}
          {status === "SUCCESS" && (
            <p className="text-green-400 text-center mt-4">
              ✅ Message sent successfully!
            </p>
          )}

          {status === "ERROR" && (
            <p className="text-red-400 text-center mt-4">
              ❌ Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;