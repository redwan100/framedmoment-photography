import { SiGoogleclassroom } from "react-icons/si";
import { GrInfo } from "react-icons/gr";
import { MdHistory } from "react-icons/md";
import { BiHomeAlt2 } from "react-icons/bi";
import { HiOutlineUsers } from "react-icons/hi";
import { SlGraduation } from "react-icons/sl";
import { BsBookmarks } from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin/useAdmin";
import useInstructor from "../Hooks/useInstructor/useInstructor";
import Loading from "../Pages/Shared/Loading/Loading";
import useStudent from "../Hooks/useStudent/useStudent";
import { useContext } from "react";
import { AuthContext } from "../Context/ContextProvider";


const Dashboard = () => {
  const {user} = useContext(AuthContext)
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isInstructor, isInstructorLoading] = useInstructor();
  const [isStudent, isStudentLoading] = useStudent();
  
  // const isUser = isAdmin || isInstructor || isStudent
  // console.log(isStudent);

  if(isAdminLoading || isInstructorLoading || isStudentLoading){
    return <Loading />
  }
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center my-8">
        {/* Page content here */}
        <Outlet />

        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {/* USER INFO-------------------  */}

          <div className="bg-base-100 py-8 rounded-md shadow-md shadow-base-200">
            <div className="text-center space-y-2">
              {user?.email && (
                <div className="w-16 h-16 mx-auto">
                  <img
                    src={user?.photoURL}
                    alt="user photo"
                    className="w-full h-full object-cover rounded-full aspect-square ring-2 ring-slate-500"
                  />
                </div>
              )}
              <div>
                <h1 className="text-2xl font-semibold">{user?.displayName || "No name"}</h1>
                <h1>{user?.email}</h1>
              </div>
            </div>
          </div>

          <div className="divider"></div>
          <li>
            <Link to={"/"}>
              <BiHomeAlt2 />
              Home
            </Link>
          </li>

          {/* Sidebar content here */}
          <div>
            {isInstructor.instructor && (
              <>
                <li>
                  <Link to={"/dashboard/add-class"}>
                    <GrInfo /> Add Class
                  </Link>
                </li>
                <li>
                  <Link to={"/dashboard/my-classes"}>
                    <SiGoogleclassroom /> My Classes
                  </Link>
                </li>
              </>
            )}

            {isAdmin.admin && (
              <>
                <li>
                  <Link to={"/dashboard/manage-class"}>
                    <SlGraduation /> Manage Class
                  </Link>
                </li>
                <li>
                  <Link to={"/dashboard/manage-user"}>
                    <HiOutlineUsers /> Manage users
                  </Link>
                </li>
              </>
            )}

            {isStudent.student && (
              <>
                <li>
                  <Link to={"/dashboard/my-select-class"}>
                    <BsBookmarks /> My select class
                  </Link>
                </li>
                <li>
                  <Link to={"/dashboard/my-enrolled-class"}>
                    <HiOutlineUsers /> My Enrolled class
                  </Link>
                </li>
                <li>
                  <Link to={"/dashboard/payment-history"}>
                    <MdHistory /> Payment History
                  </Link>
                </li>
              </>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard