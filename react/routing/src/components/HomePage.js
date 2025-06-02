import LinkBox from "./LinkBox";

const HomePage = () => {
  return (
    <div>
      <h1>my home page</h1>
      <div className="linkList">
        <LinkBox url={"/about"} name={"About"} />
        <LinkBox url={"/companies"} name={"Companies"} />
      </div>
    </div>
  );
};

export default HomePage;
