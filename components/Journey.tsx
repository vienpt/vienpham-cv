import { Education, Experience, Skill } from "../data.ts";
import RevelantExperience from "./RevelantExperience.tsx";
import SkillSection from "./SkillSection.tsx";
import EducationSection from "./EducationSection.tsx";
import InterestSection from "./InterestSection.tsx";
import { splitStringTagItem } from "../utils";

interface Props {
  experiences: Experience[]
  skill: Skill
  education: Education
  interest: string[]
}
export default function Journey({ experiences, skill, education, interest }: Props) {
  return (
    <div className="cv-journey">
      <div className={"cv-journey__experience"}>
        <h2>
          <a id="journey" href="#journey">relevant experiences</a>
        </h2>
        {
          experiences.map((experience: Experience) =>
            <RevelantExperience
              {...experience}
              key={experience.id}
            ></RevelantExperience>
          )
        }
      </div>
      <div className={"cv-journey__skill-edu-interest"}>
        <SkillSection
          languages={skill.languages}
          toolPlatforms={skill.toolPlatforms}
          libFrameworks={skill.libFrameworks}
        ></SkillSection>
        <EducationSection
          {...education}
        ></EducationSection>
        <InterestSection>
          {splitStringTagItem(interest)}
        </InterestSection>
      </div>
    </div>
  )
}