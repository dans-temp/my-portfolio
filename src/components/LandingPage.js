// LandingPage.js
import React from "react";
import Header from "./Header.js";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <section className="hero-section">
        <div className="gradient-overlay"></div>
        <img src="/assets/profile2-cropped.png" alt="Daniel Goresht" className="profile-image" />
        <div className="content">
          <h1>Daniel Goresht</h1>
          <p>Software Developer</p>
          <p><img src="/assets/location-pin-icon.svg" alt="Location Pin" className="location-icon" /> Calgary, Alberta</p>
        </div>
      </section>
      <Header />
      <div className="about-section">
        <h2>Front-End Focused, Full-Stack Adept</h2>
        <p>
          Hi, I'm Dan.  I've been building digital products since 2015. Over the years, I've dabbled in various aspects of bringing ideas to life, from brainstorming strategies to diving into UX research, tinkering with databases, and diving deep into the development process.
        </p>
        <p>
          These days, my focus is mainly on web development. I enjoy leveraging my product background to cook up software that's not just functional, but also a joy to interact with.
        </p>
        <p>
          Beyond the professional realm, making cool things is more than just a job to me; it's a full-blown passion and a favorite pastime.
        </p>
      </div>

      <section className="skills-section">
        <div className="container">
          <h2>Some things I'm good at</h2>
          <div className="skills">
            <div className="column">
              <ul className="skills-list">
                <li>JavaScript/TypeScript</li>
                <li>React</li>
                <li>Node</li>
                <li>HTML/CSS</li>
              </ul>
            </div>
            <div className="column">
              <ul className="skills-list">
                <li>UI/UX Design</li>
                <li>AWS</li>
                <li>SQL/Mongo</li>
                <li>...and more!</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      <div className="about-section">
        <h2>My Story</h2>
        <p>
          Ever since I was a kid, I've been drawn to computers. Whether I was lost in a good video game, dabbling in digital art, or just figuring out the ins and outs of Windows, you could always find me glued to a screen. High school was where I dipped my toes into the programming pond, trying my hand at C. I'll admit, I wasn't exactly a coding prodigy back then, but hey, at least I knew where I wanted to go next: straight to university for computer science
        </p>
        <p>
          High school was where I dipped my toes into the programming pond. I'll admit, I wasn't exactly a coding prodigy back then, but hey, at least I knew where I wanted to go next: straight to university for computer science.
        </p>
        <p>
          Fast forward through a whirlwind of internships in the oil and gas industry during my college years, and I found myself working freelance for a short period before I landed my first job at a start up.  While growing my skills I have been lucky enough to work for startups, helping build them from the ground up.
        </p>
        <p>
          And that's my story that's still being written... one line of csode at a time.
        </p>
        <p>
          For a more traditional history of my work experience check out my <a href="https://www.linkedin.com/in/daniel-goresht-91618a101/details/experience/">Linkedin Page.</a>
        </p>
      </div>

    </div>
  );
};

export default LandingPage;
