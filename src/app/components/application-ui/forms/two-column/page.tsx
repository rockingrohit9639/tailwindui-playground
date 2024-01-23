import { Image, User } from 'lucide-react'
import Breadcrumb from '@/components/breadcrumb'
import Container from '@/components/container'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

export default function TwoColumn() {
  return (
    <Container className="min-h-screen py-20">
      <Breadcrumb className="mb-2" items={['Application UI', 'Forms', 'Two Column']} />
      <h1 className="mb-10 text-2xl font-extrabold">Two Column</h1>

      <div className="grid gap-10 rounded-lg border bg-white px-4 py-24 md:grid-cols-2 md:px-10">
        <div>
          <h3 className="mb-2 font-bold">Profile</h3>
          <p className="text-muted-foreground">
            This information will be displayed publicly so be careful what you share.
          </p>
        </div>

        <div className="space-y-4">
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

        <div className="col-span-full h-[1px] w-full bg-muted   " />

        <div>
          <h1 className="text-lg font-medium">Personal Information</h1>
          <p className="text-sm text-muted-foreground">Use a permanent address where you can receive mail.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-6">
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

        <div className="col-span-full h-[1px] w-full bg-muted" />

        <div>
          <h1 className="text-lg font-medium">Notifications</h1>
          <p className="text-sm text-muted-foreground">
            We will always let you know about important changes, but you pick what else you want to hear about.
          </p>
        </div>

        <div className="space-y-8">
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
                  <p className="text-sm text-muted-foreground">
                    Get notified when someones posts a comment on a posting.
                  </p>
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

        <div className="col-span-full h-[1px] w-full bg-muted" />

        <div className="col-span-full flex items-center justify-end gap-2">
          <Button variant="ghost" size="sm">
            Cancel
          </Button>
          <Button size="sm">Save</Button>
        </div>
      </div>
    </Container>
  )
}
