import React from "react";
export default function About() {
  return (
    <section className="about-container center">
      <div className="hero-container flex-48 ">
        <h1>  Hi There! <span className="wavehand"> 👋🏻</span></h1>
        <h2 className="subheading">I'm <strong>Rahul</strong></h2>
        <div class="typewriter">
            <h2 className="moving-text">MERN Stack web developer</h2>
        </div>
      </div>
      <figure className="flex-48">
        <img src="/Images/home-main.svg" alt="user profile"></img>
      </figure>
    </section>
  );
}
