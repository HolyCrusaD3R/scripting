import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <div className="header">
      <Link to="/">
        <div className="logo">
          <p>My Blog</p>
        </div>
      </Link>
      <div className="navigation">
        <Link to="/">
          <div className={location.pathname === "/" ? "btn activeBtn" : "btn"}>
            Home
          </div>
        </Link>
        <Link to="/new-post">
          <div
            className={
              location.pathname === "/createPost" ? "btn activeBtn" : "btn"
            }
          >
            New Post
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
