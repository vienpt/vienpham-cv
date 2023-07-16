import "./Review.css"
import {useEffect, useRef, useState} from "react";
import {useCookies} from "react-cookie";

interface Satisfied {
  id: number,
  score: number,
  img: string
}

export default function Review() {
  const reviewRef = useRef<null | HTMLDivElement>(null)
  const [isReviewActive, setIsReviewActive] = useState<boolean>(false)
  const [showMessage, setShowMessage] = useState<boolean>(false)
  const [reviewCookie, setReviewCookie]= useCookies(['is-review'])

  // dum data
  const satisfies: Satisfied[] = [
    {
      id: 1,
      score: -10,
      img: './review/frowning_face.svg'
    },
    {
      id: 2,
      score: 10,
      img: './review/frowning_face_mouth.svg'
    },
    {
      id: 3,
      score: 30,
      img: './review/neutral_face.svg'
    },
    {
      id: 4,
      score: 50,
      img: './review/smiling_face.svg'
    },
    {
      id: 5,
      score: 100,
      img: './review/laugh_face.svg'
    }
  ]

  // close review popup
  const closeReview = () => {
    setIsReviewActive(true)
  }

  // handle satisfied
  const handleSatisfied = async (score : number) => {
    // call mutation API
    const data = await fetch(`/supareview?score=${score}`)
    if (data.status === 200) {
      setReviewCookie('is-review', true)
    }
    setIsReviewActive(true)
    setShowMessage(true)
    setTimeout(() => {
      setShowMessage(false)
    }, 3000)
  }

  useEffect(() => {
    if (reviewCookie["is-review"]) {
      setIsReviewActive(true)
    }
  }, [])

  return (
    <>
      { !isReviewActive || false ? (
        <div ref={reviewRef} className={'cv-review-popup'}>
          <div className={'cv-review-popup__title'}>
            <p>Overall, are you satisfied with this website?</p>
            <button onClick={closeReview}>
              <img src={'./review/close.svg'}/>
            </button>
          </div>
          <div>
            <div className={'cv-review-popup__icon'}>
              {
                satisfies.map((m) =>
                  <button key={m.id} onClick={() => handleSatisfied(m.score)}>
                    <img src={m.img}/>
                  </button>)
              }
            </div>

            <div style={{ display: 'flex', flex: '1 1 0%', justifyContent: 'space-between', padding: '5px 10px 0 5px'}}>
              <span style={{ fontSize: '11px', textTransform: 'capitalize' }}>dissatisfaction</span>
              <span style={{ fontSize: '11px' }}>Very satisfied</span>
            </div>
          </div>
        </div>
      ) : null }

      {
        showMessage
          ?
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
              />
            </div>
          </div>
          : null
      }
    </>
  )
}