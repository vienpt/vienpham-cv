import "./App.css";
import Review from "../components/Review.tsx";
import Summary from "../components/Summary.tsx";
import CVInfo from "../components/Info.tsx";
import Journey from "../components/Journey.tsx";
import Message from "../components/Message.tsx";
import Readme from "../components/Readme.tsx";
import { Resume } from "../data.ts";
import { useCookies } from "react-cookie";
import { useEffect, useRef, useState } from "react";

function App() {
  const [data, setData] = useState<Resume>()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [reviewCookie] = useCookies(["is-review"]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isReviewActive, setIsReviewActive] = useState(false)
  const [showMessage, setShowMessage] = useState(false)

  const appRef = useRef(null)

  useEffect(() => {

    async function getData() {
      const response = await fetch('/getdata')
      const { data, error } = await response.json()

      if (error === 'Error') {
        setError(error);
        setLoading(false)
        throw new Error('Something happened')
      }
      setData(data)
      setError(null)
      setLoading(false)
    }
    if (!data) {
      getData()
    }

    if (
      !reviewCookie["is-review"] ||
      typeof reviewCookie["is-review"] === "undefined"
    ) {
      setTimeout(() => {
        setShowFeedback(true);
      }, 5000);
    }
  }, [reviewCookie]);

  function closeReview() {
    setIsReviewActive(false);
    setShowFeedback(true);
  }

  function onShowFeedback() {
    setIsReviewActive(true)
    setShowFeedback(false)
  }

  function showThanksMessage(val: boolean) {
    setIsReviewActive(val)
    setShowMessage(true)
    setTimeout(() => {
      setShowMessage(false)
    }, 3000)
  }

  return (
    <div ref={appRef}>
      {/*loading */}
      {loading && <div>A moment please...</div>}

      {/*error*/}
      {error && (
        <div>{`There is a problem fetching the data - ${error}`}</div>
      )}

      {/*success*/}
      {
        data && (
          <div>
            <CVInfo info={data.info}></CVInfo>

            <div className="cv-readme">
              <Readme />
              <Summary summary={data.about}></Summary>
              <Journey
                experiences={data.experiences}
                skill={data.skill}
                education={data.education}
                interest={data.interests}
              ></Journey>
            </div>

            {
              showFeedback &&
              <div className="cv-feedback" onClick={onShowFeedback}>
                <img src="./feedback-button.png" alt="feedbacks" width="32px" height="108px" />
              </div>
            }

            {
              isReviewActive &&
              <Review
                isReviewActive={isReviewActive}
                closeReview={closeReview}
                updateIsReviewActive={(val) => showThanksMessage(val)}
              />
            }

            {
              showMessage && <Message />
            }
          </div>
        )
      }
    </div>
  )
}

export default App;
