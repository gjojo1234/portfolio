import styled from "styled-components";

const Wrapper = styled.section`
  .login {
    background: linear-gradient(#151515, #606060);
    min-height: calc(100vh - 3rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .title {
    color: yellow;
    padding-bottom: 2rem;
    text-transform: uppercase;
    font-size: 2rem;
  }
  .formContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 20rem;
    height: auto;
    background-color: #303030;
    color: yellow;
    border-radius: 1rem;
    box-shadow: 0px 0px 30px #151515;
  }
  .form-row {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-top: 1rem;
    font-size: 1.25rem;
  }
  .loginBtn {
    margin: 1rem auto;
    padding: 0.25rem 2rem 0.4rem 2rem;
    border-radius: 0.5rem;
    border: 0 transparent;
    background-color: #404040;
    color: yellowgreen;
  }
  .loginBtn:hover {
    transform: scale(1.03);
    cursor: pointer;
    color: yellow;
    background-color: #505050;
  }
  .alert {
    color: orangered;
    font-size: 1.5rem;
  }
`;

export default Wrapper;
