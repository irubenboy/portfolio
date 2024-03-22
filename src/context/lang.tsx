import { type ReactNode, createContext, useContext, useState } from 'react'
import { getLangStorage, setLangStorage } from '../storage/lang'

export type LangType = 'en' | 'es'

const Languages: Record<string, LangType> = {
    EN: 'en',
    ES: 'es'
}

interface LangContextType {
    toEnglish: () => void
    toSpanish: () => void
    isSpanish: () => boolean
    isEnglish: () => boolean
    lang: LangType
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
    const [lang, setLang] = useState<LangType>(() => {
        return getLangStorage()
    })

    const toEnglish = () => {
        setLang(Languages.EN)
        setLangStorage(Languages.EN)
    }

    const toSpanish = () => {
        setLang(Languages.ES)
        setLangStorage(Languages.ES)
    }

    const isSpanish = () => lang === Languages.ES

    const isEnglish = () => lang === Languages.EN

    return (
        <LangContext.Provider value={{
            lang,
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
