import React from "react";
import { SiGithub } from "react-icons/si";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function Projects() {
  return (
    <section className="container project-section">
      <h2 className="section-heading">Projects</h2>
      <div className="project-container">
        <article className="project-card">
          <figure>
            <img src="/images/conduit.png" alt="project image"></img>
          </figure>
          <h3 className="card-heading"> Blog app</h3>
          <p> description of the project card</p>
          <div className="tags-container"></div>
          <div className="button-container">
            <ul>
              <li>
                <Link to="/">
                  <SiGithub />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <AiFillEye />
                </Link>
              </li>
            </ul>
          </div>
        </article>
        <article className="project-card">
          <figure>
            <img src="/images/conduit.png" alt="project image"></img>
          </figure>
          <h3 className="card-heading"> Blog app</h3>
          <p> description of the project card</p>
          <div className="tags-container"></div>
          <div className="button-container">
            <ul>
              <li>
                <Link to="/">
                  <SiGithub />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <AiFillEye />
                </Link>
              </li>
            </ul>
          </div>
        </article>
        <article className="project-card">
          <figure>
            <img src="/images/conduit.png" alt="project image"></img>
          </figure>
          <h3 className="card-heading"> Blog app</h3>
          <p> description of the project card</p>
          <div className="tags-container"></div>
          <div className="button-container">
            <ul>
              <li>
                <Link to="/">
                  <SiGithub />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <AiFillEye />
                </Link>
              </li>
            </ul>
          </div>
        </article>
        <article className="project-card">
          <figure>
            <img src="/images/conduit.png" alt="project image"></img>
          </figure>
          <h3 className="card-heading"> Blog app</h3>
          <p> description of the project card</p>
          <div className="tags-container"></div>
          <div className="button-container">
            <ul>
              <li>
                <Link to="/">
                  <SiGithub />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <AiFillEye />
                </Link>
              </li>
            </ul>
          </div>
        </article>
        <article className="project-card">
          <figure>
            <img src="/images/conduit.png" alt="project image"></img>
          </figure>
          <h3 className="card-heading"> Blog app</h3>
          <p> description of the project card</p>
          <div className="tags-container"></div>
          <div className="button-container">
            <ul>
              <li>
                <Link to="/">
                  <SiGithub />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <AiFillEye />
                </Link>
              </li>
            </ul>
          </div>
        </article>
        <article className="project-card">
          <figure>
            <img src="/images/conduit.png" alt="project image"></img>
          </figure>
          <h3 className="card-heading"> Blog app</h3>
          <p> description of the project card</p>
          <div className="tags-container"></div>
          <div className="button-container">
            <ul>
              <li>
                <Link to="/">
                  <SiGithub />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <AiFillEye />
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
