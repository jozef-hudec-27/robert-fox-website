export interface Skill {
  title: string
  description: string
  icon: React.ReactNode
}

export interface Testimonial {
  author_image: any
  author_name: string
  author_location: string
  text: string
}

export interface NavLink {
  isLink: boolean
  path?: string
  text: string
  icon?: React.ReactNode
  appendDivider?: boolean
}
