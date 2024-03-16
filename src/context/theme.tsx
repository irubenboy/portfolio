import { type ReactNode, createContext, useState, useContext, useEffect } from 'react'
import { getThemeStorage, setThemeStorage } from '../storage/theme'

export type ThemeType = 'light' | 'dark'

interface ThemeContextType {
    isDark: boolean
    toggleTheme: () => void
}

const LIGHT = 'light'
const DARK = 'dark'

const initContext: ThemeContextType = {
    isDark: false,
    toggleTheme: () => { }
}
const ThemeContext = createContext(initContext)

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<ThemeType>(() => {
        return getThemeStorage()
    })

    const [isDark, setDark] = useState(false)

    useEffect(() => {
        const bodyClass = document.querySelector('body')?.classList

        if (theme === DARK) {
            bodyClass?.add('dark-mode')
        } else {
            bodyClass?.remove('dark-mode')
        }

        setDark(theme === DARK)
    }, [theme])

    const toggleTheme = () => {
        setTheme((prev: ThemeType) => {
            const newTheme = prev === DARK ? LIGHT : DARK

            setThemeStorage(newTheme)

            const bodyClass = document.querySelector('body')?.classList

            if (newTheme === DARK) {
                bodyClass?.add('dark-mode')
            } else {
                bodyClass?.remove('dark-mode')
            }

            return newTheme
        })
    }
    return (
        <ThemeContext.Provider value={{
            isDark,
            toggleTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeContext)
}
