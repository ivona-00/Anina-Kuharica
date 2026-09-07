<script setup>
import {ref, computed} from 'vue'
import {createUserWithEmailAndPassword,GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {auth} from '@/firebase.js'

const email=ref('')
const password=ref('')
const imaVelikoSlovo=computed(()=>{
                return /[A-Z]/.test(password.value)})
const imaBroj=computed(()=>{
                return /[0-9]/.test(password.value)})
const imaZnak=computed(()=>{
                return /[-!"#$%&/()=?*~ˇ^°˛`˙´˝¨¸+_.:;,§}{@|€łŁ<>"]/.test(password.value)})
const authCheck=computed(()=>imaVelikoSlovo.value&&
                             imaZnak.value&&
                             imaBroj.value&&
                             password.value.length>7&&
                             email.value.includes('@'))                
const response=ref({ error: false, message: '' })
const registerWithMail = async () => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email.value,
        password.value);
        response.value.error = false;
        response.value.message = 'USPJEŠNO STE REGISTRIRALI: ' +
        JSON.stringify(userCredential.user);
        } catch (error) {
    response.value.error = true;
    response.value.message = 'Greška pri registraciji: ' + error.message;
    }
};
const registerWithGoogle = async () => {
try {
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    response.value.error = false;
    response.value.message = 'Korisnik registriran: ' +
    JSON.stringify(userCredential.user);
    } catch (error) {
    response.value.error = true;
    response.value.message = 'Greška pri registraciji: ' + error.message;
}
};
</script>
<template>
    <div class="flex-col bg-red-950 w-screen h-screen flex items-center justify-center gap-1">
        <div class="flex flex-row gap-95">
            <RouterLink to="/Naslovnica" class="rounded-3xl p-3 m-2 bg-amber-200 border-2 border-amber-100  text-red-900 hover:cursor-pointer hover:bg-amber-100 hover:text-red-900 hover:border-amber-300 font-bold font-serif">
                Naslovnica
            </RouterLink>
            <RouterLink title="Već imam račun" to="/Prijava" class="rounded-3xl p-3 m-2 bg-amber-200 border-2 border-amber-100  text-red-900 hover:cursor-pointer hover:bg-amber-100 hover:text-red-900 hover:border-amber-300 font-bold font-serif">
                Prijava
            </RouterLink>
        </div>
        <div class="p-10 rounded-3xl bg-amber-300 border-2 border-amber-50 w-150">
            <form @submit.prevent="registerWithMail">
                <span class="flex justify-center font-serif text-3xl">REGISTRACIJA</span>
                <br>
                <div class="m-1">
                    <span class="font-fancy font-bold text-2xl">
                        Unesi mail
                    </span>
                    <br>
                    <input v-model="email" class="rounded-full p-2 border-2 bg-amber-100 w-full  border-red-900" type="email" placeholder="npr. ivanhorvat@gmail.com">
                    <span v-if="email&&!email.includes('@')" class="text-red-500 text-xs">
                        *Molimo da unesete valjani oblik maila
                    </span>
                </div>
                <br>
                <div class="m-1">
                    <span class="font-fancy font-bold text-xl">
                        Unesi lozinku
                    </span>
                    <br>
                    <input v-model="password" class="rounded-full p-2 border-2 bg-amber-100 w-full  border-red-900" type="password" placeholder="Lozinka">
                    <br>
                    <div class="h-fit w-fit flex flex-col gap-1.5 p-1">
                        <span v-if="password && !imaBroj" class="text-red-500 text-xs">
                            *Lozinka mora sadržavati barem 1 broj
                        </span>
                        <span v-if="password && !imaZnak" class="text-red-500 text-xs">
                            *Lozinka mora sadržavati barem 1 poseban znak
                        </span>
                        <span v-if="password && !imaVelikoSlovo" class="text-red-500 text-xs">
                            *Lozinka mora sadržavati barem 1 veliko slovo
                        </span>
                        <span v-if="password && password.length<8" class="text-red-500 text-xs">
                            *Lozinka mora sadržavati barem 8 znakova
                        </span>
                    </div>
                </div>
                <br>
                <div class="flex flex-row justify-center gap-5">
                    <div class="flex flex-col">
                        <button :disabled="!authCheck" type="submit" class="rounded-full p-2  border-2 text-white border-amber-100 bg-red-900 w-50 hover:cursor-pointer hover:bg-amber-200 hover:border-red-900 hover:text-red-900 font-serif font-bold">
                            Registriraj se
                        </button>  
                    </div>
                    <div class="flex flex-col">
                        <button type="button" @click="registerWithGoogle" class="rounded-full p-2  border-2 text-white border-amber-100 bg-red-900 w-50 hover:cursor-pointer hover:bg-amber-200 hover:border-red-900 hover:text-red-900 font-serif font-bold">
                            Koristi Google račun
                        </button>
                    </div>
                    
                </div>
                <span class="flex items-center justify-center p-1":class="response.error ? 'text-red-500' : 'text-green-500'">{{
                            response.message }}</span> 
            </form>
        </div>
        
    </div>
    
</template>