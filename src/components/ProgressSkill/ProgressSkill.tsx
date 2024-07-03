export default function ProgressSkill({ title, percent, logo }: Skill) {
    return (
        <div className='skill'>
            <div className='skill-logo'>
                <img src={logo} alt={`${title} Logo`} />
            </div>
            <div className='skill-info'>
                <div className='skill-title-container'>
                    <span className='skill-title'>{title}</span>
                    <span className='skill-percentage'>{percent}%</span>
                </div>
                <div className='skill-progress'>
                    <div className={`skill-bar skill-bar-${percent}`}>
                        <div className='skill-bar-animation'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface Skill {
    title: string
    percent: number
    logo: string
}
