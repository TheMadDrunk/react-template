import { useMore } from './More.hooks'
import { MoreView } from './More.view'

export function MoreContainer() {
  const { open, setOpen } = useMore()
  return <MoreView open={open} onOpenChange={setOpen} onOpen={() => setOpen(true)} />
}
