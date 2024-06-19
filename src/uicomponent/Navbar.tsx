import logo from "../assets/easyrent.png";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full top-0">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-2">
        <div>
          <Link to="/" className="flex items-center gap-5">
            <img src={logo} className="rounded-full h-16" />
            <div className="flex bg-sky-500 rounded-full px-3 py-2 items-center justify-center cursor-pointer">
              Easy Rent Ghana
            </div>
          </Link>
        </div>
        <div className="flex gap-5">
          <h3 className="font-normal text-white rounded p-2 bg-sky-500 hover:bg-sky-600 cursor:pointer">
            Get In Touch
          </h3>

          <h3 className="font-normal text-white rounded p-2 bg-sky-500 hover:bg-sky-600 ">
            <Link to={"/privacy"}>Privacy Policy</Link>
          </h3>

          {/* <h3 className="font-normal text-white rounded p-2 bg-sky-500 hover:bg-sky-600">
            <a href="#">Our Story</a>
          </h3> */}
        </div>
      </div>
    </nav>
  );
}
