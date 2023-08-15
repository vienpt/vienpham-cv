import "./Review.css"
import { useRef } from "react";
import {useCookies} from "react-cookie";

interface Satisfied {
  id: number,
  score: number,
  img: string
}

interface Props {
  isReviewActive: boolean
  closeReview: () => void
  updateIsReviewActive: (val: boolean) => void
}

export default function Review({ isReviewActive, closeReview, updateIsReviewActive }: Props) {
  const reviewRef = useRef<null | HTMLDivElement>(null)
  const [, setReviewCookie]= useCookies(['is-review'])

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

  // handle satisfied
  const handleSatisfied = async (score : number) => {
    const data = await fetch(`/supareview?score=${score}`)
    if (data.status === 200) {
      setReviewCookie('is-review', true)
    }

    updateIsReviewActive(false)
  }

  return (
    <div style={{ position: "relative" }}>
      { isReviewActive && (
        <div ref={reviewRef} className={'cv-review-popup'}>
          <div className={'cv-review-popup__title'}>
            <p>Overall, are you satisfied with this website?</p>
            <button onClick={closeReview}>
              <img src={'./review/close.svg'} alt="close-icon" />
            </button>
          </div>
          <div>
            <div className={'cv-review-popup__icon'}>
              {
                satisfies.map((m) =>
                  <button key={m.id} onClick={() => handleSatisfied(m.score)}>
                    <img src={m.img} alt="smile-icon" />
                  </button>)
              }
            </div>

            <div style={{ display: 'flex', flex: '1 1 0%', justifyContent: 'space-between', padding: '5px 10px 0 5px'}}>
              <span style={{ fontSize: '11px', textTransform: 'capitalize' }}>dissatisfaction</span>
              <span style={{ fontSize: '11px' }}>Very satisfied</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}