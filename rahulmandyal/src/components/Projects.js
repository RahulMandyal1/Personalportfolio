import React from "react";
import { SiGithub } from "react-icons/si";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <>
      <section className="getlatest-projects">
        <h2> Get all latest projects</h2>
        <button className="btn-large">
          <Link to={"//github.com/RahulMandyal1"}>FOLLOW ME</Link>
        </button>
      </section>

      <section className="container project-section">
        <div className="project-wrapper">
          <h2 className="section-heading">Projects</h2>
          <div className="project-container">
            <article className="project-card">
              <figure>
                <img src="/images/conduit.png" alt="project1"></img>
              </figure>
              <div className="content-container">
                <h3 className="card-heading"> Blog app</h3>
                <p> description of the project card</p>
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
              </div>
            </article>
            <article className="project-card">
              <figure>
                <img src="/images/conduit.png" alt="project1"></img>
              </figure>
              <div className="content-container">
                <h3 className="card-heading"> Blog app</h3>
                <p> description of the project card</p>
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
              </div>
            </article>

            <article className="project-card">
              <figure>
                <img src="/images/conduit.png" alt="project1"></img>
              </figure>
              <div className="content-container">
                <h3 className="card-heading"> Blog app</h3>
                <p> description of the project card</p>
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
              </div>
            </article>

            <article className="project-card">
              <figure>
                <img src="/images/conduit.png" alt="project1"></img>
              </figure>
              <div className="content-container">
                <h3 className="card-heading"> Blog app</h3>
                <p> description of the project card</p>
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
              </div>
            </article>

            <article className="project-card">
              <figure>
                <img src="/images/conduit.png" alt="project1"></img>
              </figure>
              <div className="content-container">
                <h3 className="card-heading"> Blog app</h3>
                <p> description of the project card</p>
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
              </div>
            </article>

            <article className="project-card">
              <figure>
                <img src="/images/conduit.png" alt="project1"></img>
              </figure>
              <div className="content-container">
                <h3 className="card-heading"> Blog app</h3>
                <p> description of the project card</p>
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
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
