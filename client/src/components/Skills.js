import Wrapper from "../wrappers/skillsWrapper.js";

const Skills = () => {
  const skills = [
    { id: 1, name: "Javascript", icon: "./img/javascript.svg" },
    { id: 2, name: "ReactJS", icon: "./img/react.svg" },
    { id: 3, name: "NodeJS", icon: "./img/node-js.svg" },
    { id: 4, name: "ExpressJS", icon: "./img/express-js.svg" },
    { id: 5, name: "MongoDB", icon: "./img/mongodb.svg" },
    { id: 6, name: "Css", icon: "./img/css3.svg" },
    { id: 7, name: "Html", icon: "./img/html-5.svg" },
  ];

  return (
    <Wrapper>
      <div className="skills">
        <div className="skill-items">
          {skills.map((item) => {
            const { id, name, icon } = item;
            return (
              <div className="componentSkill" key={id}>
                <img src={icon} className="componentImg" alt="icon"></img>
                <h1>{name}</h1>
              </div>
            );
          })}
        </div>
        <div className="skill-image">
          <img
            src="./img/programming.svg"
            alt="web-programming"
            className="img-prog"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Skills;
