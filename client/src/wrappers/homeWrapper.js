import styled from "styled-components";

const Wrapper = styled.section`
  .homeSection1 {
    background: linear-gradient(#151515, #505050);
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .homeArticle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 5rem;
  }
  .homeArticle h2 {
    font-size: 2.5rem;
    color: rgb(191, 212, 237);
  }
  .homeTitle {
    font-size: 3rem;
    letter-spacing: 0.1em;
    color: #e4ecf1;
  }
  .span {
    color: yellow;
  }
  .btns {
    display: flex;
    justify-content: flex-start;
  }
  .btn {
    color: whitesmoke;
    font-size: 1.25em;
    border: 0.5px solid #e4ecf1;
    border-radius: 5px;
    margin-top: 0.5rem;
    margin-right: 1em;
    padding: 0.2em 1.5em 0.4em 1.5em;
    text-decoration: none;
    background-color: #696969;
  }
  .btn:hover {
    color: rgb(222, 222, 74);
    background-color: #404040;
    cursor: pointer;
  }
  .imgHome {
    margin: 7vh auto;
    width: 50%;
    height: 50%;
    border-radius: 50%;
  }
  .homeSection2 {
    background: linear-gradient(#353535, #454545);
    padding-bottom: 3rem;
  }
  .homeTitle2 {
    font-size: 3rem;
    font-family: cursive;
    color: yellow;
    text-align: center;
    text-transform: capitalize;

    letter-spacing: 0.1em;
    padding: 3rem 0;
  }
  .project1 {
    display: flex;
    justify-content: flex-start;
    padding-left: 5rem;
  }
  .projectArticle {
    padding-left: 2rem;
    padding-bottom: 3rem;
  }
  .projectArticle h1 {
    color: rgb(222, 222, 74);
    font-size: 2.5rem;
    text-transform: capitalize;
  }
  .projectArticle p,
  .addFeedback p {
    font-size: 1.25rem;
    color: white;
  }
  .projectImage {
    width: 35rem;
    height: 20rem;
  }
  .projectImage:hover {
    cursor: pointer;
    transform: scale(1.03);
  }
  .homeSection3 {
    background: linear-gradient(#505050, #656565);
    padding-left: 5rem;
    padding-bottom: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  .addFeedback {
    margin-top: 2rem;
  }
  .addFeedback {
    margin-right: 10rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .titleFeedback {
    font-size: 1.75rem;
    padding-bottom: 1rem;
    color: yellowgreen;
    text-transform: capitalize;
  }

  .allFeedback {
    margin-top: 2rem;
    max-width: 30rem;
    height: auto;
  }
  .feedbackItem {
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    box-shadow: 1rem 1rem 1rem #151515;
    padding: 1rem;
    background-color: #505050;
  }
  .feedbackItem:nth-child(even) {
    background-color: #404040;
  }

  .feedbackItem h1 {
    color: rgb(187, 222, 246);
    text-align: center;
    padding-bottom: 1rem;
  }
  .feedbackItem p {
    color: wheat;
  }
  .loguser {
    font-size: 1.75rem;
    text-decoration: none;
    color: greenyellow;
  }

  @media screen and (max-width: 960px) {
    .project1 {
      display: block;
    }
    .projectArticle {
      padding-left: 0;
    }
    .projectImage {
      width: 70%;
    }
  }
  @media screen and (max-width: 900px) {
    .imgHome {
      margin-top: 1rem;
      height: 30vh;
      width: 30vw;
    }
  }

  @media screen and (max-width: 740px) {
    .homeSection1 {
      grid-template-columns: 1fr;
    }
    .imgHome {
      margin-top: 1rem;
      height: 15vh;
      width: 30vw;
    }
  }
`;

export default Wrapper;
