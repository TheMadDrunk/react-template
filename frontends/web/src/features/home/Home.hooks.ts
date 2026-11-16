import type { ExampleItem } from '@app/types'

const SAMPLE: ExampleItem = {
  id: 'home',
  title: 'Home',
}

export function useHome() {
  return {
    item: SAMPLE,
    description:
      'This is the example feature. Containers own state; views render. Replace this folder with your own screen.',
  }
}
