import { useTranslation } from 'react-i18next'
import './About.css'
import { useEffect } from 'react'
import { DownloadIcon } from '../../components/Icons/Icons'
export default function AboutPage() {
    const { t } = useTranslation()

    useEffect(() => {
        document.title = t('about')
    }, [t])
    return (
        <section className='about-section'>
            <aside className='about-image'>
                <img src='/portfolio/images/me.jpg' alt='This is me' />
            </aside>
            <aside className='about-info'>
                <h1 className='about-info-title'>
                    <span className='about-info-title-mark'>
                        {t('about').substring(0, t('about').indexOf(' '))}
                    </span> {' '}
                    {t('about').substring(t('about').indexOf(' ') + 1)}</h1>
                <p className='about-info-paragraph'>
                    {t('aboutMeText1')}
                </p>
                <p className='about-info-paragraph'>
                    {t('aboutMeText2')}
                </p>

                <p className='about-info-paragraph'>
                    {t('aboutMeText3')}
                </p>
                <a href='https://drive.google.com/file/d/1TCwG4TNJUV4CSmNMAyOox2AX4Ik0a0Jk/view?usp=sharing' target='_blank' rel='noreferrer' className='about-button-cv'>
                    <DownloadIcon />
                    Download CV
                </a>
            </aside>
        </section>
    )
}
