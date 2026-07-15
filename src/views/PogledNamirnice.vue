<script setup>
import {ref,onMounted} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import {useNamirniceStore} from '../stores/namirniceStore'
const nstore = useNamirniceStore()
const route=useRoute()
const router=useRouter()
const idnam=Number(route.params.id)
const id=ref('')
const naziv=ref('')
const brand=ref('')
const slika=ref('')
const previewUrl = ref('')
const odabranaNamirnica=ref('')
function formatiranjeDatuma(id) {
  return new Date(id).toLocaleDateString('hr-HR')
}
onMounted(() => {
  const odabrana=
  nstore.namirnice.find(n=>n.id===idnam)
  if(odabrana){
    odabranaNamirnica.value=odabrana
    id.value=formatiranjeDatuma(odabrana.id)
    naziv.value=odabrana.naziv
    brand.value=odabrana.brand
    slika.value=odabrana.img
    previewUrl.value=odabrana.img
  }
})
function potvrdaBrisanja() {
  return confirm("Jeste li sigurni da želite obrisati ovu namirnicu?")
}

function obrisiNamirnicu() {
  if (potvrdaBrisanja()) {
    nstore.deleteNamirnica(odabranaNamirnica.value)
    router.push('/Namirnice')
  }
}
</script>
<template>
    <div id="main-plate" class="bg-red-950 w-screen h-screen flex ">
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
            <RouterLink to="/Namirnice" class="
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
                            Povratak na sve namirnice
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
                <div id="glavniview" class="flex justify-center items-center bg-white w-fit h-fit rounded-2xl">
                    <img :src="slika" class="h-75 w-75">
                    <div class="flex flex-col  justify-center m-2 p-2">
                        <span class="border-2 rounded-2xl border-red-950 p-2 m-2"><span class="font-bold">Brand : </span>{{ brand }}</span>
                        <span class="border-2 rounded-2xl border-red-950 p-2 m-2"><span class="font-bold">Dodano datuma: </span>{{ id}}</span>
                        <RouterLink :to="`/UredivanjeNamirnice/${id}`" class="l-15 m-2 cursor-pointer font-serif flex justify-center items-center p-2 m-2 text-blue-950 bg-blue-300 text-s rounded-2xl border-2 border-blue-950 hover:cursor-pointer hover:bg-blue-950 hover:text-blue-300 ">Uredi</RouterLink>
                        <button @click="obrisiNamirnicu" class="l-15 m-2 cursor-pointer font-serif flex justify-center items-center p-2 m-2 text-red-700 bg-red-300 text-s rounded-2xl border-2 border-red-700 hover:cursor-pointer hover:bg-red-700 hover:text-red-300 ">Izbriši</button>
                    </div>
                    
                </div>

                
            </div>
        </div>

</template>