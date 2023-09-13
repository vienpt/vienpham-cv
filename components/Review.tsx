import "./Review.css"
import {useEffect, useRef, useState} from "react";
import {useCookies} from "react-cookie";

interface Satisfied {
  id: number,
  score: number,
  img: string,
  comment?: string | ""
}

interface Props {
  closeReview: () => void
  updateIsReviewActive: (val: boolean) => void
}


// dum data
const satisfies: Satisfied[] = [
  {
    id: 1,
    score: 0,
    img: './review/frowning-face',
    comment: ''
  },
  // {
  //   id: 2,
  //   score: 10,
  //   img: './review/frowning_face_mouth.svg'
  // },
  {
    id: 3,
    score: 50,
    img: './review/neutral-face',
    comment: ''
  },
  {
    id: 4,
    score: 100,
    img: './review/smiling-face',
    comment: ''
  },
  // {
  //   id: 5,
  //   score: 100,
  //   img: './review/laugh_face.svg'
  // }
]


export default function Review({ closeReview, updateIsReviewActive }: Props) {
  const reviewRef = useRef<null | HTMLDivElement>(null)
  const [, setReviewCookie]= useCookies(['is-review'])
  const [activeItem, setActiveItem] = useState(0)
  const [comment, setComment] = useState("")

  useEffect(() => {
    setActiveItem(() => satisfies[1].score)
  }, []);

  const handleSatisfied = async () => {
    const data = await fetch(`/supareview?score=${activeItem}&comment=${comment}`)
    if (data.status === 200) {
      setReviewCookie('is-review', true)
    }

    updateIsReviewActive(false)
  }

  return (
    <div style={{ position: "relative" }}>
      <div ref={reviewRef} className={'cv-review-popup'}>
        <p>Was this page helpful to you?</p>
        <div style={{
            marginTop: '-8px',
            border: '0.5px solid rgb(253, 140, 1 , 1)'
          }}
        />

        <div style={{ display: 'grid', padding: '10px 0' }}>
          <span style={{ fontSize: '0.8em'}}>Rate your experience:</span>

          <div style={{
            display: 'flex',
          }}>
            {
              satisfies.map(item =>
                <button
                  key={item.id}
                  className={activeItem === item.score ? 'cv-review__icon-active-item' : 'cv-review__icon-item'}
                  onClick={() => setActiveItem(item.score)}
                  style={{
                    display: 'block',
                    marginBlockStart: '1em',
                    marginBlockEnd: '1em',
                    backgroundColor: '#393939',
                    borderRadius: 0,
                  }}
                >
                  <img
                    style={{ padding: '10px' }}
                    src={activeItem === item.score ? `${item.img}-focus.svg` : `${item.img}.svg`}
                    alt="smile-icon"
                  />
                </button>
              )
            }
          </div>
          <div>
            <p style={{ fontSize: '0.8em'}}>Comment (optional):</p>
            <textarea
              rows={5}
              style={{
                minWidth: '270px',
                backgroundColor: '#393939',
                color: 'var(--white-color)',
                padding: '10px'
              }}
              onChange={e => setComment(e.target.value)}
            />
          </div>


        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '-10px'
        }}>
          <button style={{
            display: 'block',
            marginBlockStart: '1em',
            marginBlockEnd: '1em',
            backgroundColor: '#393939',
            borderRadius: 0,
            height: '100%',
            width: '100%',
            color: 'var(--white-color)'
          }}
                  onClick={closeReview}
          >
            Cancel</button>
          <button style={{
            display: 'block',
            marginBlockStart: '1em',
            marginBlockEnd: '1em',
            backgroundColor: 'var(--blue-color)',
            borderRadius: 0,
            height: '100%',
            width: '100%',
            color: 'var(--white-color)'
          }}
                  onClick={() => handleSatisfied()}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}