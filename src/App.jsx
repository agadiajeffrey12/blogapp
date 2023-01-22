import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Container } from "./components/constant";
// import Navb
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Toggle from "./components/Toggle/Toggle";
import Latest from "./components/Latest/Latest";
import Sidebar from "./components/Sidebar/Sidebar";
import Trending from "./components/Trending/Trending";

function App() {
  const [count, setCount] = useState(0);

  const [latestState, setLatest] = useState(true);
  const [trend, setTrend] = useState(false);
  const [side, setSide] = useState("-45rem");
  return (
    <Container>
      <Sidebar sm={side} setSm={setSide} />
      <Navbar setSm={setSide} />
      <Toggle late={setLatest} tre={setTrend} />
      {latestState && <Latest setSm={setSide} />}
      {trend && <Trending />}
      Welcome to Next.js!
    </Container>
  );
}

export default App;
