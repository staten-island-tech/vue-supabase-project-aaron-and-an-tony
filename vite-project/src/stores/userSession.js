import { defineStore } from 'pinia'
// PINIA SET UP THIS IS A MUST FOR THE REQUIREMENT BTW
export const userSessionStore = defineStore({
  id: 'userSession',
  state: () => ({
    session: null
  })
})