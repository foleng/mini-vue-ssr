/*
 * :file description: 
 * :name: \mini-vue-ssr\src\server-entry.js
 * :author: 帅哥
 * :copyright: (c) 2022, gegui
 * :date created: 2022-01-17 11:18:04
 * :last editor: 帅哥
 * :date last edited: 2022-01-17 15:31:05
 */
import createApp from './app';

export default ({ url }) => {
    console.log("🚀 ~ file: server-entry.js ~ line 13 ~ url", url)
    debugger;
    return new Promise((resolve, reject) => {
        let { app, router } = createApp();
        router.push(url);
        router.onReady(() => {
            const matchedComponents = router.getMatchedComponents();
            if (matchedComponents.length === 0) {
                return reject({ code: 404 })
            } else {
                resolve(app);
            }
        })
    })
}

const { app } = createApp();

app.$mount("#app");

