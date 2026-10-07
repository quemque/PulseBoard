import type { Dispatch, SetStateAction } from 'react'

import { handleAddActivity } from '../../handlers/AddActivity'

import type { AppDispatch } from '../../store/store'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'

interface Props {
   activityName: string
   setActivityName: Dispatch<SetStateAction<string>>
   dispatch: AppDispatch
}

export function ActivityForm({
   activityName,
   setActivityName,
   dispatch,
}: Props) {
   const handleSubmit = () => {
      handleAddActivity(activityName, setActivityName, dispatch)
   }

   const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
         handleSubmit()
      }
   }

   return (
      <Card className="mb-8 border-border/60 bg-card/70 shadow-xl shadow-black/5 backdrop-blur-xl">
         <CardContent className="p-4 sm:p-5">
            <div className="flex flex-col gap-3 sm:flex-row">
               <Input
                  className="h-11 bg-background/60"
                  placeholder="What do you want to accomplish?"
                  value={activityName}
                  onChange={(event) => setActivityName(event.target.value)}
                  onKeyDown={handleKeyDown}
               />

               <Button
                  className="h-11 px-6 shadow-lg shadow-primary/20"
                  onClick={handleSubmit}
               >
                  Add Activity
               </Button>
            </div>
         </CardContent>
      </Card>
   )
}
