import type { Activity } from '@/types/activity'

const STORAGE_KEY = 'activities'

export function loadActivities(): Activity[] {
   const storedActivities = localStorage.getItem(STORAGE_KEY)

   if (!storedActivities) {
      return []
   }

   try {
      return JSON.parse(storedActivities) as Activity[]
   } catch {
      return []
   }
}

export function saveActivities(activities: Activity[]): void {
   localStorage.setItem(STORAGE_KEY, JSON.stringify(activities))
}

export function clearActivities(): void {
   localStorage.removeItem(STORAGE_KEY)
}
