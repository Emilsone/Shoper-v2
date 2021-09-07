import Vue from "vue";
import VueRouter from "vue-router";
// import store from "@/store";
import Home from "../views/Home.vue";



Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
},

];

// router.beforeEach((to, from, next) => {
//     if (to.meta.auth && !store.state.currentUser) {
//         next({
//             path: "/login"
//         })
//     } else {
//         next()
//     }
// })
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});


export default router;