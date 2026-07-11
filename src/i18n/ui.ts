// Słownik interfejsu (UI) — polski i angielski.
// Treść merytoryczna projektów jest osobno (src/data/projekty.ts),
// bo część jest wspólna (linki) i tłumaczona per język.

export const languages = {
  pl: 'Polski',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'pl';

export const ui = {
  pl: {
    'site.title': 'Michał Dziwisz',
    'site.tagline': 'Dostępność cyfrowa, media i oprogramowanie',
    'site.description':
      'Strona Michała Dziwisza o dostępności cyfrowej, mediach, technologii i narzędziach tworzonych z myślą o ludziach.',

    'nav.home': 'Start',
    'nav.about': 'O mnie',
    'nav.work': 'Czym się zajmuję',
    'nav.contact': 'Kontakt',
    'nav.label': 'Nawigacja główna',
    'nav.menu.open': 'Otwórz menu',
    'nav.menu.close': 'Zamknij menu',

    'skip.link': 'Przejdź do treści',

    'theme.toggle': 'Przełącz motyw jasny lub ciemny',
    'theme.toDark': 'Włącz tryb ciemny',
    'theme.toLight': 'Włącz tryb jasny',

    'lang.switch': 'Zmień język na angielski',
    'lang.label': 'Wybór języka',

    'home.hero.photoAlt':
      'Michał Dziwisz w studiu radiowym: w kaszkiecie i białej koszulce, uśmiechnięty, przy mikrofonie; w tle świecący neon ON AIR.',
    'home.hero.eyebrow': 'Cześć, nazywam się',
    'home.hero.lede':
      'Tworzę dostępne media, aplikacje i narzędzia, które mają być praktyczne i przydatne.',
    'home.cta.work': 'Zobacz, czym się zajmuję',
    'home.cta.contact': 'Napisz do mnie',
    'home.work.heading': 'Wybrane rzeczy, które tworzę',
    'home.work.all': 'Zobacz wszystko',
    'home.about.heading': 'Kilka słów o mnie',
    'home.about.more': 'Więcej o mnie',

    'work.heading': 'Czym się zajmuję',
    'work.intro':
      'Nie rozdzielam pracy od pasji. To jeden organizm. Poniżej rzeczy, które tworzę, współtworzę i rozwijam.',
    'work.visit': 'Otwórz',
    'work.repo': 'Kod źródłowy',
    'work.platforms': 'Platformy',

    'about.photoAlt':
      'Uśmiechnięty Michał w jasnym kaszkiecie i beżowej koszulce z nadrukiem kotów rasy ragdoll, na tle tapety z tym samym kocim wzorem; obok napis „Mam kota na punkcie kota?”.',
    'about.heading': 'O mnie',
    'about.p1':
      'Nazywam się Michał Dziwisz. Od lat tworzę media, aplikacje i narzędzia, które mają ułatwiać codzienne korzystanie z technologii. Jako osoba niewidoma traktuję dostępność cyfrową osobiście; to nie tylko temat, którym się zajmuję, ale coś, co realnie wpływa na życie. Staram się robić rzeczy potrzebne, zrozumiałe i dostępne dla możliwie wielu osób.',
    'about.p2':
      'Jestem pomysłodawcą i redaktorem naczelnym serwisu TyfloPodcast, poświęconego technologii i dostępności dla osób niewidomych i słabowidzących. Współtworzę też format kanału głównego Radia DHT. Do moich projektów programistycznych należą między innymi aplikacje TyfloCentrum dla systemów Windows, Android i iOS, system automatyzacji radiowej SARA oraz mniejsze, praktyczne narzędzia, takie jak Podróżnik czy program do usuwania podpisów z plików PDF.',
    'about.p3':
      'Łączy je dostępność. Staram się myśleć o niej od początku, a nie dokładać jej na końcu gotowego projektu. Ta strona powstała w podobnym duchu: ma dobrze działać z czytnikiem ekranu, dawać się wygodnie obsługiwać z klawiatury i pozostawać czytelna w trybie jasnym i ciemnym.',
    'about.workLink': 'Zobacz, nad czym pracuję',

    'contact.heading': 'Kontakt',
    'contact.intro':
      'Najprościej złapać mnie mailowo lub przez profile poniżej. Chętnie porozmawiam o dostępności, mediach i technologii.',
    'contact.email': 'E-mail',
    'contact.elsewhere': 'Gdzie indziej',

    'footer.built':
      'Strona zbudowana z myślą o dostępności. Kod źródłowy jest publiczny.',
    'footer.source': 'Kod źródłowy strony',
    'footer.rights': 'Wszelkie prawa zastrzeżone.',

    'notfound.heading': 'Nie znaleziono strony',
    'notfound.text': 'Ta strona nie istnieje lub została przeniesiona.',
    'notfound.home': 'Wróć na stronę główną',
  },
  en: {
    'site.title': 'Michał Dziwisz',
    'site.tagline': 'Digital accessibility, media and software',
    'site.description':
      'The website of Michał Dziwisz: digital accessibility, media, technology and tools built with people in mind.',

    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.work': 'What I do',
    'nav.contact': 'Contact',
    'nav.label': 'Main navigation',
    'nav.menu.open': 'Open menu',
    'nav.menu.close': 'Close menu',

    'skip.link': 'Skip to content',

    'theme.toggle': 'Toggle light or dark theme',
    'theme.toDark': 'Switch to dark mode',
    'theme.toLight': 'Switch to light mode',

    'lang.switch': 'Change language to Polish',
    'lang.label': 'Language selection',

    'home.hero.photoAlt':
      'Michał Dziwisz in a radio studio: wearing a flat cap and a white t-shirt, smiling, at a microphone; a glowing ON AIR neon sign in the background.',
    'home.hero.eyebrow': 'Hi, my name is',
    'home.hero.lede':
      'I create accessible media, apps and tools that are meant to be practical and genuinely useful.',
    'home.cta.work': 'See what I do',
    'home.cta.contact': 'Get in touch',
    'home.work.heading': 'Some of the things I make',
    'home.work.all': 'See everything',
    'home.about.heading': 'A few words about me',
    'home.about.more': 'More about me',

    'work.heading': 'What I do',
    'work.intro':
      "I don't separate work from passion. It's one organism. Below are the things I create, co-create and maintain.",
    'work.visit': 'Open',
    'work.repo': 'Source code',
    'work.platforms': 'Platforms',

    'about.photoAlt':
      'Smiling Michał in a light flat cap and a beige t-shirt printed with ragdoll cats, against wallpaper with the same cat pattern; next to it the Polish caption „Mam kota na punkcie kota?” (crazy about cats).',
    'about.heading': 'About me',
    'about.p1':
      "My name is Michał Dziwisz. For years, I've been creating media, apps and tools that make everyday use of technology easier. As someone who is blind, digital accessibility matters to me personally; it is not just an area I work in, but something that affects real life. I try to make things that are useful, understandable and accessible to as many people as possible.",
    'about.p2':
      "I am the founder and editor-in-chief of TyfloPodcast, a site about technology and accessibility for blind and partially sighted people. I also help develop the format of Radio DHT's main channel. My software projects include the TyfloCentrum apps for Windows, Android and iOS, the SARA radio automation system, and smaller practical tools such as Podróżnik and a utility for removing signatures from PDF files.",
    'about.p3':
      'Accessibility is what ties these projects together. I try to think about it from the start, rather than add it to a finished project at the end. This website was built in the same spirit: it is meant to work well with screen readers, be easy to use with a keyboard, and remain readable in both light and dark modes.',
    'about.workLink': 'See what I work on',

    'contact.heading': 'Contact',
    'contact.intro':
      "The easiest way to reach me is by email or through the profiles below. I'm always happy to talk about accessibility, media and technology.",
    'contact.email': 'Email',
    'contact.elsewhere': 'Elsewhere',

    'footer.built':
      'This site was built with accessibility in mind. The source code is public.',
    'footer.source': 'Site source code',
    'footer.rights': 'All rights reserved.',

    'notfound.heading': 'Page not found',
    'notfound.text': 'This page does not exist or has been moved.',
    'notfound.home': 'Back to home',
  },
} as const;

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)['pl']): string {
    return (ui[lang] as Record<string, string>)[key] ?? (ui.pl as Record<string, string>)[key];
  };
}

// Zwraca ścieżkę z prefiksem języka (en -> /en/..., pl -> /...).
export function localizedPath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === 'pl') return clean === '/' ? '/' : clean;
  return clean === '/' ? '/en/' : `/en${clean}`;
}
