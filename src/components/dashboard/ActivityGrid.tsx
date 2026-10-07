import type { AppDispatch } from '../../store/store'
import type { Activity } from '@/types/activity'

import { ActivityCard } from './ActivityCard'

interface Props {
   activities: Activity[]
   today: string
   dispatch: AppDispatch
}

export function ActivityGrid({ activities, today, dispatch }: Props) {
   return (
      <div className="grid gap-4 md:grid-cols-2">
         {activities.map((activity) => (
            <ActivityCard
               key={activity.id}
               activity={activity}
               today={today}
               dispatch={dispatch}
            />
         ))}
      </div>
   )
}
