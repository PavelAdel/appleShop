import VueRouter from 'vue-router'
import vIphone from './components/v-iphone'
import vIpad from './components/v-ipad'
import vMac from './components/v-mac'



export default new VueRouter({
   routes: [
      { path: '/', name: 'iphone', component: vIphone },
      { path: '/ipad', name: 'ipad', component: vIpad },
      { path: '/macbook', name: 'macbook', component: vMac }
    ],
    mode: 'history'
})
