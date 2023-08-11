import StringTagItem from "./StringTagItem";
import { splitStringTagItem } from "../utils";

interface SectionItem {
  title: string
  content: string[]
}

export default function SkillSectionItem({ title, content }: SectionItem) {
  return (
    <>
      <span className="cv-journey__skill-edu-interest-title">
        {title}
      </span>
      <StringTagItem>
        {splitStringTagItem(content)}
      </StringTagItem>
    </>
  )
}