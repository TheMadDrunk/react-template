import { cva } from 'class-variance-authority'
import * as Tabs from '@radix-ui/react-tabs'
import { Icon } from '../icon'
import type { AppTab } from '../app-tab/types'

const triggerVariants = cva(
  'flex items-center gap-2 transition-colors outline-none',
  {
    variants: {
      active: {
        true: 'text-brand',
        false: 'text-muted-foreground hover:text-brand',
      },
    },
    defaultVariants: { active: false },
  },
)

type DesktopNavProps = {
  active: AppTab
}

/** Must render inside Radix Tabs.Root. */
export function DesktopNav({ active }: DesktopNavProps) {
  return (
    <Tabs.List className="hidden items-center gap-8 md:flex">
      <Tabs.Trigger
        value="home"
        className={triggerVariants({ active: active === 'home' })}
      >
        <Icon
          name="home"
          className={active === 'home' ? 'filled' : ''}
          filled={active === 'home'}
        />
        <span className="font-label text-xs uppercase tracking-widest">Home</span>
      </Tabs.Trigger>
      <Tabs.Trigger
        value="more"
        className={triggerVariants({ active: active === 'more' })}
      >
        <Icon
          name="more_horiz"
          className={active === 'more' ? 'filled' : ''}
          filled={active === 'more'}
        />
        <span className="font-label text-xs uppercase tracking-widest">More</span>
      </Tabs.Trigger>
    </Tabs.List>
  )
}
