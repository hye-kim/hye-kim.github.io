import NavLink from "./NavLink";

function Navbar() {
  return (
    <nav className="flex justify-center flex-wrap pt-8 pb-20">
      <NavLink path="hero" text="About me" />
      <NavLink path="portfolio" text="Portfolio" />
      <NavLink path="skills" text="Skills" />
      <NavLink path="contact" text="Contact" />
    </nav>
  );
}

export default Navbar;
