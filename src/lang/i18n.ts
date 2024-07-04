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
                    skills: 'Skills',
                    es: 'ES',
                    en: 'EN',
                    aboutMeText1: 'I am passionate about programming and everything related to it. From application development to web page development and even console scripts. Programming is based on logic and creativity, aspects that I love to train and develop.',
                    aboutMeText2: 'Thanks to my studies, my perseverance, and my sense of autonomy, I have established myself in the development of web, mobile, and desktop applications with a higher degree in DAM. I consider myself an autonomous person because, in addition to the concepts acquired in that degree, I have acquired other concepts on my own in similar environments.',
                    aboutMeText3: 'It\'s not all about writing code. One of my strongest points is understanding the needs of the end user and designing the relevant solutions to meet those needs, as well as providing the best possible experience.',
                    welcome: 'Hey 👋🏻, my name is',
                    amI: 'and I\'m',
                    fullStack: 'Full Stack Development',
                    backend: 'Backend development',
                    frontend: 'Frontend Developer',
                    database: 'Database developer',
                    subtitle: 'I am passionate about programming, I love learning and having challenges that help me grow as professional',
                    name: 'Rubén',
                    notFound: 'The page you were looking for does\'t exist.',
                    goBack: 'Go back, or head over to URL to choose a new direction',
                    notFoundPage: 'Error 404 - Not Found'
                }
            },
            es: {
                translation: {
                    home: 'Inicio',
                    about: 'Acerca de mí',
                    projects: 'Proyectos',
                    contact: 'Contacto',
                    aboutMeText1: 'Me apasiona la programación y todo lo relacionada con ella. Desde el desarrollo de aplicaciones a desarrollo de páginas web e incluso scripts de consola. La programación se basa en la lógica y la creatividad, aspectos que me encanta entrenar y desarrollar.',
                    aboutMeText2: 'Gracias a mis estudios y mi constancia y parte de mi autonomía, me he consolidado en el desarrollo de aplicaciones webs, móviles, y de escritorio con el grado superior DAM. Me considero una persona autómata por que, además de los conceptos adquiridos en dicho grado, he adquirido por mi cuenta otros conceptos en ambientes similares.',
                    aboutMeText3: 'No todo es escribir código. Uno de mis puntos más fuertes es entender las necesidades del usuario final y diseñar las soluciones pertinentes para poder ofrecerles dichas necesidades, además de poder brindarle la mejor experiencia posible.',
                    welcome: 'Hola 👋🏻, me llamo',
                    amI: 'soy',
                    fullStack: 'Desarrollador Full Stack',
                    backend: 'Desarrollador Backend',
                    frontend: 'Desarrollador Frontend',
                    database: 'Desarrollador de Base de datosr',
                    subtitle: 'La programación es mi gran pasión, me encanta aprender y tener retos que me ayudan a crecer como profesional',
                    notFound: 'La página que estabas buscando no existe.',
                    goBack: 'Vuelve o ve directamente al menú a la dirección que desees.'
                }
            }
        }
    })

export default i18n
