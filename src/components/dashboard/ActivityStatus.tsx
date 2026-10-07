interface Props {
   isCompleted: boolean
}

export function ActivityStatus({ isCompleted }: Props) {
   return (
      <div
         className={`
        flex h-10 w-10 shrink-0
        items-center justify-center
        rounded-full border
        transition-all
        ${
           isCompleted
              ? 'border-primary/40 bg-primary/10 text-primary shadow-[0_0_20px_rgba(140,80,255,0.25)]'
              : 'border-border bg-muted/50 text-muted-foreground'
        }
      `}
      >
         {isCompleted ? '✓' : '○'}
      </div>
   )
}
