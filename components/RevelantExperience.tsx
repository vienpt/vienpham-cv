import { Experience } from "../data.ts";
import { convertWorkingTime } from "../utils/index.ts";

export default function RevelantExperience(experience: Experience) {
  return (
    <div style={{ marginTop: '-10px'}}>
      <span className={"cv-journey__experience-title"}>
        {experience.position}
      </span>
      <span className={"cv-journey__experience-company"}>
        {`@${experience.company}`}
      </span>
      <div className={"cv-journey__experience-date"}>
        {
          `${convertWorkingTime(experience.workingTime.startDate)} - 
          ${convertWorkingTime(experience.workingTime.endDate)}`
        }
        <span>{`// ${experience.city} , ${experience.country}`}</span>
      </div>
      <ul className="cv-journey__experience-description">
        {
          experience.content.map(item =>
            <li key={item}>{item}</li>
          )
        }
      </ul>
    </div>
  )
}