import type { Lang } from '../i18n/ui';

export type Tag = 'dostepnosc' | 'media' | 'kod';

export interface ProjectLink {
  /** Tekst widoczny na przycisku (krótki). */
  labelPl: string;
  labelEn: string;
  /**
   * Pełna, naturalna nazwa dostępna (czytnik ekranu) — bez myślników,
   * z poprawną odmianą, np. „Posłuchaj Radia DHT”. Gdy pominięta,
   * karta złoży sensowną nazwę z etykiety i tytułu projektu.
   */
  a11yPl?: string;
  a11yEn?: string;
  href: string;
}

export interface Project {
  id: string;
  featured: boolean; // czy pokazać na stronie głównej
  namePl: string;
  nameEn: string;
  descPl: string;
  descEn: string;
  tags: Tag[];
  links: ProjectLink[];
}

export const tagLabels: Record<Tag, { pl: string; en: string }> = {
  dostepnosc: { pl: 'Dostępność', en: 'Accessibility' },
  media: { pl: 'Media', en: 'Media' },
  kod: { pl: 'Oprogramowanie', en: 'Software' },
};

export const projects: Project[] = [
  {
    id: 'tyflopodcast',
    featured: true,
    namePl: 'TyfloPodcast',
    nameEn: 'TyfloPodcast',
    descPl:
      'Serwis podcastowy o technologii i dostępności dla osób niewidomych i słabowidzących. Jestem jego pomysłodawcą i redaktorem naczelnym.',
    descEn:
      'A podcast platform about technology and accessibility for blind and partially sighted people. I am its founder and editor-in-chief.',
    tags: ['media', 'dostepnosc'],
    links: [
      {
        labelPl: 'Otwórz serwis',
        labelEn: 'Open the site',
        a11yPl: 'Otwórz serwis TyfloPodcast',
        a11yEn: 'Open the TyfloPodcast site',
        href: 'https://tyflopodcast.net',
      },
    ],
  },
  {
    id: 'radiodht',
    featured: true,
    namePl: 'Radio DHT',
    nameEn: 'Radio DHT',
    descPl:
      'Internetowa stacja radiowa — kanał główny. Jestem współtwórcą formatu tego kanału.',
    descEn:
      'An internet radio station — the main channel. I am a co-creator of the channel format.',
    tags: ['media'],
    links: [
      {
        labelPl: 'Posłuchaj',
        labelEn: 'Listen',
        a11yPl: 'Posłuchaj Radia DHT',
        a11yEn: 'Listen to Radio DHT',
        href: 'https://radiodht.com',
      },
    ],
  },
  {
    id: 'utilitia',
    featured: true,
    namePl: 'UTILITIA 2.0',
    nameEn: 'UTILITIA 2.0',
    descPl:
      'Narzędzie do badania dostępności cyfrowej — analizuje strony i dokumenty pod kątem zgodności ze standardami (WCAG, PDF/UA). Wersja rozwojowa.',
    descEn:
      'A tool for auditing digital accessibility — it analyses websites and documents against standards (WCAG, PDF/UA). Beta version.',
    tags: ['dostepnosc', 'kod'],
    links: [
      {
        labelPl: 'Otwórz betę',
        labelEn: 'Open the beta',
        a11yPl: 'Otwórz betę UTILITII',
        a11yEn: 'Open the UTILITIA beta',
        href: 'https://beta.utilitia.pl',
      },
    ],
  },
  {
    id: 'sara',
    featured: true,
    namePl: 'SARA',
    nameEn: 'SARA',
    descPl:
      'Simple Accessible Radio Automation — dostępny system automatyzacji radiowej. Otwarte oprogramowanie napisane w Pythonie.',
    descEn:
      'Simple Accessible Radio Automation — an accessible radio automation system. Open-source software written in Python.',
    tags: ['media', 'kod', 'dostepnosc'],
    links: [
      {
        labelPl: 'Kod źródłowy',
        labelEn: 'Source code',
        a11yPl: 'Kod źródłowy projektu SARA',
        a11yEn: 'SARA source code',
        href: 'https://github.com/michaldziwisz/sara',
      },
    ],
  },
  {
    id: 'tyflocentrum',
    featured: true,
    namePl: 'TyfloCentrum',
    nameEn: 'TyfloCentrum',
    descPl:
      'Klienci TyfloPodcast na trzy platformy — Windows, Android i iOS. Interfejs projektowany pod dostępność i obsługę czytnikami ekranu (NVDA, TalkBack, VoiceOver).',
    descEn:
      'TyfloPodcast clients for three platforms — Windows, Android and iOS. The interface is designed for accessibility and screen readers (NVDA, TalkBack, VoiceOver).',
    tags: ['media', 'kod', 'dostepnosc'],
    links: [
      {
        labelPl: 'Windows',
        labelEn: 'Windows',
        a11yPl: 'Pobierz TyfloCentrum na Windows z Microsoft Store',
        a11yEn: 'Get TyfloCentrum for Windows from the Microsoft Store',
        href: 'https://apps.microsoft.com/detail/9n62mnlnn9j6?hl=pl-PL&gl=PL',
      },
      {
        labelPl: 'Android',
        labelEn: 'Android',
        a11yPl: 'Pobierz TyfloCentrum na Androida z Google Play',
        a11yEn: 'Get TyfloCentrum for Android from Google Play',
        href: 'https://play.google.com/store/apps/details?id=net.tyflopodcast.tyflocentrum',
      },
      {
        labelPl: 'iOS',
        labelEn: 'iOS',
        a11yPl: 'Pobierz TyfloCentrum na iOS przez TestFlight',
        a11yEn: 'Get TyfloCentrum for iOS via TestFlight',
        href: 'https://testflight.apple.com/join/F8vtxp8v',
      },
    ],
  },
  {
    id: 'podroznik',
    featured: false,
    namePl: 'Podróżnik',
    nameEn: 'Podróżnik',
    descPl:
      'Dostępny frontend do e-podroznik.pl: wyszukiwarka połączeń i rozkład odjazdów z przystanku, przyjazna czytnikom ekranu.',
    descEn:
      'An accessible frontend for e-podroznik.pl: a connection search and stop timetable, friendly to screen readers.',
    tags: ['dostepnosc', 'kod'],
    links: [
      {
        labelPl: 'Otwórz',
        labelEn: 'Open',
        a11yPl: 'Otwórz Podróżnika',
        a11yEn: 'Open Podróżnik',
        href: 'https://podroznik.tyflo.eu.org',
      },
    ],
  },
  {
    id: 'programista',
    featured: false,
    namePl: 'Programista',
    nameEn: 'Programista',
    descPl:
      'Program do wyświetlania ramówek stacji telewizyjnych i radiowych, przyjazny osobom korzystającym z czytników ekranu.',
    descEn:
      'An app for viewing TV and radio programme schedules, friendly to screen reader users.',
    tags: ['media', 'kod'],
    links: [
      {
        labelPl: 'Pobierz',
        labelEn: 'Download',
        a11yPl: 'Pobierz Programistę',
        a11yEn: 'Download Programista',
        href: 'https://gitrls.com/michaldziwisz/programista/',
      },
    ],
  },
  {
    id: 'shaq-gui',
    featured: false,
    namePl: 'SHAQ GUI',
    nameEn: 'SHAQ GUI',
    descPl:
      'Zestaw dostępnych aplikacji GUI dla Windows do rozpoznawania muzyki (Shazam): z pliku, z wejścia lub wyjścia audio oraz aktualizacja „teraz gra” w strumieniu Shoutcast i Icecast.',
    descEn:
      'A set of accessible Windows GUI apps for music recognition (Shazam): from a file, from audio input or output, and updating “now playing” on Shoutcast and Icecast streams.',
    tags: ['media', 'kod', 'dostepnosc'],
    links: [
      {
        labelPl: 'Pobierz',
        labelEn: 'Download',
        a11yPl: 'Pobierz SHAQ GUI',
        a11yEn: 'Download SHAQ GUI',
        href: 'https://gitrls.com/michaldziwisz/shaq-gui-tools/',
      },
    ],
  },
  {
    id: 'winbrowser',
    featured: false,
    namePl: 'WinBrowser',
    nameEn: 'WinBrowser',
    descPl:
      'Dostępna przeglądarka GUI dla Windows do archiwów grup dyskusyjnych Usenet (Usenet Archive Toolkit).',
    descEn:
      'An accessible Windows GUI browser for Usenet newsgroup archives (Usenet Archive Toolkit).',
    tags: ['kod', 'dostepnosc'],
    links: [
      {
        labelPl: 'Pobierz',
        labelEn: 'Download',
        a11yPl: 'Pobierz WinBrowser',
        a11yEn: 'Download WinBrowser',
        href: 'https://gitrls.com/michaldziwisz/winbrowser/',
      },
    ],
  },
  {
    id: 'pdf-signature-remover',
    featured: false,
    namePl: 'PDF Signature Remover',
    nameEn: 'PDF Signature Remover',
    descPl:
      'Prosty, dostępny (NVDA/JAWS) program dla Windows do usuwania wszystkich podpisów cyfrowych z plików PDF.',
    descEn:
      'A simple, accessible (NVDA/JAWS) Windows app for removing all digital signatures from PDF files.',
    tags: ['dostepnosc', 'kod'],
    links: [
      {
        labelPl: 'Kod źródłowy',
        labelEn: 'Source code',
        a11yPl: 'Kod źródłowy PDF Signature Remover',
        a11yEn: 'PDF Signature Remover source code',
        href: 'https://github.com/michaldziwisz/pdf-signature-remover',
      },
    ],
  },
];

export function projectName(p: Project, lang: Lang): string {
  return lang === 'en' ? p.nameEn : p.namePl;
}
export function projectDesc(p: Project, lang: Lang): string {
  return lang === 'en' ? p.descEn : p.descPl;
}
export function linkLabel(l: ProjectLink, lang: Lang): string {
  return lang === 'en' ? l.labelEn : l.labelPl;
}
/**
 * Pełna nazwa dostępna linku (dla aria-label). Używa jawnej odmiany z danych,
 * a w razie jej braku składa naturalnie „<etykieta> <nazwa projektu>”.
 */
export function linkA11yLabel(l: ProjectLink, lang: Lang, projectName: string): string {
  const explicit = lang === 'en' ? l.a11yEn : l.a11yPl;
  if (explicit) return explicit;
  return `${linkLabel(l, lang)} ${projectName}`;
}
