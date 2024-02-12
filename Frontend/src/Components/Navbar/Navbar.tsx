import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full pt-2">
      <div className=" backdrop-blur-xl flex">
        <div className="px-8 py-10 w-[20%] shadow-lg text-white bg-white/50 h-10 rounded-full mx-auto flex justify-between items-center ">
          <NavLink to="/todo">
            {({ isActive }) => (
              <span className={`text-4xl p-3 ${isActive ? "bg-white/30 rounded-full shadow-lg" : ""}`}>✍</span>
            )}
          </NavLink>
          <NavLink to="/location">
            {({ isActive }) => (
              <span className={`text-4xl p-3 ${isActive ? "bg-white/30 rounded-full shadow-lg" : ""}`}>📍</span>
            )}
          </NavLink>
          <NavLink to="/">
            {({ isActive }) => (
              <span className={`text-4xl p-3 ${isActive ? "bg-white/30 rounded-full shadow-lg" : ""}`}>😗</span>
            )}
          </NavLink>
          {/* <Link to="/todo">
            <div className="text-4xl ">
              ✍
            </div>
          </Link> */}
          {/* <Link to="/location">
            <div className="text-4xl">📍</div>
          </Link> */}
          {/* <Link to="/">
            <div className="text-4xl">😗</div>
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
