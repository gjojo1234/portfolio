import Wrapper from "../wrappers/logoutWrapper";
import { useAppContext } from "./context/AuthContext";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { removeUserOnLocalStorage } = useAppContext();
  const navigate = useNavigate();
  const refreshAndRemoveLS = () => {
    removeUserOnLocalStorage();
    navigate(0);
  };
  return (
    <Wrapper>
      <button className="logout" onClick={refreshAndRemoveLS}>
        Logout
      </button>
    </Wrapper>
  );
};

export default Logout;
