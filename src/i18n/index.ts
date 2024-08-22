import english from './en.json'
import spanish from './es.json'

const LANGUAGES = {
    SPANISH: 'es',
    ENGLISH: 'en'
}


export const getI18N = ({currentLocale}: {currentLocale?: string}) => {
    if(currentLocale === LANGUAGES.SPANISH) return spanish
    
    return english
}