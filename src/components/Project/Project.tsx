import { type Skill, type Project } from '../../types/types'

export default function ProjectCard({ title, description, image = '', link = '', languages = [] }: ProjectCardPropsType) {
    return (
        <div className='project-container'>
            {
                <div className={`project-image ${image.length === 0 && 'project-image--contain'}`} style={{ backgroundImage: `url(${image.length === 0 ? '/images/profile.png' : image})` }}>
                </div>
            }
            <div className='project-info'>
                <h4 title={title}>{title}</h4>
                <p>{description}</p>
            </div>
            <div className='project-actions'>
                <div className='project-languages'>
                    {
                        languages.map((lang, index) => (
                            <div className='project-logo-container' key={index}>
                                {
                                    <img src={lang.logo} alt={`${lang.title} Logo`} />
                                }
                            </div>
                        ))
                    }
                </div>
                <div className='links'>
                    <div className='project-logo-container'>
                        <a href={link} target='_blank' rel='noreferrer'>
                            <img alt='Github logo' src='/images/git.png'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

type ProjectCardPropsType = Pick<Project, 'title' | 'description' | 'image' | 'link'> & { languages: Skill[] }
