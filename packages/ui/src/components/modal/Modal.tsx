import * as Dialog from '@radix-ui/react-dialog'
import type { ReactNode } from 'react'

type ModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  titleId?: string
  description?: string
  children: ReactNode
  className?: string
}

export function Modal({
  open,
  onOpenChange,
  title,
  titleId = 'modal-title',
  description,
  children,
  className = '',
}: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-overlay" />
        <Dialog.Content
          aria-describedby={description ? `${titleId}-desc` : undefined}
          className={`
            fixed z-50 box-border
            inset-x-4 bottom-4
            max-h-[calc(100dvh-2rem)] overflow-y-auto
            rounded-xl border border-border bg-background p-6 shadow-xl outline-none
            sm:inset-x-auto sm:bottom-auto sm:left-1/2 sm:top-1/2 sm:w-full sm:max-w-lg sm:min-w-[20rem] sm:-translate-x-1/2 sm:-translate-y-1/2
            md:min-w-[22rem]
            lg:max-w-xl lg:min-w-[24rem]
            ${className}
          `}
        >
          <Dialog.Title id={titleId} className="font-headline text-2xl text-on-background">
            {title}
          </Dialog.Title>
          {description ? (
            <Dialog.Description id={`${titleId}-desc`} className="mt-1 font-body text-sm text-muted-foreground">
              {description}
            </Dialog.Description>
          ) : (
            <Dialog.Description className="sr-only">{title}</Dialog.Description>
          )}
          <div className="mt-1 w-full min-w-0">{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
