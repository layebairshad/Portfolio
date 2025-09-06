import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Layeba Irshad
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                "Frontend Developer",
                "DevOps Enthusiast",
                "DSA Practitioner",
                "Full-Stack Web Developer",
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed text-justify">
            Final-year Computer Science student at Vellore Institute of
            Technology, driven by a passion for creating clean, scalable, and
            user-centric software solutions. Proficient in C++, Java, SQL, and
            modern web technologies including React.js and JavaScript.
            Enthusiastic problem-solver with strong DSA skills. Certified in IBM
            DevOps and MERN Full Stack Development. Successfully developed and
            deployed a live website for a real-world business.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1mWzIpTxbJXZPWJYlHuSgDr3KTZAd-_As/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            RESUME
          </a>
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className=" w-48 h-48 sm:w-64 sm:h-64 md:w-[20rem] md:h-[20rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={0}
            tiltMaxAngleY={0}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Layeba Irshad"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(160,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
