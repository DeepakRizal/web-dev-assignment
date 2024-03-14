import heroImage from "../../images/Illustration.png";
import dot from "../../images/Dot.png";

const Hero = () => {
  return (
    <div className=" relative  ">
      <div className="bg-[#F5F7FA] px-24 py-[4.175rem] flex flex-col lg:flex-row  h-[96] items-center gap-10 relative ml-56 md:ml-14 lg:ml-0">
        <div className="w-[70%] flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <h1 className="text-gray-700 font-semibold leading-[52.9px] text-5xl ">
              Lessons and insights{" "}
              <span className="text-green-500">from 8 years</span>
            </h1>

            <p className="text-xs text-[#717171]">
              Where to grow your business as a photographer: site or social
              media?
            </p>
          </div>

          <button className="lg:mr-auto px-4 py-3 rounded-sm bg-green-500 text-white">
            Register
          </button>
        </div>

        <div className="w-80 h-80">
          <img src={heroImage} alt="This is the hero image" />
        </div>
      </div>
      <img
        src={dot}
        alt="Dot image"
        className="absolute  bottom-3 left-1/2 transform -translate-x-1/2 -mt-10"
      />
    </div>
  );
};

export default Hero;
