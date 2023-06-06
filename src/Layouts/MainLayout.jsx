import { Outlet } from "react-router-dom"
import Navbar from "../Pages/Shared/Navbar/Navbar"
import Footer from "../Pages/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="my-container">
        <Outlet />
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout