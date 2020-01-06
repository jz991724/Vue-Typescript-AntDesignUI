import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
        {
            path: "/less01",
            name: "LessLearn01",
            component: () => import("../views/LessLearn01.vue")
        }, {
            path: "/less02",
            name: "LessLearn02",
            component: () => import("../views/LessLearn02.vue")
        }, {
            path: "/less03",
            name: "LessLearn03",
            component: () => import("../views/LessLearn03.vue")
        },
        {
            path: "/less04",
            name: "LessLearn04",
            component: () => import("../views/LessLearn04.vue")
        },
        {
            path: "/less05",
            name: "LessLearn05",
            component: () => import("../views/LessLearn05.vue")
        },
    {
        path: "/less06",
        name: "LessLearn06",
        component: () => import("../views/LessLearn06.vue")
    }
    ]
;

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
