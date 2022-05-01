import { defineStore } from 'pinia'

export interface Tab {
  title: string
  active: boolean
  route: string
  component: string
}

export const useStoreNav = defineStore('nav', {
  state: () => ({
    tabs: [] as Tab[],
    whoActive: '',
  }),
  getters: {
    
  },
  actions: {

  }
})
