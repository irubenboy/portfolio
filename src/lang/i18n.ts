import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

await i18n
    .use(initReactI18next)
    .init({
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        },
        resources: {
            en: {
                translation: {
                    home: 'Home',
                    about: 'About me',
                    projects: 'Projects',
                    contact: 'Contact',
                    skill: 'Skills',
                    es: 'ES',
                    en: 'EN',
                    aboutMeText1: 'I am passionate about tackling challenging problems in order to learn and solve them. Programming gives me the opportunity to combine my passion for logic and creativity to create functional and attractive applications.',
                    aboutMeText2: 'Through my studies, I gained a solid understanding of web and cross-platform development concepts with the DAM higher degree and studying on my own I have spent a lot of time applying these concepts to real-world scenarios and applications.',
                    aboutMeText3: 'My approach to development goes beyond writing code. I strive to understand the needs of the end user and design solutions that not only work well, but also provide an exceptional experience. I firmly believe in the importance of usability and accessibility.',
                    welcome: 'Hey 👋🏻, my name is',
                    amI: 'and I\'m',
                    fullStack: 'Full Stack Development',
                    backend: 'Backend development',
                    frontend: 'Frontend Developer',
                    subtitle: 'I am passionate about programming, I love learning and having challenges that help me grow as professional',
                    name: 'Rubén',
                    text1: 'I am passionate about tackling challenging problems in order to learn and solve them. Programming gives me the opportunity to combine my passion for logic and creativity to create functional and attractive applications.',
                    text2: 'Through my studies, I gained a solid understanding of web and cross-platform development concepts with the DAM higher degree and studying on my own I have spent a lot of time applying these concepts to real-world scenarios and applications.',
                    text3: 'My approach to development goes beyond writing code. I strive to understand the needs of the end user and design solutions that not only work well, but also provide an exceptional experience. I firmly believe in the importance of usability and accessibility.',
                    notFound: 'The page you were looking for does\'t exist.',
                    goBack: 'Go back, or head over to URL to choose a new direction'
                }
            },
            es: {
                translation: {
                    home: 'Inicio',
                    about: 'Acerca de mí',
                    projects: 'Proyectos',
                    contact: 'Contacto',
                    aboutMeText1: 'Me apasiona enfrentarme a problemas desafiantes para poder aprender y resolverlos.La programación me brinda la oportunidad de combinar mi pasión por la lógica y la creatividad para crear aplicaciones funcionales y atractivas.',
                    aboutMeText2: 'A través de mis estudios, obtuve una sólida comprensión de los conceptos de desarrollo web y multiplataforma con el grado superior DAM y estudiando por mi cuenta he dedicado mucho tiempo a aplicar estos conceptos a escenarios y aplicaciones del mundo real.',
                    aboutMeText3: 'Mi enfoque en el desarrollo va más allá de escribir código. Me esfuerzo por comprender las necesidades del usuario final y diseñar soluciones que no solo funcionen bien, sino que también proporcionen una experiencia excepcional. Creo firmemente en la importancia de la usabilidad y la accesibilidad.',
                    welcome: 'Hola 👋🏻, me llamo',
                    amI: 'soy',
                    fullStack: 'Desarrollador Full Stack',
                    backend: 'Desarrollador Backend',
                    frontend: 'Desarrollador Frontend',
                    subtitle: 'La programación es mi gran pasión, me encanta aprender y tener retos que me ayudan a crecer como profesional',
                    text1: 'Me apasiona enfrentarme a problemas desafiantes para poder aprender y resolverlos. La programación me brinda la oportunidad de combinar mi pasión por la lógica y la creatividad para crear aplicaciones funcionales y atractivas.',
                    text2: 'A través de mis estudios, obtuve una sólida comprensión de los conceptos de desarrollo web y multiplataforma con el grado superior DAM y estudiando por mi cuenta he dedicado mucho tiempo a aplicar estos conceptos a escenarios y aplicaciones del mundo real.',
                    text3: 'Mi enfoque en el desarrollo va más allá de escribir código. Me esfuerzo por comprender las necesidades del usuario final y diseñar soluciones que no solo funcionen bien, sino que también proporcionen una experiencia excepcional. Creo firmemente en la importancia de la usabilidad y la accesibilidad.',
                    notFound: 'La página que estabas buscando no existe.',
                    goBack: 'Vuelve o ve directamente al menú a la dirección que desees.'
                }
            }
        }
    })

export default i18n
