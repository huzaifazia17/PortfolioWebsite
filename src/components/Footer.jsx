import { profile } from '../data/resume'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-text-muted sm:flex-row sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>Built with React, Vite &amp; Tailwind CSS</p>
      </div>
    </footer>
  )
}
