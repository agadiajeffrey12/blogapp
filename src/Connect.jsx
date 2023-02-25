import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, createContext, useEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import { Container } from "./components/constant";
import App from "./App";
import ProfilePage from "./Profilepage";
import { Context } from "./Context";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export default function Connect() {
  const [latestState, setLatest] = useState(true);
  const [trend, setTrend] = useState(false);
  const [side, setSide] = useState("-45rem");
  const [tog, setTog] = useState(true);
  const [Reg, setReg] = useState(false);
  const [pop, setPop] = useState(false);
  const [control, setControl] = useState([]);

  const [contents, setContents] = useState({});
  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      const arr = [doc.data()];
      setControl(() => [doc.data()]);
      console.log(control);
    });
  };
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setContents({ users: user, maro: "girl" });
      }
    });
    getData();
  }, []);
  console.log(contents.users, contents.maro);

  return (
    <Context.Provider value={contents}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route exact path="/Profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}
