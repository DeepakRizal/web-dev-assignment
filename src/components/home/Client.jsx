import logo1 from "../../assets/clientspng/Logo.png";
import logo2 from "../../assets/clientspng/Logo (1).png";
import logo3 from "../../assets/clientspng/Logo (2).png";
import logo4 from "../../assets/clientspng/Logo (3).png";
import logo5 from "../../assets/clientspng/Logo (4).png";
import logo6 from "../../assets/clientspng/Logo (5).png";

const Client = () => {
  return (
    <div className="bg-white py-4 ml-56 md:ml-0 md:py-10">
      <div className="text-center">
        <h2 className="font-semibold text-2xl md:text-3xl text-gray-700">
          Our Clients
        </h2>
        <p className="text-sm md:text-base text-gray-600">
          We have been working with some Fortune 500+ clients
        </p>
      </div>
      <div className="mt-4 flex  justify-center gap-10 md:gap-20 lg:justify-around md:mt-8 lg:px-[100px]">
        <img src={logo1} alt="Logos of the client" />
        <img src={logo2} alt="Logos of the client" />
        <img src={logo3} alt="Logos of the client" />
        <img src={logo4} alt="Logos of the client" />
        <img src={logo5} alt="Logos of the client" />
        <img src={logo6} alt="Logos of the client" />
      </div>
    </div>
  );
};

export default Client;
