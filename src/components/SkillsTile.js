function SkillsTile({ imageSrc, skillName }) {
  return (
    <div className="flex flex-col items-center px-2 py-2 sm:px-16">
      <img src={imageSrc} alt="python logo" className="h-24 w-24 sm:h-36 sm:w-36" />
      <div className="pt-2">
          <p>{skillName}</p>
      </div>
    </div>
  );
}

export default SkillsTile;
