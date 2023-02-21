import React, { useState } from "react";
import { useAppContext } from "./context/AuthContext";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Logout from "./Logout.js";
const LoginIcon = () => {
  const { user } = useAppContext();
  const [icon, setIcon] = useState(false);
  const changeIcon = () => {
    setIcon(!icon);
  };
  return (
    <div className="logicon">
      <div className="loguser">
        {user.name}
        <button onClick={changeIcon} className="loginIconBtn">
          {icon ? <FiChevronUp /> : <FiChevronDown />}
        </button>
      </div>
      {icon && <Logout />}
    </div>
  );
};

export default LoginIcon;
