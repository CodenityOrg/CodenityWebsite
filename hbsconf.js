var i18n = require('i18n');
module.exports = {
    //Setup our default layout
  extname: '.hbs',
  defaultLayout: 'index',
  layoutsDir: __dirname +'/views',
 
    //Register handlebars helpers
  helpers: {
    //Helper for multiple languages
    __: function () {
        return i18n.__.apply(this, arguments);
    },
    __n: function () {
        return i18n.__n.apply(this, arguments);
    },
  }
}