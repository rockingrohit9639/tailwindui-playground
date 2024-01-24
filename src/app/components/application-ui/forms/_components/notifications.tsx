import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { cn } from '@/lib/utils'

type Props = {
  className?: string
  style?: React.CSSProperties
}

export default function Notifications({ className, style }: Props) {
  return (
    <div className={cn('space-y-8', className)} style={style}>
      <div>
        <Label>By Email</Label>
        <div className="mt-4 grid gap-4">
          <div className="items-top flex space-x-2">
            <Checkbox id="comments" />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="comments"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Comments
              </label>
              <p className="text-sm text-muted-foreground">Get notified when someones posts a comment on a posting.</p>
            </div>
          </div>
          <div className="items-top flex space-x-2">
            <Checkbox id="candidates" />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="candidates"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Candidates
              </label>
              <p className="text-sm text-muted-foreground">Get notified when a candidate applies for a job.</p>
            </div>
          </div>
          <div className="items-top flex space-x-2">
            <Checkbox id="offers" />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="offers"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Offers
              </label>
              <p className="text-sm text-muted-foreground">
                Get notified when a candidate accepts or rejects an offer.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Label>Push Notifications</Label>
        <p className="mt-2 text-sm text-muted-foreground">These are delivered via SMS to your mobile phone.</p>

        <RadioGroup className="mt-8 grid gap-6">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="everything" id="everything" />
            <Label htmlFor="everything">Everything</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="sameAsEmail" id="sameAsEmail" />
            <Label htmlFor="sameAsEmail">Same as email</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="noPushNotification" id="noPushNotification" />
            <Label htmlFor="noPushNotification">No push notifications</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}
