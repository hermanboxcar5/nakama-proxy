const express = require("express")
const https = require("https")
const app = express()


app.all("/*", (req, res) => {
  //const pathSegments = req.path.split('/');
 // const rocketPath = pathSegments[2]
  let options = {
      host: 'dev-nakama.winterpixel.io',
      path: '/'+req.path,
      method: req.method
    };
  https.request(options, (resp) => {
    res.contentType((resp.headers["content-type"]?resp.headers["content-type"]:"text/plain"))
    resp.pipe(res)
  }).end()
})


app.listen(3000)
