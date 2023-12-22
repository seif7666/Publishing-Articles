import React from "react";
import { useLocation, useNavigate } from "react-router";
import { LINKS, ROLES } from "../../constants";
import { Link } from "react-router-dom";

const links = [
  ["Home", ROLES.list[ROLES.AUTHOR_INDEX]],
  ["Create Article", LINKS.CREATE_ARTICLE],
  ["Logout", LINKS.HOME],
];
const AuthorNavBar = (props) => {
  const location = useLocation();
  console.log(location);
  const getLiElement = (link) => {
    const name = link[0];
    const routeLink = "/"+link[1];
    const isCurrent = routeLink == location.pathname;
    let className = "nav-item";
    if (isCurrent)
      //Active
      className = "nav-item active-author";
    return (
      <li className={className}>
        <Link to={"/"+link[1]} style={{textDecoration:'none'}}>
          <a className="nav-link">
            {name}
          </a>
        </Link>
      </li>
    );
  };
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <a className="navbar-brand" href="#">
        {props.firstName}
      </a>
      <div className="navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">{links.map(getLiElement)}</ul>
        <form className="form-inline  offset-md-6 d-flex">
          <input
            className="form-control "
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success ">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default AuthorNavBar;
