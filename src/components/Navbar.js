import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="flex justify-center flex-wrap pt-8 pb-20">
      <div className="px-4 sm:px-8 font-bold text-sm sm:text-xl">
        <Link to="hero" className="cursor-pointer" smooth={true} duration={500}>
          About me
        </Link>
      </div>
      <div className="px-4 sm:px-8 text-sm sm:text-xl">
        <Link to="portfolio" className="cursor-pointer" smooth={true} duration={500}>
          Portfolio
        </Link>
      </div>
      <div className="px-4 sm:px-8 text-sm sm:text-xl">
        <Link to="skills" className="cursor-pointer" smooth={true} duration={500}>
          Skills
        </Link>
      </div>
      <div className="px-4 sm:px-8 text-sm sm:text-xl">
        <Link to="contact" className="cursor-pointer" smooth={true} duration={500}>
          Contact Me
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
