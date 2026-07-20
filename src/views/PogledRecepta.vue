<script setup>
import {ref,onMounted} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import {useReceptiStore} from '../stores/receptiStore'
const rstore = useReceptiStore()
const route=useRoute()
const router=useRouter()
const idrec=Number(route.params.id)
const id=ref('')
const naziv=ref('')
const opis=ref('')
const namirnice=ref([])
const koraci=ref('')
const rbr=ref(0)
const vrijeme=ref(0)
const minsat=ref('')
const tezina=ref(0)
const odabraniRecept=ref('')
function formatiranjeDatuma(id) {
  return new Date(id).toLocaleDateString('hr-HR')
}
onMounted(() => {
  const odabrani=
  rstore.recepti.find(r=>r.id===idrec)
  if(odabrani){
    odabraniRecept.value=odabrani
    id.value=formatiranjeDatuma(odabrani.id)
    naziv.value=odabrani.naziv
    opis.value=odabrani.opis
    namirnice.value=odabrani.namirnice
    koraci.value=odabrani.koraci
    rbr.value=odabrani.nmbr
    vrijeme.value=odabrani.vrijeme
    minsat.value=odabrani.mjera_vremena
    tezina.value=odabrani.kompleksnost
  }
})
function potvrdaBrisanja() {
  return confirm("Jeste li sigurni da želite obrisati ovaj recept?")
}

function obrisiRecept() {
  if (potvrdaBrisanja()) {
    rstore.deleteRecept(odabraniRecept.value)
    router.push('/MojiRecepti')
  }
}

</script>
<template>
    <div id="main-plate" class="bg-red-950 w-screen h-screen flex flex-col ">
        <div class="flex flex-row">
            <div id="nav">
            <RouterLink to="/Naslovnica" class="
                            bg-amber-200 
                            rounded-3xl
                            flex 
                            justify-center
                            text-red-900
                            font-bold
                            text-xs
                            outline-white
                            outline-3
                            font-serif
                            w-47
                            m-2
                            p-3
                            cursor-pointer hover:bg-white hover:text-red-950 hover:outline-amber-100">Naslovnica
            </RouterLink>
            <RouterLink to="/MojiRecepti" class="
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
                            p-3
                            cursor-pointer hover:bg-white hover:text-red-950 hover:outline-amber-100">
                            Povratak na moje recepte
            </RouterLink>
            </div>
            <div>
                    <div id="header" class="bg-linear-to-b 
                        from-amber-700
                        to-amber-200
                        rounded-3xl
                        flex items-center justify-center
                        w-250
                        h-22
                        m-2
                        text-3xl
                        text-red-900
                        font-bold
                        outline-white
                        outline-3
                        font-serif
                ">
                    {{naziv}}  
                    </div>
            </div>
        </div>
        
                
              
                <div id="glavniview" class="flex justify-center items-center bg-white w-full h-fit rounded-2xl">
                    <div class="flex flex-col  justify-center m-2 p-2">
                        <span class="font-fancy text-2xl">~{{opis}}~</span>
                        <div name="nam i opis" class="flex gap-2 justify-center items-center">
                            
                            <div class="flex flex-col">
                                <div class="bg-linear-to-b 
                                    from-amber-700
                                    to-amber-200
                                    rounded-3xl
                                    flex items-center justify-center
                                    w-fit
                                    h-fit
                                    m-2
                                    p-2
                                    text-3xl
                                    text-red-900
                                    font-bold
                                    outline-white
                                    outline-3
                                    font-serif">
                                        Potrebne namirnice
                                </div>

                                <div class="bg-red-950 rounded-3xl p-2 text-white w-full">
                                    <div v-for="(namirnica,index) in namirnice" :key="index" class="flex items-center gap-3">
                                        <RouterLink :to="`/PogledNamirnice/${namirnica.id}`" class="font-bold hover:cursor-pointer hover:text-blue-500">{{ namirnica.naziv }}</RouterLink>
                                        <span>{{ namirnica.kolicina || namirnica.količina }} {{ namirnica.mjera }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col">
                               <div class="bg-red-950 rounded-3xl p-2 text-white w-full h-fit flex flex-col justify-center items-center">
                                    <span class="font-bold">Vrijeme Pripreme: {{ vrijeme }} {{ minsat }}</span>
                                    <span class="font-bold">Kompleksnost: {{ tezina }}</span>                    
                                </div>
                                <div>
                                    <RouterLink :to="`/UredivanjeRecepta/${odabraniRecept.id}`" class="w-full m-2 cursor-pointer font-serif flex justify-center items-center p-2 text-blue-950 bg-blue-300 text-s rounded-2xl border-2 border-blue-950 hover:cursor-pointer hover:bg-blue-950 hover:text-blue-300 ">Uredi</RouterLink>
                                    <button @click="obrisiRecept" class="w-full m-2 cursor-pointer font-serif flex justify-center items-center p-2 text-red-700 bg-red-300 text-s rounded-2xl border-2 border-red-700 hover:cursor-pointer hover:bg-red-700 hover:text-red-300 ">Izbriši</button>
                                </div> 
                            </div>
                            
                            
                        </div>
            
                        <div class="bg-linear-to-b 
                        from-amber-700
                        to-amber-200
                        rounded-3xl
                        flex items-center justify-center
                        w-fit
                        h-fit
                        m-2
                        p-2
                        text-3xl
                        text-red-900
                        font-bold
                        outline-white
                        outline-3
                        font-serif
                         ">
                            Koraci
                        </div>
                        <div class="bg-red-950 rounded-3xl p-2 text-white w-fit">
                                <div v-for="(korak,index) in koraci ":key=index>
                                <span class="font-bold">{{index+1}}. korak</span>
                                <br>
                                <span>{{ korak.opis }}</span>
                                <br>
                                <img v-if="korak.img" :src="korak.img" class="w-100 h-100">
                                <span class="flex justify-end"><input type="checkbox"></span>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>

                
    </div>

</template>