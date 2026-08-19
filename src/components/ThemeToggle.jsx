import { FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from '../hooks/useTheme'

export default function ThemeToggle({ className = '' }) {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-text-strong transition-colors hover:border-primary hover:text-primary ${className}`}
    >
      {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  )
}
