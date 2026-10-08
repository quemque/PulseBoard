import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import type { AppDispatch } from '@/store/store'
import { selectActivities } from '@/store/activities/selectors'

export function useDashboard() {
   const activities = useSelector(selectActivities)

   const dispatch = useDispatch<AppDispatch>()

   const [activityName, setActivityName] = useState('')

   const today = new Date().toLocaleDateString('ru-RU')

   const completedToday = activities.filter((activity) =>
      activity.completedDates.includes(today),
   ).length

   return {
      activities,
      dispatch,
      activityName,
      setActivityName,
      today,
      completedToday,
   }
}
