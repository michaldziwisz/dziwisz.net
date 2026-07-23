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
      'Serwis podcastowy o technologii i dostępności dla osób niewidomych i słabowidzących. Jestem jego pomysłodawcą i redaktorem naczelnym.',
    descEn:
      'A podcast platform about technology and accessibility for blind and partially sighted people. I am its founder and editor-in-chief.',
    tags: ['media', 'dostepnosc'],
    links: [
      {
        labelPl: 'Otwórz serwis',
        labelEn: 'Open the site',
        a11yPl: 'Otwórz serwis TyfloPodcast',
        a11yEn: 'Open the site of TyfloPodcast',
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
      'Internetowa stacja radiowa i jej kanał główny. Jestem współtwórcą formatu tego kanału.',
    descEn:
      'An internet radio station and its main channel. I am a co-creator of the channel format.',
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
      'Narzędzie do badania dostępności cyfrowej. Analizuje strony i dokumenty pod kątem zgodności ze standardami (WCAG, PDF/UA). Wersja rozwojowa.',
    descEn:
      'A tool for auditing digital accessibility. It analyses websites and documents against standards (WCAG, PDF/UA). Beta version.',
    tags: ['dostepnosc', 'kod'],
    links: [
      {
        labelPl: 'Otwórz betę',
        labelEn: 'Open the beta',
        a11yPl: 'Otwórz betę UTILITII',
        a11yEn: 'Open the beta of UTILITIA',
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
      'Simple Accessible Radio Automation, czyli dostępny system automatyzacji radiowej. Otwarte oprogramowanie napisane w Pythonie.',
    descEn:
      'Simple Accessible Radio Automation, an accessible radio automation system. Open-source software written in Python.',
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
      'Klienty TyfloPodcast na trzy platformy: Windows, Androida i iOS. Interfejs projektowany pod dostępność i obsługę czytnikami ekranu (NVDA, TalkBack, VoiceOver).',
    descEn:
      'TyfloPodcast clients for three platforms: Windows, Android and iOS. The interface is designed for accessibility and screen readers (NVDA, TalkBack, VoiceOver).',
    tags: ['media', 'kod', 'dostepnosc'],
    links: [
      {
        labelPl: 'Windows',
        labelEn: 'Windows',
        a11yPl: 'Pobierz TyfloCentrum na Windows z Microsoft Store',
        a11yEn: 'Get TyfloCentrum for Windows from the Microsoft Store',
        href: 'https://apps.microsoft.com/detail/9n62mnlnn9j6?hl=pl-PL&gl=PL',
      },
      {
        labelPl: 'Android',
        labelEn: 'Android',
        a11yPl: 'Pobierz TyfloCentrum na Androida z Google Play',
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
      'Dostępny frontend do e-podroznik.pl: wyszukiwarka połączeń i rozkład odjazdów z przystanku, przyjazna czytnikom ekranu.',
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
      'Program do wyświetlania ramówek stacji telewizyjnych i radiowych, przyjazny osobom korzystającym z czytników ekranu.',
    descEn:
      'An app for viewing TV and radio programme schedules, friendly to screen reader users.',
    tags: ['media', 'kod'],
    links: [
      {
        labelPl: 'Pobierz',
        labelEn: 'Download',
        a11yPl: 'Pobierz Programistę',
        a11yEn: 'Download Programista',
        href: 'https://github.com/michaldziwisz/programista/releases/latest',
      },
    ],
  },
  {
    id: 'shaq-gui',
    featured: false,
    namePl: 'SHAQ GUI',
    nameEn: 'SHAQ GUI',
    descPl:
      'Zestaw dostępnych aplikacji GUI dla Windows do rozpoznawania muzyki (Shazam): z pliku, z wejścia lub wyjścia audio oraz aktualizacja „teraz gra” w strumieniu Shoutcast i Icecast.',
    descEn:
      'A set of accessible Windows GUI apps for music recognition (Shazam): from a file, from audio input or output, and updating “now playing” on Shoutcast and Icecast streams.',
    tags: ['media', 'kod', 'dostepnosc'],
    links: [
      {
        labelPl: 'Pobierz',
        labelEn: 'Download',
        a11yPl: 'Pobierz SHAQ GUI',
        a11yEn: 'Download SHAQ GUI',
        href: 'https://github.com/michaldziwisz/shaq-gui-tools/releases/latest',
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
        href: 'https://github.com/michaldziwisz/winbrowser/releases/latest/download/winbrowser-windows-x64.zip',
      },
    ],
  },
  {
    id: 'wdesen',
    featured: false,
    namePl: 'W Deseń',
    nameEn: 'W Deseń',
    descPl:
      'Strona pracowni rękodzieła „W Deseń” Moniki Machul. Zbudowałem ją na frameworku Astro, a do tego przygotowałem autorce wygodne narzędzie do samodzielnej publikacji zdjęć prac — dodaje je, porządkuje w kategoriach i wydaje na stronę bez znajomości kodu.',
    descEn:
      'A website for Monika Machul’s craft studio “W Deseń”. I built it with the Astro framework and additionally created a convenient tool that lets the author publish photos of her work herself — adding them, organising them into categories and pushing them live without touching any code.',
    tags: ['kod'],
    links: [
      {
        labelPl: 'Otwórz stronę',
        labelEn: 'Open the site',
        a11yPl: 'Otwórz stronę pracowni W Deseń',
        a11yEn: 'Open the W Deseń studio website',
        href: 'https://wdesen.eu.org',
      },
    ],
  },
  {
    id: 'apollo',
    featured: false,
    namePl: 'Apollo',
    nameEn: 'Apollo',
    descPl:
      'Sterownik NVDA dla sprzętowych syntezatorów mowy Dolphin Apollo 2 (oraz Juno). Pozwala używać tych syntezatorów jako głosu czytnika ekranu NVDA. Dostarczany jako dodatek NVDA.',
    descEn:
      'An NVDA driver for the Dolphin Apollo 2 hardware speech synthesizer (and Juno). It lets you use these synthesizers as the voice of the NVDA screen reader. Distributed as an NVDA add-on.',
    tags: ['dostepnosc', 'kod'],
    links: [
      {
        labelPl: 'Pobierz dodatek',
        labelEn: 'Download the add-on',
        a11yPl: 'Pobierz najnowszy dodatek NVDA Apollo',
        a11yEn: 'Download the latest Apollo NVDA add-on',
        href: 'https://github.com/michaldziwisz/apollo/releases/latest',
      },
    ],
  },
  {
    id: 'pdf-signature-remover',
    featured: false,
    namePl: 'PDF Signature Remover',
    nameEn: 'PDF Signature Remover',
    descPl:
      'Prosty, dostępny (NVDA/JAWS) program dla Windows do usuwania wszystkich podpisów cyfrowych z plików PDF.',
    descEn:
      'A simple, accessible (NVDA/JAWS) Windows app for removing all digital signatures from PDF files.',
    tags: ['dostepnosc', 'kod'],
    links: [
      {
        labelPl: 'Pobierz',
        labelEn: 'Download',
        a11yPl: 'Pobierz PDF Signature Remover z Microsoft Store',
        a11yEn: 'Download PDF Signature Remover from the Microsoft Store',
        href: 'https://apps.microsoft.com/detail/9n7j94w7nbmp?hl=pl-PL&gl=PL',
      },
    ],
  },
  {
    id: 'czysciciel',
    featured: true,
    namePl: 'Czyściciel',
    nameEn: 'Czyściciel',
    descPl:
      'Program dla Windows, który automatycznie usuwa z nagrań mowy wtrącenia typu „yyy”, „eee” i skraca zbyt długie pauzy. Wykrywa je lokalnie, na komputerze użytkownika, modelem sztucznej inteligencji classla/wav2vecbert2-filledPause (nic nie jest wysyłane do sieci). Brzmi naturalnie, jest w pełni dostępny dla czytników ekranu i potrafi wyeksportować gotowy projekt do programu Reaper.',
    descEn:
      'A Windows app that automatically removes filler sounds like “um” and “uh” from speech recordings and shortens overly long pauses. It detects them locally, on the user’s own computer, with the classla/wav2vecbert2-filledPause AI model (nothing is sent to the cloud). It sounds natural, is fully accessible to screen readers, and can export a ready-made Reaper project.',
    tags: ['kod', 'dostepnosc', 'media'],
    links: [
      {
        labelPl: 'Pobierz',
        labelEn: 'Download',
        a11yPl: 'Pobierz Czyściciela dla Windows',
        a11yEn: 'Download Czyściciel for Windows',
        href: 'https://github.com/michaldziwisz/czysciciel/releases/latest/download/Czysciciel-windows.zip',
      },
      {
        labelPl: 'Kod źródłowy',
        labelEn: 'Source code',
        a11yPl: 'Kod źródłowy Czyściciela na GitHubie',
        a11yEn: 'Source code of Czyściciel on GitHub',
        href: 'https://github.com/michaldziwisz/czysciciel',
      },
    ],
  },
  {
    id: 'franken-fdk-aac',
    featured: false,
    namePl: 'Franken FDK AAC',
    nameEn: 'Franken FDK AAC',
    descPl:
      'Laboratoryjny koder dźwięku AAC dla zaawansowanych. Bierze bibliotekę Fraunhofera (libfdk-aac) i wystawia na przełączniki wiersza poleceń jej wewnętrzne decyzje, które normalnie są zaszyte na sztywno: sterowanie joint stereo pasmo po paśmie, gęstość SBR, parametric stereo, kształtowanie szumu, odcięcie pasma rdzenia i wiele innych. Narzędzie do eksperymentów i podglądania, co koder robi sam z siebie. Konsultacja merytoryczna: Patryk Faliszewski.',
    descEn:
      'A laboratory AAC audio encoder for power users. It takes the Fraunhofer library (libfdk-aac) and exposes its normally hardcoded internal decisions as command-line switches: per-band joint stereo control, SBR density, parametric stereo, noise shaping, core bandwidth cutoff and much more. A tool for experimenting with and inspecting what the encoder does on its own. Subject-matter consultation: Patryk Faliszewski.',
    tags: ['kod', 'media'],
    links: [
      {
        labelPl: 'Pobierz',
        labelEn: 'Download',
        a11yPl: 'Pobierz Franken FDK AAC z wydań na GitHubie',
        a11yEn: 'Download Franken FDK AAC from the GitHub releases',
        href: 'https://github.com/michaldziwisz/franken-fdk-aac/releases/latest',
      },
      {
        labelPl: 'Kod źródłowy',
        labelEn: 'Source code',
        a11yPl: 'Kod źródłowy Franken FDK AAC na GitHubie',
        a11yEn: 'Source code of Franken FDK AAC on GitHub',
        href: 'https://github.com/michaldziwisz/franken-fdk-aac',
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
