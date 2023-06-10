import { useContext } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { AuthContext } from '../../../Context/ContextProvider';
import {HiOutlineLogout} from 'react-icons/hi'
import { FaRegUserCircle } from 'react-icons/fa';
import {useQuery} from '@tanstack/react-query'
import axios from 'axios';


const Navbar = () => {
  const navigate = useNavigate()
  const {user,loading, logOut} = useContext(AuthContext)


   const handleLogOut = () => {
     logOut().then(() => {
      navigate('/sign-in')
     });
   };


   const {data:route={}} = useQuery({
    queryKey:['route-path'],
    enabled:!loading && !!user?.email,
    queryFn: async() =>{
      const res = await axios.get(`http://localhost:5000/route-path/${user?.email}`)

      return res.data
    }
   })

   console.log(route.role);
   
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
      </>
    );

   
  return (
    <div className="navbar bg-base-100 shadow-md fixed top-0 left-0 z-50">
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
        <a className="btn btn-ghost normal-case text-xl">Logo</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex">{options}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div>
            {user && (
              <div className="flex items-center gap-4">
                {user.photoURL ? (
                  <img  className='w-8 h-8 rounded-full ring-1 ring-teal-500 ring-offset-2' src={user.photoURL} referrerPolicy='no-referrer'/>
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
          <Link to={"/sign-in"} className='bg-rose-500  py-2 px-4 rounded-md text-white hover:bg-rose-400'>Login</Link>
        )}
      </div>
    </div>
  );
}

export default Navbar