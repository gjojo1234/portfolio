import styled from "styled-components";

const Wrapper = styled.div`
  .logicon {
    list-style: none;
    padding: 0.5rem 2rem 1rem 2rem;
    height: 3rem;
    text-transform: capitalize;
  }
  .loguser {
    font-size: 1.4rem;
    text-decoration: none;
    color: white;
  }
  .loguser {
    color: greenyellow;
  }
  .loguser::before {
    content: "";
    display: inline-block;
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    margin-right: 0.3rem;
    background-color: greenyellow;
  }
  .loginIconBtn {
    background-color: transparent;
    color: yellowgreen;
    border: none;
    margin-left: 0.75rem;
  }
  .loginIconBtn:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 740px) {
    .logicon {
      padding: 0.5rem 0.3rem 1rem 0.34rem;
    }
  }
`;
export default Wrapper;
