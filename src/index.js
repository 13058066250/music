import Vue from "vue"
import App from "./app.vue"
import router from "./route/router.js"
import MintUI from 'mint-ui'
import store from "./store/music/state"
Vue.use(MintUI)
new Vue({
    router,
    store,
    el:"#app",
    mounted(){
        console.log(store)
    },
    render:h=>h(App)
})