import type { Middleware } from '@reduxjs/toolkit'

import { saveActivities } from '@/storage/activitiesStorage'

export const persistenceMiddleware: Middleware =
   (store) => (next) => (action) => {
      const result = next(action)

      const activities = store.getState().activity

      saveActivities(activities)

      return result
   }
