import { Skill } from "../data.ts";
import SkillSectionItem from "./SkillSectionItem.tsx";

export default function SkillSection({ languages, toolPlatforms, libFrameworks }: Skill) {
  return (
    <div id="skills">
      <h2
        tabIndex={-1}
        onClick={() => window.location.href="#skills"}
        style={{ color: 'var(--yellow-7)'}}
      >
        Skills
      </h2>
      <SkillSectionItem
        title="programing languages"
        content={languages}
      ></SkillSectionItem>
      <SkillSectionItem
        title="libraries & frameworks"
        content={libFrameworks}
      ></SkillSectionItem>
      <SkillSectionItem
        title="tools & platforms"
        content={toolPlatforms}
      ></SkillSectionItem>
    </div>
  )
}