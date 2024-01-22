import ServiceImg from "../../public/assets/service.png";
const ServiceDetail = () => {
  return (
    <div style={{ height: `calc(100vh - 5rem)` }} className="p-10 ">
      <p className="text-center my-5  mt-5 text-2xl font-bold text-orange-500">SERVICE</p>
      <img src={ServiceImg} alt="" className="w-11/12 mx-auto" />
    </div>
  );
};

export default ServiceDetail;
