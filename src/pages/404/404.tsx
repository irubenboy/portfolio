import './404.css'

export default function NotFound404Page() {
    return (
        <section className='not-found-section'>
            <aside className='not-found-image'>
                <img src='/images/minion.png' alt='Not Found image' />
            </aside>
            <aside className='not-found-info'>
                <h1 className='not-found-info-title'>ERROR 404</h1>
                <h3 className='not-found-info-subtitle'>The page you were looking for does&apos;t exist.</h3>
                <h6 className='not-found-info-text'>Go back, or head over to URL to choose a new direction</h6>
            </aside>
        </section>
    )
}
