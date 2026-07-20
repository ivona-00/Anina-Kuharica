<script setup>
    import { useReceptiStore } from '../stores/receptiStore'
    const store = useReceptiStore()
    import { ref, computed } from 'vue'
    const searchNaziv=ref('')
    const searchNamirnica=ref('')
    const searchTezina=ref('5')
    const searchTip=ref('sve')
    const sortTip=ref('naziv')
    const sortNacin=ref('uzlazno')
    const useFilteri= computed(()=>{
            const filtrirano = store.recepti.filter(recept=>
                recept.naziv.toLowerCase().includes(searchNaziv.value.toLowerCase()) 
                &&recept.namirnice.some(namirnica =>
                    namirnica.naziv.toLowerCase().includes(searchNamirnica.value.toLowerCase())
                    )
                &&recept.kompleksnost<=searchTezina.value
                &&(searchTip.value==='sve'||recept.tip_obroka.toLowerCase().includes(searchTip.value.toLowerCase()))
            )
            return filtrirano.sort((a,b)=>{let aValue=a[sortTip.value]
                    let bValue = b[sortTip.value]

                    if (sortTip.value==='naziv'||sortTip.value==='tip_obroka'){
                    aValue=aValue.toLowerCase()
                    bValue=bValue.toLowerCase()
                    }

                    if (aValue<bValue) return sortNacin.value==='uzlazno'?-1:1
                    if (aValue>bValue) return sortNacin.value==='uzlazno'?1:-1
                    return 0

            })
        })


</script>

<template>
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
              Moji Recepti  
            </div> 
        </div>
        
        <div class="bg-amber-200 rounded-3xl h-screen m-2 p-2">
            <div id="traka_za_filtriranje" class="flex justify-center items-center" >
                <input v-model="searchNaziv" type="text" id="po_nazivu" class="bg-amber-100 outline-red-900 outline-2 rounded-3xl m-1 p-2 text-xs" placeholder="Filtriraj po nazivu">
                <input v-model="searchNamirnica" type="text" id="po_namirnici" class="bg-amber-100 outline-red-900 outline-2 rounded-3xl m-1 p-2 text-xs" placeholder="Filtriraj po namirnici">
                <input v-model="searchTezina" type="number" id="po_težini" min="1" max="5" class="bg-amber-100 outline-red-900 outline-2 rounded-3xl m-1 p-2 text-xs w-52" placeholder="Filtriraj po kompleksnosti (1-5)">
                <select v-model="searchTip" name="Tip Obroka" class="bg-amber-100 outline-red-900 outline-2 rounded-3xl m-1 p-2 text-xs">
                    <option value="sve">Sve</option>
                    <option v-for="tip in store.tip_obroka" :value="tip">
                        {{ tip }}
                    </option>
                </select>
                <div class="rounded-full w-0.1 h-10 m-2 border-dotted border-2 border-red-900"></div>
                <span class="text-xs font-bold">Sortiraj po:</span>
                <select v-model="sortTip" name="odabir _sortiranja" class="bg-amber-100 outline-red-900 outline-2 rounded-3xl m-1 p-2 text-xs">
                    <option value="naziv">Abecedno(Naziv)</option>
                    <option value="tezina">Kompleksnost</option>
                    <option value="vrijeme">Vrijeme</option>
                </select>
                <select v-model="sortNacin" class="bg-amber-100 outline-red-900 outline-2 rounded-3xl m-1 p-2 text-xs">
                    <option  value="uzlazno">Uzlazno(manji->veći)</option>
                    <option  value="silazno">Silazno(veći->manji)</option>
                </select>
                <RouterLink to="/NoviRecept" class="
                        hover:bg-amber-200 hover:text-red-950
                        bg-red-900 
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
                        p-3">NOVI RECEPT</RouterLink>           
            </div>
            <div id="info_traka" class="flex gap-50 justify-center items-center p-0.5 outline-red-900 outline-2 bg-amber-100 font-extrabold">
                <span class="flex-1">Naziv</span>
                <span class="flex-1">Tip obroka</span>
                <span class="flex-1">Vrijeme</span>
                <span class="flex-1">Kompleksnost</span>
            </div>
            <div id="pregled"  v-for="recept in useFilteri"  class="flex gap-50 justify-center items-center outline-1 outline-red-400 bg-amber-100">
                <RouterLink :to="`/PogledRecepta/${recept.id}`"class="hover:cursor-pointer hover:text-blue-600 flex-1 text-red-900" >{{ recept.naziv }}</RouterLink> 
                <span class="flex-1 text-red-900">{{ recept.tip_obroka }}</span> 
                <span class="flex-1 text-red-900">{{ recept.vrijeme }} {{ recept.mjera_vremena }}</span>
                <span class="flex-1 text-red-900">{{ recept.kompleksnost }}</span>
            </div>
        </div>
    </div>
</template>
