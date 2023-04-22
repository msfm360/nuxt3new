const { GenerateSW } = require("workbox-webpack-plugin");
require = require('esm')(module);
const { routes } = require('./src/routes.js');
const SitemapPlugin = require('sitemap-webpack-plugin').default;
const paths = [
  {
      path: '/',
      lastmod: new Date().toISOString().slice(0,10),
      priority: '0.8',
      changefreq: 'hourly'
  },
];


module.exports = {
  publicPath: process.env.NODE_ENV === "development" ? "/vuejs-pwa/" : "",

  configureWebpack: {
    plugins: [
        new SitemapPlugin('https://estehdath.com', paths, {
            filename: 'sitemap.xml',
            lastmod: true,
            changefreq: 'hourly',
            priority: '0.8'
        })
    ]
}


};