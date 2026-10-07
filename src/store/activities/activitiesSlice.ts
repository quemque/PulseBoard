import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import type { Activity } from '@/types/activity'

import { loadActivities } from '@/storage/activitiesStorage'

const initialState: Activity[] = loadActivities()

const activitiesSlice = createSlice({
   name: 'activity',

   initialState,

   reducers: {
      activityAdded: (state, action: PayloadAction<Activity>) => {
         state.push(action.payload)
      },

      activityRemoved: (state, action: PayloadAction<string>) => {
         return state.filter((activity) => activity.id !== action.payload)
      },

      toggleActivityCompletion: (state, action: PayloadAction<string>) => {
         const activity = state.find(
            (activity) => activity.id === action.payload,
         )

         if (!activity) {
            return
         }

         const today = new Date().toLocaleDateString('ru-RU')

         const completedIndex = activity.completedDates.indexOf(today)

         if (completedIndex === -1) {
            activity.completedDates.push(today)
         } else {
            activity.completedDates.splice(completedIndex, 1)
         }
      },
   },
})

export const { activityAdded, activityRemoved, toggleActivityCompletion } =
   activitiesSlice.actions

export default activitiesSlice.reducer
