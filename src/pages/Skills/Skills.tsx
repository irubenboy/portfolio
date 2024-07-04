import { useEffect } from 'react'
import ProgressSkill from '../../components/ProgressSkill/ProgressSkill'
import useSkills from '../../hooks/useSkills'
import './Skill.css'
import { useTranslation } from 'react-i18next'

export default function Skills() {
    const { skills } = useSkills()
    const { t } = useTranslation()

    useEffect(() => {
        document.title = t('skills')
    }, [t])

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
