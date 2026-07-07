// Dane kontaktowe i profile. Podmień wartości na swoje.
// email: jeśli chcesz ukryć przed botami, zostaw jak jest — link mailto
// jest budowany dynamicznie z części (patrz kontakt.astro).

export const contact = {
  // Podmień na swój adres. Rozbity na części utrudnia zbieranie przez boty.
  emailUser: 'michal',
  emailDomain: 'dziwisz.net',
};

export interface Social {
  id: string;
  label: string;
  href: string;
}

// Profile „gdzie indziej”. Usuń te, których nie chcesz; dodaj własne.
export const socials: Social[] = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/michaldziwisz' },
  { id: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/michal.dziwisz' },
  { id: 'telefon', label: 'Telefon: +48 695 918 803', href: 'tel:+48695918803' },
  { id: 'whatsapp', label: 'WhatsApp', href: 'https://wa.me/48695918803' },
  { id: 'telegram', label: 'Telegram: @mdziwisz', href: 'https://t.me/mdziwisz' },
];
