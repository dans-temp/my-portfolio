// ProjectsPage.js
import React from "react";
import "./ProjectsPage.css";
import Header from "./Header.js";

const projectsData = [
  {
    id: 1,
    title: "Campfire Stick",
    image: "/assets/campfire-stick.png",
    description: "A webapp made using React for the front end and Firebase for the backend.  This website attempts to have people gather together anonymously to tell a story.  Users are not allowed to delete their messages after they submit, so becareful before submission.",
    link: "https://dans-temp.github.io/campfire-stick/#/home"
  },
  {
    id: 2,
    title: "Don't Shoot Yourself",
    image: "/assets/dont-shoot.png",
    description: "My game submission for Ludum Dare 51.  Built in 72 hours using the Phaser3 libary with JavaScript.  The theme was 'Every 10 seconds'.  Even though there were thousands of games entered into the contest, I was able to get first place in one of the categories.",
    link: "https://ldjam.com/events/ludum-dare/51/dont-shoot-yourself"
  },
  {
    id: 2,
    title: "Anime Wizard",
    image: "/assets/anime-wiz.png",
    description: "A React App I made that tries to guess what anime a screen shot is from.  Take an uncropped image from an anime and give it to the wizard to guess.  This app uses API calls and is powered by trace.moe.",
    link: "https://dans-temp.github.io/anime-wizard/"
  },
  {
    id: 4,
    title: "Musical Squares",
    image: "/assets/musical-squares.png",
    description: "The first game I ever finished.  Made using the p5 libary and JavaScript.  Don't let a square hit the bottom of the screen.  If you survive long enough to find a blue square you're in for a treat!",
    link: "https://danielgoresht.github.io/Musical-Squares/"
  },
  {
    id: 5,
    title: "Gamergories",
    image: "/assets/gamergories.png",
    description: "A React App I made where you can try to guess and name all the characters from some popular videogames.  Spelling counts!",
    link: "https://dans-temp.github.io/gamergories"
  },
  {
    id: 6,
    title: "Super RPG World",
    image: "/assets/super-rpg.png",
    description: "A game I made in 48 hours for Global Game Jam 2024 using the Godot game engine.  The theme was 'Make Me Laugh'.  My friend Scott did the art and I did the Programming.  Give it a second to load.",
    link: "https://danielgoresht.itch.io/super-rpg-world"
  },
  {
    id: 7,
    title: "ChatMail's Website",
    image: "/assets/chatmail.png",
    description: "A website I made while working at Myntex for their product ChatMail.  This was made before I learned React and is put together with just raw HTML, CSS, JavaScript, and JQuery.  Some changes have been made to their webpage since I last touched it, but almost all the features I developed are still there.",
    link: "https://chatmailsecure.com/"
  },
  {
    id: 8,
    title: "Cards of the Cosmos",
    image: "/assets/cards.png",
    description: "A game I made with a bunch of friends from university for Ludum Dare 50.  The theme was 'Delay the inevitable'.  This game was also made using Phaser3 with JavaScript in 72 hours.  I did a little bit of everything from programming to music and sound.",
    link: "https://ldjam.com/events/ludum-dare/50/cards-of-the-cosmos"
  },
  {
    id: 8,
    title: "My Ludum Dare Page",
    image: "/assets/ludum.png",
    description: "The rest of my Ludum Dare games are on this page.  I have taken part in every Ludum Dare since 2022.  Feel free to check the rest of them out here.",
    link: "https://ldjam.com/users/bo-dangles/games"
  }
];

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <Header />
      <div className="top-text">
        <h1>Projects</h1>
        <h2>Some Stuff I've Made</h2>
      </div>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <a href={project.link} target="_blank">
            <div key={project.id} className="project-item">
              <div className="title">{project.title}</div>
              <img src={project.image}/>
              <div className="project-description">{project.description}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
