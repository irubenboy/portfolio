import './About.css'
export default function AboutPage() {
    return (
        <section className='about-section'>
            <aside className='about-image'>
                <img src='/images/me.jpg' alt='This is me' />
            </aside>
            <aside className='about-info'>
                <h1 className='about-info-title'><span className='about-info-title-mark'>About</span> me</h1>
                <p className='about-info-paragraph'>
                    I am passionate about tackling challenging problems in order to learn and solve them. Programming gives me the opportunity to combine my passion for logic and creativity to create functional and attractive applications.
                </p>
                <p className='about-info-paragraph'>
                    Through my studies, I gained a solid understanding of web and cross-platform development concepts with the DAM higher degree and studying on my own I have spent a lot of time applying these concepts to real-world scenarios and applications.
                </p>

                <p className='about-info-paragraph'>
                    My approach to development goes beyond writing code. I strive to understand the needs of the end user and design solutions that not only work well, but also provide an exceptional experience. I firmly believe in the importance of usability and accessibility.
                </p>
            </aside>
        </section>
    )
}
