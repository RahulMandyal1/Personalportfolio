import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <section className="about-container center">
        <div className="hero-container flex-48 ">
          <h1>
            Hi There! <span className="wavehand"> 👋🏻</span>
          </h1>
          <h2 className="subheading">
            I'm <strong>Rahul</strong>
          </h2>
          <div class="typewriter">
            <h2 className="moving-text">MERN Stack web developer</h2>
          </div>
        </div>
        <figure className="flex-48">
          <img src="/Images/home-main.svg" alt="user profile"></img>
        </figure>
      </section>
      
      <section className="aboutme-container">
        <h2 className="section-heading">About me </h2>
        <div className="userinfowrapper">
          <article className="userinformation">
          <h3>I am a MERN stack developer.</h3>
            <div className="stack-container">
              <p>
                I find immense joy in creating web apps and solving problems
                that occur in the development phase. I believe in working hard
                and learning new skills whenever possible to enhance my
                skilllsets.
              </p>
            </div>
            <div className="stack-container">
              <h4> Backend</h4>
              <p>
                Learned Node.js, MongoDB, Express.js. Continued with learning
                Authentication, Authorization, OAuth and JWT and much more.
              </p>
            </div>
            <div className="stack-container">
              <h4>Frontend</h4>
              <p>
                Learned React, React Router, React Router Dom, Redux. Continued
                with Functional Components, Class Components, State, Props,
                Context API, HOC, Render Props , Hooks and much more.
              </p>
            </div>
            <div className="button-container">
              <button className="btn-large">
                <Link to={"/projects"}>PROJECTS</Link>
              </button>
            </div>
          </article>
          <figure>
            <img
              src="https://avatars.githubusercontent.com/u/93306066?v=4"
              alt="rahulmandyal"
            ></img>
          </figure>
        </div>
      </section>
    </>
  );
}
