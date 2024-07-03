import ProgressSkill from '../../components/ProgressSkill/ProgressSkill'
import useSkills from '../../hooks/skills'
import './Skill.css'

export default function Skills() {
    const { skills } = useSkills()
    return (
        <div className='skills-container'>
            {
                skills.map(({ title, percent, logo }, index) => (
                    <ProgressSkill
                        key={index}
                        title={title}
                        percent={percent}
                        logo={logo}
                    />
                ))
            }
        </div>
    )
}
