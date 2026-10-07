import type { AppDispatch } from '../store/store'
import { activityAdded } from '../store/activities/activitiesSlice'

export const handleAddActivity = (
   activityName: string,
   setActivityName: (a: string) => void,
   dispatch: AppDispatch,
) => {
   const title = activityName.trim()

   if (!title) return

   dispatch(
      activityAdded({
         id: crypto.randomUUID(),
         title,
         category: 'study',
         completedDates: [],
      }),
   )

   setActivityName('')
}
