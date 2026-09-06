#!/usr/bin/env python3
"""Brama dostępności na WYRENDEROWANYM katalogu dist/.

Sprawdza to, co realnie dostaje czytnik ekranu, a nie to, co jest w danych
źródłowych. Uruchamiać po `npm run build`:

    python3 scripts/test_a11y_dist.py

Kod wyjścia 0 = czysto, 1 = są naruszenia.

Każda reguła ma parę kontrolną: przypadek, który MUSI zostać złapany, oraz
przypadek poprawny, który NIE MOŻE być zgłoszony. Bez tego „zielono" znaczyłoby
tylko tyle, że test niczego nie mierzy.
"""
from __future__ import annotations

import re
import sys
import unicodedata
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DIST = ROOT / "dist"


def normalizuj(tekst: str) -> str:
    tekst = tekst.replace("\u00a0", " ").replace("&nbsp;", " ")
    tekst = unicodedata.normalize("NFC", tekst).lower()
    tekst = re.sub(r"[^\w\s]", " ", tekst)
    return re.sub(r"\s+", " ", tekst).strip()


def widoczny_tekst_wnetrza(html: str) -> str:
    return re.sub(r"<[^>]+>", " ", html)


def zawiera_cale_slowa(widoczny: str, dostepna: str) -> bool:
    """WCAG 2.5.3 Label in Name.

    Nazwa dostępna musi zawierać widoczny tekst jako ciągłą sekwencję CAŁYCH
    słów. Sam podciąg znakowy nie wystarcza: „Android" siedzi wewnątrz
    „Androida", ale to inna forma wyrazu i silnik walidatora zgłasza błąd.
    Dokładnie na tym poślizgnęła się pierwsza wersja tej bramy.
    """
    slowa_widoczne = normalizuj(widoczny).split()
    slowa_dostepne = normalizuj(dostepna).split()
    if not slowa_widoczne:
        return True
    okno = len(slowa_widoczne)
    return any(
        slowa_dostepne[i : i + okno] == slowa_widoczne
        for i in range(len(slowa_dostepne) - okno + 1)
    )


def sprawdz_label_in_name(html: str) -> list[tuple[str, str]]:
    naruszenia = []
    for dopasowanie in re.finditer(
        r'<a\b[^>]*aria-label="([^"]*)"[^>]*>(.*?)</a>', html, re.S
    ):
        dostepna = dopasowanie.group(1)
        widoczny = widoczny_tekst_wnetrza(dopasowanie.group(2))
        if not zawiera_cale_slowa(widoczny, dostepna):
            naruszenia.append((widoczny.strip(), dostepna))
    return naruszenia


def sprawdz_akapit_jako_naglowek(html: str) -> list[str]:
    """WCAG 1.3.1: akapit stylizowany na nagłówek musi mieć zdjętą semantykę."""
    return [
        m.group(0)[:120]
        for m in re.finditer(
            r'<p class="hero-tagline"(?![^>]*role="presentation")[^>]*>', html
        )
    ]


def sprawdz_myslniki_wtracone(html: str) -> list[str]:
    """Preferencja redakcyjna: zero myślników wtrąconych w prozie.

    Tytuł karty przeglądarki ma myślnik z konwencji i jest poza <body>, więc
    sprawdzamy wyłącznie treść akapitów, list i nagłówków.
    """
    tresc = re.sub(r"<(script|style)\b.*?</\1>", " ", html, flags=re.S)
    znalezione = []
    for m in re.finditer(r"<(p|li|h[1-6])\b[^>]*>(.*?)</\1>", tresc, re.S):
        tekst = re.sub(r"<[^>]+>", "", m.group(2))
        if re.search(r"\S[ \u00a0]\u2014[ \u00a0]\S", tekst):
            znalezione.append(tekst.strip()[:100])
    return znalezione


def kontrola_waznosci() -> bool:
    """Test testu: reguły muszą oblewać złe przypadki i przepuszczać dobre."""
    zle_pary = [
        ('<a aria-label="Pobierz TyfloCentrum na Androida z Google Play"><span>Android</span></a>',
         "odmiana rozbija widoczne slowo"),
        ('<a aria-label="Pobierz najnowszy dodatek NVDA Apollo"><span>Pobierz dodatek</span></a>',
         "wtracone slowo w srodku"),
        ('<a aria-label="Open the W Desen studio website"><span>Open the site</span></a>',
         "nazwa wcina sie miedzy the i site"),
    ]
    dobre_pary = [
        ('<a aria-label="Android: pobierz TyfloCentrum z Google Play"><span>Android</span></a>',
         "widoczny tekst jako prefiks"),
        ('<a aria-label="Otworz serwis TyfloPodcast"><span>Otworz serwis</span></a>',
         "nazwa doklejona na koncu"),
    ]
    ok = True
    for html, opis in zle_pary:
        if not sprawdz_label_in_name(html):
            print(f"  KONTROLA WAZNOSCI PADLA: nie wykryto naruszenia ({opis})")
            ok = False
    for html, opis in dobre_pary:
        if sprawdz_label_in_name(html):
            print(f"  KONTROLA WAZNOSCI PADLA: falszywy alarm ({opis})")
            ok = False

    if not sprawdz_akapit_jako_naglowek('<p class="hero-tagline">X</p>'):
        print("  KONTROLA WAZNOSCI PADLA: nie wykryto akapitu bez role=presentation")
        ok = False
    if sprawdz_akapit_jako_naglowek('<p class="hero-tagline" role="presentation">X</p>'):
        print("  KONTROLA WAZNOSCI PADLA: falszywy alarm na poprawnym akapicie")
        ok = False

    if not sprawdz_myslniki_wtracone("<p>Zdanie \u2014 wtracenie w prozie.</p>"):
        print("  KONTROLA WAZNOSCI PADLA: nie wykryto myslnika wtraconego")
        ok = False
    if sprawdz_myslniki_wtracone("<p>Zakres stron 10\u201340 jest poprawny.</p>"):
        print("  KONTROLA WAZNOSCI PADLA: falszywy alarm na zakresie liczb")
        ok = False
    return ok


def main() -> int:
    if not DIST.is_dir():
        print("BRAK katalogu dist/ - najpierw uruchom `npm run build`")
        return 2

    print("Kontrola waznosci regul...")
    if not kontrola_waznosci():
        print("PRZERWANO: same reguly sa wadliwe, wynik na dist/ nic by nie znaczyl")
        return 2
    print("  reguly lapia zle przypadki i przepuszczaja dobre\n")

    strony = sorted(DIST.glob("**/*.html"))
    naruszenia = 0
    linkow = 0

    for strona in strony:
        html = strona.read_text(encoding="utf-8")
        nazwa = strona.relative_to(DIST)
        linkow += len(re.findall(r'<a\b[^>]*aria-label="', html))

        for widoczny, dostepna in sprawdz_label_in_name(html):
            print(f"[2.5.3] {nazwa}: widoczny {widoczny!r} nie miesci sie w {dostepna!r}")
            naruszenia += 1
        for element in sprawdz_akapit_jako_naglowek(html):
            print(f"[1.3.1] {nazwa}: akapit stylizowany na naglowek: {element}")
            naruszenia += 1
        for tekst in sprawdz_myslniki_wtracone(html):
            print(f"[styl]  {nazwa}: myslnik wtracony: {tekst}")
            naruszenia += 1

    print(f"Zbadano {len(strony)} stron, {linkow} linkow z nazwa dostepna.")
    print("WYNIK: czysto" if naruszenia == 0 else f"WYNIK: {naruszenia} naruszen")
    return 0 if naruszenia == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
