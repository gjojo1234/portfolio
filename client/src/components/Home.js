import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAppContext } from "./context/AuthContext";
import axios from "axios";
import { BASE_URL } from "./access/accessToBackend.js";
import Wrapper from "../wrappers/homeWrapper.js";

const Home = () => {
  const initialState = {
    name: "",
    feedback: "",
  };
  const [values, setValues] = useState(initialState);
  const [feedbacks, setFeedbacks] = useState([]);
  const { createFeedback } = useAppContext();
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, feedback } = values;
    const currentFeedback = { name, feedback };
    createFeedback(currentFeedback);
    setValues({
      name: "",
      feedback: "",
    });
    getFeedback();
  };
  const getFeedback = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/feedback`);
      const { feedBacks } = data;
      setFeedbacks(feedBacks);
    } catch (error) {}
  };
  useEffect(() => {
    getFeedback();
  }, []);

  return (
    <Wrapper>
      <div className="home">
        <section className="homeSection1">
          <article className="homeArticle">
            <h1 className="homeTitle">
              <span className="span">Hi</span>, I am Jozef Genšor
            </h1>
            <h2>I am into web development</h2>
            <div className="btns">
              <Link to="/Skills" className="btn">
                Skills
              </Link>
              <Link to="/Contact" className="btn">
                Contact
              </Link>
            </div>
          </article>
          <img src="./img/234A2606.jpg" className="imgHome" alt="JoGe"></img>
        </section>
        <section className="homeSection2">
          <h1 className="homeTitle2">my project</h1>
          <div className="project1">
            <aside>
              <a
                href="https://playful-sherbet-f3f869.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="./img/react_drinks.png"
                  alt="react drinks"
                  className="projectImage"
                />
              </a>
            </aside>
            <article className="projectArticle">
              <h1>drinks</h1>
              <p>This is a project about drinks.</p>
              <p>This is a trial page.</p>
              <p>This page is made in React.</p>
            </article>
          </div>
        </section>
        <section className="homeSection3">
          <div className="addFeedback">
            <h1 className="titleFeedback">add feedback</h1>
            <form onSubmit={onSubmit} className="form-feedback">
              <div className="form-row">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  placeholder="Please your name..."
                />
              </div>
              <div className="form-row">
                <label htmlFor="feedback">Feedback</label>
                <textarea
                  id="feedbackArea"
                  name="feedback"
                  rows="5"
                  cols="35"
                  placeholder="Please create feedback...."
                  value={values.feedback}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="btn">
                Add feedback
              </button>
            </form>
          </div>
          <div className="allFeedback">
            <h1 className="titleFeedback">Feedbacks</h1>
            {feedbacks.map((item) => {
              const { name, feedback } = item;
              return (
                <div className="feedbackItem" key={Math.random()}>
                  <h1>{name}</h1>
                  <p>"{feedback}"</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

export default Home;
