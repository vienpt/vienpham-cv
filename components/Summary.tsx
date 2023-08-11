interface Props {
  summary: string[]
}

export default function Summary({ summary }: Props) {
  const ulStyle = {
    display: "grid",
    gap: "5px",
    listStyleType: "",
    minWidth: "280px",
  }

  return (
    <div className="cv-summary">
      <h2>
        <a id="summary" href="#summary">Summary</a>
      </h2>
      <ul style={ulStyle}>
        {summary.map((item: string) =>
          <li key={item}>
            {item}
          </li>
        )}
      </ul>
    </div>
  )
}