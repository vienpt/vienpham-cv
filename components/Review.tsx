import "./Review.css"
import {useState} from "react";
import {useCookies} from "react-cookie";
import Button from "./Button.tsx";
import {satisfies} from "../data.ts";

interface Props {
  closeReview: () => void
  updateIsReviewActive: (val: boolean) => void
}

export default function Review({ closeReview, updateIsReviewActive }: Props) {
  const [, setReviewCookie]= useCookies(['is-review'])
  const [activeItem, setActiveItem] = useState(satisfies[1].score)
  const [comment, setComment] = useState("")
  const [loading, setLoading] = useState(false)

  /**
   * insert review feedback
   */
  const handleSatisfied = async () => {
    try {
      setLoading(true)
      await fetch(`/supareview?score=${activeItem}&comment=${comment}`)
      setReviewCookie('is-review', true)
      updateIsReviewActive(true)
    } catch (err) {
      updateIsReviewActive(false)
      throw new Error(`Something happen ${err}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ position: "relative" }}>
      <div className={'cv-review-popup'}>
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
          <Button
            click={closeReview}
            text={'Cancel'}
            bgColor={'#393939'}
          />
          <Button
            click={handleSatisfied}
            text={'Submit'}
            bgColor={'var(--blue-color)'}
            isSubmit={loading}
          />
        </div>
      </div>
    </div>
  )
}