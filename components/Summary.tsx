interface Props {
  summary: string[]
}

export default function Summary({ summary }: Props) {
  const style = {
    ul: {
      display: "grid",
      gap: "5px",
      listStyleType: "",
      minWidth: "280px",
    }
  }

  function customBindElement(item: string) {
    const splitItem = item.split(':')
    return (
      <li key={item} style={{ marginLeft: '10px' }}>
        <b>{`${splitItem[0]}:`}</b>{splitItem[1]}
      </li>
    )
  }

  return (
    <div className="cv-summary">
      <h2>
        <a id="summary" href="#summary">Summary</a>
      </h2>
      <ul style={style.ul}>
        {summary.map((item: string, index: number) =>
          (index === 2 || index === 3) ? customBindElement(item) : <li key={item}>{item}</li>
        )}
      </ul>
    </div>
  )
}