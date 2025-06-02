import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to={"/"}>
        <h1>Home Page</h1>
      </Link>
      <hr />
    </div>
  );
};

export default Header;
