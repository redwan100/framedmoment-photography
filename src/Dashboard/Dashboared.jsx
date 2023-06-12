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


const Dashboard = () => {
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
          {/* Sidebar content here */}
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

          <div className="divider"></div>
          <li>
            <Link to={"/"}>
              <BiHomeAlt2 />
              Home
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard