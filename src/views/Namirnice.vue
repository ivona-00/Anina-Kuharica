<script setup>
import { useNamirniceStore } from '../stores/namirniceStore'
import {ref,computed} from 'vue'
const nstore = useNamirniceStore()
const searchNaziv=ref('')
const searchBrand=ref('')
const sortTip=ref('naziv')
const sortNacin=ref('uzlazno')
const useFilteri= computed(()=>{
            const filtrirano = nstore.namirnice.filter(namirnica=>
                namirnica.naziv.toLowerCase().includes(searchNaziv.value.toLowerCase()) 
                && namirnica.brand.toLowerCase().includes(searchBrand.value.toLowerCase())
            )
    return filtrirano.sort((a,b)=>{
        let pocetak = a[sortTip.value]
        let kraj = b[sortTip.value]

    if (sortTip.value === 'naziv' || sortTip.value === 'brand') {
      pocetak = pocetak.toLowerCase()
      kraj = kraj.toLowerCase()
    }

    if (pocetak < kraj) return sortNacin.value === 'uzlazno' ? -1 : 1
    if (pocetak > kraj) return sortNacin.value === 'uzlazno' ? 1 : -1
    return 0

            })
        })
function potvrdaBrisanja() {
  return confirm("Jeste li sigurni da želite obrisati ovu namirnicu?")
}

function obrisiNamirnicu(namirnica) {
  if (potvrdaBrisanja()) {
        nstore.deleteNamirnica(namirnica)
  }
}
</script>
<template>
    <div id="plate" class="bg-red-950 w-screen h-screen flex flex-col gap-5 items-center">
        <div id="plate" class="bg-red-950 w-screen h-screen flex flex-col gap-3 ">
            <div class="flex">
                <nav>
                        <RouterLink to="/Naslovnica" class="
                            hover:bg-white hover:text-red-950 hover:outline-amber-100
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
                    Namirnice  
                </div>
                <nav>
                        <RouterLink to="/NovaNamirnica" class="
                            hover:bg-white hover:text-red-950 hover:outline-amber-100
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
                            p-3">Dodaj namirnicu</RouterLink>
                            
                </nav>
            </div> 
            
            <div class="bg-amber-200 rounded-3xl h-screen m-2 p-2">
                <div id="traka_za_filtriranje" class="flex justify-center items-center" >
                <input v-model="searchNaziv" type="text" id="po_nazivu" class="bg-amber-100 outline-red-900 outline-2 rounded-3xl m-1 p-2 text-xs" placeholder="Filtriraj po nazivu">
                <input v-model="searchBrand" type="text" id="po_namirnici" class="bg-amber-100 outline-red-900 outline-2 rounded-3xl m-1 p-2 text-xs" placeholder="Filtriraj po brandu">
                
                <div class="rounded-full w-0.1 h-10 m-2 border-dotted border-2 border-red-900"></div>
                <span class="text-xs font-bold">Sortiraj po:</span>
                <select v-model="sortTip" name="odabir _sortiranja" class="bg-amber-100 outline-red-900 outline-2 rounded-3xl m-1 p-2 text-xs">
                    <option value="naziv">Naziv</option>
                    <option value="brand">Brand</option>
                </select>
                <select v-model="sortNacin" class="bg-amber-100 outline-red-900 outline-2 rounded-3xl m-1 p-2 text-xs">
                    <option  value="uzlazno">Uzlazno(A->B)</option>
                    <option  value="silazno">Silazno(B->A)</option>
                </select>
                         
            </div>
                <div id="info_traka" class="grid grid-cols-[120px_1fr_1.5fr] items-center p-0.5 outline-red-900 outline-2 bg-amber-100 font-extrabold">
                    <span class="justify-self-start">Slika</span>
                    <span class="justify-self-start">Naziv</span>
                    <span class="justify-self-start">Brand</span>
                </div>
                <div id="pregled"  v-for="namirnica in useFilteri" class="grid grid-cols-[120px_1fr_1.5fr] items-center outline-1 outline-red-400 bg-amber-100">
                    <img :src="namirnica.img" class="w-15 h-15 justify-self-start" >
                    <span class="justify-self-start">
                       <RouterLink :to="`/PogledNamirnice/${namirnica.id}`" class="m-2 cursor-pointer font-serif hover:text-blue-600 text-s" >{{ namirnica.naziv }}</RouterLink> 
                    </span> 
                    
                    <div class="flex items-center gap-2 justify-start">
                    <span class="flex-1 text-red-900" >{{ namirnica.brand }}</span> 
                    <RouterLink :to="`/UredivanjeNamirnice/${namirnica.id}`" class="cursor-pointer font-serif text-blue-600 text-s">Uredi</RouterLink>
                    <button @click="obrisiNamirnicu(namirnica)" class="cursor-pointer font-serif text-red-600 text-s">Izbriši</button>
                    </div> 
                    
                </div>
            </div>
        </div>
    </div>
</template>
