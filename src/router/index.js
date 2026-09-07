import { createRouter, createWebHistory } from 'vue-router'
import Naslovnica from '../views/Naslovnica.vue'
import Pregled from '../views/Pregled_Recepata.vue'
import DodajRecept from '../views/Dodavanje_Recepata.vue'
import Namirnice from '../views/Namirnice.vue'
import NovaNamirnica from '../views/DodavanjeNamirnica.vue'
import UredivanjeNamirnice from '../views/UredivanjeNamirnice.vue'
import PogledNamirnice from '../views/PogledNamirnice.vue'
import PogledRecepta from '@/views/PogledRecepta.vue'
import UredivanjeRecepta from '@/views/UredivanjeRecepta.vue'
import Prijava from '@/views/Prijava.vue'
import Registracija from '@/views/Registracija.vue'
const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL),
routes: [
{
path: '/',
redirect: '/Naslovnica'
},
{
path: '/Naslovnica',
name: 'Anina Kuharica',
component: Naslovnica, 
},
{
path: '/MojiRecepti',
name: 'Moji Recepti',
component:Pregled
},
{
path: '/NoviRecept',
name: 'Novi Recept',
component:DodajRecept
},
{
path: '/Namirnice',
name: 'Namirnice',
component:Namirnice
},
{
path: '/NovaNamirnica',
name: 'NovaNamirnica',
component:NovaNamirnica
},
{
path: '/UredivanjeNamirnice/:id',
name: '/UredivanjeNamirnice',
component:UredivanjeNamirnice
},
{
path: '/PogledNamirnice/:id',
name: '/PogledNamirnice',
component:PogledNamirnice
},
{
path: '/PogledRecepta/:id',
name: '/PogledRecepta',
component:PogledRecepta
},
{
path: '/UredivanjeRecepta/:id',
name: '/UredivanjeRecepta',
component:UredivanjeRecepta
},
{
    path:'/Registracija',
    name:'Registracija',
    component:Registracija
},
{
    path:'/Prijava',
    name:'Prijava',
    component:Prijava
}
],
})
export default router // izvoz routera