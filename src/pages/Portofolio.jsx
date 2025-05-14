import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const projects = [
    {
      title: "R_Data_Cleaning_Visualization",
      desc: "Cleaning and visualizing uncleaned data using RStudio to ensure data quality.",
      tech: ["R"],
      type: "Public",
      link: "https://github.com/selvakumarsadurshan/R_Data_Cleaning_Visualization"
    },
    {
      title: "Skill_Sync_PAF_Project",
      desc: "Private educational app to sync skills and tasks using Firebase and JavaScript.",
      tech: ["JavaScript", "Firebase"],
      type: "Private",
      link: "https://github.com/selvakumarsadurshan/Skill_Sync_PAF_Project"
    },
    {
      title: "ETL-Process",
      desc: "This is a project that demonstrate the extraction transformation and loading the data to the warehouse and this includes deploying cubes and analyzing the data using Power-BI and Excell",
      tech: ["Power BI", "Excel"],
      type: "Public",
      link: "https://github.com/selvakumarsadurshan/ETL-Process"
    },
    {
      title: "User-Management",
      desc: "Complete user system: Signup, Signin, Reset with secure hashing and email.",
      tech: ["JavaScript", "Node.js"],
      type: "Public",
      link: "https://github.com/selvakumarsadurshan/User-Management"
    },
    {
      title: "Face_Recognition",
      desc: "OpenCV-based Python app that detects faces in images/videos using Haar Cascade.",
      tech: ["Python", "OpenCV"],
      type: "Public",
      link: "https://github.com/selvakumarsadurshan/Face_Recognition"
    },
    {
      title: "mobile-application",
      desc: "A modern Kotlin-based mobile app with optimized UI and interactions.",
      tech: ["Kotlin"],
      type: "Public",
      link: "https://github.com/selvakumarsadurshan/mobile-application"
    },
    {
      title: "Complain_Management",
      desc: "Feature-rich web app to track and manage user complaints efficiently.",
      tech: ["JavaScript", "HTML", "CSS"],
      type: "Public",
      link: "https://github.com/selvakumarsadurshan/Complain_Management"
    },
    {
      title: "bus-ticket",
      desc: "Java-based seat booking system using MVC architecture with full CRUD.",
      tech: ["Java"],
      type: "Public",
      link: "https://github.com/selvakumarsadurshan/bus-ticket"
    }
  ];

  return (
    <div className="font-sans text-white bg-black min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur shadow-sm px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">Sudarshan.</div>
        <ul className="flex space-x-6 font-medium text-sm">
          <li><a href="#home" className="hover:text-pink-400">Home</a></li>
          <li><a href="#about" className="hover:text-pink-400">About</a></li>
          <li><a href="#projects" className="hover:text-pink-400">Projects</a></li>
          <li><a href="#skills" className="hover:text-pink-400">Skills</a></li>
          <li><a href="#contact" className="hover:text-pink-400">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="h-screen flex items-center px-50 md:px-50 bg-cover bg-no-repeat bg-bottom"
        style={{
          backgroundImage: "url('/imp.jpg')",
          backgroundPosition: "center 35%",
        }}
      >
        <div className="z-10 max-w-xl" data-aos="fade-right">
          <h1 className="text-5xl md:text-6xl font-extrabold text-pink-300 mb-4">
            Hello<br />I'm Sudarshan
          </h1>
          <p className="text-gray-200 text-lg mb-6">
            I specialize in business growth, sales enablement & scalable cloud solutions.
          </p>
          <div className="flex gap-4 items-center">
            <a
              href="mailto:hello.alime@gmail.com"
              className="bg-pink-600 hover:bg-pink-500 px-5 py-2 rounded-full font-medium text-white"
            >
              Get A Quote
            </a>
            <a
              href="mailto:hello.alime@gmail.com"
              className="underline text-sm hover:text-pink-300"
            >
              hello.alime@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-black py-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-pink-300 mb-6" data-aos="fade-up">About Me</h2>
        <p className="text-gray-300 text-lg max-w-3xl" data-aos="fade-up">
          I’m an Account Executive with a deep interest in bridging technology and business. From sales dashboards to CRM integrations, I help businesses run smarter.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-900 py-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-pink-300 mb-8">Highlighted Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              className="bg-black border border-gray-700 p-6 rounded shadow hover:shadow-xl transition"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-white">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {project.title}
                  </a>
                </h3>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    project.type === "Public" ? "bg-green-600" : "bg-gray-600"
                  } text-white`}
                >
                  {project.type}
                </span>
              </div>
              <p className="text-gray-400 mb-3">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-pink-700 text-white px-2 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-semibold mb-6 text-teal-700">Skills</h2>
        <div className="flex flex-wrap gap-4 text-white">
          {['Account Management', 'CRM Tools', 'Business Development', 'Data Analysis', 'Cloud Solutions'].map((skill) => (
            <span key={skill} className="bg-teal-500 px-4 py-2 rounded">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 md:px-20 bg-gray-100 text-black">
        <h2 className="text-3xl font-semibold mb-6 text-teal-700">Contact</h2>
        <p className="mb-4">Feel free to reach out to collaborate or discuss opportunities!</p>
        <p className="mb-2"><i className="fas fa-envelope mr-2 text-teal-600"></i> yourmail@example.com</p>
        <p><i className="fas fa-phone mr-2 text-teal-600"></i> +94 71 234 5678</p>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-700 text-center py-6 text-gray-500 text-sm">
        &copy; 2025 Sudarshan Selvakumar. All rights reserved.
      </footer>
    </div>
  );
}
