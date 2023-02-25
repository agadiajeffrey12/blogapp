import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import { Container } from "./components/constant";
// import Navb
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Toggle from "./components/Toggle/Toggle";
import Latest from "./components/Latest/Latest";
import Sidebar from "./components/Sidebar/Sidebar";
import Trending from "./components/Trending/Trending";
import Register from "./components/Registeration/Register";
import Popup from "./components/popup/Popup";
import Blog from "./components/bloggers/Bloggers";
import PersonalBlog from "./components/personalBlog/PersonalBlog";
import Favorite from "./components/favorites/favorites";
import Article from "./components/article/Article";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { Context } from "./Context";

function App() {
  const [count, setCount] = useState(0);

  const [latestState, setLatest] = useState(true);
  const [trend, setTrend] = useState(false);
  const [side, setSide] = useState("-45rem");
  const [tog, setTog] = useState(true);
  const [Reg, setReg] = useState(false);
  const [pop, setPop] = useState(false);
  const [blogs, setBlogs] = useState(false);
  const [personal, setPersonal] = useState(false);
  const [personalItem, setPersonalItem] = useState([]);
  const [favorite, setFavorite] = useState(false);
  const [article, setArticle] = useState(false);
  const [txt, setTxt] = useState(null);

  const [contents, setContents] = useState({});
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setContents(user);
      }
    });
  }, []);
  // console.log(contents);
  return (
    // <Context.Provider value={contents}>
      <Container>
        <Sidebar
          sm={side}
          setSm={setSide}
          late={setLatest}
          tre={setTrend}
          re={setReg}
          set={setTog}
        />
        <Navbar
          setSm={setSide}
          set={setTog}
          late={setLatest}
          tre={setTrend}
          re={setReg}
          blo={setBlogs}
          pep={setPersonal}
          fav={setFavorite}
          art={setArticle}
        />
        {tog && (
          <Toggle
            late={setLatest}
            tre={setTrend}
            blo={setBlogs}
            pep={setPersonal}
            fav={setFavorite}
            text={setArticle}
          />
        )}
        {latestState && (
          <Latest
            setSm={setSide}
            late={setLatest}
            art={setArticle}
            text={setTxt}
          />
        )}
        {trend && <Trending />}
        {Reg && <Register show={setPop} />}
        {pop && <Popup />}
        {blogs && (
          <Blog
            showing={setPop}
            blo={setBlogs}
            pep={setPersonal}
            person={setPersonalItem}
          />
        )}
        {personal && <PersonalBlog items={personalItem} />}
        {favorite && <Favorite />}
        {article && <Article late={setLatest} cont={txt} />}
      </Container>
    // </Context.Provider>
  );
}

export default App;
