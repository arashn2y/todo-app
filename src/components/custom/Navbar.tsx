import { RxDashboard as Dashboard } from "react-icons/rx";
import { TbLogin2 as Login } from "react-icons/tb";
import { FaWhatsapp as Whatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext, ThemeType } from "../../context/ThemeContextProvider";
import { LuSun as SunIcon } from "react-icons/lu";
import { IoMoonOutline as MoonIcon } from "react-icons/io5";

function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <nav className="absolute right-10 flex gap-10">
      <Link to="/">
        <Dashboard className="cursor-pointer hover:text-gray-900 text-3xl" />
      </Link>
      <Link to="/login">
        <Login className="cursor-pointer hover:text-gray-900 text-3xl" />
      </Link>
      <Link to="/contact-us">
        <Whatsapp className="cursor-pointer text-[#128c7e] hover:text-gray-900 text-3xl" />
      </Link>

      <div onClick={() => (theme === ThemeType.LIGHT ? setTheme(ThemeType.DARK) : setTheme(ThemeType.LIGHT))}>
        {theme === ThemeType.LIGHT ? <MoonIcon className="cursor-pointer text-3xl" /> : <SunIcon className="cursor-pointer text-3xl" />}
      </div>
    </nav>
  );
}

export default Navbar;
