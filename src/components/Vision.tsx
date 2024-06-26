import { useState } from "react";
import Title from "./Title";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Achievement from "./Achievement";
import { FadeIn } from "./FadeIn";

const Vision = () => {
  const [educationData, setEducationData] = useState<boolean>(true);
  
  const [skillData, setSkillData] = useState<boolean>(false);
  const [experienceData, setExperienceData] = useState<boolean>(false);
  const [achievementData, setAchievementData] = useState<boolean>(false);
  return (
    <section
      id="vision"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title title="future development" des="Vision" />
        </div>
        <div>
          <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
            <li
              onClick={() => {
                setEducationData(true);
                setSkillData(false);
                setExperienceData(false);
                setAchievementData(false);
              }}
              className={`${
                educationData
                  ? "border-designColor rounded-lg"
                  : "border-transparent"
              } resumeLi`}
            >
              Timeline
            </li>
            <li
              onClick={() => {
                setEducationData(false);
                setSkillData(true);
                setExperienceData(false);
                setAchievementData(false);
              }}
              className={`${
                skillData
                  ? "border-designColor rounded-lg"
                  : "border-transparent"
              } resumeLi`}
            >
              Accuracy
            </li>
           
          </ul>
        </div>
        {educationData && <Education />}
        {skillData && <Skills />}
        {achievementData && <Achievement />}
        {experienceData && <Experience />}
      </FadeIn>
    </section>
  );
};

export default Vision;
