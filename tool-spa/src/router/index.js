import VueRouter from "vue-router";
import Home from '../pages/Home.vue'
import Crypt from '../pages/Crypt.vue'
import Gameini from '../pages/Gameini.vue'
const router = new VueRouter({
    mode:'history',
    routes:[
        {
            name:'Home',
            path:'/Home',
            component:Home,
            meta:{
                title:'首页'
            }
        },
        {
            name:'crypt',
            path:'/Crypt',
            component:Crypt,
            meta:{
                title:'加密工具'
            }
        },
        {
            name:'gameini',
            path:'/Gameini',
            component:Gameini,
            meta:{
                title:'参数生成'
            }
        },
        
    ]
})

export default router;