import en from './en.json';
import de from './de.json';
import th from './th.json';
import ru from './ru.json';

const translations: Record<string, typeof en> = { en, de, th, ru };

export const defaultLocale = 'en';
export const locales = ['en', 'de', 'th', 'ru'] as const;
export type Locale = (typeof locales)[number];

export function getTranslations(locale: string | undefined) {
  return translations[locale ?? defaultLocale] ?? translations[defaultLocale];
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, segment] = url.pathname.split('/');
  if (locales.includes(segment as Locale)) {
    return segment as Locale;
  }
  return defaultLocale;
}

/**
 * Get the path for a given locale.
 * Strips any existing locale prefix and adds the new one (or none for default locale).
 */
export function getLocalizedPath(path: string, locale: Locale): string {
  // Remove any existing locale prefix
  let cleanPath = path;
  for (const loc of locales) {
    if (cleanPath.startsWith(`/${loc}/`)) {
      cleanPath = cleanPath.slice(loc.length + 1);
      break;
    }
    if (cleanPath === `/${loc}`) {
      cleanPath = '/';
      break;
    }
  }

  if (locale === defaultLocale) {
    return cleanPath || '/';
  }

  if (cleanPath === '/') {
    return `/${locale}`;
  }

  return `/${locale}${cleanPath}`;
}

/**
 * Get the page slug map between locales.
 * Maps English slugs to localized slugs (and vice versa).
 */
const pageSlugMap: Record<string, Record<string, string>> = {
  en: {
    sessions: 'sessions',
    menu: 'menu',
    galerie: 'galerie',
    preise: 'preise',
    kontakt: 'kontakt',
  },
  de: {
    sessions: 'sessions',
    menu: 'menu',
    galerie: 'galerie',
    preise: 'preise',
    kontakt: 'kontakt',
  },
  th: {
    sessions: 'sessions',
    menu: 'menu',
    galerie: 'galerie',
    preise: 'preise',
    kontakt: 'kontakt',
  },
  ru: {
    sessions: 'sessions',
    menu: 'menu',
    galerie: 'galerie',
    preise: 'preise',
    kontakt: 'kontakt',
  },
};

/**
 * Returns nav items with localized names and hrefs for a given locale.
 */
export function getNavItems(locale: Locale) {
  const t = getTranslations(locale);
  const prefix = locale === defaultLocale ? '' : `/${locale}`;

  return [
    { name: t.nav.home, href: prefix || '/' },
    { name: t.nav.sessions, href: `${prefix}/sessions` },
    { name: t.nav.menu, href: `${prefix}/menu` },
    { name: t.nav.gallery, href: `${prefix}/galerie` },
    { name: t.nav.prices, href: `${prefix}/preise` },
    { name: t.nav.contact, href: `${prefix}/kontakt` },
    { name: t.nav.blog, href: '/blog' },
  ];
}

/**
 * Get the base path for the current page (without locale prefix) to build hreflang URLs.
 */
export function getBasePath(pathname: string): string {
  for (const loc of locales) {
    if (pathname.startsWith(`/${loc}/`)) {
      return pathname.slice(loc.length + 1);
    }
    if (pathname === `/${loc}`) {
      return '/';
    }
  }
  return pathname;
}

/**
 * Locale display info for the language switcher.
 */
export const localeNames: Record<Locale, string> = {
  en: 'EN',
  de: 'DE',
  th: 'TH',
  ru: 'RU',
};

/**
 * Maps locale to og:locale format
 */
export const ogLocales: Record<Locale, string> = {
  en: 'en_US',
  de: 'de_DE',
  th: 'th_TH',
  ru: 'ru_RU',
};
