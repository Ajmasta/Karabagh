const es2015 = require('babel-preset-es2015');
const presetReact = require('babel-preset-react');
require("babel-register")({
  presets: [es2015, presetReact]
});
//Import our routes
require.extensions['.png'] = function () {
    return null;
  };
  require.extensions['.jpg'] = function () {
    return null;
  };

const router = require("./route.js").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
    return (
    new Sitemap(router)
    .build("https://peaceforkarabakh.com")
   //Save it wherever you want
    .save("../../public/sitemap.xml")
    );
  }
  
  generateSitemap();