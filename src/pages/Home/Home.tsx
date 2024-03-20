import { ReactTyped } from 'react-typed'
import './Home.css'

export default function HomePage() {
    return (
        <main className='app-main'>
            <section className='app-cover'>
                <article className='app-info'>
                    <h5 className='app-data--color'>Hey 👋🏻, my name is</h5>
                    <h1 className='app-data-name'>Rubén</h1>
                    <h2 className='app-data'>
                        <span className='app-data--color'>
                            and I&apos;m
                        </span>{' '}
                        <ReactTyped
                            strings={['Full Stack Development', 'Backend development', 'Frontend Developer']}
                            typeSpeed={500}
                            backSpeed={200}
                            loop
                        />
                    </h2>
                    <p className='app-data--secondary'>I am passionate about programming, I love learning and having challenges that help me grow as professional</p>
                </article>
                <div className='app-image'>
                    <img src='/images/image.jpeg' />
                </div>
            </section>
        </main>
    )
}
