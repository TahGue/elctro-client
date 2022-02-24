const {
  format: formatDate,
  isDate,
  formatRelative,
  formatDistance,
} = require('date-fns');
const { enGB, sv } = require('date-fns/locale');

const locales = ['en-GB', 'sv'];
const dateLocales = { 'en-GB': enGB, sv };
/* const dateLocales = locales.reduce((acc, locale) => {
  if (!acc[locale]) {
    const lg = require(`date-fns/locale/${locale}`);
    acc[locale] = lg;
  }

  return acc;
}, {}); */

const createDateFormat = (value, format, language) => {
  const locale = dateLocales[language];

  if (format === 'short') return formatDate(value, 'P', { locale });
  if (format === 'long') return formatDate(value, 'PPPP', { locale });
  if (format === 'relative')
    return formatRelative(value, new Date(), { locale });
  if (format === 'ago')
    return formatDistance(value, new Date(), {
      locale,
      addSuffix: true,
    });

  return formatDate(value, format, { locale });
};

module.exports = {
  i18n: {
    defaultLocale: 'en-GB',
    locales,
  },
  reloadOnPrerender: process.env.NODE_ENV !== 'production' ? true : false,
  serializeConfig: false,
  defaultNS: 'translation',
  interpolation: {
    escapeValue: false,
    format: (value, format, lng) => {
      if (isDate(value) && format) {
        return createDateFormat(value, format, lng);
      }
      return value;
    },
  },
};
