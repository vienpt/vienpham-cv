import StringTagItem from "./StringTagItem";
import React from "react";

interface Props {
  children: React.ReactNode
}
export default function InterestSection({ children }: Props) {
  return (
    <div>
      <h2>Interests</h2>
      <StringTagItem>
        {children}
      </StringTagItem>
    </div>
  )
}