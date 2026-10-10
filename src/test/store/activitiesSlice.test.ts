import { describe, it, expect } from 'vitest'
import reducer, {
   activityAdded,
   activityRemoved,
   toggleActivityCompletion,
} from '@/store/activities/activitiesSlice'
import type { Activity } from '@/types/activity'

describe('activitiesSlice', () => {
   it('adds an activity', () => {
      const initialState: Activity[] = []

      const activity: Activity = {
         id: '1',
         title: 'Coding',
         category: 'study',
         completedDates: [],
      }

      const state = reducer(initialState, activityAdded(activity))

      expect(state).toHaveLength(1)
      expect(state[0]).toEqual(activity)
   })
   it('removes an activity', () => {
      const initialState: Activity[] = [
         {
            id: '1',
            title: 'Coding',
            category: 'study',
            completedDates: [],
         },
         {
            id: '2',
            title: 'English',
            category: 'study',
            completedDates: [],
         },
      ]

      const state = reducer(initialState, activityRemoved('1'))

      expect(state).toHaveLength(1)
      expect(state[0].id).toBe('2')
      expect(state.some((activity) => activity.id === '1')).toBe(false)
   })
   it('does nothing if activity does not exist', () => {
      const initialState: Activity[] = [
         {
            id: '1',
            title: 'Coding',
            category: 'study',
            completedDates: [],
         },
      ]

      const state = reducer(initialState, toggleActivityCompletion('999'))

      expect(state).toEqual(initialState)
   })
   it('toggles activity completion on and off', () => {
      const today = new Date().toLocaleDateString('ru-RU')

      const initialState: Activity[] = [
         {
            id: '1',
            title: 'Coding',
            category: 'study',
            completedDates: [],
         },
      ]

      const completedState = reducer(
         initialState,
         toggleActivityCompletion('1'),
      )

      expect(completedState[0].completedDates).toContain(today)

      const uncompletedState = reducer(
         completedState,
         toggleActivityCompletion('1'),
      )

      expect(uncompletedState[0].completedDates).not.toContain(today)
      expect(uncompletedState[0].completedDates).toHaveLength(0)
   })
})
