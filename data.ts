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

export interface Satisfied {
  id: number,
  score: number,
  img: string,
  comment?: string | ""
}

export const satisfies: Satisfied[] = [
  {
    id: 1,
    score: 0,
    img: './review/frowning-face',
    comment: ''
  },
  {
    id: 3,
    score: 50,
    img: './review/neutral-face',
    comment: ''
  },
  {
    id: 4,
    score: 100,
    img: './review/smiling-face',
    comment: ''
  },
]


export type NavItem = string[]

export const NavItems : NavItem = [
  "summary",
  "experiences",
  "skills",
  "education",
  "interests"
]
