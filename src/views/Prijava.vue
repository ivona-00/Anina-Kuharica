<script setup>
import { ref } from 'vue'
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '@/firebase.js'
const email = ref('')
const password = ref('')
const response = ref({ error: false, message: '' })
const login = async () => {
try {
const userCredential = await signInWithEmailAndPassword(auth, email.value,
password.value);
response.value.error = false;
response.value.message = 'Korisnik prijavljen: ' +
JSON.stringify(userCredential.user);
} catch (error) {
response.value.error = true;
response.value.message = 'Greška pri prijavi: ' + error.message;
}
};
const signWithGoogle = async () => {
try {
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    response.value.error = false;
    response.value.message = 'Uspješno ste se registrirali! YIPPEE'
    } catch (error) {
    response.value.error = true;
    response.value.message = 'NOOOOOO' + error.message;
}
};
</script>
<template>
    <div class="bg-red-950 h-full w-full flex flex-col items-center justify-center gap-1">
        <div class="flex flex-row gap-90">
            <RouterLink to="/Naslovnica" class="rounded-3xl p-3 m-2 bg-amber-200 border-2 border-amber-100  text-red-900 hover:cursor-pointer hover:bg-amber-100 hover:text-red-900 hover:border-amber-300 font-bold font-serif">
                Naslovnica
            </RouterLink>
            <RouterLink title="Nemam račun" to="/Registracija" class="rounded-3xl p-3 m-2 bg-amber-200 border-2 border-amber-100  text-red-900 hover:cursor-pointer hover:bg-amber-100 hover:text-red-900 hover:border-amber-300 font-bold font-serif">
                Registracija
            </RouterLink>
        </div>
        <div class="bg-amber-300 rounded-3xl border-2 h-fit p-10 w-150 border-amber-100">
            <form @submit.prevent="login">
                <div class="m-1">
                  <span class="font-serif  text-3xl flex items-center justify-center">PRIJAVA</span>
                  <br>
                  <span class="font-fancy font-bold text-2xl">Unesi mail</span>
                  <br>
                  <input class="rounded-full p-2 border-2 bg-amber-100 w-full  border-red-900" type="email" placeholder="npr. ivanhorvat@gmail.com" v-model="email" >
                  <span v-if="email&&!email.includes('@')" class="text-red-500 text-xs">
                        *Molimo da unesete valjani oblik maila
                  </span>  
                </div>
                <br>
                <div>
                    <span class="font-fancy font-bold text-xl">Unesi lozinku</span>
                    <input v-model="password" class="rounded-full p-2 border-2 bg-amber-100 w-full  border-red-900" type="password" placeholder="Lozinka"> 
                </div>
                <br>
                <div class="flex flex-row justify-center gap-5">
                    <div class="flex flex-col">
                        <button type="submit" class="rounded-full p-2  border-2 text-white border-amber-100 bg-red-900 w-50 hover:cursor-pointer hover:bg-amber-200 hover:border-red-900 hover:text-red-900 font-serif font-bold">
                            Prijavi se
                        </button>
                    </div>
                    <div class="flex flex-col">
                        <button type="button" class="rounded-full p-2  border-2 text-white border-amber-100 bg-red-900 w-50 hover:cursor-pointer hover:bg-amber-200 hover:border-red-900 hover:text-red-900 font-serif font-bold" @click="signWithGoogle">
                            Koristi Google račun
                        </button>
                    </div>
                    
                
                </div>
                <span class="flex justify-center items-center":class="response.error ? 'text-rose-600' : 'text-emerald-600'">{{
                response.message }}</span>
            </form>
        </div>
    </div>
    
</template>