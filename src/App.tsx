import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import type { RootState, AppDispatch } from './store/store'

import {
   activityAdded,
   activityRemoved,
   toggleActivityCompletion,
} from './store/activities/activitiesSlice'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function App() {
   const activities = useSelector((state: RootState) => state.activity)
   const dispatch = useDispatch<AppDispatch>()

   const [activityName, setActivityName] = useState('')

   const today = new Date().toLocaleDateString('ru-RU')

   const handleAddActivity = () => {
      const title = activityName.trim()

      if (!title) return

      dispatch(
         activityAdded({
            id: crypto.randomUUID(),
            title,
            category: 'study',
            completedDates: [],
         }),
      )

      setActivityName('')
   }

   const completedToday = activities.filter((activity) =>
      activity.completedDates.includes(today),
   ).length

   return (
      <main className="relative min-h-screen overflow-hidden bg-background ">
         {/* Ambient background */}
         <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-[-300px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

            <div className="absolute bottom-[-200px] right-[-100px] h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />

            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(120,120,120,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,120,120,0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />
         </div>

         <div className="relative mx-auto max-w-6xl px-5 py-10 sm:px-8 lg:py-16">
            {/* Header */}
            <header className="mb-12">
               <div className="mb-4 flex items-center gap-3">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-primary shadow-[0_0_12px_var(--primary)]" />

                  <span className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
                     Activity System
                  </span>
               </div>

               <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                  <div>
                     <p className="mb-2 text-sm text-muted-foreground">
                        {today}
                     </p>

                     <h1 className="text-4xl font-bold tracking-[-0.04em] sm:text-6xl">
                        My Activities
                     </h1>

                     <p className="mt-4 max-w-xl text-muted-foreground">
                        Track your daily activities and build consistent habits.
                     </p>
                  </div>

                  {/* Stats */}
                  <div className="flex gap-3">
                     <div className="rounded-xl border bg-card/70 px-5 py-3 shadow-sm backdrop-blur">
                        <p className="text-xs uppercase tracking-wider text-muted-foreground">
                           Total
                        </p>

                        <p className="mt-1 text-2xl font-bold">
                           {activities.length}
                        </p>
                     </div>

                     <div className="rounded-xl border border-primary/20 bg-primary/5 px-5 py-3 shadow-sm backdrop-blur">
                        <p className="text-xs uppercase tracking-wider text-muted-foreground">
                           Today
                        </p>

                        <p className="mt-1 text-2xl font-bold text-primary">
                           {completedToday}
                        </p>
                     </div>
                  </div>
               </div>
            </header>

            {/* Add activity */}
            <Card className="mb-8 border-border/60 bg-card/70 shadow-xl shadow-black/5 backdrop-blur-xl">
               <CardContent className="p-4 sm:p-5">
                  <div className="flex flex-col gap-3 sm:flex-row">
                     <Input
                        className="h-11 bg-background/60"
                        placeholder="What do you want to accomplish?"
                        value={activityName}
                        onChange={(e) => setActivityName(e.target.value)}
                        onKeyDown={(e) => {
                           if (e.key === 'Enter') {
                              handleAddActivity()
                           }
                        }}
                     />

                     <Button
                        className="h-11 px-6 shadow-lg shadow-primary/20"
                        onClick={handleAddActivity}
                     >
                        Add Activity
                     </Button>
                  </div>
               </CardContent>
            </Card>

            {/* Activity grid */}
            <div className="grid gap-4 md:grid-cols-2">
               {activities.map((activity) => {
                  const isCompletedToday =
                     activity.completedDates.includes(today)

                  return (
                     <Card
                        key={activity.id}
                        className={`
                  group relative overflow-hidden
                  border-border/60
                  bg-card/75
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-primary/30
                  hover:shadow-xl
                  hover:shadow-primary/10
                  ${isCompletedToday ? 'border-primary/30' : ''}
                `}
                     >
                        {/* Glow */}
                        <div
                           className={`
                    absolute -right-16 -top-16
                    h-32 w-32 rounded-full
                    bg-primary/10 blur-3xl
                    transition-opacity
                    ${
                       isCompletedToday
                          ? 'opacity-100'
                          : 'opacity-0 group-hover:opacity-100'
                    }
                  `}
                        />

                        <CardContent className="relative p-6">
                           <div className="flex items-start justify-between gap-4">
                              <div className="min-w-0">
                                 <div className="mb-3 flex items-center gap-2">
                                    <Badge variant="secondary">
                                       {activity.category}
                                    </Badge>

                                    {isCompletedToday && (
                                       <Badge className="bg-primary/10 text-primary hover:bg-primary/10">
                                          Completed
                                       </Badge>
                                    )}
                                 </div>

                                 <h2 className="truncate text-xl font-semibold tracking-tight">
                                    {activity.title}
                                 </h2>

                                 <p className="mt-2 text-sm text-muted-foreground">
                                    {activity.completedDates.length}{' '}
                                    {activity.completedDates.length === 1
                                       ? 'day'
                                       : 'days'}{' '}
                                    completed
                                 </p>
                              </div>

                              {/* Completion indicator */}
                              <div
                                 className={`
                        flex h-10 w-10 shrink-0 items-center justify-center
                        rounded-full border
                        transition-all
                        ${
                           isCompletedToday
                              ? 'border-primary/40 bg-primary/10 text-primary shadow-[0_0_20px_rgba(140,80,255,0.25)]'
                              : 'border-border bg-muted/50 text-muted-foreground'
                        }
                      `}
                              >
                                 {isCompletedToday ? '✓' : '○'}
                              </div>
                           </div>

                           <div className="mt-6 flex gap-2">
                              <Button
                                 className="flex-1"
                                 variant={
                                    isCompletedToday ? 'secondary' : 'default'
                                 }
                                 onClick={() =>
                                    dispatch(
                                       toggleActivityCompletion(activity.id),
                                    )
                                 }
                              >
                                 {isCompletedToday
                                    ? 'Completed today'
                                    : 'Complete today'}
                              </Button>

                              <Button
                                 variant="outline"
                                 onClick={() =>
                                    dispatch(activityRemoved(activity.id))
                                 }
                              >
                                 Delete
                              </Button>
                           </div>
                        </CardContent>
                     </Card>
                  )
               })}
            </div>

            {activities.length === 0 && (
               <div className="rounded-2xl border border-dashed border-border/60 bg-card/30 px-6 py-20 text-center backdrop-blur">
                  <p className="text-muted-foreground">No activities yet.</p>

                  <p className="mt-1 text-sm text-muted-foreground/60">
                     Add your first activity above.
                  </p>
               </div>
            )}
         </div>
      </main>
   )
}
