import styled from "styled-components";

const Wrapper = styled.section`
  .skills {
    background: linear-gradient(#151515, #606060);
    min-height: calc(100vh - 3rem);
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .componentSkill {
    width: 60%;
    height: 8rem;
    margin: 1.5%;
    background: #151515;
    border-radius: 1rem;
    box-shadow: 0.5rem 0.5rem 10px #181818;
    color: white;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .componentImg {
    padding-right: 1rem;
  }
  .skill-items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .skill-image {
    display: flex;
    justify-content: center;
    margin-top: 20vh;
  }
  .img-prog {
    max-width: 50vw;
    max-height: 60vh;
  }
  @media screen and (max-width: 1050px) {
    .componentSkill {
      width: 80%;
    }
  }

  @media screen and (max-width: 740px) {
    .componentSkill {
      width: 95%;
    }
  }
`;

export default Wrapper;
