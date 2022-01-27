/*
 * :file description: 
 * :name: \mini-vue-ssr\src\app.js
 * :author: 帅哥
 * :copyright: (c) 2022, gegui
 * :date created: 2022-01-17 11:17:29
 * :last editor: 
 * :date last edited: 2022-01-19 09:19:03
 */
import Vue from 'vue'
import App from './App.vue'
import createRouter from './router'


export default () => {
    const router = createRouter()
    const app = new Vue({
        router,
        render: h => h(App)
    });
    return {
        app,
        router
    }
}