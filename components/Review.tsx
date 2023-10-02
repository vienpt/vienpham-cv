import "./Review.css"
import {useState} from "react";
import {useCookies} from "react-cookie";
import Button from "./Button.tsx";
import {satisfies} from "../data.ts";
import styled from 'styled-components'

interface Props {
  closeReview: () => void
  updateIsReviewActive: (val: boolean) => void
}

const StyleReview = styled.div`
  position: relative;
`

const StyleReviewPopup = styled.div`
  position: fixed;
  bottom: 180px;
  right: 4rem;
  min-width: 200px;
  max-height: 500px;
  padding: 10px 16px;
  background-color: var(--surface-1);
  color: var(--text-1);
  border-radius: var(--border-radius);
`
const StyleLine = styled.div`
  margin-top: -3px;
  margin-bottom: 10px;
  border: 0.5px solid var(--primary)
`

const StyleReviewFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`

const StyleTextArea = styled.textarea`
  min-width: 270px;
  background-color: #393939;
  color: var(--white-color);
  padding: 10px;
`

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
    <StyleReview>
      <StyleReviewPopup className="rad-shadow">
        <h6>Was this page helpful to you?</h6>
        <StyleLine />

        <div style={{ display: 'grid', gap: '10px' }}>
          <span>Rate your experience:</span>
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
          <div style={{ display: 'grid', gap: '10px'}}>
            <span>Comment (optional):</span>
            <StyleTextArea
              rows={5}
              onChange={e => setComment(e.target.value)}
            />
          </div>
        </div>

        <StyleReviewFooter>
          <button
            type="button"
            onClick={closeReview}
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSatisfied}
            style={{
              backgroundColor: 'var(--blue-text)',
              color: 'var(--surface-1)'
            }}
            disabled={loading}
          >
            Submit
          </button>
        </StyleReviewFooter>
      </StyleReviewPopup>
    </StyleReview>
  )
}