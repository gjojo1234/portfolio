import styled from "styled-components";

const Wrapper = styled.section`
  .btnsNoUser {
    display: flex;
    justify-content: flex-start;
    padding-top: 0.75rem;
  }
  .btnNoUser {
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
  .btnNoUser:hover {
    color: rgb(222, 222, 74);
    background-color: #404040;
    cursor: pointer;
  }
`;

export default Wrapper;
