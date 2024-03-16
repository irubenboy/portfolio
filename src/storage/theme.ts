import { type ThemeType } from '../context/theme'

const THEME = 'THEME-STORAGE'
const LIGHT = 'light'
const DARK = 'dark'

export function getThemeStorage(): ThemeType {
    return localStorage.getItem(THEME) === DARK ? DARK : LIGHT
}

export function setThemeStorage(theme: ThemeType) {
    localStorage.setItem(THEME, theme)
}

export function clearTheme() {
    localStorage.removeItem(THEME)
}
