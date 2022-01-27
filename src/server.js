const vueServerRenderer = require('vue-server-renderer');
const Koa = require('koa');
const Router = require('koa-router');
const path = require('path');
const app = new Koa();
const router = new Router();
const template = require('fs').readFileSync(path.resolve(__dirname, '../dist/server.html'), 'utf8');
console.log("🚀 ~ file: server.js ~ line 8 ~ template", template)
const serverBundle = require('fs').readFileSync(path.resolve(__dirname, '../dist/server.bundle.js'), 'utf8');

const render = vueServerRenderer.createBundleRenderer(serverBundle, {
  template
}) 

router.get('/',async (ctx)=>{
  const res = await new Promise((resolve, reject) => {
    render.renderToString({ url: ctx.url }, (err, html) => {
      if (err) reject(err);
      resolve(html)
    })
  })
    ctx.body = `res`;
});

// 只要用户刷新就会像服务器发请求
router.get('/(.*)',async (ctx)=>{
    console.log('跳转')
    ctx.body = await new Promise((resolve, reject) => {
        render.renderToString({url:ctx.url},(err, html) => { // 通过服务端渲染 渲染后返回
            if (err && err.code == 404) resolve(`not found`);
            resolve(html)
        })
    })
})




app.use(router.routes());
app.listen(4000);