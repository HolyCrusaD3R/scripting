import { useParams } from "react-router-dom";
import Header from "./Header";

import { Link } from "react-router-dom";
const PostPage = ({ data }) => {
  const { id } = useParams();
  const myPost = data.find((el) => el.id == id);
  return (
    <>
      <Header />
      <div className="postPageContainer">
        <Link to="/">
          <p className="backToHome">Back to Home</p>
        </Link>
        <h1>{myPost.title}</h1>
        <div>{myPost.description}</div>
      </div>
    </>
  );
};

export default PostPage;

/*

<div className="form">
      <h1>Create New Post</h1>
      <div>
        <label>Title:</label>
        <input type="text" placeholder="Enter post title..." />
      </div>
      <div>
        <label>Content:</label>
        <input type="text" placeholder="Write your post content..." />
      </div>
    </div>
*/
