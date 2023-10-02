import StringTagItem from "./StringTagItem";
import { splitStringTagItem } from "../utils";

interface SectionItem {
  title: string
  content: string[]
}

export default function SkillSectionItem({ title, content }: SectionItem) {
  return (
    <>
      <h5>
        {title}
      </h5>
      <StringTagItem>
        {splitStringTagItem(content)}
      </StringTagItem>
    </>
  )
}