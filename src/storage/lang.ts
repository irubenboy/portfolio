const LANG = 'LANG-STORAGE'

export function getLangStorage() {
    return localStorage.getItem(LANG) ?? 'en'
}

export function setLangStorage(lang: string) {
    localStorage.setItem(LANG, lang)
}

export function clearLangStorage() {
    localStorage.removeItem(LANG)
}
