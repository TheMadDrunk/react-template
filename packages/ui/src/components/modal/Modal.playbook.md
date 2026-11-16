# Modal

Radix Dialog wrapper with overlay, focus trap, and responsive width.

## Usage

```tsx
import { Modal } from '@app/ui'

<Modal
  open={open}
  onOpenChange={setOpen}
  title="Settings"
  description="Optional supporting text"
>
  {children}
</Modal>
```
