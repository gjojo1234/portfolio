import styled from "styled-components";

const Wrapper = styled.div`
  .logout {
    position: absolute;
    top: 3rem;
    right: 1rem;
    color: white;
    font-size: 1.25em;
    border: 0.5px solid #e4ecf1;
    border-radius: 5px;

    padding: 0.2em 1.5em 0.4em 1.5em;
    background-color: #696969;
  }
  .logout:hover {
    color: red;
    background-color: #404040;
    cursor: pointer;
  }
`;

export default Wrapper;
