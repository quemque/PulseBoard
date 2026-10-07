import { useSelector } from 'react-redux'

import type { RootState } from '../../../store/store'

export function NoActivity() {
   const activities = useSelector((state: RootState) => state.activity)
   return (
      <div>
         {activities.length === 0 && (
            <div className="rounded-2xl border border-dashed border-border/60 bg-card/30 px-6 py-20 text-center backdrop-blur">
               <p className="text-muted-foreground">No activities yet.</p>

               <p className="mt-1 text-sm text-muted-foreground/60">
                  Add your first activity above.
               </p>
            </div>
         )}
      </div>
   )
}
