import { useTranslation } from 'next-export-i18n';
import translations from '../public/locales/en-GB/translation.json';
import { Paths } from '../types/common';

type TranslationKeys = Paths<typeof translations>;

interface DateTranslationType {
  format?: string;
  date?: Date;
}

interface TelephoneNumberTranslationType {
  number?: string;
}

interface NameTranslationType {
  name?: string;
}

type TranslationType = TelephoneNumberTranslationType &
  DateTranslationType &
  NameTranslationType;

export const useTypeSafeTranslation = () => {
  const { t } = useTranslation();

  return {
    t: (s: TranslationKeys, f?: TranslationType) => t(s, f),
  };
};
