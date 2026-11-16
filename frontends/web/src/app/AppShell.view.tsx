import type { ReactNode } from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import {
  DesktopNav,
  MobileTabBar,
  TopAppBar,
  type AppTab,
} from '@app/ui'

type AppShellViewProps = {
  tab: AppTab
  title?: string
  onTabChange: (tab: AppTab) => void
  onTune: () => void
  home: ReactNode
  more: ReactNode
  settings: ReactNode
}

export function AppShellView({
  tab,
  title,
  onTabChange,
  onTune,
  home,
  more,
  settings,
}: AppShellViewProps) {
  return (
    <Tabs.Root
      value={tab}
      onValueChange={(value) => onTabChange(value as AppTab)}
      className="relative flex h-dvh w-full flex-col overflow-hidden bg-background font-body text-on-background antialiased"
    >
      <TopAppBar title={title} onTune={onTune} trailing={<DesktopNav active={tab} />} />

      <Tabs.Content value="home" className="flex min-h-0 flex-1 flex-col outline-none">
        {home}
      </Tabs.Content>
      <Tabs.Content value="more" className="flex min-h-0 flex-1 flex-col outline-none">
        {more}
      </Tabs.Content>

      <MobileTabBar active={tab} />
      {settings}
    </Tabs.Root>
  )
}
