import logo from "./logo.svg";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import Profile from "./pages/Profile.js";
import SignUp from "./pages/SignUp.js";
import Ingredients from "./pages/Ingredients.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Profile" element={<Profile />} />
        <Route exact path="/SignUp" element={<SignUp />} />
        <Route exact path="/Fridge" element={<Ingredients />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;