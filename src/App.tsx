import "./App.css";
import Review from "../components/Review.tsx";
import Summary from "../components/Summary.tsx";
import CVInfo from "../components/Info.tsx";
import Journey from "../components/Journey.tsx";
import Message from "../components/Message.tsx";
import Readme from "../components/Readme.tsx";
import data from "../data.ts";

import { useCookies } from "react-cookie";
import { useEffect, useRef, useState } from "react";

function App() {
  const [reviewCookie] = useCookies(["is-review"]);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  const [isReviewActive, setIsReviewActive] = useState<boolean>(false)
  const [showMessage, setShowMessage] = useState<boolean>(false)

  const appRef = useRef(null)

  useEffect(() => {
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
      <CVInfo info={data.info}></CVInfo>

      <div className="cv-readme">
        <Readme></Readme>
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
        showMessage && <Message></Message>
      }
    </div>
  );
}

export default App;
