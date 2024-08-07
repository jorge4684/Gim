import icon from "../assets/icon.png";
import { Link } from "react-router-dom";
import SearchComponent from "./Search";

function NavBar() {
  return (
    <>
      <div className="flex w-full h-20 bg-red-800 absolute top-0 items-center place-content-between">
        <img src={icon} alt="logo" className=" flex w-16 m" />
        <SearchComponent className="place-content-center w-40" />
        <div className="flex">
          <buttom
            className="w-32 h-12 bg-yellow-500 text-center place-content-center rounded-xl items-center mr-3 "
            onClick={() => {
              <Link to="/loginssss"></Link>;
            }}
          >
            Login
          </buttom>
          <buttom
            className="w-32 h-12 bg-blue-500 text-center place-content-center rounded-xl items-center mr-3 "
            onClick={() => {}}
          >
            Register
          </buttom>
        </div>
      </div>
    </>
  );
}

export default NavBar;
