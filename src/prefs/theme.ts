export function loadTheme() {
    // this ensures the user's stored theme preference is applied on first load
    var theme = localStorage.getItem('prefs.colorTheme');
    var osTheme = 'lightMode'
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        osTheme = 'darkMode';
    }
    if (theme !== 'os' && theme !== 'darkMode' && 
        theme !== 'lightMode' && theme !== 'highContrastMode') {
        theme = 'os'
        localStorage.setItem('prefs.colorTheme', 'os');
    }
    if (theme === 'os') {
        theme = osTheme
    }
    document.documentElement.setAttribute('data-theme', theme);
    return theme
}

export function setThemePreference(theme: string) {
    var osTheme = 'lightMode'
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      osTheme = 'darkMode';
    }
    if (theme !== 'os' && theme !== 'darkMode' &&
      theme !== 'lightMode' && theme !== 'highContrastMode') {
      theme = 'os'
    }
    localStorage.setItem('prefs.colorTheme', theme);
    if (theme === 'os') {
      theme = osTheme
    }
    document.documentElement.setAttribute('data-theme', theme);
    // end theme setting
    console.log("set theme to", theme);
    return theme
  }
  