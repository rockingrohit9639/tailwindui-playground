import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { cn } from '@/lib/utils'

type Props = {
  className?: string
  style?: React.CSSProperties
}

export default function PersonalInformation({ className, style }: Props) {
  return (
    <div className={cn('grid gap-4 md:grid-cols-6', className)} style={style}>
      <div className="md:col-span-3">
        <Label>First name</Label>
        <Input className="mt-2" />
      </div>

      <div className="md:col-span-3">
        <Label>Last name</Label>
        <Input className="mt-2" />
      </div>

      <div className="md:col-span-3">
        <Label>Email address</Label>
        <Input className="mt-2" />
      </div>

      <div className="md:col-span-3">
        <Label>Country</Label>
        <Select>
          <SelectTrigger className="mt-2">
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="india">India</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="md:col-span-2">
        <Label>City</Label>
        <Input className="mt-2" />
      </div>
      <div className="md:col-span-2">
        <Label>State / Province</Label>
        <Input className="mt-2" />
      </div>
      <div className="md:col-span-2">
        <Label>ZIP / Postal code</Label>
        <Input className="mt-2" />
      </div>
    </div>
  )
}
