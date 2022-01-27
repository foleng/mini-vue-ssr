/*
 * :file description: 
 * :name: \mini-vue-ssr\src\client-entry.js
 * :author: 帅哥
 * :copyright: (c) 2022, gegui
 * :date created: 2022-01-17 11:17:57
 * :last editor: 帅哥
 * :date last edited: 2022-01-17 13:50:12
 */
import createApp from './app'


let { app } = createApp();

app.$mount("#app");