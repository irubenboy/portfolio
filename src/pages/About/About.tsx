import { useTranslation } from 'react-i18next'
import './About.css'
export default function AboutPage() {
    const { t } = useTranslation()
    return (
        <section className='about-section'>
            <aside className='about-image'>
                <img src='/images/me.jpg' alt='This is me' />
            </aside>
            <aside className='about-info'>
                <h1 className='about-info-title'>
                    <span className='about-info-title-mark'>
                        {t('about').substring(0, t('about').indexOf(' '))}
                    </span> {' '}
                    {t('about').substring(t('about').indexOf(' ') + 1)}</h1>
                <p className='about-info-paragraph'>
                    {t('text1')}
                </p>
                <p className='about-info-paragraph'>
                    {t('text2')}
                </p>

                <p className='about-info-paragraph'>
                    {t('text3')}
                </p>
            </aside>
        </section>
    )
}
