import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";

const MainLayout = () => {
    return (
        <div className="font-Montserrat bg-primary">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;