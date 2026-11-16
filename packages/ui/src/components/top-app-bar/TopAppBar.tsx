import type { ReactNode } from 'react'
import { Icon } from '../icon'

type TopAppBarProps = {
  title?: string
  onTune?: () => void
  trailing?: ReactNode
}

export function TopAppBar({ title = 'App', onTune, trailing }: TopAppBarProps) {
  return (
    <header className="fixed top-0 z-50 w-full bg-gradient-to-b from-background via-background/95 to-transparent pt-[env(safe-area-inset-top)]">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-5 sm:px-6 lg:h-16 lg:px-10">
        <div className="flex min-w-0 items-center gap-2">
          <Icon name="dashboard" className="shrink-0 text-[26px] text-brand sm:text-[28px]" />
          <h1 className="truncate font-headline text-[26px] uppercase leading-none tracking-wider text-brand sm:text-[28px] lg:text-[32px]">
            {title}
          </h1>
        </div>
        <div className="flex shrink-0 items-center gap-4">
          {trailing}
          {onTune ? (
            <button
              type="button"
              onClick={onTune}
              className="text-on-background/80 transition-colors hover:text-on-background"
              aria-label="Settings"
            >
              <Icon name="tune" className="text-[26px]" />
            </button>
          ) : null}
        </div>
      </div>
    </header>
  )
}
