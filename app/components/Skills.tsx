import React from 'react';
import { FaLaptopCode, FaPaintBrush, FaFileWord, FaVideo } from 'react-icons/fa';

interface SkillProps {
  skillName: string;
  percentage: number;
  icon: React.ReactElement;
}

const Skill: React.FC<SkillProps> = ({ skillName, percentage, icon }) => (
  <div className="group relative overflow-hidden rounded-lg bg-base-200 p-6 transition-all duration-300 hover:shadow-lg hover:bg-base-300">
    <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary opacity-10 transition-all duration-300 group-hover:scale-150"></div>
    <div className="relative z-10">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="text-2xl text-primary">{icon}</div>
          <h3 className="text-lg font-semibold text-base-content">{skillName}</h3>
        </div>
        <span className="text-lg font-bold text-primary">{percentage}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-base-300">
        <div 
          className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  </div>
);

const Skills: React.FC = () => {
  const skills = [
    { name: 'Web Development', percentage: 80, icon: <FaLaptopCode /> },
    { name: 'Desain Grafis', percentage: 70, icon: <FaPaintBrush /> },
    { name: 'MS Office', percentage: 80, icon: <FaFileWord /> },
    { name: 'Video Editing', percentage: 85, icon: <FaVideo /> },
  ];

  return (
    <div className="p-8 bg-base-100 rounded-3xl shadow-xl">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-base-content">
          <span className="relative">
            Skills Progress
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </span>
        </h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((skill, index) => (
            <Skill 
              key={index}
              skillName={skill.name}
              percentage={skill.percentage}
              icon={skill.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;