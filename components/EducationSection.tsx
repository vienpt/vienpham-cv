import { Education } from "../data";
import { convertWorkingTime } from "../utils";

export default function EducationSection(props: Education) {
  return (
    <div>
      <h2>education</h2>
      <span className="cv-journey__skill-edu-interest-title">
        {props.schoolName}
      </span>
      <span className="cv-journey__skill-edu-interest-date">
        {
          `2009 - 2013
          // ${props.city}, ${props.country}`
        }
      </span>
      <p>{`${props.title} at `}
        <a
          style={{ color: 'var(--blue-color)' }}
          href={props.url} target="_blank"
        >
          {props.urlName}
        </a>
      </p>
    </div>
  )
}