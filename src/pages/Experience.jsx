import React from "react";

const Experience = () => {
  const experiences = [
    {
      company: "Cognifyz Technologies",
      role: "Python Developer Intern",
      period: "Sep 2025 - Oct 2025",
      location: "Remote, India",
      highlights: [
        "Developed Python-based backend utilities and data pipelines for cleaning, transforming, and analyzing structured datasets",
        "Built modular, OOP-driven codebases improving maintainability and runtime efficiency",
        "Implemented data visualization dashboards using Pandas, NumPy, and Matplotlib",
        "Designed CLI tools for automation and file-system workflows",
        "Integrated REST APIs and managed version control using Git/GitHub"
      ],
    },
    {
      company: "CodeAlpha",
      role: "Machine Learning Intern",
      period: "Feb 2025 - Mar 2025",
      location: "Remote, India",
      highlights: [
        "Built and evaluated machine learning models using Python, Scikit-learn, and TensorFlow",
        "Performed data preprocessing, feature engineering, and model optimization",
        "Developed prediction systems and sentiment analysis models",
        "Applied model evaluation metrics and techniques to reduce overfitting",
        "Integrated ML logic into Python-based applications"
      ],
    },
    {
      company: "Future Finders Ltd",
      role: "Cybersecurity Intern",
      period: "Jul 2025 - Aug 2025",
      location: "Mohali, India (On-site)",
      highlights: [
        "Worked in Linux-based environments (Kali Linux, Ubuntu) for system-level operations",
        "Performed vulnerability testing on authentication mechanisms and backend systems",
        "Analyzed network traffic and system logs for potential security issues",
        "Explored secure backend design principles and common web vulnerabilities"
      ],
    }
  ];

  return (
    <section
      id="experience"
      className="mt-20 w-full max-w-6xl mx-auto px-6 md:px-12 py-8 bg-black text-white rounded-3xl"
    >
      <div className="mb-12">
        <h1 className="text-4xl font-bold">Experience</h1>
        <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 rounded-full"></div>
      </div>

      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition-all duration-300"
          >


            {/* Content */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <h3 className="text-xl font-semibold">
                  {exp.company}
                </h3>
                <span className="text-sm text-gray-400">
                  {exp.period}
                </span>
              </div>

              <p className="text-blue-400 font-medium mt-1">
                {exp.role}
              </p>

              <p className="text-gray-400 text-sm mt-1">
                {exp.location}
              </p>

              <ul className="mt-4 space-y-2 text-sm text-gray-300 list-disc list-inside">
                {exp.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;