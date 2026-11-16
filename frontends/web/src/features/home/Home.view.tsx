import type { HomeViewProps } from './Home.types'

export function HomeView({ title, description }: HomeViewProps) {
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
        {title}
      </h2>
      <p className="mt-3 max-w-md text-muted-foreground">{description}</p>
    </main>
  )
}
