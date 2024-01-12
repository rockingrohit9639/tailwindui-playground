import { Fragment } from 'react'
import { cn } from '@/lib/utils'

type BreadcrumbProps = {
  className?: string
  style?: React.CSSProperties
  items: string[]
}

export default function Breadcrumb({ className, style, items }: BreadcrumbProps) {
  return (
    <div className={cn('flex items-center gap-2 font-medium text-muted-foreground', className)} style={style}>
      {items.map((item, index) => (
        <Fragment key={item}>
          <div>{item}</div>
          {index < items.length - 1 ? <div>/</div> : null}
        </Fragment>
      ))}
    </div>
  )
}
