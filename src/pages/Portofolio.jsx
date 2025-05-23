import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typewriter } from "react-simple-typewriter";

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
      link: "https://github.com/sadushan3/R_Data_Cleaning_Visualization",
    },
    {
      title: "Skill_Sync_PAF_Project",
      desc: "Private educational app to sync skills and tasks using Firebase and JavaScript.",
      tech: ["JavaScript", "Firebase"],
      type: "Private",
      link: "https://github.com/sadushan3/Skill_Sync_PAF_Project",
    },
    {
      title: "ETL-Process",
      desc: "ETL pipeline with cube deployment and analytics using Power-BI and Excel.",
      tech: ["Power BI", "Excel"],
      type: "Public",
      link: "https://github.com/sadushan3/ETL-Process",
    },
    {
      title: "User-Management",
      desc: "Login, Signup, Reset system with hashing and email integration.",
      tech: ["JavaScript", "Node.js"],
      type: "Public",
      link: "https://github.com/sadushan3/User-Management",
    },
    {
      title: "Face_Recognition",
      desc: "OpenCV-based face detection with Haar Cascade for real-time video streams.",
      tech: ["Python", "OpenCV"],
      type: "Public",
      link: "https://github.com/sadushan3/Face_Recognition",
    },
    {
      title: "mobile-application",
      desc: "Modern Kotlin-based mobile app with clean UI and optimized UX.",
      tech: ["Kotlin"],
      type: "Public",
      link: "https://github.com/sadushan3/mobile-application",
    },
    {
      title: "Complain_Management",
      desc: "Web app to handle and track customer/employee complaints efficiently.",
      tech: ["JavaScript", "HTML", "CSS"],
      type: "Public",
      link: "https://github.com/sadushan3/Complain_Management",
    },
    {
      title: "bus-ticket",
      desc: "Java-based seat booking system using MVC architecture and styled with CSS.",
      tech: ["Java"],
      type: "Public",
      link: "https://github.com/sadushan3/bus-ticket",
    },

    {
  title: "Coding_Hours_Regression_Model",
  desc: "Built a linear regression model in R to predict coding hours using behavioral and productivity metrics.",
  tech: ["R", "Statistics"],
  type: "Public",
  link: "https://github.com/sadushan3/Linear_model_evaluation_using_statistics.git",
},
  ];

  return (
    <div className="font-sans text-white bg-black min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur shadow-sm px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">Sadurshan.</div>
        <ul className="flex space-x-6 font-medium text-sm">
          {["home", "about", "experience", "projects", "skills", "contact"].map((id) => (
            <li key={id}>
              <a href={`#${id}`} className="hover:text-pink-400 capitalize">
                {id}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="h-screen flex items-center justify-start px-6 md:px-20 bg-cover bg-bottom relative"
        style={{
          backgroundImage: "url('/imp.jpg')",
          backgroundPosition: "center 39%",
        }}
      >
        <div className="bg-black/60 backdrop-blur-md p-8 rounded-lg max-w-xl" data-aos="fade-right">
          <h1 className="text-5xl md:text-6xl font-bold text-pink-400 mb-4 leading-tight">
            Hello <br />I'm Sadurshan
          </h1>
          <p className="text-gray-200 text-lg mb-6">
            I specialize in{" "}
            <span className="text-yellow-300 font-semibold">
              <Typewriter
                words={["Data Science", "Data Analytics", "Machine Learning", "Web Development"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </p>
          <div className="flex gap-4 items-center">
            <a
              href="/Selvakumarr Sadurshan CV.pdf"
              download
              className="bg-pink-600 hover:bg-pink-500 px-5 py-2 rounded-full font-medium text-white transition"
            >
              📄 Download Resume
            </a>
            <a href="mailto:sadushansadu33@gmail.com" className="underline text-sm text-white hover:text-pink-200">
              sadushansadu33@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-black py-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-pink-300 mb-6" data-aos="fade-up">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 🎓 Background */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md" data-aos="fade-up">
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">🎓 Background</h3>
            <p className="text-gray-300">
              I am Selvakumar Sadurshan, currently pursuing a degree in Data Science at SLIIT. My academic journey has equipped me with a strong foundation in data analysis, machine learning, and software development.
            </p>
          </div>
          {/* 💡 Personality */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md" data-aos="fade-up">
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">💡 Personality</h3>
            <p className="text-gray-300">
              I thrive on challenges and am always eager to learn. My adaptability and problem-solving skills enable me to navigate complex situations with confidence and creativity.
            </p>
          </div>
          {/* ⚙️ Passion for Tech */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md" data-aos="fade-up">
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">⚙️ Passion for Tech</h3>
            <p className="text-gray-300">
              Technology fascinates me. From building web applications to exploring data-driven solutions, I am passionate about leveraging technology to create meaningful impacts.
            </p>
          </div>
          {/* 🚀 Career Aspirations */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md" data-aos="fade-up">
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">🚀 Career Aspirations</h3>
            <p className="text-gray-300">
              I aspire to become a leading data scientist, contributing to innovative projects that solve real-world problems. My goal is to continuously grow and make a positive difference in the tech industry.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 md:px-20 bg-gradient-to-b from-black to-gray-900 text-white">
  <h2 className="text-3xl font-bold text-pink-300 mb-12 text-center" data-aos="fade-up">Work Experience</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Experience Card */}
    {[
      {
        title: "Course Consultant Officer",
        company: "eClub Higher Educational Institute",
        type: "Full-time · On-site",
        date: "Apr 2021 – Jan 2025",
        location: "Panadura, Sri Lanka",
        desc: "Guided students with academic counseling and career advice. Played a key role in enrollment and student support.",
      },
      {
        title: "Information Technology Tutor",
        company: "Leagelights",
        type: "Part-time · Remote",
        date: "Jan 2024 – Nov 2024",
        location: "Online",
        desc: "Delivered IT tutoring sessions in Intelligent Tutoring Systems and programming. Assisted with live technical doubt clearing.",
      },
      {
        title: "Student Counsellor",
        company: "Primeleed",
        type: "Full-time · On-site",
        date: "Jun 2022 – Oct 2022",
        location: "Wellawatta, Colombo",
        desc: "Provided face-to-face course guidance and counseling to walk-in students. Handled intake & admissions flow.",
      }
    ].map((exp, i) => (
      <div
        key={i}
        data-aos="fade-up"
        className="bg-black border border-pink-500/30 hover:border-pink-500 transition shadow-md hover:shadow-xl rounded-lg p-6"
      >
        <h3 className="text-xl font-semibold text-pink-400 mb-1">{exp.title}</h3>
        <p className="text-sm text-gray-300 mb-1">{exp.company}</p>
        <div className="text-xs flex items-center justify-between text-gray-400 mb-2">
          <span className="bg-pink-700/20 text-pink-300 px-2 py-1 rounded-full">{exp.type}</span>
          <span className="bg-pink-700/20 text-pink-300 px-2 py-1 rounded-full">{exp.date}</span>
        </div>
        <p className="text-sm text-gray-300 italic">{exp.location}</p>
        <p className="text-gray-200 mt-3 text-sm">{exp.desc}</p>
      </div>
    ))}
  </div>
</section>


      {/* Projects Section */}
      <section id="projects" className="bg-gray-900 py-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-pink-300 mb-8">Highlighted Projects ( Click And View The Project In Git-Hub )</h2>
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
                <span className={`text-xs px-2 py-1 rounded-full ${project.type === "Public" ? "bg-green-600" : "bg-gray-600"} text-white`}>
                  {project.type}
                </span>
              </div>
              <p className="text-gray-400 mb-3">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs bg-pink-700 text-white px-2 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 md:px-20 bg-gray-900 text-white">
        <h2 className="text-3xl font-bold text-pink-300 mb-8" data-aos="fade-up">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10" data-aos="fade-up">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-300">🧠 Technical & Academic Skills</h3>
            <div className="flex flex-wrap gap-3">
              {[
                'Microsoft Excel', 'Power BI', 'SQL Server Integration Services (SSIS)',
                'Data Warehousing', 'ETL', 'MySQL', 'PL/SQL', 'Oracle DB', 'DBMS',
                'C', 'C++', 'R', 'Statistics', 'Python','Java','Java-Script', 'Spring-Boot'
              ].map(skill => (
                <span key={skill} className="bg-pink-600 px-3 py-1 rounded-full text-sm">{skill}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-300">💻 Development & Tools</h3>
            <div className="flex flex-wrap gap-3">
              {[
                'React.js', 'Tailwind CSS', 'MongoDB', 'MERN Stack',
                'Kotlin', 'Android Studio', 'Firebase', 'VS Code', 'Kubernetes','Intellij'
              ].map(skill => (
                <span key={skill} className="bg-teal-600 px-3 py-1 rounded-full text-sm">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 md:px-20 bg-black text-white">
        <h2 className="text-3xl font-bold text-pink-300 mb-6">Contact</h2>
        <p className="mb-6 max-w-2xl">I'm always excited to connect — whether it's about a project, job, or collaboration!</p>
        <div className="space-y-3 text-lg">
          <p>📧 <a href="mailto:sadushansadu33@gmail.com" className="underline hover:text-pink-400">sadushansadu33@gmail.com</a></p>
          <p>📱 <a href="tel:+94767803584" className="hover:text-pink-400">+94 76 780 3584</a></p>
          <p>🔗 <a href="https://www.linkedin.com/in/selvakumar-sadurshan-9a9524238/" target="_blank" rel="noopener noreferrer" className="underline hover:text-pink-400">LinkedIn</a></p>
          <p>💻 <a href="https://github.com/sadushan3" target="_blank" rel="noopener noreferrer" className="underline hover:text-pink-400">GitHub</a></p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-700 text-center py-6 text-gray-500 text-sm">
        &copy; 2025 Sadurshan Selvakumar. All rights reserved.
      </footer>
    </div>
  );
}
