import Logo from "../../public/assets/logo.png";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate();

  const page = props.page;

  Navbar.propTypes = {
    page: PropTypes.string.isRequired,
  };

  return (
    <>
      <nav className=" font-Poppins p-2 sticky top-0 bg-white h-24 z-50 border-b-2">
        <div className="flex flex-row">
          <div className="basis-1/4  ">
            <div className="end-0 flex justify-end">
              <img src={Logo} alt="" className="w-20  " />
            </div>
          </div>
          <div className="basis-4/5 font-bold my-auto text-gray-700 select-none ">
            <div className=" justify-center flex">
              <span onClick={() => navigate("/")} className={`mx-2 cursor-pointer hover:text-orange-500 ${page === "INTRODUCTION" && "text-orange-500 border-b-2 border-orange-500"}`}>
                INTRODUCTION
              </span>
              <span onClick={() => navigate("/service")} className={`mx-2 cursor-pointer hover:text-orange-500 ${page === "SERVICE" && "text-orange-500 border-b-2 border-orange-500"}`}>
                SERVICE & PRODUCT
              </span>
              <span onClick={() => navigate("/project")} className={`mx-2 cursor-pointer hover:text-orange-500 ${page === "PROJECT" && "text-orange-500 border-b-2 border-orange-500"}`}>
                PROJECT HISTORY
              </span>
              <span onClick={() => navigate("/article")} className={`mx-2 cursor-pointer hover:text-orange-500 ${page === "ARTICLE" && "text-orange-500 border-b-2 border-orange-500"}`}>
                ARTICLE
              </span>
              <span onClick={() => navigate("/contact")} className={`mx-2 cursor-pointer hover:text-orange-500 ${page === "CONTACT" && "text-orange-500 border-b-2 border-orange-500"}`}>
                CONTACT
              </span>
            </div>
          </div>
          <div className="basis-1/4 text-center my-auto font-bold">Login</div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
