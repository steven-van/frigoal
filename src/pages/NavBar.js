import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/login">
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link to="/signUp">
                            Sign Up
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile">
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link to="/recipe">
                            Recipe
                        </Link>
                    </li>
                    <li>
                        <Link to="/fridge">
                            Fridge
                        </Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default NavBar;