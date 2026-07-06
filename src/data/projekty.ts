import type { Lang } from '../i18n/ui';

export type Tag = 'dostepnosc' | 'media' | 'kod';

export interface ProjectLink {
  // Klucz tłumaczenia etykiety: 'work.visit' | 'work.repo' | własny tekst per język
  labelPl: string;
  labelEn: string;
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
      { labelPl: 'Otwórz serwis', labelEn: 'Open the site', href: 'https://tyflopodcast.net' },
    ],
  },
  {
    id: 'radiodht',
    featured: true,
    namePl: 'Radio DHT',
    nameEn: 'Radio DHT',
    descPl:
      'Stacja radiowa internetowa — kanał główny. Jestem współtwórcą formatu tego kanału.',
    descEn:
      'An internet radio station — the main channel. I am a co-creator of the channel format.',
    tags: ['media'],
    links: [
      { labelPl: 'Posłuchaj', labelEn: 'Listen', href: 'https://radiodht.com' },
    ],
  },
  {
    id: 'utilitia',
    featured: true,
    namePl: 'UTILITIA',
    nameEn: 'UTILITIA',
    descPl:
      'Narzędzie do badania dostępności cyfrowej — analizuje strony i dokumenty pod kątem zgodności ze standardami (WCAG, PDF/UA). Wersja rozwojowa.',
    descEn:
      'A tool for auditing digital accessibility — it analyses websites and documents against standards (WCAG, PDF/UA). Beta version.',
    tags: ['dostepnosc', 'kod'],
    links: [
      { labelPl: 'Otwórz (beta)', labelEn: 'Open (beta)', href: 'https://beta.utilitia.pl' },
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
      { labelPl: 'Kod źródłowy', labelEn: 'Source code', href: 'https://github.com/michaldziwisz/sara' },
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
      { labelPl: 'Windows', labelEn: 'Windows', href: 'https://github.com/michaldziwisz/TyfloCentrumWindows' },
      { labelPl: 'Android', labelEn: 'Android', href: 'https://github.com/michaldziwisz/tyflocentrum_android' },
      { labelPl: 'iOS', labelEn: 'iOS', href: 'https://github.com/michaldziwisz/Tyflocentrum' },
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
      { labelPl: 'Otwórz', labelEn: 'Open', href: 'https://podroznik.tyflo.eu.org' },
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
      { labelPl: 'Kod źródłowy', labelEn: 'Source code', href: 'https://github.com/michaldziwisz/programista' },
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
      { labelPl: 'Kod źródłowy', labelEn: 'Source code', href: 'https://github.com/michaldziwisz/pdf-signature-remover' },
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
