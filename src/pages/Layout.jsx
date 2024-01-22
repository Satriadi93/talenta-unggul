import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
//import Sidebar from "../components/Sidebar";

const Layout = ({children, page }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, [pathname]);

    Layout.propTypes={
        children: PropTypes.node.isRequired,
        page: PropTypes.string.isRequired,
    }
  return (
    <>
      <React.Fragment>
        <Navbar page={page} />
        <main>
            <div className="">{children}</div>
        </main>
        <Footer/>
      </React.Fragment>
    </>
  )
}

export default Layout
