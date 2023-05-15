import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import SignUp from "./pages/SignUp.js";
import Profile from "./pages/Profile.js";
import Recipes from "./pages/Recipes.js";
import Fridges from "./pages/Fridges.js";
import NotFound from "./pages/NotFound.js";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<SignUp />} />
                <Route exact path="/recipes" element={<Recipes />} />
                <Route exact path="/fridges" element={<Fridges />} />
                <Route exact path="/profile" element={<Profile />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
