import image1 from "../../images/image 18.jpg";
import image2 from "../../images/image 19.jpg";
import image3 from "../../images/image 20.jpg";

const CommunityUpdate = () => {
  return (
    <div className="flex flex-col ml-56 md:ml-0 items-center h-[22.15rem] mt-7 overflow-hidden md:overflow-visible md:h-auto lg:h-auto">
      <div className="w-[48.29rem]">
        <h2 className=" font-semibold text-[#4D4D4D] text-[1.75rem] leading-[1.9rem] text-center">
          Caring is the new marketing
        </h2>
        <p className=" px-56 md:mx-0 mt-2 sm:mb-6 text-wrap  mb-5 text-[0.69rem] text-[#717171] text-center">
          The Nextcent blog is the best place to read about the latest
          membership insights, trends and more. See who&apos;s joining the
          community, read about how our community are increasing their
          membership income and lot&apos;s more.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-5 ">
        <div className="flex flex-col items-center relative ">
          <div>
            <img src={image1} alt="Old man using a computer" />
          </div>

          <div className="w-[13.79rem] bg-[#F5F7FA] shadow-xl flex flex-col items-center mt-[-2rem] md:absolute md:top-36 p-4 rounded-md ">
            <p className="text-center leading-[19.5px] mb-2  text-[#717171] font-semibold text-[13.69px] ">
              Creating Streamlined Safeguarding Processes with OneRen
            </p>
            <button className="flex gap-3 items-center text-green-500 mx-auto">
              <span className="text-[13.92px] font-semibold ">ReadMore</span>
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.7139 11.4094L14.006 9.1173C14.2778 8.84547 14.2778 8.40475 14.006 8.13291L11.7139 5.84083M13.8021 8.62511L4.05713 8.62511"
                  stroke="#4CAF4F"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center relative ">
          <div>
            <img src={image2} alt="Old man using a computer" />
          </div>

          <div className="w-[13.79rem] bg-[#F5F7FA] shadow-xl flex flex-col items-center mt-[-2rem] md:absolute md:top-36 p-4 rounded-md ">
            <p className="text-center leading-[19.5px] mb-2 text-[#717171] font-semibold text-[13.69px] ">
              Creating Streamlined Safeguarding Processes with OneRen
            </p>
            <button className="flex gap-3 items-center text-green-500 mx-auto">
              <span className="text-[13.69px] font-semibold ">ReadMore</span>
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.7139 11.4094L14.006 9.1173C14.2778 8.84547 14.2778 8.40475 14.006 8.13291L11.7139 5.84083M13.8021 8.62511L4.05713 8.62511"
                  stroke="#4CAF4F"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center relative ">
          <div>
            <img src={image3} alt="Old man using a computer" />
          </div>

          <div className="w-[13.79rem] bg-[#F5F7FA] shadow-xl flex flex-col items-center mt-[-2rem] md:absolute md:top-36 p-4 rounded-md ">
            <p className="text-center leading-[19.5px] mb-2 text-[#717171] font-semibold text-[13.69px]">
              Creating Streamlined Safeguarding Processes with OneRen
            </p>
            <button className="flex gap-3 items-center text-green-500 mx-auto">
              <span className="text-[13.92px] font-semibold ">ReadMore</span>
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.7139 11.4094L14.006 9.1173C14.2778 8.84547 14.2778 8.40475 14.006 8.13291L11.7139 5.84083M13.8021 8.62511L4.05713 8.62511"
                  stroke="#4CAF4F"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityUpdate;
