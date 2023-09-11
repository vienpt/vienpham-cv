import "./App.css";
import Review from "../components/Review.tsx";
import Summary from "../components/Summary.tsx";
import CVInfo from "../components/Info.tsx";
import Journey from "../components/Journey.tsx";
import Message from "../components/Message.tsx";
import Readme from "../components/Readme.tsx";
import Loading from "../components/Loading.tsx";
import { Resume } from "../data.ts";
import { useCookies } from "react-cookie";
import { useEffect, useState} from "react";

/**
 hack fetch before App initial. Need to fetch data as soon as possible
 https://www.developerway.com/posts/how-to-fetch-data-in-react
 */
const resumeDataPromise = fetch('/getdata')

function App() {
  const [data, setData] = useState<Resume>()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [reviewCookie] = useCookies(["is-review"]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isReviewActive, setIsReviewActive] = useState(false)
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    // check data already have
    if (!data) {
      getData()
    }

    // check already have review or not with verify from cookie storage
    if (
      !reviewCookie["is-review"] ||
      typeof reviewCookie["is-review"] === "undefined"
    ) {

      // show feedback after 5s
      setTimeout(() => {
        setShowFeedback(true);
      }, 5000);
    }
  }, [reviewCookie]);

  /**
   * fetch resume data netlify edge func
   */
  async function getData() : Promise<void> {
    const response = await resumeDataPromise
    const { data, error } = await response.clone().json()

    if (error !== undefined) {
      setError(error);
      setLoading(false)
      throw new Error('Something happened')
    }
    setData(data)
    setError(null)
    setLoading(false)
  }

  /**
   * close feedback review
   */
  function closeReview() : void {
    setIsReviewActive(false);
    setShowFeedback(true);
  }

  /**
   * show feedback
   */
  function onShowFeedback() : void {
    setIsReviewActive(true)
    setShowFeedback(false)
  }

  /**
   * show thanks message after review
   * @param val
   */
  function showThanksMessage(val: boolean) : void {
    setIsReviewActive(val)
    setShowMessage(true)
    setTimeout(() => {
      setShowMessage(false)
    }, 3000)
  }

  return (
    <>
      {/*loading */}
      {loading &&
          // A moment please...
          <Loading />
      }

      {/*error*/}
      {error && (
        <div>{`There is a problem fetching the data - ${error}`}</div>
      )}

      {
        data && (
          <>
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

            {/*show feedback btn*/}
            {
              showFeedback &&
              <div className="cv-feedback" onClick={onShowFeedback}>
                <img src="./feedback-button.png" alt="feedbacks" width="32px" height="108px" />
              </div>
            }

            {/*check has already feedback*/}
            {
              isReviewActive &&
              <Review
                isReviewActive={isReviewActive}
                closeReview={closeReview}
                updateIsReviewActive={(val) => showThanksMessage(val)}
              />
            }

            {/*show message when click feedback*/}
            {
              showMessage && <Message />
            }
          </>
        )
      }
    </>
  )
}

export default App;
