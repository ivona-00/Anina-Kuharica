<script setup>
import {ref} from 'vue'
import {useNamirniceStore} from '../stores/namirniceStore'
import {useReceptiStore} from '@/stores/receptiStore'
const nstore=useNamirniceStore()
const rstore=useReceptiStore()
const noviNaziv=ref('')
const noviOpis=ref('')
const noviSas=ref([])
const odabraniSas=ref(null)
const noviKoraci=ref([])
const noviVrijeme=ref(1)
const noviMjera=ref('min')
const noviTezina=ref(1)
const noviTip=ref('')
const selectIzbora=ref('')
const novaSlika=ref(null)
const previewUrl = ref('')
const mjere=(['g','dg','kg','ml','dl','l','kom','vrećica'])
const spremljenoNotif=ref(false)
const dodajSliku=ref(false)
const korakOpis=ref('')
function daSlika(){
    dodajSliku.value=true
    novaSlika.value=null
}
function removeSastojak(index){
    noviSas.value.splice(index,1)
}
function dodajSas(){
    noviSas.value.push({...odabraniSas.value,kolicina:1,mjera:'g'})
    odabraniSas.value=null
}
function removeKorak(index){
    noviKoraci.value.splice(index,1)
}
function dodajKorak(){
    noviKoraci.value.push({
        opis:korakOpis.value,
        img:selectIzbora.value === 'PC'
            ?previewUrl.value
            :novaSlika.value
    })
    korakOpis.value=''
    novaSlika.value=null
    previewUrl.value=''
    selectIzbora.value=''
}


function lokalniPreview(event) {
  const file = event.target.files?.[0]
  if (!file) {
    previewUrl.value = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.KPkULtf-tjkTXyI7GksHgAHaEK%3Fpid%3DApi&f=1&ipt=3fd85fc937a236ab56b1bc8484d96f0d6d2df85b7d79ddd3a0ec1aec03abff06&ipo=images'
    return
  }

  previewUrl.value = URL.createObjectURL(file)
}

function spremiRecept(){
    
    rstore.addRecept({
        id:Date.now(),
        naziv: noviNaziv.value,
        opis:noviOpis.value,
        namirnice:noviSas.value,
        koraci:noviKoraci.value,
        vrijeme:noviVrijeme.value,
        mjera_vremena:noviMjera.value,
        kompleksnost:noviTezina.value,
        tip_obroka:noviTip.value
        
    })
    spremljenoNotif.value=true
}
</script>

<template>
    <div id="plate" class="bg-red-950 w-full h-fit flex flex-col gap-5 items-center">
        <div id="plate" class="bg-red-950 w-full h-full flex flex-col gap-3 ">
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
                        <RouterLink to='/MojiRecepti' class="
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
                    Novi Recept  
                </div>
            </div> 
            <div name="form" class="bg-amber-200 w-screen rounded-2xl h-fit m-2 flex flex-col">
                <div class="flex">
                    <div name="basics" class="bg-amber-200 rounded-3xl h-fit w-fit m-2 p-2">
                        <div class="flex flex-col gap-2">
                            <input type="text" v-model="noviNaziv" placeholder="Ovdje unesi naziv recepta" class="p-2 bg-amber-50 rounded-2xl w-100">
                            <input type="text" v-model="noviOpis" placeholder="Ovdje unesi kratki opis" class="p-2 bg-amber-50 rounded-2xl w-100">
                            Vrijeme: 
                            <div class="flex gap-1">
                                <input type="number" min="1" v-model="noviVrijeme" class="p-2 w-fit bg-amber-50 rounded-2xl">
                                <select v-model="noviMjera" class="p-2 bg-amber-50 rounded-2xl" >
                                    <option value="min">Minute</option>
                                    <option value="hour">Sati</option>
                                </select>
                        </div>
                        Odaberi kompleksnost obroka:
                        <input type="number" min="1" max="5" v-model="noviTezina" class="p-2 bg-white rounded-2xl w-fit">
                        <input type="text" v-model="noviTip" class="p-2 bg-white rounded-2xl w-fit" placeholder="Tip Obroka">
                        
                    </div>
                </div>
                <div name="nam i koraci" class="flex gap-2  rounded-2xl m-2 w-full h-fit">
                    <div name="sastojci">
                        <span class="bg-linear-to-b 
                        from-amber-700
                        to-amber-200
                        rounded-3xl
                        flex items-center justify-center
                        m-2
                        p-2
                        text-red-900
                        font-bold
                        outline-white
                        outline-3
                        font-serif">
                            Dodavanje sastojaka
                        </span>
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
                        <br>
                        <span class="font-fancy text-3xl">Sastojci:</span>
                        <div class="flex mt-2 p-2 gap-10">
                            <span class="flex-1 font-bold">Naziv</span>
                            <span class="flex-1 font-bold">Količina</span>
                            <span class="flex-1 font-bold">Mjera</span>
                            <span class="flex-1 font-bold">Obriši</span>
                        </div>
                         <div v-for="(sas,index) in noviSas" class="text-xs ml-2 flex items-center justify-center">
                            <RouterLink :to="`/PogledNamirnice/${sas.id}`"class="hover:cursor-pointer hover:text-blue-600 flex-1 text-red-900" >{{ sas.naziv }}</RouterLink>
                            <input type="number" min="1" v-model="sas.kolicina" class="flex-1 bg-amber-50 rounded-2xl w-20 p-2 m-2">
                            <select class="flex-1 rounded-2xl w-fit bg-amber-50 p-2 m-2" v-model="sas.mjera">
                                <option v-for="mjera in mjere">
                                    {{ mjera}}
                                </option>
                            </select>
                            <button @click="removeSastojak(index)" class="flex-1 hover:cursor-pointer">❌</button>
                            <br>
                        </div>
                    </div>
                    <div name="koraci" class="flex flex-col  rounded-2xl w-full h-fit">
                        <span class="bg-linear-to-b 
                        from-amber-700
                        to-amber-200
                        rounded-3xl
                        flex items-center justify-center
                        m-2
                        p-2
                        text-red-900
                        font-bold
                        outline-white
                        outline-3
                        font-serif">
                            Dodavanje koraka
                        </span>
                        <input type="text" v-model="korakOpis" placeholder="Ovdje unesi kratki opis" class="rounded-2xl bg-amber-50 m-1 p-2">
                        
                        <div class="flex">
                            <div class="flex flex-col">
                                <button @click="daSlika" class="hover:cursor-pointer hover:bg-red-900 hover:text-amber-200 w-fit border-red-950 bg-amber-50 rounded-full p-2 m-1">Dodaj sliku</button>
                                <select v-show="dodajSliku" v-model="selectIzbora" class="bg-amber-50 rounded-3xl m-1 p-2 text-xs w-fit">
                                    <option value="PC">Učitaj Sa Svog PC-a</option>
                                    <option value="link">Unesi link</option>
                                </select>
                                <input type="file" @change="lokalniPreview" v-show="selectIzbora=='PC'" accept="image/*" class="bg-amber-50 rounded-3xl m-1 p-2 w-fit h-fit">
                                <input type="text" v-model="novaSlika" v-show="selectIzbora=='link'" placeholder="Ovdje zaljepi link" class="bg-amber-50 rounded-3xl m-1 p-2 text-xs w-fit">
                                <button v-if="korakOpis!=''"@click="dodajKorak()" class=" bg-red-900 
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
                                        Dodaj Korak
                                </button>
                            </div>
                            <div>
                                <img v-show="selectIzbora=='link'" :src="novaSlika" class="h-33 w-40  rounded-2xl">
                                <img v-show="selectIzbora=='PC'" :src="previewUrl" class="h-33 w-40 rounded-2xl" alt="Slika ce se ovdje očitati">
                            </div>  
                        </div>
                        
                        
                    </div>
                </div>
            </div>
            <div name="ispisKoraka" class="m-2 p-2">
                <span class="font-fancy text-3xl">Koraci:</span>
                <div  v-for="(korak,index) in noviKoraci" class="m-2">
                    <div  class="flex gap-10">
                        <span class=" font-bold">{{ index+1 }}.Korak</span>
                        <div>
                            <button title="Obriši" @click="removeKorak(index)" class="hover:cursor-pointer">
                            ❌
                            </button>
                            
                        </div>
                        
                    </div>
                    
                    <br>
                    <span class="flex">{{ korak.opis }} </span>
                    <img v-if="korak.img" :src="korak.img" class="w-10 h-10">
                </div>
            </div>
            <button v-if="noviNaziv!=''&&noviKoraci.length>0&&noviOpis!=''&&noviTip!=''&&noviSas.length>0" @click="spremiRecept" class=" bg-red-900 
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
