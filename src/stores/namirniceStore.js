import namirniceData from '../data/namirniceData'
import { defineStore } from 'pinia'
export const useNamirniceStore = defineStore('namirnice', {
  state:()=>({
    namirnice:namirniceData,
  }),

  actions:{
    addNamirnica(namirnica){
    this.namirnice.push(namirnica)
    },
    updateNamirnica(odabranaNamirnica){
    const index=this.namirnice.findIndex(a=>a.id===odabranaNamirnica.id)
    if (index!=-1) {
        this.namirnice[index]=odabranaNamirnica
      }
    },
    deleteNamirnica(odabranaNamirnica){
      this.namirnice=this.namirnice.filter(namirnica=>namirnica !== odabranaNamirnica)
    }

  }
  
})