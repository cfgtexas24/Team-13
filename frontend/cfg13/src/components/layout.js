import { Outlet, Link } from "react-router-dom";
import Navbar from "./navBars/employerNavbar";
import LandingPage from "./landingPage";

function Layout() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default Layout;