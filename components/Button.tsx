
interface Props {
  click: () => unknown
  text: string
  bgColor: string
  isSubmit?: boolean
}

export default function Button({ text, ...props }: Props) {
  return (
    <button
      disabled={props.isSubmit}
      style={{
        display: 'block',
        marginBlockStart: '1em',
        marginBlockEnd: '1em',
        backgroundColor: props.bgColor,
        borderRadius: 0,
        height: '100%',
        width: '100%',
        color: 'var(--white-color)'
      }}
      onClick={props.click}
    >
      {text}
    </button>
  )
}