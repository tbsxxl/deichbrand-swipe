# Deichbrand Swipe

Ein kleines Frontend-Experiment, mit dem man Bands des Deichbrand Festivals durchs
Swipen markieren kann. Rechts bedeutet "will ich sehen", links "interessiert mich nicht".
Die Auswahl wird lokal im Browser gespeichert und kann als Favoritenliste angezeigt
werden.

## Dateien

- `index.html` – Grundgerüst der Seite
- `style.css` – Einfaches Styling
- `app.js` – Logik zum Durchswipen der Bands und Speichern der Favoriten
- `bands.json` – Beispieldaten für Bands

## Nutzung

Einfach die Dateien zusammen in einem Webserver oder lokal im Browser öffnen. Die Seite
lädt die Banddaten aus `bands.json` und zeigt jeweils eine Karte an. Mit den beiden
Buttons kann man die Band mögen oder ablehnen. Über den Button *Zeige meine Favoriten*
wird die Liste der gelikten Bands eingeblendet.

Dies ist nur ein einfaches Demo-Projekt und noch kein vollwertiges Festival-Tool.
