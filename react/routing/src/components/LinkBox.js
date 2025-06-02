import { Link } from "react-router-dom";

const LinkBox = ({ url, name }) => {
  return (
    <Link to={url}>
      <div className="linkBox">{name} Page</div>
    </Link>
  );
};

export default LinkBox;
