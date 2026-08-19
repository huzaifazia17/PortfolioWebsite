import { useCallback, useEffect, useState } from 'react'

/**
 * Light is the default a visitor lands on; dark is opt-in and then remembered.
 * The OS `prefers-color-scheme` is deliberately not consulted — the initial
 * state is read back from the class the inline script in index.html already
 * applied, so the hook agrees with what is on screen instead of re-deciding.
 */
function readInitialTheme() {
  if (typeof document === 'undefined') return 'light'
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState(readInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // Private browsing / storage disabled — the theme still applies this session.
    }
  }, [theme])

  const toggle = useCallback(
    () => setTheme((current) => (current === 'dark' ? 'light' : 'dark')),
    [],
  )

  return { theme, toggle }
}
