import "./App.css";
import Review from "../components/Review.tsx";
import { useCookies } from "react-cookie";
import { useEffect, useRef, useState } from "react";

function App() {
  const [reviewCookie] = useCookies(["is-review"]);
  const [isReviewDisplayed, setIsReviewDisplayed] = useState<boolean>(false);
  const [isShowNav, setIsShowNav] = useState<boolean>(false)
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
    console.log('isShowNav', isShowNav)
  }, []);

  function ShowNavContent() {
    return (
      <div className="nav" style={{
          position: 'absolute',
          backgroundColor: 'white',
          minWidth: '280px',
          display: 'flex',
          flex: '0 1 auto',
          flexDirection: 'column',
          padding: '10px',
          border: '1px solid var(--blue-color)',
          borderRadius: '5px',
          gap: '10px'
        }}
      >
        <a href="#summary" onClick={() => setIsShowNav((val) => !val)}>Summary</a>
        <a href="#journey" onClick={() => setIsShowNav((val) => !val)}>Revelant experiences</a>
      </div>
    )
  }

  return (
    <div ref={appRef}>
      <div className={"cv-info"}>
        <h1>Pham The Vien</h1>
        <h3>Software Engineer</h3>
        <div className="cv-info__introduce">
          <address>
            <a href={"mailto:viendev@outlook.com"}>
              {/*<img src={'./mail.svg'} />*/}
              <span>viendev@outlook.com</span>
            </a>
          </address>
          <address>
            <a href={"tel:+84909218001"}>
              {/*<img src={'./phone.svg'} />*/}
              <span>+84909218001</span>
            </a>
          </address>
          <a href={"https://twitter.com/vienvee_bb"} target={"_blank"}>
            <img src={"./twitter.svg"} alt="twitter" />
            <span>vienvee_bb</span>
          </a>
          <a href={"https://github.com/vienpt"} target={"_blank"}>
            <img src={"./github.svg"} alt="github" />
            <span>vienpt</span>
          </a>
          <a
            href={"https://www.linkedin.com/in/vien-pham-887255a1/"}
            target={"_blank"}
          >
            <img src={"./linkedin.svg"} alt="linkedin" />
            <span>vien-pham</span>
          </a>
        </div>
      </div>

      <div style={{ border: '1px solid #dddddd', borderRadius: '5px', minHeight: '100vh'}}>
        <div
          style={{
            position: "sticky",
            top: "0",
            backgroundColor: 'white',
            padding: '4px',
            borderBottom: '1px solid #dddddd',
          }}
        >
          <h5 
            style={{
              display: 'flex',
              gap: '5px',
              justifyContent: 'start',
              alignItems: 'center',
              margin: '2px',
            }}
          >
            <button type="button" className="svg-octicon" style={{ backgroundColor: 'transparent', padding: '4px 4px 4px 4px'}}>
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                onClick={() => setIsShowNav((val) => !val)}
              >
                <path d="M5.75 2.5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5Zm0 5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5Zm0 5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5ZM2 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM2 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path>
              </svg>
            </button>
            
            <a id="readme" href="#readme" style={{ textTransform: 'uppercase' }}>
              readme
            </a>
          </h5>
          { isShowNav ? ShowNavContent() : <></> }
        </div>
        <div style={{ padding: '0 16px 0 16px' }}>
        {/* summary */}
        <div className={"cv-info-about"}>
          <h2>
            <a id="summary" href="#summary">Summary</a>
          </h2>
          <ul
            style={{
              display: "grid",
              gap: "5px",
              listStyleType: "",
              minWidth: "280px",
            }}
          >
            <li>
              More than 6 years of experience in Web application development &
              designing
            </li>
            <li>
              Hands on experience in Web Application working with UI/UX Design
              technologies, front-end technologies/framework and libraries like
              Figma, illustrator, Prototype, JavaScript, ES6, JSON, CSS, XML,
              AJAX.
            </li>
            <li>
              Experience working in various Software Development Methodologies
              like Agile, Waterfall, SCRUM and TDD.
            </li>
            <li>
              Good at Documenting and Understanding User requirements and
              Systems application.
            </li>
            <li>
              Excellent Client interaction skills and proven experience in
              working independently as well as in team
            </li>
            <li>
              Experienced in Creating Domain model, Use Case diagrams, Sequence
              diagrams, and Object Model.
            </li>
            <li>Experienced working with command line interface</li>
          </ul>
        </div>
        {/* experience */}
        <div className="cv-journey">
          <div className={"cv-journey__experience"}>
            <h2>
              <a id="journey" href="#journey">relevant experiences</a>
            </h2>
            {/*scalefast          */}
            <div style={{ marginTop: '-10px'}}>
              <span className={"cv-journey__experience-title"}>
                Senior Vue.js frontend developer
              </span>
              <span className={"cv-journey__experience-company"}>
                @Air360 / Scalefast
              </span>
              <div className={"cv-journey__experience-date"}>
                November 2022 - May 2023 <span>// Ho Chi Minh, Vietnam</span>
              </div>
              <ul className="cv-journey__experience-description">
                <li>
                  Worked closely with the Product team from UI/UX on Figma to
                  develop new features for our web application. Created the user
                  interface, integrating data from the backend API, writing
                  end-to-end tests, and fixing bugs. Followed a rigorous process
                  of development, code review, and testing to ensure
                  high-quality deliverables.
                </li>
                <li>
                  Designed & developed using HTML5, CSS3, Vue.js(3), Nuxt
                  composition API/Nuxt 3, Windicss, Oruga, Pinia, and GraphQL
                  via Nuxt modules that interact with Cubejs, Chartjs, and
                  TypeScript for building Dashboard web application and Chrome
                  extension.
                </li>
                <li>
                  Participated in daily meeting scrums to update my team on my
                  progress, challenges and goals. Attended planning sprint
                  meetings every two weeks to review the completed tasks,
                  prioritize the backlog and set the objectives for the next
                  sprint.
                </li>
              </ul>
            </div>
            {/*archway*/}
            <div>
              <span className={"cv-journey__experience-title"}>
                Software Engineer
              </span>
              <span className={"cv-journey__experience-company"}>
                @ArchwayFactory / Archway
              </span>
              <div className={"cv-journey__experience-date"}>
                April 2016 - October 2022 <span>// Ho Chi Minh, Vietnam</span>
              </div>
              <ul className={"cv-journey__experience-description"}>
                <li>
                  Collaborated with a small team (3-6 members) to develop
                  outsource project with Agile, SCRUM.
                </li>
                <li>
                  R&D prototype and MVP projects using various technologies.
                  Front-end using Vue.js(2), Nuxt, where back end is Java
                  SpringBoot and .Net core REST webservice.
                </li>
                <li>
                  Designed and developed User interface Web components using
                  Vue, authenticate/authorization using OAuth2.0 workflow to
                  apply signIn/out via third party app likes: Zoho CRM, Azure
                  AD.
                </li>
                <li>
                  Designed and build Nuxt landing page. Hands on experience in
                  websites and site generators using JAMStack architecture. Used
                  frameworks such as VuePress, VitePress, Nuxt, and Jekyll, and
                  deployed them to platforms such as Netlify and Vercel.
                </li>
                <li>
                  Worked on CI/CD pipeline tools like Github Actions, Azure
                  Devops. Setting Docker, Helm, and Ingress files to deploy
                  micro-services, static web site/application on Azure/GCP Cloud
                  and monitoring applications by using Grafana, Prometheus,
                  Kibana, Elasticsearch, Fluentd.
                </li>
                <li>
                  Experience with JUnit, Cypress to implement unit test,
                  integration test, and e2e test for web application.
                </li>
                {/*Familiar with using Linux, command, terminal.*/}
              </ul>
            </div>
            {/*intec*/}
            <div>
              <span className={"cv-journey__experience-title"}>Developer</span>
              <span className={"cv-journey__experience-company"}>
                @Intec-Vietnam
              </span>
              <div className={"cv-journey__experience-date"}>
                Otc 2013 - Otc 2015 <span>// Ho Chi Minh, Vietnam</span>
              </div>
              <ul className="cv-journey__experience-description">
                <li>
                  Maintained, designed testcase and tested outsource project
                  with .Net stack: VB6, MVC 3.
                </li>
              </ul>
            </div>
          </div>
          <div className={"cv-journey__skill-edu-interest"}>
            <div>
              <h2>Skills</h2>
              <span className="cv-journey__skill-edu-interest-title">
                programing languages
              </span>
              <p className={"cv-journey__skill-edu-interest-tag"}>
                JavaScript, TypeScript, HTML, CSS, C#, Java, SQL.
              </p>

              <span className="cv-journey__skill-edu-interest-title">
                libraries & frameworks
              </span>
              <p className={"cv-journey__skill-edu-interest-tag"}>
                Vuejs, TailwindCSS, Nuxtjs, Pinia, Oruga, GraphQL, Vuetify,
                Cypress, WebdriverIO, .Net Core, SpringBoot, Azure AD, Swagger,
                Helm.
              </p>

              <span className="cv-journey__skill-edu-interest-title">
                tools & platforms
              </span>
              <p className={"cv-journey__skill-edu-interest-tag"}>
                Git, Netlify, Docker, Kubernetes, Jira, Trello, Github, Gitlab,
                Figma, Azure DevOps, AKS, GCP, Astah.
              </p>
            </div>
            <div>
              <h2>education</h2>
              <span className="cv-journey__skill-edu-interest-title">
                university of science
              </span>
              <span className="cv-journey__skill-edu-interest-date">
                2009 - 2013 // Ho Chi Minh, Vietnam
              </span>
              <p>Bachelor of Science in Information Technology</p>
            </div>
            <div>
              <h2>Interests</h2>
              <p className={"cv-journey__skill-edu-interest-tag"}>
                Swimming, running, traveling, riding
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

      

      {isReviewDisplayed ? (
        <div style={{ position: "relative" }}>
          {/*{children}*/}
          <Review />
        </div>
    ) : <></>}
    </div>
  );
}

export default App;
