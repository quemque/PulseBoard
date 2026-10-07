import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import type { RootState, AppDispatch } from '@/store/store'

export function useDashboard() {
   const activities = useSelector((state: RootState) => state.activity)

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
