function ProjectInfo({ projectName, projectDescription, githubUrl }) {
  return (
    <div className="flex flex-col items-center pt-36 px-4 bg-gray-100 border-gray-200 border project-description">
      <div>
        <h3 className="font-bold text-xl">{projectName}</h3>
      </div>
      <div className="py-2 px-3 max-w-xs">
        <p>
          {projectDescription}
        </p>
      </div>
      <div className="pt-2 pb-4">
        <a href={githubUrl}>
          <button className="bg-blue-700 text-white font-semibold py-2 px-8 rounded-sm">
            Github
          </button>
        </a>
      </div>
    </div>
  );
}

export default ProjectInfo;
