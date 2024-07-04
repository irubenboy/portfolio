import { useTranslation } from 'react-i18next'
import './404.css'
import { useEffect } from 'react'

export default function NotFound404Page() {
    const { t } = useTranslation()

    useEffect(() => {
        document.title = t('notFoundPage')
    }, [t])

    return (
        <section className='not-found-section'>
            <aside className='not-found-image'>
                <img src='/images/minion.png' alt='Not Found image' />
            </aside>
            <aside className='not-found-info'>
                <h1 className='not-found-info-title'>ERROR 404</h1>
                <h3 className='not-found-info-subtitle'>{t('notFound')}</h3>
                <h6 className='not-found-info-text'>{t('goBack')}</h6>
            </aside>
        </section>
    )
}
