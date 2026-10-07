import {
   activityRemoved,
   toggleActivityCompletion,
} from '../../store/activities/activitiesSlice'
import { Button } from '@/components/ui/button'
import type { AppDispatch } from '../../store/store'
import type { Activity } from '@/types/activity'

interface Props {
   isCompletedToday: boolean
   dispatch: AppDispatch
   activity: Activity
}
export function ActivityActions({
   isCompletedToday,
   dispatch,
   activity,
}: Props) {
   return (
      <div className="mt-6 flex gap-2">
         <Button
            className="flex-1"
            variant={isCompletedToday ? 'secondary' : 'default'}
            onClick={() => dispatch(toggleActivityCompletion(activity.id))}
         >
            {isCompletedToday ? 'Completed today' : 'Complete today'}
         </Button>

         <Button
            variant="outline"
            onClick={() => dispatch(activityRemoved(activity.id))}
         >
            Delete
         </Button>
      </div>
   )
}
