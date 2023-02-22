import { Link } from "react-router-dom";
import Wrapper from "../wrappers/FormNoUserWrapper.js";
const FormNoUser = () => {
  return (
    <Wrapper>
      <p>For add feedbacks, please register or login.</p>
      <div className="btnsNoUser">
        <Link to="/Login" className="btnNoUser">
          Login
        </Link>
        <Link to="/Register" className="btnNoUser">
          Register
        </Link>
      </div>
    </Wrapper>
  );
};

export default FormNoUser;
