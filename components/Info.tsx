import {Info, Social} from "../data";
import SocialItem from "./Social.tsx";
import styled from 'styled-components';

interface Props {
  info: Info
}

const StyleH1 = styled.h1`
  color: var(--primary);
`
const StyleH3 = styled.h3`
  background: var(--gradient-text-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const StyleInfo = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 45px;
`

const StyleInfoIntroduce = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4rem;
  padding-top: 10px;
  
  a {
    display: flex;
    align-items: center;
    color: var(--text-1);
    
    &:hover {
      color: var(--blue-text);
      background-color: var(--blue-bg);
    }
    &:visited {
      background-color: var(--blue-bg);
    }
  }

  @media only screen and (max-width: 760px) {
    flex-flow: wrap;
    gap: 8px;
    
    a {
      margin-right: 1rem;
    }
  }
`


export default function CVInfo({ info }: Props) {
  return (
    <StyleInfo className="cv-info">
      <StyleH1>{info.name}</StyleH1>
      <StyleH3>{info.title}</StyleH3>
      <StyleInfoIntroduce>
        <a href={`mailto:${info.email}`}>
          <span>{info.email}</span>
        </a>
        <a href={`tel:${info.phone}`}>
          <span>{info.phone}</span>
        </a>
        <>
          {
            info.socials?.map((social: Social) =>
              <SocialItem
                key={social.name}
                name={social.name}
                url={social.url}
                nickname={social.nickname}
                icon={social.icon}
              />
            )
          }
        </>
      </StyleInfoIntroduce>
    </StyleInfo>
  )
}