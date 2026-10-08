import { NavLink } from 'react-router-dom'

export function Header() {
   return (
      <header className="border-b bg-background">
         <nav className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-5 py-4 sm:px-8">
            <NavLink
               to="/"
               className={({ isActive }) =>
                  `rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                     isActive
                        ? 'bg-muted text-foreground'
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`
               }
            >
               Dashboard
            </NavLink>

            <NavLink
               to="/settings"
               className={({ isActive }) =>
                  `rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                     isActive
                        ? 'bg-muted text-foreground'
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`
               }
            >
               Settings
            </NavLink>
         </nav>
      </header>
   )
}
