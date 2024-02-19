// AboutPage.js
import React from "react";
import "./AboutPage.css";
import Header from "./Header.js";

const AboutPage = () => {
  return (
    <div className="about-container">
        <Header sticky={true}/>
        <div className="top-text">
            <h1>About Me</h1>
            <h2>Some Fun Facts</h2>
        </div>
      <div className="about-section beige-bg">
      <div className="image-column">
          <img src="assets/mtg.jpg"/>
        </div>
        <div className="text-column">
            <div className="text-box">
                <h2>Magic the Gathering</h2>
                <br></br>
                <p>
                    One of my other hobbies is playing completive Magic the Gathering. I have been playing since 2010 and have been lucky enough to play in the Magic the Gathering Pro Tour a few times.
                </p>
                <br></br>
                <p>
                    Most recently in 2023 I won a trip to play in Barcelona for the Pro Tour where I won $2000 USD playing in the tournament.
                </p>
                <br></br>
                <p>
                    I don't play as much these days, but I still love the game.
                </p>
          </div>
        </div>
      </div>
      <div className="about-section">
      <div className="image-column mobile">
          <img src="assets/sean.png" />
        </div>
        <div className="text-column">
            <div className="text-box">
                <h2>I'm a Twin</h2>
                <br></br>
                <p>
                    I have a twin brother named Sean.  You might be able to guess, but we are NOT identical.
                </p>
                <br></br>
                <p>
                    Although we don't look the same, we are both software developers and have pretty similar experience.  You can check out my <a href="https://www.seangoresht.com/" target="_blank">brother's web site here.</a>
                </p>
            </div>
        </div>
        <div className="image-column not-mobile">
          <img src="assets/sean.png"/>
        </div>
      </div>
    
      <div className="about-section beige-bg">
      <div className="image-column">
          <img src="assets/finger.jpg" alt="Ninja" />
        </div>
        <div className="text-column">
            <div className="text-box">
                <h2>Double Jointed</h2>
                <br></br>
                <p>
                    I'm double jointed in my fingers.  Maybe I could have been a famous guitarist, or one of the world's greatest piano players, but unfortunately I never honed my gift.
                </p>
                <br></br>
                <p>
                    Instead I use this super power as a party trick and for being slightly better than average at thumb wrestling.
                </p>
          </div>
        </div>
      </div>


    </div>
  );
};

export default AboutPage;
