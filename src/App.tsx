import "./App.css";
import Review from "../components/Review.tsx";
import Summary from "../components/Summary.tsx";
import CVInfo from "../components/Info.tsx";
import Journey from "../components/Journey.tsx";
import data from "../data.ts";

import { useCookies } from "react-cookie";
import { useEffect, useRef, useState } from "react";
import Readme from "../components/Readme.tsx";

function App() {
  const [reviewCookie] = useCookies(["is-review"]);
  const [isReviewDisplayed, setIsReviewDisplayed] = useState<boolean>(false);

  const appRef = useRef(null)

  useEffect(() => {
    if (
      !reviewCookie["is-review"] ||
      typeof reviewCookie["is-review"] === "undefined"
    ) {
      setTimeout(() => {
        setIsReviewDisplayed(true);
      }, 5000);
    }
  }, []);

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
        isReviewDisplayed &&
        <div style={{ position: "relative" }}>
          <Review />
        </div>
      }
    </div>
  );
}

export default App;
