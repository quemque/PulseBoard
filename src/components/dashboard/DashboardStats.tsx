interface Props {
   totalActivities: number
   completedToday: number
}

export function DashboardStats({ totalActivities, completedToday }: Props) {
   return (
      <div className="flex gap-3">
         <div className="rounded-xl border bg-card/70 px-5 py-3 shadow-sm backdrop-blur">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
               Total
            </p>

            <p className="mt-1 text-2xl font-bold">{totalActivities}</p>
         </div>

         <div className="rounded-xl border border-primary/20 bg-primary/5 px-5 py-3 shadow-sm backdrop-blur">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
               Today
            </p>

            <p className="mt-1 text-2xl font-bold text-primary">
               {completedToday}
            </p>
         </div>
      </div>
   )
}
