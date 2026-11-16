import { cva } from 'class-variance-authority'
import * as Tabs from '@radix-ui/react-tabs'
import { Icon } from '../icon'
import type { AppTab } from '../app-tab/types'

const triggerVariants = cva(
  'flex flex-1 flex-col items-center justify-center gap-1 px-2 py-3 text-center outline-none',
  {
    variants: {
      active: {
        true: 'text-brand',
        false: 'text-muted-foreground',
      },
    },
    defaultVariants: { active: false },
  },
)

type MobileTabBarProps = {
  active: AppTab
}

/** Must render inside Radix Tabs.Root. */
export function MobileTabBar({ active }: MobileTabBarProps) {
  return (
    <Tabs.List className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden">
      <div className="mx-auto flex w-full flex-row items-center justify-around md:max-w-lg">
        <Tabs.Trigger
          value="home"
          className={triggerVariants({ active: active === 'home' })}
        >
          <Icon
            name="home"
            filled={active === 'home'}
            className={`text-[24px] leading-none ${active === 'home' ? 'filled' : ''}`}
          />
          <span className="font-label text-[10px] uppercase tracking-widest">Home</span>
        </Tabs.Trigger>
        <Tabs.Trigger
          value="more"
          className={triggerVariants({ active: active === 'more' })}
        >
          <Icon
            name="more_horiz"
            filled={active === 'more'}
            className={`text-[24px] leading-none ${active === 'more' ? 'filled' : ''}`}
          />
          <span className="font-label text-[10px] uppercase tracking-widest">More</span>
        </Tabs.Trigger>
      </div>
    </Tabs.List>
  )
}
