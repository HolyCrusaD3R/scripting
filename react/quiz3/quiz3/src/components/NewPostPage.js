import Header from "./Header";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const NewPostPage = ({ handleCreatePost }) => {
  const navigation = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleUpdateTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleUpdateContent = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = () => {
    handleCreatePost(title, content);
    navigation("/");
  };

  return (
    <>
      <Header />
      <div className="form">
        <h1>Create New Post</h1>
        <div>
          <label>Title:</label>
          <br />
          <input
            type="text"
            className="newPostTitle"
            placeholder="Enter post title..."
            value={title}
            onChange={handleUpdateTitle}
          />
        </div>
        <div>
          <label>Content:</label>
          <br />
          <textarea
            type="text"
            className="newPostContent"
            placeholder="Write your post content..."
            value={content}
            onChange={handleUpdateContent}
          />
        </div>
        <div className="newPostBtns">
          <button className="submit-btn" onClick={handleSubmit}>
            Create Post
          </button>
          <Link to="/">
            <button className="cancel-btn">Cancel</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NewPostPage;
