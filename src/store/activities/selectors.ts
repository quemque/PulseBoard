import type { RootState } from '@/store/store'

export const selectActivities = (state: RootState) => state.activity

export const selectActivityById = (state: RootState, activityId: string) =>
   state.activity.find((activity) => activity.id === activityId)

export const selectCompletedActivities = (state: RootState) => {
   const today = new Date().toLocaleDateString('ru-RU')

   return state.activity.filter((activity) =>
      activity.completedDates.includes(today),
   )
}

export const selectCompletedActivitiesCount = (state: RootState) => {
   const today = new Date().toLocaleDateString('ru-RU')

   return state.activity.filter((activity) =>
      activity.completedDates.includes(today),
   ).length
}

export const selectActivitiesCount = (state: RootState) => state.activity.length
