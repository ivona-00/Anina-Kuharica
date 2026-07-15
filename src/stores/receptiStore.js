import receptiData from '../data/receptiData'
import { defineStore } from 'pinia'
export const useReceptiStore = defineStore('recepti', {
  state: () => ({
    recepti: receptiData,
  }),

  actions:{
    addRecept(recept){
    this.recepti.push(recept)
    },

    updateRecept(recept){
    const idx = this.recepti.findIndex(r => r.id === recept.id)
    if (idx !== -1) {
      // replace existing
      this.recepti.splice(idx, 1, recept)
    } else {
      // add if not found
      this.recepti.push(recept)
    }
    },
    deleteRecept(odabraniRecept){
      this.recepti=this.recepti.filter(recept=>recept !== odabraniRecept)
    }
  }
  
})
