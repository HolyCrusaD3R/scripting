import Header from "./Header";
import { Link } from "react-router-dom";

const PostsPage = ({ data }) => {
  return (
    <>
      <Header />
      <div className="postsPage">
        <div className="postcard">
          <h1>Welcome to My Blog</h1>
          <h3>Discover amazing articles and share your thoughts!</h3>
        </div>
        <div className="postsContainer">
          {data.map((el) => {
            return (
              <div key={el.id} className="post">
                <Link to={`/post/${el.id}`}>
                  <div className="postTitle">{el.title}</div>
                </Link>
                <div className="postDescription">
                  {el.description.slice(0, 100) +
                    (el.description.length > 100 ? "..." : "")}{" "}
                </div>
                {/* Link to post */}
                <Link to={`/post/${el.id}`}>
                  <div className="postLink">Read More</div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default PostsPage;
