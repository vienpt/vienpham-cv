import './Review.css'
import styled from 'styled-components'

const StyleMessage = styled.div<{ $bgColor?: string }>`
  display: inline-flex;
  position: fixed;
  right: 3rem;
  bottom: 1em;
  background-color: ${props => props.$bgColor}; 
  width: 350px;
  border-radius: var(--border-radius);
  padding: 10px;
`

const StyleMessImg = styled.img`
  width: 28px;
  height: 28px;
  vertical-align: middle;
  margin-bottom: 5px;
  margin-left: 5px;
  box-shadow: var(--shadow-strength);
`

export default function Message({ isSuccess }: { isSuccess: boolean }) {
  const bgColor = isSuccess ? 'var(--green-7)' : 'var(--red-6)'
  return (
    <StyleMessage $bgColor={bgColor}>
      {
        isSuccess
          ? <p>Thank you for your feedback. I love it.</p>
          : <h6>Something happen. Please take review later or contact to me via email.</h6>
      }

      <StyleMessImg src={'./cat.svg'} alt="cat-icon" />
    </StyleMessage>
  )
}