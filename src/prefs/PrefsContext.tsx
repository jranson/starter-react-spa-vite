import React, { useState } from "react"
import { loadTheme, setThemePreference } from "./theme"

export interface IPrefsContext {
    theme: string
    setThemeFunc: any
}

export function defaultPrefs() {
    return {
        theme: loadTheme(),
        setThemeFunc: null
    } as IPrefsContext
}

export const PrefsContext = React.createContext<IPrefsContext>(defaultPrefs())

interface IPrefsProviderProps {
    children: React.ReactNode;
}

export const PrefsProvider = ({ children }: IPrefsProviderProps) => {
    const value = defaultPrefs() as IPrefsContext
    const [theme, setTheme] = useState(value.theme)
    value.theme = theme
    value.setThemeFunc = (theme: string) => {
        theme = setThemePreference(theme)
        setTheme(theme)
    }
    return <PrefsContext.Provider value={value}>{children}</PrefsContext.Provider>;
}
