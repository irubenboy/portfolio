import { ReactTyped } from 'react-typed'
import './Home.css'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

export default function HomePage() {
    const { t } = useTranslation()

    useEffect(() => {
        document.title = t('home')
    }, [t])

    return (
        <>
            <section className='app-cover'>
                <article className='app-info'>
                    <h5 className='app-data--color'>{t('welcome')}</h5>
                    <h1 className='app-data-name'>{t('name')}</h1>
                    <h2 className='app-data'>
                        <span className='app-data--color'>
                            {t('amI')}
                        </span>{' '}
                        <ReactTyped
                            strings={[t('fullStack'), t('backend'), t('frontend'), t('database')]}
                            typeSpeed={500}
                            backSpeed={200}
                            loop
                        />
                    </h2>
                    <p className='app-data--secondary'>{t('subtitle')}</p>
                </article>
                <div className='app-image'>
                    <img src='/images/image.jpg' />
                </div>
            </section>
        </>
    )
}
