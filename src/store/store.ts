import { configureStore } from '@reduxjs/toolkit'

import activityReducer from './activities/activitiesSlice'
import { persistenceMiddleware } from './middleware/persistenceMiddleware'

const store = configureStore({
   reducer: {
      activity: activityReducer,
   },

   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(persistenceMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
