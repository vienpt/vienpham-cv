import './Review.css'

export default function Message() {
  return (
    <div className={'cv-review-popup'}>
      <div>
        <span>Thank you for your feedback. I love it.</span>

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
    </div>

  )
}