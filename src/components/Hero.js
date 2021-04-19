import Navbar from "./Navbar";

function Hero() {
  return (
    <div id="hero" className="bg-black bg-opacity-70 bg-blend-multiply bg-hero-pattern bg-center bg-cover">
      <div className="flex flex-col text-white items-center pb-28">
        <Navbar />
        <div className="bg-profile-pic h-56 w-56 sm:h-64 sm:w-64 rounded-full bg-cover bg-center"></div>
        <div className="pt-8 pb-4 px-40 border-b-2 border-white">
          <h1 className="text-5xl sm:text-6xl font-black whitespace-nowrap">DAVID KIM</h1>
        </div>
        <div className="py-6">
          <h2 className="text-3xl sm:text-4xl">I'm a software engineer</h2>
        </div>
      </div>
    </div>
  );
}

export default Hero;
