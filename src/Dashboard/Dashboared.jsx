import { SiGoogleclassroom } from "react-icons/si";
import { GrInfo } from "react-icons/gr";
import { BiHomeAlt2 } from "react-icons/bi";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    const isInstructor = true;
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
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
          {isInstructor ? (
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
          ) : (
            <li>
              <Link to={"/"}>
                <SiGoogleclassroom /> My Classes
              </Link>
            </li>
          )}

          <div className="divider"></div>
          <li>
            <Link to={"/"}>
              <BiHomeAlt2 />Home
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard