# Wdrożenie na Cloudflare Pages — instrukcja krok po kroku

Ta instrukcja przeprowadza przez publikację strony na Cloudflare Pages i
podpięcie domeny dziwisz.net. Pisana pod obsługę czytnikiem ekranu —
mówię wprost, w co kliknąć i gdzie szukać pól. Robisz to raz; potem każdy
`git push` do gałęzi `main` publikuje nową wersję automatycznie.

Repo jest już na GitHubie: https://github.com/michaldziwisz/dziwisz.net
(publiczne, gałąź domyślna `main`).

WAŻNE na start — stan domeny:
Domena dziwisz.net obecnie wskazuje rekordem A na Twój VPS w OVH
(57.128.173.119), a serwery nazw (NS) NIE są w Cloudflare. Dlatego w kroku
o domenie masz dwie drogi (A albo B). Droga A (przeniesienie domeny do
Cloudflare) jest wygodniejsza na przyszłość i to ją rekomenduję.

---

## Krok 1. Załóż/otwórz konto Cloudflare

1. Wejdź na https://dash.cloudflare.com i zaloguj się (albo załóż darmowe
   konto — wystarczy e-mail i hasło; plan Free w zupełności starcza).

## Krok 2. Utwórz projekt Pages połączony z GitHubem

1. W panelu Cloudflare, w menu po lewej, znajdź pozycję „Workers & Pages"
   (czasem samo „Pages"). Wejdź w nią.
2. Kliknij przycisk „Create application" (Utwórz aplikację), a następnie
   zakładkę „Pages".
3. Wybierz „Connect to Git" (Połącz z Git).
4. Cloudflare poprosi o autoryzację dostępu do GitHuba. Kliknij „Connect
   GitHub" i w oknie GitHuba zatwierdź dostęp. Możesz dać dostęp tylko do
   repozytorium `dziwisz.net` (opcja „Only select repositories") — to
   bezpieczniejsze niż „All repositories".
5. Po powrocie do Cloudflare z listy repozytoriów wybierz
   `michaldziwisz/dziwisz.net` i kliknij „Begin setup".

## Krok 3. Ustaw parametry builda

Na ekranie konfiguracji (Set up builds and deployments) ustaw:

- Project name (nazwa projektu): dowolna, np. `dziwisz-net`. To wpłynie na
  tymczasowy adres testowy (np. dziwisz-net.pages.dev).
- Production branch (gałąź produkcyjna): `main`.
- Framework preset (szablon): wybierz „Astro" (jeśli jest na liście — sam
  ustawi poniższe). Jeśli nie ma, wpisz ręcznie:
  - Build command (polecenie budowania): `npm run build`
  - Build output directory (katalog wyjściowy): `dist`
- Root directory (katalog główny): zostaw puste / pojedynczy myślnik
  (projekt jest w korzeniu repo).

Kliknij „Save and Deploy" (Zapisz i wdróż). Cloudflare pobierze kod,
zbuduje stronę (ok. 1–2 minuty) i opublikuje ją pod adresem
tymczasowym `NAZWA.pages.dev`. Otwórz ten adres i sprawdź, czy strona
działa. To jeszcze nie dziwisz.net — to adres testowy.

## Krok 4. Podłącz domenę dziwisz.net

W projekcie Pages wejdź w zakładkę „Custom domains" (Domeny własne) i
kliknij „Set up a custom domain". Wpisz `dziwisz.net` i zatwierdź. Dalej
zależy od drogi:

### Droga A (ZALECANA): przenieś domenę pod Cloudflare (pełny DNS)

Dzięki temu Cloudflare zarządza DNS, a Pages podłącza się samo. Dostajesz
też darmowy proxy/CDN i najprostsze utrzymanie.

1. W panelu Cloudflare kliknij „Add a site" (Dodaj witrynę) i wpisz
   `dziwisz.net`. Wybierz plan Free.
2. Cloudflare zeskanuje istniejące rekordy DNS i pokaże dwa serwery nazw
   (nameservers), np. `xxx.ns.cloudflare.com` i `yyy.ns.cloudflare.com`.
   ZAPISZ te dwie nazwy (zaznacz i skopiuj — będą potrzebne).
3. Zaloguj się do panelu swojego REJESTRATORA domeny (tam, gdzie kupiłeś
   dziwisz.net) i w ustawieniach domeny znajdź „Serwery nazw" / „DNS" /
   „Nameservers". Usuń dotychczasowe i wpisz te dwa od Cloudflare.
   (Uwaga: jeśli DNS trzymasz w OVH, to właśnie w panelu OVH zmieniasz
   nameservery domeny na te od Cloudflare.)
4. Zapisz. Propagacja NS trwa od kilku minut do kilku godzin. Cloudflare
   przyśle e-mail „dziwisz.net is now active".
5. Gdy domena jest aktywna w Cloudflare, wróć do projektu Pages ->
   Custom domains -> dodaj `dziwisz.net` (jeśli jeszcze nie dodane).
   Cloudflare sam utworzy właściwy rekord i certyfikat HTTPS. Dodaj też
   `www.dziwisz.net` jeśli chcesz — najlepiej jako przekierowanie na goły
   dziwisz.net.

Po tym Twój VPS przestaje obsługiwać dziwisz.net (rekord A na OVH już nie
jest używany dla tej strony). VPS zostaje wolny na inne rzeczy.

### Droga B: zostaw DNS gdzie jest, wskaż tylko rekordem CNAME/A

Sensowne, jeśli NIE chcesz ruszać nameserverów. Wtedy Cloudflare Pages
poda Ci wartość docelową (zwykle rekord CNAME wskazujący na
`NAZWA.pages.dev`).

1. W Custom domains Cloudflare pokaże instrukcję: „utwórz rekord CNAME dla
   dziwisz.net o wartości NAZWA.pages.dev".
2. Problem: dla „gołej" domeny (dziwisz.net bez www) wielu operatorów DNS
   nie pozwala na CNAME. Wtedy albo używasz operatora z „CNAME flattening"
   (Cloudflare to potrafi — dlatego droga A jest prostsza), albo kierujesz
   przez www i przekierowanie.
3. W panelu obecnego DNS USUŃ stary rekord A wskazujący na VPS
   (57.128.173.119) dla tej strony i dodaj rekord wg instrukcji Cloudflare.

Jeśli droga B robi się zawiła u Twojego operatora — przejdź na drogę A,
jest czystsza.

## Krok 5. Weryfikacja

1. Po propagacji otwórz https://dziwisz.net — powinna załadować się strona
   z certyfikatem HTTPS (kłódka).
2. Sprawdź podstrony: /o-mnie/, /czym-sie-zajmuje/, /kontakt/ oraz wersję
   angielską /en/.
3. Od teraz: każda zmiana wypchnięta na `main` (git push) automatycznie
   przebudowuje i publikuje stronę. Nic nie wgrywasz ręcznie.

---

## Co jeszcze warto uzupełnić w treści (opcjonalnie)

- Adres e-mail kontaktowy: teraz jest placeholder `kontakt@dziwisz.net`
  w pliku `src/data/kontakt.ts`. Podmień na właściwy.
- Profile w sekcji Kontakt („gdzie indziej"): w tym samym pliku odkomentuj
  i uzupełnij LinkedIn / X / Mastodon, jeśli chcesz je pokazać.
- Zdjęcie na stronie „O mnie" (opcjonalnie) — z opisem alternatywnym.
- Teksty „O mnie" napisałem jako sensowny start; możesz je dowolnie zmienić
  w `src/i18n/ui.ts` (klucze about.p1 / about.p2 / about.p3).
