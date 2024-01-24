import { Image, User } from 'lucide-react'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type ProfileProps = {
  className?: string
  style?: React.CSSProperties
}

export default function Profile({ className, style }: ProfileProps) {
  return (
    <div className={cn('space-y-4', className)} style={style}>
      <div>
        <Label>Username</Label>
        <div className="mt-2 flex items-center rounded-md border px-4">
          <div className="w-min py-2 text-muted-foreground">workcation.com/</div>
          <input type="text" className="h-full flex-1 p-2 focus-visible:outline-none" placeholder="janesmith" />
        </div>
      </div>

      <div>
        <Label>About</Label>
        <Textarea className="mt-2" />
        <p className="mt-2 text-sm text-muted-foreground">Write a few sentences about yourself</p>
      </div>

      <div>
        <Label>About</Label>

        <div className="mt-2 flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border bg-muted">
            <User className="text-muted-foreground" />
          </div>

          <Button variant="outline" size="sm">
            Change
          </Button>
        </div>
      </div>

      <div>
        <Label>Cover photo</Label>

        <div className="mt-2 flex w-full flex-col items-center justify-center gap-2 rounded-md border border-dashed py-10">
          <Image className="mb-2 text-muted-foreground" size={40} />
          <div className="text-center font-medium text-muted-foreground">
            <span className="text-blue-500">Upload a file</span> or drag and drop
          </div>
          <p className="text-sm text-muted-foreground">PNG, JPG, GIF up to 10MB</p>
        </div>
      </div>
    </div>
  )
}
