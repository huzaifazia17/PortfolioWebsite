import { useEffect, useRef, useState } from 'react'
import { FiDownload, FiMenu, FiX } from 'react-icons/fi'
import { navLinks, profile } from '../data/resume'
import { useActiveSection } from '../hooks/useActiveSection'
import ThemeToggle from './ThemeToggle'

const NAV_IDS = navLinks.map((link) => link.id)

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(NAV_IDS)
  const panelRef = useRef(null)
  const toggleRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close on Escape, and keep focus inside the drawer while it is open.
  useEffect(() => {
    if (!open) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
        return
      }

      if (event.key !== 'Tab') return

      const focusable = panelRef.current?.querySelectorAll(
        'a[href], button:not([disabled])',
      )
      if (!focusable || focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    panelRef.current?.querySelector('a[href]')?.focus()

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open])

  const linkClass = (id) =>
    `text-sm font-medium transition-colors hover:text-primary ${
      active === id ? 'text-primary' : 'text-text'
    }`

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? 'border-border bg-bg/85 backdrop-blur-md'
          : 'border-transparent bg-bg/60 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-5 sm:px-8">
        <a
          href="#home"
          className="text-lg font-extrabold tracking-tight text-text-strong"
        >
          HZ<span className="text-primary">.</span>
        </a>

        {/* Desktop */}
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} className={linkClass(link.id)}>
              {link.label}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-hover dark:text-[#04140e]"
          >
            <FiDownload size={15} />
            Resume
          </a>
          <ThemeToggle />
        </nav>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-text-strong transition-colors hover:border-primary hover:text-primary"
          >
            {open ? <FiX size={19} /> : <FiMenu size={19} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer — the previous site simply hid the header below 440px. */}
      {open && (
        <>
          <button
            type="button"
            tabIndex={-1}
            aria-hidden="true"
            onClick={() => setOpen(false)}
            className="fixed inset-0 top-16 z-40 cursor-default bg-black/30 md:hidden"
          />
          <div
            id="mobile-menu"
            ref={panelRef}
            className="absolute inset-x-0 top-16 z-50 border-b border-border bg-bg px-5 pb-6 shadow-lg md:hidden"
          >
            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={`border-b border-border py-3.5 text-base font-medium transition-colors hover:text-primary ${
                    active === link.id ? 'text-primary' : 'text-text'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover dark:text-[#04140e]"
              >
                <FiDownload size={15} />
                Resume
              </a>
            </nav>
          </div>
        </>
      )}
    </header>
  )
}
