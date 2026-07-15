<script setup>

</script>
<template>
    <div class="bg-red-950 w-screen h-screen flex flex-col gap-5 items-center">
        <div 
            id="header_naslovnica" 
            class="bg-linear-to-b 
                    from-amber-700
                    to-amber-200
                    rounded-3xl
                    flex items-center justify-center
                    w-2/3
                    h-20
                    m-2
                    p-2
                    text-6xl
                    text-red-900
                    font-bold
                    outline-white
                    outline-3
                    font-fancy
            ">
            Anina Kuharica
        </div>
        <nav>
            <div class="flex gap-20">
            <RouterLink to="/MojiRecepti" id="pregled_recepata" 
                    class="
                    hover:bg-white hover:text-red-950 hover:outline-amber-100
                    bg-amber-200 
                    rounded-3xl
                    flex items-center justify-center
                    text-red-900
                    font-bold
                    outline-white
                    outline-3
                    font-serif
                    w-fit
                    p-3"
                    >
                    Pregled recepata
            </RouterLink>
            <RouterLink to="/NoviRecept" id="dodavanje_recepata"
                class="
                    hover:bg-white hover:text-red-950 hover:outline-amber-100
                    bg-amber-200 
                    rounded-3xl
                    flex items-center justify-center
                    text-red-900
                    font-bold
                    outline-white
                    outline-3
                    font-serif
                    w-fit
                    p-3">
                    Dodaj recept
            </RouterLink>
            <RouterLink to="/Namirnice" id="namirnice"
            class="
                    hover:bg-white hover:text-red-950 hover:outline-amber-100
                    bg-amber-200 
                    rounded-3xl
                    flex items-center justify-center
                    text-red-900
                    font-bold
                    outline-white
                    outline-3
                    font-serif
                    w-fit
                    p-3
                    "
            >
                Namirnice
            </RouterLink>
        </div>
    </nav>
    </div>

</template>
<style scoped> </style>
