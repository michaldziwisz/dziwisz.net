# dziwisz.net — propozycja designu i architektury strony

Dokument do spokojnego przeczytania. Opisuję jeden konkretny kierunek
wizualny (a nie kolejną listę wariantów), tłumaczę słowami jak to wygląda
i brzmi, i uzasadniam każdą decyzję. Na końcu są pytania, na które
odpowiadasz — dopiero potem stawiam szkielet.

---

## 1. W skrócie — co proponuję

- Generator: **Astro** (czysty, semantyczny HTML na wyjściu, zero zbędnego JS).
- Hosting: **Cloudflare Pages** (darmowy, globalny, „wrzuć i zapomnij").
- Repo: **publiczne** na GitHubie (`michaldziwisz/dziwisz.net`).
- Języki: **polski i angielski** (przełącznik w rogu; domyślnie polski).
- Styl wizualny: nazywam go **„Cichy gabinet"** — ciemny, elegancki
  minimalizm z jednym wyrazistym akcentem koloru i dużą, spokojną typografią.
- Struktura: **„Jeden nurt"** — praca i pasja to u Ciebie jedno, więc NIE
  rozdzielamy „Projektów" i „Pasji". Strona główna + trzy podstrony
  (O mnie, Czym się zajmuję, Kontakt).

Jeśli którakolwiek z tych czterech decyzji Ci nie pasuje — mówisz, zmieniamy.
Reszta dokumentu opisuje głównie „jak to wygląda".

---

## 2. Kierunek wizualny: „Cichy gabinet"

Chciałeś: przykuwa uwagę, ale profesjonalne i estetyczne. Te trzy rzeczy
łatwo ze sobą walczą — krzykliwe strony przyciągają wzrok, ale wyglądają
tanio; a „bezpieczne" korporacyjne strony są nudne. Rozwiązanie, które
sprawdza się u ludzi (portfolia programistów, badaczy, twórców): **dużo
przestrzeni, jeden mocny akcent, świetna typografia i drobny, subtelny ruch.**
Uwagę przykuwa nie hałas, tylko pewność siebie i porządek.

### 2.1. Kolory

Bazowo motyw **ciemny** (to dziś wygląda najbardziej „premium" i jest
łagodniejsze dla oczu; jasny wariant też zrobię — patrz punkt o trybach).

- Tło: bardzo ciemny grafit, nie czysta czerń (czerń bywa męcząca i
  „płaska"). Wyobraź sobie kolor bardzo ciemnego atramentu.
- Tekst: nie czysta biel, tylko lekko przygaszona (mniej razi, wygląda
  drożej).
- **Jeden kolor akcentu** — proponuję **ciepły bursztyn / miodowy złoty**.
  Powód: większość „technicznych" stron leci w chłodny niebieski albo
  fiolet; ciepły bursztyn na grafitowym tle jest rzadszy, od razu zwraca
  uwagę i kojarzy się z czymś rzemieślniczym i solidnym, a nie z kolejnym
  start-upem. Akcentem świecą: linki, aktywna zakładka, obramowanie pola
  po najechaniu/fokusie, podkreślenia nagłówków.
- Alternatywy akcentu, gdyby bursztyn Ci nie leżał: głęboka szmaragdowa
  zieleń albo stonowany terakotowy (ceglasty). Wszystkie trzy sprawdziłem
  pod kątem kontrastu — patrz niżej.

Kontrast: każde zestawienie tekst/tło dobieram tak, żeby przekraczało
wymagania WCAG 2.2 AA (a dla zwykłego tekstu celuję w AAA, czyli
kontrast co najmniej 7:1). To nie tylko dla osób słabowidzących — to też
po prostu wygląda czysto.

### 2.2. Typografia (to nośnik „klasy" tej strony)

Skoro rezygnujemy z krzykliwości, to litery robią całą robotę. Proponuję
zestaw dwóch krojów:

- Nagłówki: elegancki krój szeryfowy o wyraźnym charakterze (coś w rodzaju
  współczesnej szeryfowej „redakcyjnej" — kojarzy się z dobrymi magazynami
  i książkami, daje powagę i indywidualność). Duże, z oddechem.
- Tekst i interfejs: czysty, bardzo czytelny krój bezszeryfowy.

Kontrast dwóch krojów (poważne szeryfowe nagłówki + spokojny bezszeryfowy
tekst) to sprawdzony przepis na „wygląda drogo, a nie krzyczy". Rozmiary
duże, interlinia luźna, szerokość kolumny tekstu ograniczona (dla wygody
czytania — ok. 65–75 znaków w wierszu).

Krój dobiorę tak, żeby ładował się szybko i miał komplet polskich znaków
diakrytycznych (ą, ę, ż, ź, ó itd.).

### 2.3. Układ i „co widać"

- **Ekran startowy (hero):** duży, spokojny. Twoje imię i nazwisko sporą
  szeryfową czcionką, pod spodem jedno–dwuzdaniowe kim jesteś /czym się
  zajmujesz, i dwa przyciski: „Projekty" oraz „Kontakt". Dużo pustej
  przestrzeni dookoła. Bez fajerwerków — to właśnie robi wrażenie „pewny
  siebie profesjonalista".
- **Sekcje na stronie głównej pod hero:** krótkie „zajawki" — parę
  wyróżnionych projektów (kafelki), akapit „o mnie" i skróty do pasji, na
  końcu stopka z kontaktem. Całość przewijana pionowo, sekcje oddzielone
  przestrzenią, nie liniami.
- **Nawigacja:** górny pasek z linkami do podstron + przełącznik języka
  (PL/EN) i przełącznik motywu (ciemny/jasny). Na wąskich ekranach
  (telefon) chowa się w dostępne menu (prawdziwy przycisk z aria-expanded,
  a nie atrapa).

### 2.4. Ruch / animacja

Subtelnie i z umiarem. Delikatne „wejście" sekcji przy przewijaniu
(łagodne pojawienie), płynne podkreślenie linku po najechaniu. **Zero**
migania, auto-przewijania czy karuzel. Kluczowe: uszanuję ustawienie
systemowe „ogranicz ruch" (prefers-reduced-motion) — kto go ma włączone
(a wiele osób z wrażliwością na ruch i część użytkowników czytników ma),
dostaje stronę bez żadnych animacji. To wymóg dostępności, ale też po
prostu dobra maniera.

---

## 3. Dostępność — jak to gwarantuję (nie jako dodatek, tylko od fundamentu)

To jest Twoja domena, więc traktuję ją jako punkt honoru, nie „checkbox":

- Semantyczny HTML: prawdziwe nagłówki w logicznej hierarchii (jeden H1 na
  stronę, potem H2/H3), `<nav>`, `<main>`, `<footer>`, listy tam gdzie są
  listy. Czytnik dostaje sensowną mapę strony.
- Pełna obsługa klawiaturą: wszystko osiągalne Tabem, widoczny i wyraźny
  wskaźnik fokusu (świeci akcentem), logiczna kolejność.
- „Przejdź do treści" (skip link) na samej górze.
- Każdy obrazek z sensownym tekstem alternatywnym; grafiki czysto
  dekoracyjne oznaczone jako dekoracyjne (czytnik je pomija).
- Przełącznik języka ustawia poprawnie atrybut `lang` — synteza czyta
  polski po polsku, angielski po angielsku.
- Formularz kontaktowy (jeśli będzie) z prawdziwymi etykietami i czytelnymi
  komunikatami błędów.
- Tryb ciemny i jasny, oba z kontrastem powyżej AA.
- Na koniec przepuszczę stronę przez audyt: automatyczny (axe) plus ręczny
  przelot nawigacją klawiaturą i czytnikiem, oraz kontrola kontrastów.
  Dopiero wtedy uznamy „gotowe".

Efekt uboczny dobrej dostępności: strona jest też szybka, lekka i wysoko
oceniana przez Google. Wszystko gra w tę samą stronę.

---

## 4. Struktura strony (podstrony i treść)

Struktura „Jeden nurt" — bez sztucznego dzielenia na pracę i pasję, bo
u Ciebie to jeden organizm: technologia w służbie dostępności i mediów.

- **Strona główna** — hero + zajawki (opisane wyżej): jedno zdanie kim
  jesteś, kilka wyróżnionych realizacji jako kafelki, skrót „o mnie",
  stopka z kontaktem.
- **O mnie** — narracja, w której wprost mówisz, że praca i pasja to
  u Ciebie to samo. Tu wplatasz trzy przeplatające się wątki: dostępność
  cyfrowa, audio i media (radio, podcast), oraz oprogramowanie pod te cele.
  Miejsce na zdjęcie (opcjonalnie) z opisem alternatywnym.
- **Czym się zajmuję** — jedna bogata sekcja zamiast dwóch szuflad
  „Projekty" i „Pasje". Konkretne rzeczy (np. UTILITIA, pdffix, audyty
  dostępności, TyfloPodcast/TyfloRadio, dodatki NVDA, aplikacje
  TyfloCentrum) jako kafelki — ale spięte wspólną opowieścią, nie
  rozrzucone po kategoriach „to praca / to hobby". Każdy wpis: nazwa,
  krótki opis, rola/technologie, link (repo, strona, podcast).
  Opcjonalnie lekkie tagi tematyczne (dostępność / audio / kod) do
  orientacji — ale jako etykiety, nie jako rozdział.
- **Kontakt** — e-mail, linki do profili (GitHub, podcast, LinkedIn, X),
  ewentualnie prosty formularz.

Nie musimy mieć od razu wszystkich tekstów. Zbuduję szkielet z sensownymi
tekstami zastępczymi (placeholderami), a Ty podmieniasz w swoim tempie —
albo dyktujesz mi treść i ja wstawiam.

---

## 5. Jak będziesz dopisywać treść (ważne dla wygody)

Przy Astro treść „Projektów", „Pasji" itd. trzymamy jako zwykłe pliki
tekstowe w formacie markdown — czysty tekst z prostymi znacznikami. Żeby
dodać nowy projekt, powstaje jeden nowy plik `.md`, np.:

```
---
tytul: "UTILITIA"
opis: "Narzędzie do badania dostępności cyfrowej."
technologie: ["Python", "dostępność", "PDF/UA"]
link: "https://utilitia.pl"
---

Dłuższy opis projektu zwykłym tekstem...
```

Strona sama się z tego przebuduje. Możesz to robić sam (edytując pliki
tekstowe — w pełni dostępne, żadnego wizualnego edytora), albo po prostu
mówisz mi „dodaj projekt X" i ja dopisuję. Nie ma tu żadnego panelu
administracyjnego ani bazy danych — same pliki, wszystko czytelne
czytnikiem i wersjonowane w gicie.

---

## 6. Hosting i wdrożenie — jak to działa w praktyce

Rekomendacja: **Cloudflare Pages**.

- Kod trzymamy w publicznym repo na GitHubie.
- Cloudflare podpina się do repo: **każdy `git push` = automatyczny build i
  publikacja** nowej wersji strony w ciągu ~minuty. Nie musisz nic ręcznie
  wgrywać.
- Darmowe: hosting, transfer, certyfikat HTTPS.
- Domenę `dziwisz.net` przekierujemy na Cloudflare (darmowe konto) — dostajesz
  przy okazji szybki globalny CDN i ochronę. Wymaga to zmiany serwerów nazw
  (NS) domeny; poprowadzę Cię krok po kroku, dostępnie (klikasz w panelu
  rejestratora).
- Twój VPS OVH (na który teraz celuje domena) zostaje wolny na cięższe,
  dynamiczne rzeczy — strona-wizytówka go nie potrzebuje.

Alternatywa, jeśli wolisz mieć wszystko u siebie: postawimy to na Twoim VPS
(nginx + Let's Encrypt + skrypt wdrożeniowy). Działa, ale to Ty utrzymujesz
serwer. Dla samej strony o Tobie Cloudflare jest wygodniejsze na lata.

---

## 7. Czy publiczne repo to problem? (krótka odpowiedź: nie)

Publiczne repo jest w porządku i ma zalety (przy okazji samo w sobie jest
„projektem" w Twoim portfolio — pokazuje warsztat). Jedyna zasada:
**żadnych sekretów w repo** — hasła, klucze API, prywatne dane. Przy zwykłej
stronie-wizytówce i tak nic takiego nie ma; formularz kontaktowy (jeśli
będzie) rozwiążemy tak, żeby nie wystawiać żadnych kluczy. Zadbam o to
z automatu.

---

## 8. Co robię po Twojej akceptacji

1. Zakładam repo i szkielet projektu Astro.
2. Buduję motyw „Cichy gabinet" (kolory, typografia, tryb ciemny/jasny).
3. Stawiam stronę główną + cztery podstrony z tekstami zastępczymi.
4. Wdrażam PL + EN.
5. Podpinam Cloudflare Pages (albo VPS — jak zdecydujesz), uruchamiam na żywo.
6. Robię audyt dostępności i poprawki.
7. Uzupełniamy prawdziwą treścią — Twoje teksty, projekty, pasje.

---

## 9. Pytania do Ciebie (odpowiedz skrótowo)

1. **Kolor akcentu:** ciepły bursztyn (proponowany) / szmaragdowa zieleń /
   terakota (ceglasty) / coś innego / „wybierz sam"?
2. **Motyw domyślny:** ciemny (proponowany) czy jasny? (Drugi i tak zrobię
   jako przełącznik.)
3. **Struktura podstron:** „Jeden nurt" (O mnie / Czym się zajmuję /
   Kontakt) — pasuje, czy chcesz zmienić nazwy sekcji lub coś dodać/ująć?
4. **Języki:** PL + EN (proponowane) czy na razie tylko PL?
5. **Hosting:** Cloudflare Pages (proponowany) czy VPS OVH?
6. **Treść na start:** budujemy szkielet z tekstami zastępczymi, czy masz
   już gdzieś gotowe teksty o sobie / listę projektów, które mam wciągnąć?

Jak odpowiesz (choćby „bursztyn, ciemny, struktura ok, PL+EN, Cloudflare,
szkielet") — od razu ruszam.
