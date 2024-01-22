import AboutLine from "../../public/assets/about.png";
import NtbPeta from "../../public/assets/ntb.png";

const About = () => {
  return (
    <div className=" p-10 py-10 mx-10">
      <div className="grid grid-cols-2">
        <div className="ms-32">
          <p className="text-orange-500 text-4xl font-bold">About Us</p>
          <img src={AboutLine} alt="" className=" w-40 mb-6 blur-sm" />
          <p className="text-justify">
            <span className="mx-5"></span>
            <span className="text-orange-500 font-bold">Established </span> in 2021 by the most experienced and ambitious Indonesian professional engineer from multi sector such as oil & gas, power generation, oleo chemical, pulp & paper and mining
            industry, we are specialist to supports client’s most need: professional engineer to support client’s project with a vision to be preferred regional player in to support national project development
          </p>
          <p className="text-justify">
            <span className="mx-5"></span>Our office location in Mataram, a capital city of West Nusa Tenggara in a beautiful Lombok island with spirit to develop local engineer
          </p>
          <button className="ring-1 ring-orange-500 rounded-full px-4 py-1 my-5 text-white font-bold   hover:ring-orange-500 hover:bg-orange-500 hover:text-white  ease-in-out duration-1000">Learn More</button>
        </div>
        <div className="">
          <img src={NtbPeta} alt="" className="w-80 mx-auto" />
        </div>
      </div>
      <div className="ms-32 ">
        <p className="text-2xl font-bold text-orange-500">VISION</p>
        <p className="font-Cursive italic mb-5"> &quot; To became the most soultion company with valualble experience &quot;</p>
        <p className="text-2xl font-bold text-orange-500">MISSION</p>
        <p className="font-Cursive italic mb-5"> &quot; Through moving to have continues best quality, cost and delivery for our customer with local engineering development. &quot;</p>
        <p className="text-2xl font-bold text-orange-500 my-1">OUR VALUES</p>
        <div className="grid grid-cols-7 ">
          <div className=" my-1">INTEGRITY</div>
          <div className="col-span-6 my-1">We are committed to operating with the highest integrity in all aspects of our work</div>
          <div className=" my-1">RESPOSSIBILITY</div>
          <div className="col-span-6 my-1">We are dedicated to delivering outstanding results, meeting client expectations, and making a positive impact on the community.</div>
          <div className=" my-1">PROFESSIONALISM</div>
          <div className="col-span-6 my-1">Our team of experienced and ambitious engineers is dedicated to providing high-quality services that align with international industry standards.</div>
          <div className=" my-1">ETHICS</div>
          <div className="col-span-6 my-1">We conduct business strictly adhering to ethical values, establishing a strong foundation for long-term sustainability and customer trust.</div>
        </div>
      </div>
    </div>
  );
};

export default About;
