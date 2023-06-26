import './App.css'

function App() {
  return (
    <>
      <div className={"cv-info"}>
        <h1>Pham The Vien</h1>
        <h3>Software Engineer</h3>
        <div className="cv-info__introduce">
          <address>
            <a href={'mailto:viendev@outlook.com'}>
              {/*<img src={'./mail.svg'} />*/}
              <span>viendev@outlook.com</span>
            </a>
          </address>
          <address>
            <a href={'tel:+84909218001'}>
              {/*<img src={'./phone.svg'} />*/}
              <span>+84909218001</span>
            </a>
          </address>
          <a href={'https://twitter.com/vienvee_bb'} target={'_blank'}>
            <img src={'./twitter.svg'} />
            <span>vienvee_bb</span>
          </a>
          <a href={'https://github.com/vienpt'} target={'_blank'}>
            <img src={'./github.svg'} />
            <span>vienpt</span>
          </a>
          <a href={'https://www.linkedin.com/in/vien-pham-887255a1/'} target={'_blank'}>
            <img src={'./linkedin.svg'} />
            <span>vien-pham</span>
          </a>
        </div>
      </div>

      <div className="cv-journey">
        <div className={'cv-journey__experience'}>
          <h2>relevant experiences</h2>
          {/*scalefast          */}
          <div>
            <span className={'cv-journey__experience-title'}>frontend developer</span>
            <span className={'cv-journey__experience-company'}>@Air360 / Scalefast</span>
            <div className={'cv-journey__experience-date'}>
              November 2022 - May 2023 <span>// Ho Chi Minh, Vietnam</span>
            </div>
            <ul className="cv-journey__experience-description">
              <li>Worked closely with the Product team to develop new features for our web application. Created the user interface, integrating data from the backend API, writing end-to-end tests, and fixing bugs.
                Followed a rigorous process of development, code review, and testing to ensure <br />high-quality deliverables.
              </li>
              <li>Worked with Vue.js 3 by using Nuxt composition API and Nuxt 3, Windicss, Oruga, Pinia, and GraphQL via Nuxt modules that interact with Cubejs, Chartjs, and TypeScript for building Dashboard web application and Chrome extension.
              </li>
              <li>Participated in daily meeting scrums to update my team on my progress, challenges and goals. Attended planning sprint meetings every two weeks to review the completed tasks, prioritize the backlog and set the objectives for the next sprint.</li>
            </ul>
          </div>
          {/*archway*/}
          <div>
            <span className={'cv-journey__experience-title'}>Software Engineer</span>
            <span className={'cv-journey__experience-company'}>@ArchwayFactory / Archway</span>
            <div className={'cv-journey__experience-date'}>
              April 2017 - October 2022 <span>// Ho Chi Minh, Vietnam</span>
            </div>
            <ul className={'cv-journey__experience-description'}>
              <li>
                Created prototype and MVP projects using various technologies. On the frontend, use Vue.js, Nuxt and Vuetify to build responsive and user-friendly interfaces.
                On the backend, use .Net Core (v3,5,6) and Java SpringBoot (Gradle build) to develop robust and scalable applications.
              </li>
              <li>
                Handled CI/CD pipeline (Github Actions, Azure Devops), setting Docker, Helm, and Ingress files to deploy micro-services,
                static web site/application on Azure/GCP Cloud and monitoring applications by using Grafana, Prometheus, Kibana, Elasticsearch, Fluentd.
              </li>
              <li>
                Created websites and site generators using JAMStack architecture. Used frameworks such as VuePress, VitePress, Nuxt, and Jekyll, and deployed them to platforms such as Netlify and Vercel.
              </li>
              <li>
                Worked with OAuth2.0 likes: Zoho CRM, Azure AD.
              </li>
              <li>
                Designed and modeled software systems and created diagrams that show the system architecture and execution flow accurately by using Astah.
              </li>

              {/*Familiar with using Linux, command, terminal.*/}
            </ul>
          </div>
          {/*pasonatech*/}
          <div>
            <span className={'cv-journey__experience-title'}>Developer</span>
            <span className={'cv-journey__experience-company'}>@PasonaTech</span>
            <div className={'cv-journey__experience-date'}>
              April 2016 - March 2017 <span>// Ho Chi Minh, Vietnam</span>
            </div>
            <ul className="cv-journey__experience-description">
              <li>Collaborated with a small team to develop outsource project.
              </li>
              <li>Worked closely with Japan senior engineer to develop, maintain, document, and test web app using Asp.Net, jQuery, JavaScript, Bootstrap.
              </li>
            </ul>
          </div>
          {/*zigen*/}
          <div>
            <span className={'cv-journey__experience-title'}>Developer</span>
            <span className={'cv-journey__experience-company'}>@ZIGExN VeNtura</span>
            <div className={'cv-journey__experience-date'}>
              Jan 2016 - March 2016 <span>// Ho Chi Minh, Vietnam</span>
            </div>
            <ul className="cv-journey__experience-description">
              <li>Collaborated with a small team for training Ruby on Rails courses.
              </li>
              <li>Have a changed to learn about command line, Github, Gitlab, Linux.</li>
            </ul>
          </div>
          {/*intec*/}
          <div>
            <span className={'cv-journey__experience-title'}>Developer</span>
            <span className={'cv-journey__experience-company'}>@Intec-Vietnam</span>
            <div className={'cv-journey__experience-date'}>
              Otc 2013 - Otc 2015 <span>// Ho Chi Minh, Vietnam</span>
            </div>
            <ul className="cv-journey__experience-description">
              <li>Maintained and tested outsource project with .Net stack: VB6, MVC 3.</li>
            </ul>
          </div>
        </div>
        <div className={'cv-journey__skill-edu-interest'}>
          <div>
            <h2>Skills</h2>
            <span className="cv-journey__skill-edu-interest-title">programing languages</span>
            <p className={'cv-journey__skill-edu-interest-tag'}>JavaScript, TypeScript, HTML, CSS, C#, Java, SQL.</p>

            <span className="cv-journey__skill-edu-interest-title">libraries & frameworks</span>
            <p className={'cv-journey__skill-edu-interest-tag'}>Vuejs, TailwindCSS, Nuxtjs, Pinia, Oruga, GraphQL, Vuetify, .Net Core, SpringBoot, Azure AD, Swagger, Helm.</p>

            <span className="cv-journey__skill-edu-interest-title">tools & platforms</span>
            <p className={'cv-journey__skill-edu-interest-tag'}>Git, Netlify, Docker, Kubernetes, Jira, Trello, Github, Gitlab, Figma, Azure DevOps, AKS, GCP, Astah.</p>
          </div>
          <div>
            <h2>education</h2>
            <span className="cv-journey__skill-edu-interest-title">university of science</span>
            <span className="cv-journey__skill-edu-interest-date">2009 - 2013 // Ho Chi Minh, Vietnam</span>
            <p>Bachelor of Science in Information Technology</p>
          </div>
          <div>
            <h2>Interests</h2>
            <p className={'cv-journey__skill-edu-interest-tag'}>Swimming, running, traveling, riding</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
