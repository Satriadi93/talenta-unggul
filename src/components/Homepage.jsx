import About from "./About";

const Homepage = () => {
    return (
      <div  className="bg-gradient-to-r from-sky-500 to-indigo-500">
        <div className="absolute h-20 w-20 bg-white rounded-full blur-2xl ms-40 "></div>
        <div className="absolute h-10 w-20 bg-white rounded-full blur-2xl ms-96 mt-96 "></div>
        <div  className=" flex justify-center pt-5">
          <div className="">
            <div className="text-6xl font-bold">
              <p className="text-gray-800 text-center my-1">
                KEEP <span className="text-gray-700">THINGS </span>
              </p>
              <p className="text-center text-orange-500 my-1">MOVING</p>
            </div>
            <div className="">
              <p className="text-md text-center w-3/4 mx-auto my-5">
                In modern industry, wait and see is not an option. Industrial technology will continue moving like ocean and run in the midst of human life
              </p>
              {/* <button className="flex mx-auto px-3 py-2 bg-orange-400 font-bold rounded-full text-white drop-shadow-2xl hover:bg-white hover:ring-2 hover:ring-orange-500 hover:text-gray-900 ease-in-out duration-700">Getting Started</button> */}
            </div>
          </div>
        </div>
        <About/>

      </div>
    );
  };
  
  export default Homepage;