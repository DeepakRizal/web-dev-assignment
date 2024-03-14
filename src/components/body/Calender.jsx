import pana from "../../images/pana.png";

const Calender = () => {
  return (
    <div className="bg-white flex flex-col md:flex-row md:justify-center ml-56 md:ml-0 md:px-34 lg:justify-around mt-5 items-center">
      <div className="w-[19.2rem] h-[18.855rem] ">
        <img src={pana} alt="The mobile view image" />
      </div>
      <div className="w-[28.75rem]">
        <h2 className=" font-semibold text-[#4D4D4D] text-[1.75rem] leading-[1.9rem]">
          How to design your site footer like we did
        </h2>
        <p className=" mt-2 mb-5 text-[0.69rem] text-[#717171]">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <button className="bg-green-500 text-white px-[22.27px] py-[9.74px] rounded-md">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Calender;
