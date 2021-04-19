import pythonLogo from '../images/python-logo.png'
import jsLogo from '../images/js-logo.png'
import reactLogo from '../images/react-logo.png'
import nodeLogo from '../images/node-logo.png'
import SkillsTile from './SkillsTile'

function Skills() {
  return (
    <div id="skills" className="bg-gray-100">
      <div className="flex flex-col items-center">
        <div className="pt-20 pb-10">
          <h2 className="text-4xl font-bold">SKILLS</h2>
        </div>
        <div className="flex flex-wrap justify-between px-4 sm:justify-center w-screen">
            <SkillsTile imageSrc={pythonLogo} skillName="Python" />
            <SkillsTile imageSrc={jsLogo} skillName="JavaScript" />
            <SkillsTile imageSrc={reactLogo} skillName="React" />
            <SkillsTile imageSrc={nodeLogo} skillName="Node" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
