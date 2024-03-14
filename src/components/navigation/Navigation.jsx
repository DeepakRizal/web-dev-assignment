import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="flex flex-col md:flex-row   md:px-32   items-center min-h-[58.76px] bg-white">
      <span className="text-green-500 ">
        <span className="text-black">P</span>cl
      </span>

      <div className="flex ml-56 justify-end flex-grow md:ml-auto ">
        <div className="flex items-center gap-4 ">
          <Link className="text-gray-700" to="/">
            Home
          </Link>
          <Link className="text-gray-700" to="/feature">
            Feature
          </Link>
          <Link className="text-gray-700" to="/community">
            Community
          </Link>
          <Link className="text-gray-700" to="/blog">
            Blog
          </Link>
          <Link className="text-gray-700" to="/pricing">
            Pricing
          </Link>
          <Link
            to="/register"
            className="bg-green-500 px-[22.27px] py-[9.74px] rounded-md text-white"
          >
            Register now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
