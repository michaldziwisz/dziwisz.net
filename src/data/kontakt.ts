// Dane kontaktowe i profile. Podmień wartości na swoje.
// email: jeśli chcesz ukryć przed botami, zostaw jak jest — link mailto
// jest budowany dynamicznie z części (patrz kontakt.astro).

export const contact = {
  // Podmień na swój adres. Rozbity na części utrudnia zbieranie przez boty.
  emailUser: 'kontakt',
  emailDomain: 'dziwisz.net',
};

export interface Social {
  id: string;
  label: string;
  href: string;
}

// Profile „gdzie indziej". Usuń te, których nie chcesz; dodaj własne.
export const socials: Social[] = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/michaldziwisz' },
  { id: 'tyflopodcast', label: 'TyfloPodcast', href: 'https://tyflopodcast.net' },
  // Przykłady — odkomentuj i uzupełnij, jeśli chcesz:
  // { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/...' },
  // { id: 'x', label: 'X', href: 'https://x.com/...' },
  // { id: 'mastodon', label: 'Mastodon', href: 'https://...' },
];
