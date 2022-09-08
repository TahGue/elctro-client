import { useTranslation, useLanguageQuery } from 'next-export-i18n';

export const useBackendTranslate = () => {
  const [query] = useLanguageQuery();

  const getTranslation = (item: any, key: string) => {
    const lang = query?.lang || 'en';
    const langArr = ['da', 'en', 'sv'];
    const translation = item?.translations?.filter(
      (c) => c?.languageId === langArr.indexOf(lang) + 1
    );

    if (lang === 'da') {
      return item[key];
    }
    return item && translation ? translation[0]?.value : item[key];
  };

  return getTranslation;
};
