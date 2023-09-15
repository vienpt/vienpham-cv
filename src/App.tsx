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
  const [error, setError] = useState<Error | undefined>()

  const [reviewCookie] = useCookies(["is-review"]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isReviewActive, setIsReviewActive] = useState(false)
  const [showMessage, setShowMessage] = useState(false)

  const [isSuccessMessage, setIsSuccessMessage] = useState(false)

  useEffect(() => {
    // check data already have
    if (!data) {
      getData().then()
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
    try {
      const response = await resumeDataPromise
      const { resume } = await response.clone().json()
      setData(resume)
      setLoading(false)
    } catch(error) {
      if (error !== undefined) {
        setError(error as Error);
        throw new Error("Failed in some way")
      }
    } finally {
      setLoading(false)
    }
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
    setIsReviewActive(() => !isReviewActive)
  }

  /**
   * show thanks message/error after review
   */
  function showSubmitMessage(val: boolean) : void {
    setShowMessage(true)

    if (!val) {
      setIsSuccessMessage(false)
    } else {
      setIsSuccessMessage(true)
      setIsReviewActive(!isReviewActive)
      setShowFeedback(false)
    }

    setTimeout(() => {
      setShowMessage(false)
    }, 3000)
  }


  return (
    <>
      {loading && <Loading />}

      {error && (
        <div>
          Sorry. There is a problem when fetching the data. Please visit later.
          <pre><b>Error</b>: {`${error}`}</pre>
        </div>
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
              <button type="button" aria-label="svg-feedback" className="cv-feedback" onClick={onShowFeedback}>
                <svg className="cv-feedback-icon" focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z"></path><path d="M20.5 11A2.5 2.5 0 1023 13.5 2.5 2.5 0 0020.5 11zM8 13H14V15H8zM16 24a8 8 0 006.85-3.89l-1.71-1a6 6 0 01-10.28 0l-1.71 1A8 8 0 0016 24z"></path></svg>
              </button>
            }

            {/*check has already feedback*/}
            {
              isReviewActive &&
              <Review
                closeReview={closeReview}
                updateIsReviewActive={(val) => showSubmitMessage(val)}
              />
            }

            {/*show message when click feedback*/}
            {
              showMessage && <Message isSuccess={isSuccessMessage} />
            }
          </>
        )
      }
    </>
  )
}

export default App;
