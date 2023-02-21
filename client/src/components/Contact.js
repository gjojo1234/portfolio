import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
const Contact = () => {
  return (
    <div className="contact">
      <h1 className="contactTitle">contact me</h1>
      <article className="contactArticle">
        <p>
          <BsTelephoneFill /> +421 907 584 505
        </p>
        <p>
          <GrMail /> gensor1234@gmail.com
        </p>
        <a
          href="https://www.facebook.com/jojo.gensor"
          target="_blank"
          rel="noreferrer"
        >
          <img src="./img/facebook.svg" alt="facebook" />
          Facebook profile
        </a>
        <a
          href="https://www.linkedin.com/in/jozef-gen%C5%A1or-217777261/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="./img/linkedin.svg" alt="linkedin" />
          Linkedin profile
        </a>
      </article>
    </div>
  );
};

export default Contact;
