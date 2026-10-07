import { useDashboard } from '@/hooks/useDashboard'

import { DashboardHeader } from '@/components/dashboard/DashboardHeader'
import { ActivityForm } from '@/components/dashboard/ActivityForm'
import { ActivityGrid } from '@/components/dashboard/ActivityGrid'
import { NoActivity } from '@/components/dashboard/common/NoActivity'

export default function Dashboard() {
   const {
      activities,
      dispatch,
      activityName,
      setActivityName,
      today,
      completedToday,
   } = useDashboard()

   return (
      <main className="relative min-h-screen overflow-hidden bg-background">
         <div className="relative mx-auto max-w-6xl px-5 py-10 sm:px-8 lg:py-16">
            <DashboardHeader
               today={today}
               totalActivities={activities.length}
               completedToday={completedToday}
            />

            <ActivityForm
               activityName={activityName}
               setActivityName={setActivityName}
               dispatch={dispatch}
            />

            <ActivityGrid
               activities={activities}
               today={today}
               dispatch={dispatch}
            />

            <NoActivity />
         </div>
      </main>
   )
}
