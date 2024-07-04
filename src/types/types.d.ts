export interface Skill {
    title: string
    percent: number
    logo: string
}

export interface Project {
    title: string
    description: Record<string, string>
    image?: string
    link?: string
    languages: string[]
}
