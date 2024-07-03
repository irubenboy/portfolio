import ProjectCard from '../../components/Project/Project'
import useProjects from '../../hooks/useProjects'
import './Projects.css'

export default function Projects() {
    const { projects, toImages } = useProjects()

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
