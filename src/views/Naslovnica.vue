<script setup>

</script>
<template>
    <div class="bg-red-950 w-screen h-full flex flex-col gap-5 items-center">
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
    <img  class="rounded-3xl" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F1161153224%2Fphoto%2Fvintage-cookbook-with-spices-and-herbs-on-rustic-wooden-background.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3D5IEYo7Ad-OetMkhjBUJtkrcsAKX606EHYKbhjiUHNQo%3D&f=1&nofb=1&ipt=d26042ababfbcaaedeb648cc860573c4543eb0cd5c05b0aa897ae07f3c843b14">
    </div>

</template>
<style scoped> </style>
