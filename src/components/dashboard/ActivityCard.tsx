import type { AppDispatch } from '../../store/store'
import type { Activity } from '@/types/activity'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

import { ActivityStatus } from './ActivityStatus'
import { ActivityActions } from './ActivityActions'

interface Props {
   activity: Activity
   today: string
   dispatch: AppDispatch
}

export function ActivityCard({ activity, today, dispatch }: Props) {
   const isCompletedToday = activity.completedDates.includes(today)

   return (
      <Card
         className={`
        group relative overflow-hidden
        border-border/60
        bg-card/75
        backdrop-blur-xl
        transition-all duration-300
        hover:-translate-y-1
        hover:border-primary/30
        hover:shadow-xl
        hover:shadow-primary/10
        ${isCompletedToday ? 'border-primary/30' : ''}
      `}
      >
         <div
            className={`
          absolute -right-16 -top-16
          h-32 w-32 rounded-full
          bg-primary/10 blur-3xl
          transition-opacity
          ${
             isCompletedToday
                ? 'opacity-100'
                : 'opacity-0 group-hover:opacity-100'
          }
        `}
         />

         <CardContent className="relative p-6">
            <div className="flex items-start justify-between gap-4">
               <div className="min-w-0">
                  <div className="mb-3 flex items-center gap-2">
                     <Badge variant="secondary">{activity.category}</Badge>

                     {isCompletedToday && (
                        <Badge className="bg-primary/10 text-primary hover:bg-primary/10">
                           Completed
                        </Badge>
                     )}
                  </div>

                  <h2 className="truncate text-xl font-semibold tracking-tight">
                     {activity.title}
                  </h2>

                  <p className="mt-2 text-sm text-muted-foreground">
                     {activity.completedDates.length}{' '}
                     {activity.completedDates.length === 1 ? 'day' : 'days'}{' '}
                     completed
                  </p>
               </div>

               <ActivityStatus isCompleted={isCompletedToday} />
            </div>

            <ActivityActions
               isCompletedToday={isCompletedToday}
               dispatch={dispatch}
               activity={activity}
            />
         </CardContent>
      </Card>
   )
}
