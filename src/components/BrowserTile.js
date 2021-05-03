function BrowserTile({ projectName, projectUrl, projectPic }) {
  return (
    <div className="bg-gray-100 flex flex-col rounded-lg shadow-2xl relative top-28 left-5 -mt-20 mr-10">
      <div className="flex pt-1 pb-2">
        <div className="flex items-center pl-2">
          <div className="bg-red-500 rounded-full h-3 w-3 mx-1"></div>
          <div className="bg-yellow-200 rounded-full h-3 w-3 mx-1"></div>
          <div className="bg-green-400 rounded-full h-3 w-3 mx-1"></div>
        </div>
        <div className="bg-gray-200 rounded-md flex justify-center self-center ml-4 w-7/12 sm:ml-8">
          <p>{projectName}</p>
        </div>
      </div>
      <a href={projectUrl}>
        <div
          className={
            `${projectPic} bg-black bg-opacity-30 bg-blend-multiply
            h-48 w-80 rounded-b-lg bg-cover bg-center
            flex justify-center items-center
            sm:hover:bg-opacity-10 sm:duration-300
            sm:bg-opacity-70 m-0.5 sm:w-96 sm:h-56`
          }
        >
          <p className="text-white font-medium text-lg">Live Preview</p>
        </div>
      </a>
    </div>
  );
}

export default BrowserTile;
