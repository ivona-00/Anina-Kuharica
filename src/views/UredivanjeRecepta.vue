<script setup>
import {ref,onMounted} from 'vue'
import {useRoute} from 'vue-router'
import {useReceptiStore} from '../stores/receptiStore'
import { useNamirniceStore } from '@/stores/namirniceStore'
const nstore=useNamirniceStore()
const rstore = useReceptiStore()
const route=useRoute()
const idrec=Number(route.params.id)
const noviNaziv=ref('')
const noviOpis=ref('')
const noveNam=ref([])
const noviKoraci=ref([])
const novoVrijeme=ref(0)
const odabraniSas=ref(null)
const novaMjera_vremena=ref('min')
const novaKompleksnost=ref(1)
const noviTip_obroka=ref('')
const spremljenoNotif=ref(false)
const mjere=(['g','dg','kg','ml','dl','l','kom','vrećica'])

function daPromjeni(index){
    if (!noviKoraci.value||!noviKoraci.value[index]) return
    if (noviKoraci.value[index].selectIzbora===undefined) noviKoraci.value[index].selectIzbora = ''
    if (noviKoraci.value[index].editingImage===undefined) noviKoraci.value[index].editingImage = true
    else noviKoraci.value[index].editingImage=true
}
function lokalniPreview(event,index){
    const file=event.target.files?.[0]
    if (!file){
        return
    }
    const url=URL.createObjectURL(file)
    if (noviKoraci.value&&noviKoraci.value[index]){
        noviKoraci.value[index].img=url
    }
}
onMounted(() => {
  const odabrani=
  rstore.recepti.find(r=>r.id===idrec)
  if(odabrani){
    noviNaziv.value=odabrani.naziv
    noviOpis.value=odabrani.opis
    noveNam.value=odabrani.namirnice
    noviKoraci.value=odabrani.koraci
    novoVrijeme.value=odabrani.vrijeme
    novaMjera_vremena.value=odabrani.mjera_vremena
    novaKompleksnost.value=odabrani.kompleksnost
    noviTip_obroka.value=odabrani.tip_obroka
  }
})
function azurirajRecept(){
    rstore.updateRecept({
        id:idrec,
        naziv:noviNaziv.value,
        opis:noviOpis.value,
        namirnice:noveNam.value,
        koraci:noviKoraci.value,
        vrijeme:novoVrijeme.value,
        mjera_vremena:novaMjera_vremena.value,
        kompleksnost:novaKompleksnost.value,
        tip_obroka:noviTip_obroka.value

        }  
    )
    spremljenoNotif.value=true
}
function dodajSas(){
    noveNam.value.push({...odabraniSas.value,kolicina:1,mjera:'g'})
    odabraniSas.value=null
}
function removeSastojak(index){
    noveNam.value.splice(index,1)
}
function removeKorak(index){
    noviKoraci.value.splice(index,1)
}
</script>
<template>
<div class="bg-red-950 w-screen h-fit flex flex-col gap-5 items-center">
        <div id="plate-bg" class="bg-red-950 w-screen h-full flex flex-col gap-3 ">
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
                    Ažuriranje recepta
                </div>
                
            </div> 
            
            <div class="bg-amber-200 rounded-3xl h-fit m-2 p-2 flex flex-col gap-5">
                <div name="basics&sastojci" class="flex">
                    <div name="basics" class="flex flex-col">
                            <span class="font-bold">Promjena naziva: </span>
                            <input type="text" v-model="noviNaziv" placeholder="Ovdje unesi naziv recepta" class="h-2 p-3 bg-amber-50 rounded-2xl w-100">
                            <span class="font-bold">Promjena opisa: </span>
                            <input type="text" v-model="noviOpis" placeholder="Ovdje unesi opis recepta" class="h-2 p-3 bg-amber-50 rounded-2xl w-100">
                            <span class="font-bold">Promjena vremena: </span>
                            <div class="flex gap-2 items-center">
                                <input type="number" min="1" v-model.number="novoVrijeme" class="h-2/3 p-3 bg-amber-50 rounded-2xl w-fit">
                                <select v-model="novaMjera_vremena" class="p-2 bg-amber-50 rounded-2xl h-fit" >
                                        <option value="min">Minute</option>
                                        <option value="hour">Sati</option>
                                
                                </select>
                                <span v-if="novoVrijeme<=0" class="text-red-600 font-bold">Unesi ispravno vrijeme</span>
                            </div>
                            <div class="flex gap-2 items-center">
                                <span class="font-bold">Promjena kompleksnosti:</span>
                                <input v-model.number="novaKompleksnost" type="number" min="1" max="5" class="p-3 bg-amber-50 rounded-2xl w-fit">
                                <span v-if="novaKompleksnost<=0" class="text-red-600 font-bold">Unesi ispravnu kompleksnost</span>
                            </div>
                            <span class="font-bold">Promjena tipa obroka</span>
                            <input v-model="noviTip_obroka" type="text" placeholder="Slatko/Slano/Ručak/Desert" class="h-2 p-3 bg-amber-50 rounded-2xl w-100">
                        </div>
                    <div id="sastojci">
                        <span class="font-fancy text-3xl">Sastojci:</span>
                                <div>
                                    <select v-model="odabraniSas" class="bg-amber-50 p-2 m-2 rounded-2xl">
                                    <option v-for="sastojak in nstore.namirnice" :value="sastojak">
                                        {{ sastojak.naziv }}
                                        </option>
                                     </select>
                                     <button @click="dodajSas()" class=" bg-red-900 
                        rounded-3xl
                        text-amber-200
                        font-bold
                        text-xs
                        outline-white
                        outline-3
                        font-serif
                        w-fit
                        m-2
                        p-3 cursor-pointer hover:bg-amber-200 hover:text-red-950">
                            Dodaj
                        </button>
                        <RouterLink to="/NovaNamirnica" title="Kreiraj novu namirnicu" class=" bg-red-900 
                        rounded-full
                        text-amber-200
                        font-extrabold
                        text-xs
                        outline-white
                        outline-3
                        font-serif
                        w-fit
                        m-1
                        p-2 cursor-pointer hover:bg-amber-200 hover:text-red-950">
                        +                        
                        </RouterLink>
                                </div>
                                <div class="flex mt-2 p-2 gap-10">
                                    <span class="flex-1 font-bold">Naziv</span>
                                    <span class="flex-1 font-bold">Količina</span>
                                    <span class="flex-1 font-bold">Mjera</span>
                                    <span class="flex-1 font-bold">Obriši</span>
                                </div>
                                        <div v-for="(sas,index) in noveNam" class="text-xs ml-2 flex items-center justify-center">
                                            <RouterLink :to="`/PogledNamirnice/${sas.id}`"class="hover:cursor-pointer hover:text-blue-600 flex-1 text-red-900" >{{ sas.naziv }}</RouterLink>
                                            <input type="number" min="1" v-model.number="sas.kolicina" class="flex-1 bg-amber-50 rounded-2xl w-20 p-2 m-2">
                                            
                                            <select class="flex-1 rounded-2xl w-fit bg-amber-50 p-2 m-2" v-model="sas.mjera">
                                                <option v-for="mjera in mjere">
                                                {{ mjera}}
                                                </option>
                                            </select>
                                            <button @click="removeSastojak(index)" class="flex-1 hover:cursor-pointer">❌</button>
                                            <span v-if="sas.kolicina<=0" class="text-red-600 font-bold">Unesi ispravnu količinu</span>
                                    <br>
                                </div>
                        </div>
                </div>
                
                 <div name="ispisKoraka" class="m-2 p-2">
                <span class="font-fancy text-3xl">Koraci:</span>
                <div  v-for="(korak,index) in noviKoraci" class="m-2 flex flex-col gap-2">
                    <div  class="flex gap-10">
                        <span class=" font-bold">{{ index+1 }}.Korak</span>
                        <div>
                            <button title="Obriši" @click="removeKorak(index)" class="hover:cursor-pointer">
                            ❌
                            </button>
                            
                        </div>
                        
                    </div>
                    
                
                    <input type="text" v-model="korak.opis" placeholder="Opis koraka" class="h-fit p-3 bg-amber-50 rounded-2xl w-full">
                    <div>
                     <img v-if="korak.img" :src="korak.img" class="w-10 h-10">
                    <button @click="() => daPromjeni(index)" v-show="!korak.editingImage" class="text-xs hover:cursor-pointer hover:text-blue-500">Promjeni sliku</button>
                    <select v-show="korak.editingImage" v-model="korak.selectIzbora" class="bg-amber-50 rounded-3xl m-1 p-2 text-xs w-fit">
                                    <option value="PC">Učitaj Sa Svog PC-a</option>
                                    <option value="link">Unesi link</option>
                    </select>
                    <input type="file" @change="(e)=>lokalniPreview(e,index)" v-show="korak.selectIzbora=='PC'" accept="image/*" class="bg-amber-50 rounded-3xl m-1 p-2 w-fit h-fit">
                    <input type="text" v-model="korak.img" v-show="korak.selectIzbora=='link'" placeholder="Ovdje zaljepi link" class="bg-amber-50 rounded-3xl m-1 p-2 text-xs w-fit">
                </div>
                    
                </div>
            </div>
               <button v-if="noviNaziv!=''&&novoVrijeme>0&&novaKompleksnost>0&&noviKoraci.length>0&&noviOpis!=''&&noviTip_obroka!=''&&noveNam.length>0" @click="azurirajRecept" class=" bg-red-900 
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
                            SPREMI
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
                        Uspješno je ažuriran recept
                        <div class="flex gap-2">
                          <RouterLink to="/Naslovnica" class="bg-white text-black rounded-full p-2 m-2 hover:bg-green-300">
                                Naslovnica
                        </RouterLink>
                        <RouterLink to="/NoviRecept" class="bg-white text-black rounded-full p-2 m-2 hover:bg-green-300">
                                Novi Recept
                        </RouterLink>
                         <RouterLink to="/MojiRecepti" class="bg-white text-black rounded-full p-2 m-2 hover:bg-green-300">
                                Recepti
                        </RouterLink>  
                        </div>
                        

                    </div>
            </div>
            
        </div>
    </div>
</template>
