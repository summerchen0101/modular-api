// include dependencies
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path')

// proxy middleware options
const options = {
  target: 'http://api.media.xing99.cc', // target host
  changeOrigin: true, // needed for virtual hosted sites
  ws: true, // proxy websockets
  pathRewrite: {
    '^/api': '', // rewrite path
  },
  router: {
    // when request.headers.host == 'dev.localhost:3000',
    // override target 'http://www.example.org' to 'http://localhost:8000'
    // 'dev.localhost:3000': 'http://localhost:8000'
  }
};

// create the proxy (without context)
const exampleProxy = createProxyMiddleware(options);

// mount `exampleProxy` in web server
const app = express();
app.use(express.static(path.resolve(__dirname, 'static')));
// app.get('/', (req, res, next) => {
//   res.sendFile('')
// })
app.use('/api', exampleProxy);
app.listen(3003);
