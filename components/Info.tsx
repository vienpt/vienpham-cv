import {Info, Social} from "../data";
import {Fragment} from "react";
import SocialItem from "./Social.tsx";

// https://davidwalsh.name/destructuring-alias
// https://stackoverflow.com/questions/69438138/typescript-array-of-objects-as-props
interface Props {
  info: Info
}

export default function CVInfo({ info }: Props) {
  return (
    <div className="cv-info">
      <h1>{info.name}</h1>
      <h2>{info.title}</h2>
      <div className="cv-info__introduce">
        <address>
          <a href={`mailto:${info.email}`}>
            <span>{info.email}</span>
          </a>
        </address>
        <address>
          <a href={`tel:${info.phone}`}>
            <span>{info.phone}</span>
          </a>
        </address>
        <Fragment>
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
        </Fragment>
      </div>
    </div>
  )
}