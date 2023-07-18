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
  }, []);

  function ShowNavContent() {
    return (
      <div className="nav" style={{
          position: 'absolute',
          backgroundColor: 'color(srgb 0.1412 0.1412 0.1412)',
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

      <div className="cv-readme">
        <div className="cv-readme-hightlight">
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
        <div className="cv-summary">
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
              Proven experience in primarily front-end programming: Vue 3 Composition API, TypeScript, Vue router, Tailwind CSS, Pinia
            </li>

            <li>Proficiency in HTML, CSS/PostCSS and JavaScript ES6, implementing responsive web design, and building complex layouts</li>
            <li>Good at Documenting</li>
            <li>Experience in Java SpringBoot and .Net core backend language</li>
            <li>Experience in debugging, authentication, and authorization</li>
            <li>Practical knowledge of micro services and designing/building REST APIs</li>
            <li>
              Strong capability of meeting project milestones and comfortable with agile development methodology and common CI/CD practices
            </li>
            <li>
              Strong ability to work independently while still being collaborative and inclusive
            </li>
            <li>Familiarity with common frontend workflow such as NPM, ESLint, Prettier, etc. </li>
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
                M/S Frontend developer (Vuejs)
              </span>
              <span className={"cv-journey__experience-company"}>
                @Air360 / Scalefast
              </span>
              <div className={"cv-journey__experience-date"}>
                November 2022 - May 2023 <span>// Ho Chi Minh, Vietnam</span>
              </div>
              <ul className="cv-journey__experience-description">
                <li>
                  Collaborate closely with squad teams, including Product, Design, and QA members, to get requirements
                  into functional and visually appealing frontend solutions.
                </li>
                <li>
                  Development with Vue 3, Nuxt composition API/Nuxt 3, GraphQL via Nuxt modules that interact with Cubejs, Chartjs, and
                  TypeScript for building Dashboard web application and Chrome
                  extension base on component-based architecture and start management pattern.
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
                Vuejs, Reactjs, TailwindCSS, Nuxtjs, Nextjs, Windicss, Pinia, Oruga, GraphQL, Vuetify,
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
              <p>Bachelor of Science in Information Technology at<a style={{ color: 'var(--blue-color)' }} href="https://www.hcmus.edu.vn" target="_blank">University of Science</a></p>
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
