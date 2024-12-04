import { RxDashboard as Dashboard } from "react-icons/rx";
import { LiaUserEditSolid as Signup } from "react-icons/lia";
import { TbLogin2 as Login } from "react-icons/tb";
import { FaWhatsapp as Whatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

import ThemeToggler from "./ThemeToggler"

function Navbar() {

  return (
    <nav className="absolute right-10 flex gap-10">
      <Link to="/">
        <Dashboard className="cursor-pointer hover:text-gray-900 dark:hover:text-gray-600 text-3xl" />
      </Link>
      <Link to="/signup">
        <Signup className="cursor-pointer hover:text-gray-900 dark:hover:text-gray-600 text-3xl" />
      </Link>
      <Link to="/login">
        <Login className="cursor-pointer hover:text-gray-900 dark:hover:text-gray-600 text-3xl" />
      </Link>
      <Link to="/contact-us">
        <Whatsapp className="cursor-pointer text-[#25D366] hover:text-[#128c7e] text-3xl" />
      </Link>

      <ThemeToggler className={'cursor-pointer hover:text-gray-900 text-3xl dark:text-yellow-300 dark:hover:text-yellow-600'} />

    </nav>
  );
}

export default Navbar;
