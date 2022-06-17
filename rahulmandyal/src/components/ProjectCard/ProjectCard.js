import React from "react";
import { SiGithub } from "react-icons/si";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";

function ProjectCard(props) {
  let { image, title, description, tags, links } = props;
  return (
    <article className="project-card">
      <figure>
        <img src={`/images/${image}`} alt="project" />
      </figure>
      <h3 className="card-heading">{title}</h3>
      <p>{description}</p>
      <div className="tags-container">
        <ul>
          {tags.map((tag) => {
            return <li key={tag}> {tag}</li>;
          })}
        </ul>
      </div>
      <div className="button-container">
        <ul>
          <li>
            <Link to={links[0]}>
              <SiGithub />
            </Link>
          </li>
          <li>
            <Link to={links[1]}>
              <AiFillEye />
            </Link>
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ProjectCard;
