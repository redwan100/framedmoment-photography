import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/ContextProvider";
import { HiOutlineLogout } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import { TbMoon } from "react-icons/tb";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiLight } from "react-icons/ci";
import useCart from "../../../Hooks/useCard/useCard";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, loading, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const [theme, setTheme] = useState(
    localStorage.getItem("") ? localStorage.getItem("theme") : "light"
  );
  const [isShow, setIsShow] = useState(true);

  const handleLogOut = () => {
    logOut().then(() => {
      navigate("/sign-in");
    });
  };

  const { data: route = {} } = useQuery({
    queryKey: ["route-path"],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/route-path/${user?.email}`
      );

      return res.data;
    },
  });

  const options = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/instructors"}>Instructor</Link>
      </li>
      <li>
        <Link to={"/classes"}>All Class</Link>
      </li>

      {user && (
        <li>
          {route.role === "student" && (
            <Link to="/dashboard/my-select-class">Dashboard</Link>
          )}
          {route.role === "instructor" && (
            <Link to="/dashboard/my-classes">Dashboard</Link>
          )}
          {route.role === "admin" && (
            <Link to="/dashboard/manage-class">Dashboard</Link>
          )}
        </li>
      )}
      {route.role === "student" && (
        <li>
          <Link to={"/dashboard/my-select-class"} className="relative">
            <AiOutlineShoppingCart size={25} />
            <span className="bg-red-500 w-6 h-6 grid place-content-center rounded-full font-bold text-white text-xs absolute top-0 right-0">
              {cart.length}
            </span>
          </Link>
        </li>
      )}
    </>
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem(theme);
    document.querySelector("html").setAttribute("data-theme", localTheme);
    
  }, [theme]);

  const toggleTheme = () => {
    setIsShow(!isShow);
    if (isShow) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  console.log(document.querySelector('html'));

  return (
    <div className="bg-base-300 shadow-md fixed top-0 left-0 z-50 w-full">
      <div className="navbar my-container">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {options}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Logo</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex">{options}</ul>
        </div>
        <div className="navbar-end">
          {/* THEM ICON */}
          <div className="mx-4">
            {isShow ? (
              <span onClick={toggleTheme}>
                <CiLight size={25} cursor={"pointer"} />
              </span>
            ) : (
              <span onClick={toggleTheme}>
                <TbMoon size={25} cursor={"pointer"} />
              </span>
            )}
          </div>
          {user ? (
            <div>
              {user && (
                <div className="flex items-center gap-4">
                  {user.photoURL ? (
                    <img
                      className="w-8 h-8 rounded-full ring-1 ring-teal-500 ring-offset-2 object-cover"
                      src={user.photoURL}
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <FaRegUserCircle size={25} />
                  )}
                  <button title="Log out" onClick={handleLogOut}>
                    <HiOutlineLogout size={25} />
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to={"/sign-in"}
              className="bg-rose-500  py-2 px-4 rounded-md text-white hover:bg-rose-400"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
