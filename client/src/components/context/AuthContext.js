import React, { useReducer, useContext } from "react";
import reducer from "./reducer.js";
import axios from "axios";
import { BASE_URL } from "../access/accessToBackend.js";

const authContext = React.createContext();
const user = localStorage.getItem("user");
const token = localStorage.getItem("token");
const initialState = {
  user: user ? JSON.parse(user) : null,
  token: token,
};
const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };
  const removeUserOnLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };
  const registerUser = async (currentUser) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/auth/register`,
        currentUser
      );

      const { user, token } = response.data;
      dispatch({
        type: "USER_SUCCESS",
        payload: {
          user,
          token,
        },
      });
      addUserToLocalStorage({ user, token });
    } catch (error) {}
  };
  const loginUser = async (currentUser) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/auth/login`, currentUser);

      const { user, token } = data;
      dispatch({
        type: "USER_SUCCESS",
        payload: {
          user,
          token,
        },
      });
      addUserToLocalStorage({ user, token });
    } catch (error) {}
  };
  const createFeedback = async (currentFeedback) => {
    try {
      await axios.post(`${BASE_URL}/feedback`, currentFeedback);
    } catch (error) {}
  };

  return (
    <authContext.Provider
      value={{
        ...state,
        registerUser,
        loginUser,
        createFeedback,
        removeUserOnLocalStorage,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
export const useAppContext = () => {
  return useContext(authContext);
};

export default AuthProvider;
