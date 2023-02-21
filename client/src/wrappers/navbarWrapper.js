import styled from "styled-components";

const Wrapper = styled.nav`
  .navbar {
    margin-top: 0;
    padding-top: 0;
    height: 3rem;
    background: linear-gradient(#101010, #121212);
    box-shadow: 0 1rem 0.1rem #202020;
  }
  .nav-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  .listItem {
    list-style: none;
    padding: 0.5rem 2rem 1rem 2rem;
    height: 3rem;
    text-transform: capitalize;
  }
  .listItem:hover {
    background: #404040;
    cursor: pointer;
  }
  .linkItem {
    font-size: 1.4rem;
    text-decoration: none;
    color: white;
  }
  .active {
    color: rgb(222, 222, 74);
  }
  .deactive {
    color: white;
  }
  @media screen and (max-width: 740px) {
    .listItem {
      padding: 0.5rem 0.3rem 1rem 0.34rem;
    }
  }
`;

export default Wrapper;
