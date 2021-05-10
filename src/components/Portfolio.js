import PortfolioTile from "./PortfolioTile";

function Portfolio() {
  return (
    <div id="portfolio" className="pb-20">
      <div className="flex flex-col items-center">
        <div className="pt-20 pb-5">
          <h2 className="text-4xl font-bold">PORTFOLIO</h2>
        </div>
        <div className="flex flex-col lg:flex-row">
          <PortfolioTile
            projectName="Veni Vidi Voravi"
            projectUrl="https://venividivoravi.herokuapp.com/"
            projectPic="bg-project-pic-1"
            projectDescription="Veni Vidi Voravi is inspired by Medium and allows users to share and discover experiences from different culinary adventures. Users can browse, create, and edit their own stories, and leave comments or claps on other stories they found enjoyable."
            githubUrl="https://github.com/rsdimatulac/Veni-Vidi-Voravi"
          />
          <PortfolioTile
            projectName="Muse"
            projectUrl="https://muse.hyekim.me/"
            projectPic="bg-project-pic-2"
            projectDescription="Muse is a clone of Genius centered around poems. The site allows users to view poems, add annotations to lines that provide insight on what the poet might have been trying to convey, and add comments to poems for further discussion with other users."
            githubUrl="https://github.com/hye-kim/muse-app"
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
