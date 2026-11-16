import { useState } from 'react'
import { Modal, type AppTab } from '@app/ui'
import { AppShellView } from './app/AppShell.view'
import { Home } from './features/home'
import { More } from './features/more'

export default function App() {
  const [tab, setTab] = useState<AppTab>('home')
  const [settingsOpen, setSettingsOpen] = useState(false)

  return (
    <AppShellView
      tab={tab}
      title="App"
      onTabChange={setTab}
      onTune={() => setSettingsOpen(true)}
      home={<Home />}
      more={<More />}
      settings={
        <Modal
          open={settingsOpen}
          onOpenChange={setSettingsOpen}
          title="Settings"
          description="Opened from the tune button. Replace this with your own settings."
        >
          <p className="mt-3 text-sm text-muted-foreground">
            Tokens and components live in @app/ui.
          </p>
        </Modal>
      }
    />
  )
}
