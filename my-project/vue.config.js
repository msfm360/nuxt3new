const { GenerateSW } = require("workbox-webpack-plugin");
require = require('esm')(module);
const { routes } = require('./src/routes.js');


module.exports = {
  publicPath: process.env.NODE_ENV === "development" ? "/vuejs-pwa/" : "",

  configureWebpack: {
    plugins: [new GenerateSW()]
  },
  pluginOptions: {
		sitemap: {
			baseURL: 'https://estehdath.com',
			routes,
		}
	}

};