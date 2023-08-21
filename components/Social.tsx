import { Social } from "../data";

export default function SocialItem({ name, url, nickname, icon }: Social) {
  return (
    <a href={url} target={'_blank'}>
      <img src={`./${icon}`} alt={name} width="24" height="14" />
      <span>{nickname}</span>
    </a>
  )
}