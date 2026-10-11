import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Moon, Palette, RotateCcw, Trash2 } from 'lucide-react'

export default function Settings() {
   return (
      <main className="relative min-h-screen bg-muted/40 p-4 sm:p-6 lg:p-10">
         <div className="mx-auto max-w-4xl space-y-8">
            <div className="flex flex-col gap-1 border-b pb-6">
               <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                     Settings
                  </h1>
                  <Badge
                     variant="secondary"
                     className="rounded-md px-2 py-0.5 text-xs"
                  >
                     Preferences
                  </Badge>
               </div>
               <p className="text-sm text-muted-foreground">
                  Manage your account preferences, appearance, and application
                  data.
               </p>
            </div>

            <div className="grid gap-6">
               <Card className="border-border/60 shadow-sm transition-all hover:border-border">
                  <CardHeader className="flex flex-row items-center gap-3 space-y-0 pb-4">
                     <div className="flex h-9 w-9 items-center justify-center rounded-lg border bg-background text-foreground shadow-sm">
                        <Palette className="h-4 w-4" />
                     </div>
                     <div>
                        <CardTitle className="text-base font-semibold">
                           Appearance
                        </CardTitle>
                        <CardDescription>
                           Customize the look and feel of your workspace.
                        </CardDescription>
                     </div>
                  </CardHeader>
                  <CardContent>
                     <div className="flex items-center justify-between rounded-lg border bg-card p-3 shadow-none sm:p-4">
                        <div className="space-y-0.5">
                           <p className="text-sm font-medium leading-none">
                              Theme Mode
                           </p>
                           <p className="text-xs text-muted-foreground">
                              Switch between light, dark, or system preferences.
                           </p>
                        </div>
                        <Button variant="outline" size="sm" className="gap-2">
                           <Moon className="h-3.5 w-3.5" />
                           <span>Dark</span>
                        </Button>
                     </div>
                  </CardContent>
               </Card>

               <Card className="border-border/60 shadow-sm transition-all hover:border-border">
                  <CardHeader className="flex flex-row items-center gap-3 space-y-0 pb-4">
                     <div className="flex h-9 w-9 items-center justify-center rounded-lg border bg-background text-foreground shadow-sm">
                        <RotateCcw className="h-4 w-4" />
                     </div>
                     <div>
                        <CardTitle className="text-base font-semibold">
                           Data & Storage
                        </CardTitle>
                        <CardDescription>
                           Manage your stored application records and defaults.
                        </CardDescription>
                     </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                     <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                           <p className="text-sm font-medium">
                              Reset application settings
                           </p>
                           <p className="text-xs text-muted-foreground">
                              Revert all configuration values to their initial
                              default state.
                           </p>
                        </div>
                        <Button
                           variant="outline"
                           size="sm"
                           className="shrink-0"
                        >
                           Reset
                        </Button>
                     </div>

                     <Separator />

                     <div className="flex items-center justify-between rounded-lg border border-destructive/20 bg-destructive/5 p-3 sm:p-4">
                        <div className="space-y-0.5">
                           <p className="text-sm font-medium text-destructive">
                              Clear activity history
                           </p>
                           <p className="text-xs text-muted-foreground">
                              Permanently delete all logged activities from your
                              dashboard.
                           </p>
                        </div>
                        <Button
                           variant="destructive"
                           size="sm"
                           className="shrink-0 gap-1.5 shadow-sm"
                        >
                           <Trash2 className="h-3.5 w-3.5" />
                           <span>Clear</span>
                        </Button>
                     </div>
                  </CardContent>
               </Card>
            </div>
         </div>
      </main>
   )
}
