import React from "react";
import styled from 'styled-components';

interface Props {
  children: React.ReactNode
}

const StyleTagItem = styled.p`
  //padding-top: 10px;
  padding-bottom: 10px;
`
export default function StringTagItem({ children }: Props) {
  return (
    <StyleTagItem>
      {children}
    </StyleTagItem>
  )
}