import React from "react";
import { Link } from "react-router-dom";
import { SiGithub, SiTwitter, SiLinkedin, SiWhatsapp } from "react-icons/si";

export default function Contact() {
  return (
    <section className="contact-container">
      <h2 className="text-center">Get In Touch!</h2>
      <div className="userInfo-container">
        <h3>Let's connect here</h3>
        <nav className="socialmediacontainer">
          <Link to={"//github.com/RahulMandyal1"}>
            <SiGithub />
          </Link>
          <Link to={"//twitter.com/RahulMandyal4"}>
            <SiTwitter />
          </Link>
          <Link to={"//linkedin.com/in/rahul-thakur-0b2942213/"}>
            <SiLinkedin />
          </Link>
          <Link to={"//wa.me/+917018769528"}>
            <SiWhatsapp />
          </Link>
        </nav>
      </div>
      <div className="email-container flex-row">
        <div>
          <h4>
            Mail me :{" "}
            <Link to={"//mailto:rahulthakurcoder@gmail.com"}>
              rahulthakurcoder@gmail.com
            </Link>
          </h4>
        </div>
        <div>
          <h4>Call me : +917018769528</h4>
        </div>
      </div>
    </section>
  );
}
