# dziwisz.net

Strona domowa Michała Dziwisza — o mnie, projekty, media i oprogramowanie.
Zbudowana z myślą o dostępności (WCAG 2.2 AA), dwujęzyczna (polski i angielski),
z motywem ciemnym i jasnym.

## Stack

- [Astro](https://astro.build) — generator stron statycznych (czysty, semantyczny HTML).
- Czysty CSS (motyw „Cichy gabinet": grafit + ciepły bursztyn), bez frameworka.
- Krój szeryfowy Fraunces (self-hosted przez `@fontsource-variable/fraunces`),
  reszta na systemowym kroju bezszeryfowym.
- Zero JavaScriptu poza drobnymi, dostępnymi skryptami (menu mobilne,
  przełącznik motywu, delikatne pojawianie sekcji z poszanowaniem
  `prefers-reduced-motion`).

## Dostępność

- Semantyczny HTML, jeden `<h1>` na stronę, logiczna hierarchia nagłówków.
- Landmarki `header`/`nav`/`main`/`footer`, opisane sekcje.
- Skip link „Przejdź do treści".
- Pełna obsługa klawiaturą, wyraźny wskaźnik fokusu.
- Kontrasty ponad AA (tekst dąży do AAA); zweryfikowane axe-core w obu motywach — 0 naruszeń.
- Poprawny atrybut `lang` przy przełączaniu PL/EN.
- Motyw podąża za preferencją systemową i zapamiętuje wybór użytkownika.

## Rozwój lokalny

```bash
npm install
npm run dev      # serwer deweloperski na http://localhost:4321
npm run build    # build produkcyjny do ./dist
npm run preview  # podgląd builda
```

## Struktura

```
src/
  components/        Header, Footer, ProjectCard + treści stron (pages/)
  data/              projekty.ts (lista projektów PL/EN), kontakt.ts
  i18n/              ui.ts — słownik interfejsu i tekstów PL/EN
  layouts/           Layout.astro — szkielet HTML, <head>, motyw
  pages/             trasy PL (/) i EN (/en/)
  styles/            global.css — motyw „Cichy gabinet"
public/              robots.txt, sitemap.xml, zasoby statyczne
```

## Jak dopisać / zmienić treść

- Projekty: `src/data/projekty.ts` — dodaj obiekt do tablicy `projects`
  (pola PL i EN, tagi, linki; `featured: true` = pokaż na stronie głównej).
- Teksty interfejsu i sekcji: `src/i18n/ui.ts`.
- Kontakt i profile: `src/data/kontakt.ts`.

## Hosting

Wdrażane na Cloudflare Pages. Build command: `npm run build`, katalog
wyjściowy: `dist`. Każdy push do gałęzi `main` publikuje nową wersję.

## Licencja

Kod strony: MIT (patrz `LICENSE`). Treść (teksty, opisy) © Michał Dziwisz.
