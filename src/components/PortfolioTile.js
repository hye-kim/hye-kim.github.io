import BrowserTile from "./BrowserTile";
import ProjectInfo from "./ProjectInfo";

function PortfolioTile({
  projectName,
  projectUrl,
  projectPic,
  projectDescription,
  githubUrl,
}) {
  return (
    <>
      <div className="pb-8 sm:px-8">
        <BrowserTile
          projectName={projectName}
          projectUrl={projectUrl}
          projectPic={projectPic}
        />
        <ProjectInfo
          projectName={projectName}
          githubUrl={githubUrl}
          projectDescription={projectDescription}
        />
      </div>
    </>
  );
}

export default PortfolioTile;
