import { Tab } from '@/store/nav.store'

export default class TabNav implements Tab {
  title = ''
  active = false
  route = ''
  component: string = ''

  constructor() {}
}
