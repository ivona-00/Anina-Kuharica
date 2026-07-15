<script setup>
import {ref,onMounted} from 'vue'
import {useRoute} from 'vue-router'
import {useNamirniceStore} from '../stores/namirniceStore'
const nstore = useNamirniceStore()
const noviNaziv=ref('')
const noviBrand=ref('')
const selectIzbora=ref('link')
const novaSlika=ref('')
const previewUrl=ref('')
const spremljenoNotif=ref(false)
const route=useRoute()
const idnam=Number(route.params.id)
function lokalniPreview(event) {
  const file = event.target.files?.[0]
  if (!file) {
    previewUrl.value = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.KPkULtf-tjkTXyI7GksHgAHaEK%3Fpid%3DApi&f=1&ipt=3fd85fc937a236ab56b1bc8484d96f0d6d2df85b7d79ddd3a0ec1aec03abff06&ipo=images'
    return
  }

  previewUrl.value = URL.createObjectURL(file)
}
onMounted(() => {
  const odabrana=
  nstore.namirnice.find(n=>n.id===idnam)
  if(odabrana){
    noviNaziv.value=odabrana.naziv
    noviBrand.value=odabrana.brand
    novaSlika.value=odabrana.img
    previewUrl.value=odabrana.img
  }
})
function azurirajNamirnicu(){
    nstore.updateNamirnica({
        id:idnam,
        naziv:noviNaziv.value,
        brand:noviBrand.value,
        img:selectIzbora.value==='PC'?previewUrl.value:novaSlika.value
        }  
    )
    spremljenoNotif.value=true
}
</script>

<template>
<div class="bg-red-950 w-screen h-screen flex flex-col gap-5 items-center">
        <div id="plate-bg" class="bg-red-950 w-screen h-screen flex flex-col gap-3 ">
            <div class="flex">
                <nav>
                        <RouterLink to="/Naslovnica" class="
                            cursor-pointer hover:bg-white hover:text-red-950 hover:outline-amber-100
                            bg-amber-200 
                            rounded-3xl
                            flex 
                            text-red-900
                            font-bold
                            text-xs
                            outline-white
                            outline-3
                            font-serif
                            w-fit
                            m-2
                            p-3">Naslovnica</RouterLink>
                        <RouterLink to="/Namirnice" class="
                            hover:bg-amber-200 hover:text-red-950
                            bg-amber-200 
                            rounded-3xl
                            flex 
                            text-red-900
                            font-bold
                            text-xs
                            outline-white
                            outline-3
                            font-serif
                            w-fit
                            m-2
                            p-3">
                            Odustani
                        </RouterLink>
                            
                </nav>
                <div id="header" class="bg-linear-to-b 
                        from-amber-700
                        to-amber-200
                        rounded-3xl
                        flex items-center justify-center
                        w-screen
                        h-15
                        m-2
                        text-3xl
                        text-red-900
                        font-bold
                        outline-white
                        outline-3
                        font-serif
                ">
                    Ažuriranje namirnice
                </div>
                
            </div> 
            
            <div class="bg-amber-200 rounded-3xl h-screen m-2 p-2 flex gap-5">
                <div class="flex flex-col">
                    <div>
                        <input v-model="noviNaziv" type="text" placeholder="Upiši novi naziv namirnice" class="bg-amber-100 outline-red-900 outline-2 rounded-3xl m-1 p-2 text-xs w-100">
                        <span v-if="noviNaziv==''" class="text-red-500">*naziv je obavezan</span>
                    </div>
                    
                    <input v-model="noviBrand" type="text" placeholder="Brand namirnice" class="bg-amber-100 outline-red-900 outline-2 rounded-3xl m-1 p-2 text-xs w-100">
                    <select v-model="selectIzbora" class="bg-amber-100 outline-red-900 outline-2 rounded-3xl m-1 p-2 text-xs w-100">
                        <option value="PC">Učitaj Sa Svog PC-a</option>
                        <option value="link">Unesi link</option>
                    </select>
                    <input type="file" @change="lokalniPreview" v-show="selectIzbora=='PC'" accept="image/*" class="bg-amber-100 outline-red-900 outline-2 rounded-3xl m-1 p-2 w-100 h-20">
                    <input type="text" v-model="novaSlika" v-show="selectIzbora=='link'" placeholder="Ovdje zaljepi link" class="bg-amber-100 outline-red-900 outline-2 rounded-3xl m-1 p-2 text-xs w-100">
                    <button v-if="noviNaziv!=''"@click="azurirajNamirnicu" class=" bg-red-900 
                        rounded-3xl
                        flex 
                        text-amber-200
                        font-bold
                        text-xs
                        outline-white
                        outline-3
                        font-serif
                        w-fit
                        m-2
                        p-3 cursor-pointer hover:bg-amber-200 hover:text-red-950">
                            AŽURIRAJ
                    </button>
                    <div v-if="spremljenoNotif" class="bg-linear-to-b 
                        from-green-500
                        to-green-950
                        rounded-3xl
                        flex flex-col gap-5 items-center justify-center
                        w-125
                        h-30
                        m-2
                        text-s
                        text-white
                        font-bold
                        outline-white
                        outline-3
                        font-serif">
                        Uspješno je uređena namirnica
                        <div class="flex gap-2">
                          <RouterLink to="/Naslovnica" class="bg-white text-black rounded-full p-2 m-2 hover:bg-green-300">
                                Naslovnica
                        </RouterLink>
                        <RouterLink to="/Namirnice" class="bg-white text-black rounded-full p-2 m-2 hover:bg-green-300">
                                Namirnice
                        </RouterLink>
                         <RouterLink to="/MojiRecepti" class="bg-white text-black rounded-full p-2 m-2 hover:bg-green-300">
                                Recepti
                        </RouterLink>  
                        </div>
                        

                    </div>
                </div>
                <div>
                    <img v-show="selectIzbora=='link'" :src="novaSlika" class="w-100 h-100 rounded-2xl">
                    <img v-show="selectIzbora=='PC'" :src="previewUrl" class="w-100 h-100 rounded-2xl" alt="Pregled slike">
                </div>
            </div>
        </div>
    </div>
</template>
