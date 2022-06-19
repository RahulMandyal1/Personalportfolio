import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard/ProjectCard";

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
            <ProjectCard
              image={"blogapp.png"}
              title={"Blog app"}
              description={"blog app made with react js"}
              links={[
                "//github.com/RahulMandyal1/blogapp",
                "//rahulmandyal1.github.io/blogapp/",
              ]}
            />
            <ProjectCard
              image={"conduitapi.png"}
              title={"Blog app api"}
              description={"Blog app api made with node js and mongodb"}
              links={[
                "//github.com/RahulMandyal1/ConduitApi",
                "//conduitblogapp.herokuapp.com/",
              ]}
            />
            <ProjectCard
              image={"portfolio.png"}
              title={"Personal portfolio"}
              description={"My personal Portfolio  website made with react js "}
              links={[
                "//github.com/RahulMandyal1/ConduitApi",
                "//conduitblogapp.herokuapp.com/",
              ]}
            />
            <ProjectCard
              image={"githubBattle.png"}
              title={"Github Battle app"}
              description={"Enter two github username and battle between them"}
              links={[
                "//github.com/RahulMandyal1/GithubBattle",
                "//62adb763b37d4a6b6599cbea--github-battle-app-by-rahulmandyal.netlify.app/",
              ]}
            />
            <ProjectCard
              image={"sixteenclothing.png"}
              title={"Sixteen Clothing"}
              description={
                " Ecommerce website made with the vanills js and scss."
              }
              links={[
                "//github.com/RahulMandyal1/SixteenClothing ",
                "//rahulmandyal1.github.io/SixteenClothing/",
              ]}
            />
            <ProjectCard
              image={"flexor.png"}
              title={"Flexor"}
              description={"Fully resposive website made with html css."}
              links={[
                "//github.com/RahulMandyal1/checkpoint4.github.io",
                "//rahulmandyal1.github.io/checkpoint4.github.io/",
              ]}
            />
            <ProjectCard
              image={"stimulus.png"}
              title={"Stimulus portfolio website"}
              description={
                "Portfolio website made with html/scss and css-grid."
              }
              links={[
                "//github.com/RahulMandyal1/Stimulus",
                "//rahulmandyal1.github.io/Stimulus/",
              ]}
            />
            <ProjectCard
              image={"todoapp.png"}
              title={"Todo Application. "}
              description={
                "User can add what need to be done .Made with rect  and redux."
              }
              links={[
                "//github.com/RahulMandyal1/Redux/tree/main/ReactRedux_todoApplication/react-redux-todoapp",
                "//62adfaa8d9b48a17c8d4337d--todoapplication-react-redux.netlify.app/",
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
