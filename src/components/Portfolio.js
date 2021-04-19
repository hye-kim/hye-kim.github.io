import PortfolioTile from "./PortfolioTile";

function Portfolio() {
  return (
    <div id="portfolio" className="pb-20">
      <div className="flex flex-col items-center">
        <div className="pt-20 pb-5">
          <h2 className="text-4xl font-bold">PORTFOLIO</h2>
        </div>
        <div className="flex flex-col sm:flex-row">
          <PortfolioTile
            projectName="Veni Vidi Voravi"
            projectUrl="https://venividivoravi.herokuapp.com/"
            projectPic="bg-project-pic-1"
            projectDescription="description of project"
            githubUrl="https://github.com/rsdimatulac/Veni-Vidi-Voravi"
          />
          <PortfolioTile
            projectName="Project name"
            projectUrl=""
            projectPic="bg-project-pic-2"
            projectDescription="description of project"
            githubUrl=""
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
