# Juleoverraskinga til Line 🎄

Ein animert digital presentasjon av julegåva: overnatting og middag på Isbolaget, Donsö!

## Om prosjektet

Dette er ein interaktiv nettside som gradvis avslører julegåva gjennom 7 animerte scener:

1. **Velkomst** - Ei innleiing til gåva
2. **Scene 1** - Hint om skjærgården
3. **Scene 2** - Hint om Donsö
4. **Scene 3** - Hint om Isbolaget
5. **Scene 4** - Avslører rommet (Superior dobbelrom)
6. **Scene 5** - Avslører middagen
7. **Scene 6** - Full avsløring med alle detaljer

## Funksjonar

- ✨ Smidige animasjonar og overganger
- 🎨 Vakker gradient-design med julefarge
- ❄️ Fallande snøfnugg for juleeffekt
- 📱 Fungerer på både mobil og desktop
- ⌨️ Tastaturnavigasjon (piltastar, mellomrom, Enter)
- 👆 Sveipestøtte på mobil
- 📊 Framgangsindikator med prikkar

## Tastatursnarvegar

- **Pil høgre / Mellomrom / Enter**: Neste scene
- **Pil venstre**: Førre scene
- **Esc / Home**: Start på nytt

## Bilder

For å leggje til bilder:

1. Gå til [Isbolaget sin nettside](https://isbolaget.com)
2. Last ned relevante bilder (sjå `images/README.md` for detaljar)
3. Legg bileta i `images/`-mappa med riktige filnamn

### Nødvendige bilder:
- `archipelago.jpg` - Skjærgården
- `donso-harbor.jpg` - Donsö hamn
- `isbolaget-exterior.jpg` - Isbolaget bygningen
- `superior-room.jpg` - Superior dobbelrom
- `restaurant.jpg` - Restaurant/mat
- `gallery-1.jpg`, `gallery-2.jpg`, `gallery-3.jpg` - Galleribilder

## GitHub Pages

Nettsida er konfigurert for å publiserast på GitHub Pages.

### Publisering:

1. Commit og push koden til GitHub
2. Gå til repository Settings → Pages
3. Vel "Deploy from a branch"
4. Vel `main` branch og `/root` mappe
5. Klikk Save

Nettsida vil vere tilgjengeleg på: `https://[ditt-brukarnamn].github.io/line-Isbolaget-2025/`

## Teknologi

- **HTML5** - Struktur
- **CSS3** - Styling og animasjonar
- **JavaScript** - Interaktivitet og navigasjon
- **Responsive Design** - Fungerer på alle einingar

## Tilpassing

Du kan enkelt tilpasse:

- **Fargar**: Endre gradient-fargane i `style.css`
- **Animasjonsfart**: Juster `animation-duration` og `transition` verdiar
- **Tekst**: Rediger innhaldet i `index.html`
- **Snøfnugg**: Juster mengde i `script.js` (`snowflakeCount`)

## Lokal testing

1. Opne `index.html` i nettlesaren din
2. Eller bruk ein lokal server:
   ```bash
   python -m http.server 8000
   ```
   Deretter gå til `http://localhost:8000`

## Lisens

Dette er ein personleg julegåve-presentasjon. God jul! 🎄❤️

---

**Informasjon om Isbolaget:**
- [Isbolaget nettside](https://isbolaget.com)
- [Booking.com](https://www.booking.com/hotel/se/isbolaget-ab.html)
- Adresse: Donsö hamnväg 45, Donsö, Göteborg
