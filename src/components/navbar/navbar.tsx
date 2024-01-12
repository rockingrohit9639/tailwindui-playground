import Link from 'next/link'
import { cn } from '@/lib/utils'
import Container from '../container'

type NavbarProps = {
  className?: string
  style?: React.CSSProperties
}

export default function Navbar({ className, style }: NavbarProps) {
  return (
    <nav
      className={cn('fixed left-0 top-0 h-16 w-full border-b bg-background backdrop-blur-lg', className)}
      style={style}
    >
      <Container className="flex h-full items-center justify-between">
        <Link href="/" className="text-lg font-bold">
          TailwindUI Playground
        </Link>
      </Container>
    </nav>
  )
}
