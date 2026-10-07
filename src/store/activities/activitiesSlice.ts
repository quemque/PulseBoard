import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Activity } from '../../types/activity'
import { initialState } from '../../const/initActivity'

const activitySlice = createSlice({
   name: 'activity',
   initialState,
   reducers: {
      activityAdded(state, action: PayloadAction<Activity>) {
         state.push(action.payload)
      },
      activityRemoved(state, action: PayloadAction<string>) {
         return state.filter((post) => post.id !== action.payload)
      },
      toggleActivityCompletion(state, action: PayloadAction<string>) {
         const activity = state.find(
            (activity) => activity.id === action.payload,
         )

         if (!activity) return

         const today = new Date().toLocaleDateString('ru-RU')
         const isCompleted = activity.completedDates.includes(today)

         if (isCompleted) {
            activity.completedDates = activity.completedDates.filter(
               (date) => date !== today,
            )
         } else {
            activity.completedDates.push(today)
         }
      },
   },
})

export const { activityAdded, activityRemoved, toggleActivityCompletion } =
   activitySlice.actions
export default activitySlice.reducer
