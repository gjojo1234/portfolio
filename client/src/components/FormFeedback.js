import { useAppContext } from "./context/AuthContext.js";
import { useState } from "react";
import Wrapper from "../wrappers/formFeedbackWrapper.js";

const FormFeedback = () => {
  const { createFeedback, user } = useAppContext();
  const initialState = {
    name: user.name,
    feedback: "",
  };
  const [values, setValues] = useState(initialState);
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    const { name, feedback } = values;
    const currentFeedback = { name, feedback };
    createFeedback(currentFeedback);
    setValues({
      name: "",
      feedback: "",
    });
  };
  return (
    <Wrapper>
      <form onSubmit={onSubmit} className="form-feedback">
        <div className="form-row">
          <h1 className="feedbackName">{user.name}</h1>
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
    </Wrapper>
  );
};

export default FormFeedback;
