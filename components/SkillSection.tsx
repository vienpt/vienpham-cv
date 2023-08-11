import { Skill } from "../data.ts";
import SkillSectionItem from "./SkillSectionItem.tsx";

export default function SkillSection({ languages, toolPlatforms, libFrameworks }: Skill) {
  return (
    <div>
      <h2>Skills</h2>
      <SkillSectionItem
        title="programing languages"
        content={languages}
      ></SkillSectionItem>
      <SkillSectionItem
        title="libraries & frameworks"
        content={toolPlatforms}
      ></SkillSectionItem>
      <SkillSectionItem
        title="tools & platforms"
        content={libFrameworks}
      ></SkillSectionItem>
    </div>
  )
}