export interface Resume {
  info: Info
  about: string[]
  experiences: Experience[]
  education: Education
  skill: Skill
  interests: string[]
}

export interface Info {
  name: string
  title: string
  email: string
  phone: string
  socials?: Social[]
}

export interface Social {
  name: string
  icon?: string
  url: string
  nickname: string
}

export interface Experience {
  id: string
  position: string
  company: string
  workingTime: {
    startDate: string,
    endDate: string,
  }
  city: string
  country: string
  content: string[]
}

export interface Education {
  schoolName: string
  title: string
  url: string
  urlName: string
  periodTime: {
    startDate: string
    endDate: string
  }
  city: string
  country: string
}

export interface Skill {
  languages: string[]
  libFrameworks: string[]
  toolPlatforms: string[]
}

const data: Resume = {
  info: {
    name: 'Pham The Vien',
    title: 'Software Engineer',
    email: 'viendev@outlook.com',
    phone: '+84909218001',
    socials: [
      {
        name: 'twitter',
        icon: 'twitter.svg',
        url: 'https://twitter.com/vienvee_bb',
        nickname: 'vienvee_bb'
      },
      {
        name: 'github',
        icon: 'github.svg',
        url: 'https://github.com/vienpt',
        nickname: 'vienpt'
      },
      {
        name: 'linkedin',
        icon: 'linkedin.svg',
        url: 'https://www.linkedin.com/in/vien-pham-887255a1/',
        nickname: 'vienpham'
      },
    ]
  },
  about: [
    `Bachelor's degree in Computer Science`,
    '5+ years of programming experience in front-end/full-stack engineering of web applications',
    'Fluency in English',
    'Proficiency with modern front-end technologies (Vue2/3, Nuxtjs, Tailwind CSS, Vuex/Pinia, HTML, CSS3, PostCSS)',
    'Familiarity in unit test with Jest, e2e test (Cypress, Webdriverio), Git, JSON, Reactjs, Nextjs, GraphQL, TypeScript',
    'Experience develop backend with Java SpringBoot and ASP.Net Core ',
    'Practical knowledge of continuous integration and deployment (CI/CD) pipelines',
    'Ability to work independently while still being collaborative and inclusive',
  ],
  experiences: [
    {
      id: '1',
      position: 'Frontend Vuejs Developer',
      company: 'Air360 / Scalefast',
      workingTime: {
        startDate: '2022-11-01T00:00:00.000Z', // November 2022
        endDate: '2023-05-30T00:00:00.000Z', // May 2023
      },
      city: 'Ho Chi Minh',
      country: 'Vietnam',
      content: [
        'Collaborate closely with squad teams, including Product, Design, and QA members, to get requirements into functional and visually appealing frontend solutions.',
        'Development with Vue 3, Nuxt composition API/Nuxt 3, GraphQL via Nuxt modules that interact with Cubejs, Chartjs, and TypeScript for building Dashboard web application and Chrome extension base on component-based architecture and start management pattern.',
        'Participated in daily meeting scrums to update my team on my progress, challenges and goals. Attended planning sprint meetings every two weeks to review the completed tasks, prioritize the backlog and set the objectives for the next sprint.'
      ]
    },
    {
      id: '2',
      position: 'Software Engineer',
      company: 'ArchwayFactory / Archway',
      workingTime: {
        startDate: '2016-04-01T00:00:00.000Z', // April 2016
        endDate: '2022-10-30T00:00:00.000Z', // October 2022
      },
      city: 'Ho Chi Minh',
      country: 'Vietnam',
      content: [
        'Collaborated with a small team (3-6 members) to develop outsource project with Agile, SCRUM.',
        'R&D prototype and MVP projects using various technologies. Front-end using Vue.js(2), Nuxt, where back end is Java SpringBoot and .Net core REST webservice.',
        'Designed and developed User interface Web components using Vue, authenticate/authorization using OAuth2.0 workflow to apply signIn/out via third party app likes: Zoho CRM, Azure AD.',
        'Designed and build Nuxt landing page. Hands on experience in websites and site generators using JAMStack architecture. Used frameworks such as VuePress, VitePress, Nuxt, and Jekyll, and deployed them to platforms such as Netlify and Vercel.',
        'Worked on CI/CD pipeline tools like Github Actions, Azure Devops. Setting Docker, Helm, and Ingress files to deploy micro-services, static web site/application on Azure/GCP Cloud and monitoring applications by using Grafana, Prometheus, Kibana, Elasticsearch, Fluentd.',
        'Experience with JUnit, Cypress to implement unit test, integration test, and e2e test for web application.'
      ]
    },
    {
      id: '3',
      position: 'Developer',
      company: 'Intec-Vietnam',
      workingTime: {
        startDate: '2013-10-01T00:00:00.000Z', // Otc 2013
        endDate: '2015-10-01T00:00:00.000Z', // Otc 2015
      },
      city: 'Ho Chi Minh',
      country: 'Vietnam',
      content: [
        'Maintained, designed testcase and tested outsource project with .Net stack: VB6, MVC 3.',
      ]
    }
  ],
  education: {
    schoolName: 'University Of Science',
    city: 'Ho Chi Minh',
    country: 'Vietnam',
    periodTime: {
      startDate: String(new Date().getFullYear()), // 2009
      endDate: String(new Date().getFullYear()), // 2013
    },
    title: 'Bachelor of Science in Information Technology',
    url: 'https://www.hcmus.edu.vn',
    urlName: 'University of Science'
  },
  skill: {
    languages: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'C#', 'Java', 'SQL'],
    libFrameworks: [
      'Vuejs', 'Reactjs', 'TailwindCSS', 'Nuxtjs', 'Nextjs', 'Windicss', 'Pinia', 'Oruga', 'GraphQL',
      'Vuetify', 'Cypress', 'WebdriverIO', 'ASP.Net Core', 'SpringBoot'
    ],
    toolPlatforms: [
      'Git', 'Netlify', 'Docker', 'Yaml', 'Kubernetes', 'Jira', 'Trello', 'Github', 'Gitlab',
      'Figma', 'Azure DevOps', 'AKS', 'GCP', 'Astah'
    ]
  },
  interests: ['Swimming', 'running', 'traveling', 'riding']
}

export default data