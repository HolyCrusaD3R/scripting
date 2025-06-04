import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import dataa from "./data/data";
import { useState } from "react";
const PostsPage = lazy(() => import("./components/PostsPage"));
const PostPage = lazy(() => import("./components/PostPage"));
const NewPostPage = lazy(() => import("./components/NewPostPage"));

function App() {
  const [currId, setCurrId] = useState(5);
  const [data, setData] = useState(dataa);

  const handleCreatePost = (newTitle, newDescription) => {
    setData((data) => [
      ...data,
      { title: newTitle, description: newDescription, id: currId },
    ]);
    setCurrId((currId) => currId + 1);
  };

  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<PostsPage data={data} />} />
        <Route path="/post/:id" element={<PostPage data={data} />} />
        <Route
          path="/new-post"
          element={<NewPostPage handleCreatePost={handleCreatePost} />}
        />
      </Routes>
    </Suspense>
  );
}

export default App;
