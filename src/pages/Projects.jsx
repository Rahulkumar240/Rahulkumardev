import React from "react";

const projects = [
  {
    title: "AI Resume Screening System",
    description:
      "Developed a machine learning model to rank resumes based on job descriptions using NLP techniques and cosine similarity.",
    tech: ["Python", "Scikit-learn", "NLP", "Pandas"],
    github: "https://github.com/yourgithub/resume-project",
    demo: "#",
  },
  {
    title: "Stock Price Prediction",
    description:
      "Built a time-series forecasting model using LSTM to predict stock price trends with data preprocessing and visualization.",
    tech: ["Python", "TensorFlow", "LSTM", "Matplotlib"],
    github: "https://github.com/yourgithub/stock-project",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Designed and developed a responsive personal portfolio website using React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/yourgithub/portfolio",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full px-6 pt-20 pb-12">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-4">
          Projects
        </h2>
        <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 rounded-full mb-6"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full border border-cyan-400/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm bg-cyan-500 hover:bg-cyan-400 text-black px-4 py-2 rounded-lg transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;