import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";
import "./index.css";

const profile = {
  name: "Citra Miranda Purnama Sari",
  role: "Full-Stack Web Developer & IoT Enthusiast",
  description:
    "4th semester Informatics Engineering student at Batam State Polytechnic, specializing in software development and Internet of Things (IoT).",
  about:
    "A passionate and detail-oriented Informatics Engineering student at Batam State Polytechnic with strong interest in technology, software development, and IoT. Experienced in building full-stack web applications using Laravel, React.js, and MySQL, as well as creating intuitive UI/UX designs with Figma. Skilled in IoT hardware development with ESP32, MQTT, and Arduino IDE, integrating real-time monitoring systems for smart solutions. Proficient in 3D design using SketchUp for system visualization, and experienced with tools like Visual Studio Code, GitHub, and Ms. Office. Committed to project-based learning and delivering impactful, user-centered digital solutions.",
  contact: {
    address: "Batam, Indonesia",
    phone: "(+62) 821-3375-9739",
    email: "citramirandaps@gmail.com",
    linkedin: "citra-miranda-ps",
    github: "citramps",
    gpa: "3.81 / 4.00"
  }
};

const projects = [
  {
    title: "HydroGami",
    subtitle: "Integration IoT & Gamification On Hydroponics Plants",
    description:
      "Engineered IoT hardware and real-time monitoring using ESP32, sensors, and MQTT protocol. Developed the web-based and backend system using Laravel to manage user interactions, missions, and leaderboard features. Contributed to UI/UX design for a gamified experience that encourages user engagement and learning.",
    tech: ["Laravel", "Figma", "SketchUp", "C++", "MQTT", "REST API"],
    images: ["/images/hydrogami.png", "/images/hydrogami2.png"]
  },
  {
    title: "Furnisale",
    subtitle: "E-Commerce Website for Furniture Sales",
    description:
      "Developed front-end and back-end with Laravel and Blade. Built product management, cart, and checkout systems with UI/UX design.",
    tech: ["Laravel", "Blade", "MySQL", "PHP", "Figma"],
    images: ["/images/furnisale3.jpg", "/images/furnisale4.jpg"]
  },
  {
    title: "Petopia",
    subtitle: "Web-Based Pet Shop Application",
    description:
      "Created responsive UI with HTML/CSS/PHP, and designed the flow and layout in Figma for a pet shop platform.",
    tech: ["HTML", "CSS", "PHP", "Figma", "Bootstrap", "Selenium", "Python"],
    images: ["/images/petopia.jpg", "/images/petopia2.png"]
  }
];

function Carousel({ images }) {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);
  const next = () => setCurrent((current + 1) % images.length);

  return (
    <div className="relative w-full h-52 overflow-hidden">
      <img
        src={images[current]}
        alt="project"
        className="w-full h-52 object-cover rounded-t-xl transition duration-500 ease-in-out"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md transition"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md transition"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-100 text-gray-800 font-sans scroll-smooth text-[16px] md:text-[18px]">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-indigo-700 font-bold text-xl tracking-wide">  Citra Miranda Purnama Sari</h1>
          <div className="flex gap-6 text-sm font-medium text-gray-700">
            {["about", "projects", "skills", "education", "contact"].map((item, idx) => (
              <a
                key={idx}
                href={`#${item}`}
                className="relative group hover:text-indigo-700 transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-700 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div className="pt-32 text-center px-6">
        <h1 className="text-5xl font-bold text-indigo-900 drop-shadow-sm mb-2">{profile.name}</h1>
        <p className="text-2xl text-indigo-700 font-medium mb-2">{profile.role}</p>
        <p className="text-base text-gray-700 max-w-2xl mx-auto mb-4">{profile.description}</p>
        <div className="flex justify-center gap-4">
          <a href={`mailto:${profile.contact.email}`} className="text-indigo-700 hover:text-indigo-900">
            <FaEnvelope size={24} />
          </a>
          <a href={`https://www.linkedin.com/in/${profile.contact.linkedin}`} target="_blank" rel="noreferrer" className="text-indigo-700 hover:text-indigo-900">
            <FaLinkedin size={24} />
          </a>
          <a href={`https://github.com/${profile.contact.github}`} target="_blank" rel="noreferrer" className="text-indigo-700 hover:text-indigo-900">
            <FaGithub size={24} />
          </a>
        </div>
      </div>

<section
  id="about"
  className="max-w-5xl mx-auto px-8 py-20 scroll-mt-10"
>
  {/* Judul dipindahkan ke sini */}
  <h2 className="text-2xl font-semibold mb-8 text-indigo-800">About Me</h2>

  <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-16 items-start">
    <div className="pr-4">
      <p className="text-sm text-gray-700 leading-relaxed text-justify">
        {profile.about}
      </p>
    </div>

    <div className="pl-4 space-y-4 text-sm text-gray-700">
      <p className="flex items-center gap-2">
        <FaMapMarkerAlt className="text-indigo-600" /> {profile.contact.address}
      </p>
      <p className="flex items-center gap-2">
        <FaPhoneAlt className="text-indigo-600" /> {profile.contact.phone}
      </p>
      <p className="flex items-center gap-2">
        <FaEnvelope className="text-indigo-600" /> {profile.contact.email}
      </p>
    </div>
  </div>
</section>


      <section id="projects" className="py-20 px-6 scroll-mt-10 bg-white">
        <h2 className="text-2xl font-semibold mb-10 text-indigo-800 text-center">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-xl overflow-hidden border border-indigo-100">
              <Carousel images={project.images} />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1 text-indigo-900">{project.title}</h3>
                <p className="text-sm text-indigo-600 mb-2">{project.subtitle}</p>
                <p className="text-sm text-gray-700 mb-3 text-justify">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full shadow">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="py-20 px-6 scroll-mt-10 text-center">
        <h2 className="text-2xl font-semibold mb-10 text-indigo-800">Technical Skills</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-sm text-left">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-700">Programming Languages</h3>
            <div className="flex flex-wrap gap-3">
              {["PHP (Laravel)", "JavaScript (React.js)", "Python", "C++", "MySQL"].map((skill, idx) => (
                <span key={idx} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full shadow">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-700">Tools & Design</h3>
            <div className="flex flex-wrap gap-3">
              {["Visual Studio Code", "Figma", "SketchUp", "Arduino IDE", "Ms. Office"].map((skill, idx) => (
                <span key={idx} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full shadow">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-700">IoT Development</h3>
            <div className="flex flex-wrap gap-3">
              {["ESP8266", "ESP32", "MQTT", "Arduino Uno", "Raspberry PI", "LoRa"].map((skill, idx) => (
                <span key={idx} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full shadow">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="pt-12 pb-8 px-6 scroll-mt-10 bg-white">
        <h2 className="text-2xl font-semibold text-center text-indigo-800 mb-10">Education</h2>
        <div className="text-center max-w-xl mx-auto text-base text-gray-700 leading-relaxed">
  <p><strong>Batam State Polytechnic</strong> — D3 Informatics Engineering (2023 - Present)</p>  
  <p className="mt-1">GPA: {profile.contact.gpa}</p>
  <p className="mt-2">
    Focused on hands-on learning through real-world projects involving web development, IoT systems, and user-centered digital solutions.
  </p>
</div>

      </section>

      <section id="contact" className="pt-8 pb-20 px-6 scroll-mt-10 bg-white text-center">
<h2 className="text-2xl font-semibold mb-2 text-indigo-800">Let's Connect</h2>
<div className="text-base text-gray-600 mb-6 max-w-lg mx-auto text-center leading-relaxed">
  <p>
    Whether it's a new collaboration, an exciting project, or just sharing ideas, I'm always happy to connect!
  </p>
</div>




  <div className="flex justify-center gap-4">
    <a
      href={`mailto:${profile.contact.email}`}
      className="bg-indigo-100 hover:bg-indigo-200 transition rounded-full shadow-md flex items-center justify-center w-12 h-12"
    >
      <FaEnvelope className="text-xl text-indigo-700" />
    </a>
    <a
      href={`https://www.linkedin.com/in/${profile.contact.linkedin}`}
      target="_blank"
      rel="noreferrer"
      className="bg-indigo-100 hover:bg-indigo-200 transition rounded-full shadow-md flex items-center justify-center w-12 h-12"
    >
      <FaLinkedin className="text-xl text-indigo-700" />
    </a>
    <a
      href={`https://github.com/${profile.contact.github}`}
      target="_blank"
      rel="noreferrer"
      className="bg-indigo-100 hover:bg-indigo-200 transition rounded-full shadow-md flex items-center justify-center w-12 h-12"
    >
      <FaGithub className="text-xl text-indigo-700" />
    </a>
  </div>
</section>


      <footer className="text-center py-6 text-xs text-gray-500">
        &copy; 2025 {profile.name}. Built with React & Tailwind CSS.
      </footer>
    </div>
  );
}