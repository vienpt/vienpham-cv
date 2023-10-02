import { Education } from "../data";
import styled from 'styled-components';

const StyleExpDate = styled.h6`
  font-style: oblique;
  color: var(--text-2);
`

export default function EducationSection(props: Education) {
  return (
    <div id="education">
      <h2
        tabIndex={-1}
        onClick={() => window.location.href="#education"}
        style={{ color: 'var(--purple-4)'}}
      >
        education
      </h2>
      <h4 className="cv-journey__skill-edu-interest-title">
        {props.schoolName}
      </h4>
      <StyleExpDate>
        {
          `2009 - 2013
          // ${props.city}, ${props.country}`
        }
      </StyleExpDate>
      <p>{`${props.title} at `}
        <a
          style={{ color: 'var(--blue-text)', textDecoration: 'underline' }}
          href={props.url} target="_blank"
        >
          {props.urlName}
        </a>
      </p>
    </div>
  )
}