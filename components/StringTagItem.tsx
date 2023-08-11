import React from "react";

interface Props {
  children: React.ReactNode
}
export default function StringTagItem({ children }: Props) {
  return (
    <p className={"cv-journey__skill-edu-interest-tag"}>
      {children}
    </p>
  )
}