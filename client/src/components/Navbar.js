import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppContext } from "./context/AuthContext";
import LoginIcon from "./LoginIcon.js";

const Navbar = () => {
  const [navlist, setNavlist] = useState([
    { id: 1, name: "home", link: "/" },
    { id: 2, name: "skills", link: "/Skills" },
    { id: 3, name: "contact", link: "/Contact" },
    { id: 4, name: "login", link: "/Login" },
    { id: 5, name: "register", link: "/Register" },
  ]);
  const location = useLocation();
  const { token } = useAppContext();
  useEffect(() => {
    const activePage = window.location.href;
    const navLinks = document.querySelectorAll(".linkItem");
    navLinks.forEach((link) => {
      if (link.href === activePage) {
        link.classList.remove("deactive");
        link.classList.add("active");
      } else {
        link.classList.add("deactive");
      }
    });
  }, [location]);
  useEffect(() => {
    if (token) {
      setNavlist([
        { id: 1, name: "home", link: "/" },
        { id: 2, name: "skills", link: "/Skills" },
        { id: 3, name: "contact", link: "/Contact" },
      ]);
    }
  }, [token]);

  return (
    <div className="navbar">
      <ul className="nav-container">
        {navlist.map((item) => {
          const { id, name, link } = item;
          return (
            <li key={id} className="listItem">
              <Link to={link} className="linkItem">
                {name}
              </Link>
            </li>
          );
        })}
        {token && <LoginIcon />}
      </ul>
    </div>
  );
};

export default Navbar;
