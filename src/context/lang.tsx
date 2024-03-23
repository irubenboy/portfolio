import { type ReactNode, createContext, useContext, useEffect } from 'react'
import { getLangStorage, setLangStorage } from '../storage/lang'
import { useTranslation } from 'react-i18next'

const Languages = {
    EN: 'en',
    ES: 'es'
}

interface LangContextType {
    toEnglish: () => void
    toSpanish: () => void
    isSpanish: () => boolean
    isEnglish: () => boolean
    lang: string
}

const initial: LangContextType = {
    toEnglish: () => { },
    toSpanish: () => { },
    isSpanish: () => false,
    isEnglish: () => false,
    lang: Languages.EN
}
const LangContext = createContext(initial)

export function LangProvider({ children }: { children: ReactNode }) {
    useEffect(() => {
        i18n.changeLanguage(getLangStorage()).then(() => { }).catch(console.log)
    }, [])

    const { i18n } = useTranslation()

    const toEnglish = () => {
        i18n.changeLanguage(Languages.EN)
            .then(() => { setLangStorage(Languages.EN) })
            .catch(console.log)
    }

    const toSpanish = () => {
        i18n.changeLanguage(Languages.ES)
            .then(() => { setLangStorage(Languages.ES) })
            .catch(console.log)
    }

    const isSpanish = () => i18n.language === Languages.ES

    const isEnglish = () => i18n.language === Languages.EN

    return (
        <LangContext.Provider value={{
            lang: i18n.language,
            toEnglish,
            toSpanish,
            isSpanish,
            isEnglish
        }}>
            {children}
        </LangContext.Provider>
    )
}
export function useLang() {
    return useContext(LangContext)
}
