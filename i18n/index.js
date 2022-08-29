var en = require('./translations.en.json');
var sv = require('./translations.sv.json');
var da = require('./translations.da.json');
const i18n = {
  translations: {
    en,
    sv,
    da,
  },
  defaultLang: 'sv',
  useBrowserDefault: true,
};

module.exports = i18n;
