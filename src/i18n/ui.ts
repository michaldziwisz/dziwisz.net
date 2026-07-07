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
      'Michał Dziwisz: pomysłodawca i redaktor naczelny TyfloPodcast, twórca narzędzi i aplikacji, dla których dostępność cyfrowa jest fundamentem. Praca i pasja w jednym nurcie.',

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

    'home.hero.eyebrow': 'Cześć, nazywam się',
    'home.hero.lede':
      'Buduję rzeczy, w których dostępność cyfrowa jest fundamentem, a nie dodatkiem. Praca i pasja to u mnie jeden nurt: media, technologia i ludzie.',
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

    'about.heading': 'O mnie',
    'about.p1':
      'Nazywam się Michał Dziwisz. Zajmuję się tym, co wielu ludzi rozdziela na „pracę" i „pasję". U mnie to jeden nurt. Media, technologia i dostępność cyfrowa spotykają się w jednym miejscu, bo dla mnie zawsze chodziło o to samo: żeby narzędzia, treści i usługi były naprawdę dostępne dla każdego, niezależnie od tego, czy widzi ekran.',
    'about.p2':
      'Jestem pomysłodawcą i redaktorem naczelnym TyfloPodcast, serwisu o technologii i dostępności dla osób niewidomych i słabowidzących. Współtworzę format kanału głównego Radia DHT. Buduję też oprogramowanie: od aplikacji TyfloCentrum na Windows, Androida i iOS, przez system automatyzacji radiowej SARA, po drobne, ale praktyczne narzędzia jak Podróżnik czy program do usuwania podpisów z plików PDF.',
    'about.p3':
      'Wspólnym mianownikiem jest dostępność. Nie traktuję jej jako dodatku dodawanego na końcu, tylko jako fundament i sposób myślenia o tym, jak w ogóle projektować i pisać kod. Ta strona jest tego przykładem: została zbudowana tak, by dobrze działała z czytnikiem ekranu, klawiaturą i w obu trybach kolorystycznych.',
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
      'Michał Dziwisz: founder and editor-in-chief of TyfloPodcast, and maker of tools and apps built on digital accessibility. Work and passion in one stream.',

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

    'home.hero.eyebrow': 'Hi, my name is',
    'home.hero.lede':
      'I build things where digital accessibility is the foundation, not an add-on. Work and passion are one stream for me: media, technology and people.',
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

    'about.heading': 'About me',
    'about.p1':
      "My name is Michał Dziwisz. I do the kind of work that many people split into a 'job' and a 'hobby', but for me it's a single stream. Media, technology and digital accessibility meet in one place, because it was always about the same thing for me: making sure tools, content and services are genuinely accessible to everyone, whether or not they can see the screen.",
    'about.p2':
      "I am the founder and editor-in-chief of TyfloPodcast, a platform about technology and accessibility for blind and partially sighted people. I co-create the format of Radio DHT's main channel. I also build software: from the TyfloCentrum apps for Windows, Android and iOS, through the SARA radio automation system, to small but practical tools like Podróżnik or an app for removing signatures from PDF files.",
    'about.p3':
      'The common denominator is accessibility. I never treat it as an add-on bolted on at the end, but as a foundation and a way of thinking about how to design and write code in the first place. This site is an example: it was built to work well with a screen reader, a keyboard and in both colour themes.',
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
