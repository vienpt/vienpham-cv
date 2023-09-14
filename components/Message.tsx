import './Review.css'

export default function Message({ isSuccess }: { isSuccess: boolean }) {
  const bgColor = isSuccess ? 'green' : 'red'
  return (
    <div
      style={{
        position: 'fixed',
        right: '3rem',
        bottom: '1em',
        backgroundColor: bgColor,
        width: '215px',
        padding: '10px'
      }}
    >
      {
        isSuccess
          ? <span>Thank you for your feedback. I love it.</span>
          : <span>Something happen. Please take review later or contact to me via email.</span>
      }

      <img
        style={{
          width: '28px',
          height: '28px',
          verticalAlign: 'middle',
          marginBottom: '5px',
          marginLeft: '5px'
        }}
        src={'./cat.svg'}
        alt="cat-icon"
      />
    </div>
  )
}