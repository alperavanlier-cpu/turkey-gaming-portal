import { useEffect, useState } from 'react';

// Simple i18n loader – in a real app you might use next‑i18next or a similar lib.
// This implementation loads the JSON files from the `locales` folder at runtime.

export type Locale = 'en' | 'tr' | 'de';

export const loadLocale = async (locale: Locale) => {
  const module = await import(`./locales/${locale}.json`);
  return module.default as Record<string, string>;
};

export const useLocale = (locale: Locale = 'en') => {
  const [strings, setStrings] = useState<Record<string, string>>({});

  useEffect(() => {
    loadLocale(locale).then(setStrings);
  }, [locale]);

  return strings;
};
