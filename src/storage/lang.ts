import { type LangType } from '../context/lang'

const LANG = 'LANG-STORAGE'

const EN = 'en'
const ES = 'es'

export function getLangStorage(): LangType {
    return localStorage.getItem(LANG) === ES ? ES : EN
}

export function setLangStorage(lang: LangType) {
    localStorage.setItem(LANG, lang)
}

export function clearLangStorage() {
    localStorage.removeItem(LANG)
}
