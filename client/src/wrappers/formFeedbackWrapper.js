import styled from "styled-components";

const Wrapper = styled.section`
  .form-feedback {
    margin-right: 10rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .form-row {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 0.75rem;
    font-size: 1.25rem;
    color: yellow;
  }
  .feedbackName {
    color: rgb(187, 222, 246);
    padding-bottom: 1rem;
  }
`;

export default Wrapper;
