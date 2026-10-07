import { DashboardStats } from './DashboardStats'

interface Props {
   today: string
   totalActivities: number
   completedToday: number
}

export function DashboardHeader({
   today,
   totalActivities,
   completedToday,
}: Props) {
   return (
      <header className="mb-12">
         <div className="mb-4 flex items-center gap-3">
            <div className="h-2 w-2 animate-pulse rounded-full bg-primary shadow-[0_0_12px_var(--primary)]" />

            <span className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
               Activity System
            </span>
         </div>

         <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
               <p className="mb-2 text-sm text-muted-foreground">{today}</p>

               <h1 className="text-4xl font-bold tracking-[-0.04em] sm:text-6xl">
                  My Activities
               </h1>

               <p className="mt-4 max-w-xl text-muted-foreground">
                  Track your daily activities and build consistent habits.
               </p>
            </div>

            <DashboardStats
               totalActivities={totalActivities}
               completedToday={completedToday}
            />
         </div>
      </header>
   )
}
