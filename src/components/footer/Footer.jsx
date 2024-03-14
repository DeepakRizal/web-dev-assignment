import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SendIcon from "@mui/icons-material/Send";

const Footer = () => {
  return (
    <div className=" mt-10 bg-[#F5F7FA] ml-56 md:ml-0 text-white ">
      <div className="py-[22.7px] flex flex-col items-center">
        <h2 className="text-center px-56 md:px-0 text-[#263238] font-semibold text-[2.78rem] w-[53.59rem] leading-[52.9px] mb-7 ">
          Lorem ipsum dolor sit amet consectetuer
        </h2>

        <button className="bg-green-500 text-white px-[22.27px] py-[9.74px] rounded-md flex items-center gap-4 mx-auto">
          <span>Learn more</span>
          <svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.7139 11.4094L14.006 9.1173C14.2778 8.84547 14.2778 8.40475 14.006 8.13291L11.7139 5.84083M13.8021 8.62511L4.05713 8.62511"
              stroke="#fff"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-10 md:justify-between items-center bg-[#263238] px-[7.17rem] py-[2.78rem]">
        <div>
          <p className="text-[9.74px] text-gray-300">
            Copyright © 2020 Landify UI Kit.
          </p>
          <p className="text-[9.74px] text-gray-300">All rights reserved</p>

          <div className="flex gap-3 mt-5">
            <InstagramIcon />
            <LanguageIcon />
            <TwitterIcon />
            <YouTubeIcon />
          </div>
        </div>

        <div className="flex flex-wrap gap-10">
          <div className="leading-5 ">
            <h3>Company</h3>
            <p className="text-[0.69rem] text-gray-400">About us</p>
            <p className="text-[0.69rem] text-gray-400">Blog</p>
            <p className="text-[0.69rem] text-gray-400">Contact us</p>
            <p className="text-[0.69rem] text-gray-400">Pricing</p>
            <p className="text-[0.69rem] text-gray-400">Testimonials</p>
          </div>
          <div className="leading-5">
            <h3>Support</h3>
            <p className="text-[0.69rem] text-gray-400">Help center</p>
            <p className="text-[0.69rem] text-gray-400">Terms of service</p>
            <p className="text-[0.69rem] text-gray-400">Legal</p>
            <p className="text-[0.69rem] text-gray-400">Privacy policy</p>
            <p className="text-[0.69rem] text-gray-400">status</p>
          </div>
          <div>
            <h3>Stay up to date</h3>
            <div className="bg-gray-500 flex items-center rounded-md p-1">
              <input
                type="text"
                className="outline-none border-none bg-transparent text-gray-600 placeholder:text-xs placeholder-gray-200 flex-grow"
                placeholder="Your email address"
              />
              <SendIcon className="text-gray-600 ml-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
