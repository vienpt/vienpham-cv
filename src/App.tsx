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
              <li>Directly collaborated with Product team to deliver new features with implement UI,
                bind data from API, e2e test, and fix bugs with process: develop, review, and test.
              </li>
              <li>Work with Vue.js 3 by using Nuxt composition API and Nuxt 3, Windicss,
                Oruga, Pinia, and GraphQL via Nuxt modules that interact with Cubejs, Chartjs,
                and TypeScript for building Dashboard web application and Chrome extension.
              </li>
              <li>Working style with daily meeting scrum and planning sprint meeting (2 weeks)</li>
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
                Work with various project as Full-stack developer that created project
                as Prototype/MVP by using Vue.js/Nuxt/Vuetify on Frontend with Backend as same as .Net Core (v3,5,6),
                Java SpringBoot (Gradle build).
              </li>
              <li>
                Config CI/CD pipeline (Github Actions, Azure Devops), setting Docker, Helm, and Ingress files to deploy micro-services,
                static web site/application on Azure/GCP Cloud and monitoring applications by using Grafana, Prometheus, Kibana, Elasticsearch, Fluentd.
              </li>
              <li>
                Have experience work with building websites/site generators by using JamStack architect likes: Vuepress, Vitepress, Nuxt,
                and Jekyll with deploy to some stuffs like Netlify, Vercel.
              </li>
              <li>
                Have experience work with use and config OAuth2.0 likes: Zoho CRM, Azure AD.
              </li>
              <li>
                Have experience work with Astah diagrams for modelling model and draw diagram for applying architecture flow execution
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
              <li>Have a change to learn about command line, Github, Gitlab, Linux.</li>
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
              <li>Maintain and test outsource project with .Net stack: VB6, MVC 3.</li>
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
