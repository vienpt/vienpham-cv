import { Education, Experience, Skill } from "../data.ts";
import RelevantExperience from "./RelevantExperience.tsx";
import SkillSection from "./SkillSection.tsx";
import EducationSection from "./EducationSection.tsx";
import InterestSection from "./InterestSection.tsx";
import { splitStringTagItem } from "../utils";
import styled from 'styled-components';

interface Props {
  experiences: Experience[]
  skill: Skill
  education: Education
  interest: string[]
}

const StyleJourney = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: min-content;
  grid-gap: 10px;
  padding-top: 2rem;
  
  @media only screen and (max-width: 760px) {
    display: flex;
    flex-direction: column;
  }
`

const StyleJourneyExperiences = styled.section`
  grid-column: span 2;
`

const StyleJourneyOther = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export default function Journey({ experiences, skill, education, interest }: Props) {
  return (
    <StyleJourney id="journey">
      <StyleJourneyExperiences id="experiences">
        <h2
          tabIndex={-1}
          onClick={() => window.location.href="#experiences"}
          style={{ color: 'var(--blue-7)'}}
        >
          relevant experiences
        </h2>
        {
          experiences.map((experience: Experience) =>
            <RelevantExperience
              {...experience}
              key={experience.id}
            />
          )
        }
      </StyleJourneyExperiences>
      <StyleJourneyOther>
        <SkillSection
          languages={skill.languages}
          toolPlatforms={skill.toolPlatforms}
          libFrameworks={skill.libFrameworks}
        />
        <EducationSection
          {...education}
        />
        <InterestSection>
          {splitStringTagItem(interest)}
        </InterestSection>
      </StyleJourneyOther>
    </StyleJourney>
  )
}