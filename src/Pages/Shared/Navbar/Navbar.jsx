import { useContext } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { AuthContext } from '../../../Context/ContextProvider';
const Navbar = () => {
  const navigate = useNavigate()
  const {user, logOut} = useContext(AuthContext)
   const handleLogOut = () => {
     logOut().then(() => {
      navigate('/sign-in')
     });
   };
   
    const options = (
      <>
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
        <li>
          {user ? (
            <button onClick={handleLogOut}>Log out</button>
          ) : (
            <Link to={"/sign-in"}>Login</Link>
          )}
        </li>
      </>
    );

   
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
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
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex">
          {options}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-sm">Dashboard</a>
      </div>
    </div>
  );
}

export default Navbar