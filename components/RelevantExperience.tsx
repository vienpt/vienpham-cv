import { Experience } from "../data.ts";
import { convertWorkingTime } from "../utils";
import styled from 'styled-components';

const StyleExpTitle = styled.h4``
const StyleExpDate = styled.h6`
  font-style: oblique;
  color: var(--text-2);
`
const StyleExpDesc = styled.ul`
  max-width: 700px;
  padding-top: 1rem;
  padding-bottom: 1rem;
  
  li {
    padding: 3px 0 3px 0;
  }
  li::marker {
    color: var(--blue-6);
  }
`

export default function RelevantExperience(experience: Experience) {
  return (
    <div>
      <StyleExpTitle>
        {experience.position} - {`@${experience.company}`}
      </StyleExpTitle>
      <StyleExpDate>
        {
          `${convertWorkingTime(experience.workingTime.startDate)} - 
          ${convertWorkingTime(experience.workingTime.endDate)}`
        }
        {` // ${experience.city} , ${experience.country}`}
      </StyleExpDate>
      <StyleExpDesc>
        {
          experience.content.map(item =>
            <li key={item}>{item}</li>
          )
        }
      </StyleExpDesc>
    </div>
  )
}