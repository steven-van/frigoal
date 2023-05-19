import logo from "./logo.svg";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import Profile from "./pages/Profile.js";
import SignUp from "./pages/SignUp.js";
import Recipe from "./pages/Recipe";

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Profile" element={<Profile />} />
        <Route exact path="/SignUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;