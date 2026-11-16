import { useState } from 'react'

export function useMore() {
  const [open, setOpen] = useState(false)
  return { open, setOpen }
}
