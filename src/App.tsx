import { useSelector, useDispatch } from 'react-redux'
import type { RootState, AppDispatch } from './store/store'
import {
   activityAdded,
   activityRemoved,
   toggleActivityCompletion,
} from './store/activities/activitiesSlice'
import { useState } from 'react'

function App() {
   const activities = useSelector((state: RootState) => state.activity)
   const dispatch = useDispatch<AppDispatch>()

   const [activityName, setActivityName] = useState<string>('')

   return (
      <div>
         <input
            type="text"
            placeholder="activity name"
            value={activityName}
            onChange={(e) => setActivityName(e.target.value)}
         />

         <button
            onClick={() => {
               if (!(activityName == '')) {
                  dispatch(
                     activityAdded({
                        id: crypto.randomUUID(),
                        title: activityName,
                        category: 'study',
                        completedDates: [],
                     }),
                  )
               }
            }}
         >
            Add Activity
         </button>

         {activities.map((activity) => {
            return (
               <div key={activity.id}>
                  <h1> id: {activity.id}</h1>
                  <h1> title : {activity.title}</h1>
                  <h1> category : {activity.category}</h1>
                  <h1> days : {activity.completedDates.length}</h1>
                  <button
                     onClick={() => {
                        dispatch(activityRemoved(activity.id))
                     }}
                  >
                     Delete activity
                  </button>
                  <button
                     onClick={() => {
                        dispatch(toggleActivityCompletion(activity.id))
                     }}
                  >
                     {activity.completedDates.includes(
                        new Date().toLocaleDateString('ru-RU'),
                     )
                        ? 'Delete today'
                        : 'Completed today'}
                  </button>
               </div>
            )
         })}
      </div>
   )
}

export default App
