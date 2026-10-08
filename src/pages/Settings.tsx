import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export default function Settings() {
   return (
      <main className="relative min-h-screen overflow-hidden bg-background">
         <div className="relative mx-auto max-w-6xl px-5 py-10 sm:px-8 lg:py-16">
            <div className="mb-8">
               <h1 className="text-3xl font-bold tracking-tight">Settings</h1>

               <p className="mt-2 text-muted-foreground">
                  Manage your application preferences.
               </p>
            </div>

            <div className="space-y-6">
               <Card>
                  <CardHeader>
                     <CardTitle>Appearance</CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                     <div className="flex items-center justify-between">
                        <div>
                           <p className="font-medium">Theme</p>
                           <p className="text-sm text-muted-foreground">
                              Choose how the application looks.
                           </p>
                        </div>

                        <Button variant="outline">Dark</Button>
                     </div>
                  </CardContent>
               </Card>

               <Card>
                  <CardHeader>
                     <CardTitle>Data</CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                     <div className="flex items-center justify-between">
                        <div>
                           <p className="font-medium">Clear activities</p>
                           <p className="text-sm text-muted-foreground">
                              Remove all activities from your dashboard.
                           </p>
                        </div>

                        <Button variant="destructive">Clear</Button>
                     </div>

                     <Separator />

                     <div className="flex items-center justify-between">
                        <div>
                           <p className="font-medium">Reset settings</p>
                           <p className="text-sm text-muted-foreground">
                              Restore all settings to their defaults.
                           </p>
                        </div>

                        <Button variant="outline">Reset</Button>
                     </div>
                  </CardContent>
               </Card>
            </div>
         </div>
      </main>
   )
}
