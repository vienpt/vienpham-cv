import { Social } from "../data";

export default function SocialItem({ name, url, nickname, icon }: Social) {
  return (
    <a href={url} target={'_blank'}>
      <img src={`./${icon}`} alt={name} />
      <span>{nickname}</span>
    </a>
  )
}