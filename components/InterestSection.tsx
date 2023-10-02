import StringTagItem from "./StringTagItem";
import React from "react";

interface Props {
  children: React.ReactNode
}
export default function InterestSection({ children }: Props) {
  return (
    <div id="interests">
      <h2
        tabIndex={-1}
        onClick={() => window.location.href="#interests"}
        style={{ color: 'var(--red-4)'}}
      >
        Interests
      </h2>
      <StringTagItem>
        {children}
      </StringTagItem>
    </div>
  )
}