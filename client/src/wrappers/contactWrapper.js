import styled from "styled-components";

const Wrapper = styled.section`
  .contact {
    min-height: calc(100vh - 3rem);
    background: linear-gradient(#151515, #606060);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .contactTitle {
    display: block;
    padding-top: 5rem;
    font-size: 3rem;
    color: #e4ecf1;
    text-align: center;
    text-transform: capitalize;
  }
  .contactArticle {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: flex-start;
    padding-top: 2rem;
    text-align: center;
  }
  .contactArticle p,
  .contactArticle a {
    display: block;
    padding-top: 1rem;
    font-size: 1.5rem;
    color: #909090;
  }
  .contactArticle a:hover {
    cursor: pointer;
    color: rgb(222, 222, 74);
  }
`;

export default Wrapper;
