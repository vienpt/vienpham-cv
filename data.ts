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
