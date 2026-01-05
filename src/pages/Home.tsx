import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import tailwindLogo from '/tailwind.svg'
import shadcnLogo from '/shadcn-ui.svg'
import { useAppStore } from '../stores/useAppStore'
import { Sun, Moon } from 'lucide-react'
import { Button } from '../components/ui/button'

function Home() {
  const { theme, toggleTheme } = useAppStore()

  return (
    <>
      <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center">
        <div className="absolute top-4 right-4">
          <button
            onClick={() => {
              toggleTheme()
            }}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card text-foreground hover:bg-muted px-3 py-2 text-sm transition-colors"
            aria-label="Toggle theme"
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            <span className="font-medium">{theme === 'light' ? 'Dark' : 'Light'}</span>
          </button>
        </div>

        <div className="flex space-x-4 mb-8">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="h-16 w-16 hover:scale-110 transition-transform" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="h-16 w-16 animate-spin hover:animate-none" alt="React logo" />
          </a>
          <a href="https://tailwindcss.com/" target="_blank">
            <img src={tailwindLogo} className="h-16 w-16 hover:scale-110 transition-transform" alt="Tailwind logo" />
          </a>
          <a href="https://shadcn.com/" target="_blank">
            <img src={shadcnLogo} className="h-16 w-16 hover:scale-110 transition-transform" alt="Shadcn logo" />
          </a>
        </div>

        <div className="mb-4">
          <Button>Hello</Button>
        </div>

        <div className="text-lg font-medium opacity-80 space-y-1 text-center">
          <a href="https://www.npmjs.com/package/vite" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors underline block">Vite</a>
          <a href="https://www.npmjs.com/package/react" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors underline block">React</a>
          <a href="https://www.npmjs.com/package/tailwindcss" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors underline block">Tailwind CSS</a>
          <a href="https://www.npmjs.com/package/shadcn-ui" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors underline block">Shadcn UI</a>
          <a href="https://www.npmjs.com/package/react-router-dom" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors underline block">React Router DOM</a>
          <a href="https://www.npmjs.com/package/zustand" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors underline block">Zustand</a>
          <a href="https://www.npmjs.com/package/lucide-react" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors underline block">Lucide React</a>
          <a href="https://simpleicons.org/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors underline block">Simple Icons</a>
          <div className="text-foreground">Theme Toggle</div>
          <div className="text-foreground">Comprehensive .gitignore</div>
        </div>
      </div>
    </>
  )
}

export default Home