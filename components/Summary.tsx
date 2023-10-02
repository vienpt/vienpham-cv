import styled from 'styled-components'

interface Props {
  summary: string[]
}

const StyleSummaryUl = styled.ul`
  display: grid;
  gap: 5px;
  min-width: 280px;
`


export default function Summary({ summary }: Props) {
  function customBindElement(item: string) {
    const splitItem = item.split(':')
    return (
      <li key={item}>
        <b>{`${splitItem[0]}:`}</b>{splitItem[1]}
      </li>
    )
  }

  return (
    <section id="summary">
      <h2
        tabIndex={-1}
        onClick={() => window.location.href="#summary"}
        style={{ color: 'var(--green-8)'}}
      >Summary</h2>
      <StyleSummaryUl>
        {summary.map((item: string, index: number) =>
          (index === 2 || index === 3) ? customBindElement(item) : <li key={item}>{item}</li>
        )}
      </StyleSummaryUl>
    </section>
  )
}