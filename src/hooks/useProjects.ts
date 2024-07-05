import { type Project } from '../types/types'
import useSkills from './useSkills'

export default function useProjects() {
    const projects: Project[] = [
        {
            id: 1,
            title: 'My Java Common Library',
            description: {
                en: `A Java library with string, maths and arrays utils. Besides, it contains class to work keyboard easily and table as output.`,
                es: `Una librería Java con utilidades de cadenas, matemáticas y arrays. Además, contiene clases para trabajar con el teclado  y de forma sencilla y obtener salidas en forma de tablas.`
            },
            image: '',
            link: 'https://github.com/irubenboy/common',
            languages: ['Java']
        },
        {
            id: 2,
            title: 'Portfolio',
            description: {
                en: `Portfolio web with the best projects`,
                es: `Portfolio web con los mejores proyectos`
            },
            languages: ['HTML', 'CSS', 'Javascript', 'React'],
            image: '/portfolio/images/portfolio.png'
        }
    ]
    const { skills } = useSkills()

    const toImages = (languages: string[]) => {
        return skills
            .filter(({ title }) => languages.includes(title))
    }

    const languages = [
        ...new Set(
            projects
                .map(({ languages }) => languages)
                .reduce((acc, item) => [...acc, ...item])
        )
    ]

    return { projects, languages, toImages }
}
