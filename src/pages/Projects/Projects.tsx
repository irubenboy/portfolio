import { useTranslation } from 'react-i18next'
import ProjectCard from '../../components/Project/Project'
import useProjects from '../../hooks/useProjects'
import './Projects.css'
import { useEffect } from 'react'

export default function Projects() {
    const { projects, toImages } = useProjects()
    const { t } = useTranslation()

    useEffect(() => {
        document.title = t('projects')
    }, [t])

    return (
        <div className='projects-container'>
            {
                projects.map(({ id, title, image, description, link, languages }) => (
                    <ProjectCard
                        key={id}
                        title={title}
                        image={image}
                        description={description}
                        link={link}
                        languages={toImages(languages)}
                    />
                ))
            }
        </div>
    )
}
