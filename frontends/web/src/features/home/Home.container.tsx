import { useHome } from './Home.hooks'
import { HomeView } from './Home.view'

export function HomeContainer() {
  const { item, description } = useHome()
  return <HomeView title={item.title} description={description} />
}
