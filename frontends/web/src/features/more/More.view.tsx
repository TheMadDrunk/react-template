import { Modal } from '@app/ui'
import type { MoreViewProps } from './More.types'

export function MoreView({ open, onOpenChange, onOpen }: MoreViewProps) {
  return (
    <main
      className="
        relative z-10 mx-auto flex min-h-0 w-full max-w-3xl flex-1 flex-col
        px-5 pt-[calc(4.25rem+env(safe-area-inset-top))]
        pb-[calc(5rem+env(safe-area-inset-bottom))]
        sm:px-6
        md:max-w-4xl md:pb-10 md:pt-22
        lg:max-w-5xl lg:px-10
      "
    >
      <h2 className="font-headline text-3xl uppercase tracking-wider text-brand lg:text-4xl">
        More
      </h2>
      <p className="mt-3 max-w-md text-muted-foreground">
        Second tab. Use it for settings, about, or any extra screen.
      </p>
      <button
        type="button"
        onClick={onOpen}
        className="mt-6 w-fit rounded-md bg-primary px-4 py-2.5 font-semibold text-primary-foreground hover:bg-primary/90"
      >
        Open modal
      </button>
      <Modal
        open={open}
        onOpenChange={onOpenChange}
        title="Example modal"
        description="This modal is owned by the More feature."
      >
        <p className="mt-3 text-sm text-muted-foreground">
          Swap this copy for your own content.
        </p>
      </Modal>
    </main>
  )
}
