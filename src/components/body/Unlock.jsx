import unlockImg from "../../images/Frame 35.png";
const Unlock = () => {
  return (
    <div className="flex flex-col ml-56 md:ml-0 md:px-32 lg:px-0 md:flex-row md:justify-center lg:justify-around items-center">
      <div className="w-[19.8rem]">
        <img src={unlockImg} alt="Unlock image" />
      </div>
      <div className="w-[26.25rem] ">
        <div>
          <h2 className=" font-semibold text-[#4D4D4D] text-[1.75rem] leading-[1.9rem]">
            The unseen of spending three years at Pixelgrade
          </h2>
          <p className=" mt-2 mb-5 text-[0.69rem] text-[#717171]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
        </div>

        <button className="bg-green-500 text-white px-[22.27px] py-[9.74px] rounded-md">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Unlock;
