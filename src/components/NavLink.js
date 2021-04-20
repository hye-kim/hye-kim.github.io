import { Link } from "react-scroll";

function NavLink({ path, text }) {
  return (
    <div className="px-4 sm:px-8 font-bold text-sm sm:text-xl">
      <Link to={path} className="cursor-pointer" smooth={true} duration={500}>
        {text}
      </Link>
    </div>
  );
}

export default NavLink;
