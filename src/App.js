import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthContextProvider from "./AuthContext";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import SignUp from "./pages/SignUp.js";
import Profile from "./pages/Profile.js";
import Recipes from "./pages/Recipes.js";
import Fridges from "./pages/Fridges.js";
import NotFound from "./pages/NotFound.js";
import Ingredients from "./pages/Ingredients.js";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/recipes" element={<Recipes />} />
          <Route exact path="/fridges" element={<Fridges />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/ingredients" element={<Ingredients />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
