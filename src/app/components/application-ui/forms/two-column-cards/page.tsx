import Breadcrumb from '@/components/breadcrumb'
import Container from '@/components/container'
import Profile from '../_components/profile'
import PersonalInformation from '../_components/personal-information'
import Notifications from '../_components/notifications'
import { Button } from '@/components/ui/button'

export default function TwoColumnCard() {
  return (
    <Container className="min-h-screen py-20">
      <Breadcrumb className="mb-2" items={['Application UI', 'Forms', 'Two Column with Cards']} />
      <h1 className="mb-10 text-2xl font-extrabold">Two Column with Cards</h1>

      <div className="grid gap-10 rounded-lg border bg-gray-100 px-4 py-24 md:grid-cols-3 md:px-10">
        <div>
          <h3 className="mb-2 font-bold">Profile</h3>
          <p className="text-muted-foreground">
            This information will be displayed publicly so be careful what you share.
          </p>
        </div>

        <div className="col-span-2 rounded-lg border bg-white">
          <Profile className="px-8 pt-8" />

          <div className="mt-8 h-[1px] w-full bg-gray-100" />
          <div className="flex items-center justify-end gap-2 px-8 py-4">
            <Button variant="ghost" size="sm">
              Cancel
            </Button>
            <Button size="sm">Save</Button>
          </div>
        </div>

        <div className="col-span-full h-[1px] w-full bg-muted" />

        <div>
          <h1 className="text-lg font-medium">Personal Information</h1>
          <p className="text-sm text-muted-foreground">Use a permanent address where you can receive mail.</p>
        </div>

        <div className="col-span-2 rounded-lg border bg-white">
          <PersonalInformation className="px-8 pt-8" />

          <div className="mt-8 h-[1px] w-full bg-gray-100" />
          <div className="flex items-center justify-end gap-2 px-8 py-4">
            <Button variant="ghost" size="sm">
              Cancel
            </Button>
            <Button size="sm">Save</Button>
          </div>
        </div>

        <div className="col-span-full h-[1px] w-full bg-muted" />

        <div>
          <h1 className="text-lg font-medium">Notifications</h1>
          <p className="text-sm text-muted-foreground">
            We will always let you know about important changes, but you pick what else you want to hear about.
          </p>
        </div>

        <div className="col-span-2 rounded-lg border bg-white">
          <Notifications className="px-8 pt-8" />

          <div className="mt-8 h-[1px] w-full bg-gray-100" />
          <div className="flex items-center justify-end gap-2 px-8 py-4">
            <Button variant="ghost" size="sm">
              Cancel
            </Button>
            <Button size="sm">Save</Button>
          </div>
        </div>
      </div>
    </Container>
  )
}
