---
title: "Die Schnitzeljagd"
isDraft: false
publishedAt: 2026-05-08
layout: ../layouts/DefaultLayout.astro
---

## Schritt 1

Ihr starten vor dem Eisladen. Sucht das nächstgelegene Hotel. Wie heißt es?

Schreibt den Namen auf. Für die Lösung braucht Ihr den Buchstaben, der am häufigsten vorkommt.

Von hier aus geht ihr die Straße bergauf.

## Schritt 2

Ihr kommt an ein Haus mit EINER ganz besonderen Lampe. In dem Haus arbeiten drei Leute in sehr ähnlichen Berufen. Zwei haben genau den selben Beruf, aber einer macht etwas anderes. Wie lautet seine Berufsbezeichnung?

Notiert die Antwort. Für die Lösung braucht Ihr den Buchstaben in der Mitte.

Es geht weiter bergauf

## Schritt 3

Nachdem Ihr die Straße überquert habt und weitergeht, kommt Ihr an einen Laden, auf dessen Schild ein zerquetschte Gemüse zu sehen ist. Aus welchem Land kommen ursprünglich die leckeren Sachen, die dieser Laden verkauft?

Notiert die Antwort. Für die Lösung braucht Ihr den Buchstaben ersten und den letzten Buchstaben.

Ihr geht weiter auf der Straße bergauf.

## Schritt vier

Wenn ihr weitergeht, seht ihr einen Laden, der auf seinem Schild mit einem Gebäck wirkt, das besonders gut mit Butter schmeckt. Bitte findet heraus, in welchem Jahr das Nebenhaus erbaut wurde.

Aus dem Zahl errechnet Ihr die Quersumme (also alle Ziffern addieren). Notiert das Ergebnis.

Ihr geht weiter bergauf

## Schritt 5

Ihr kommt an einen Park. Hier spielt Ihr erst einmal eine Runde verstecken.

Wenn Ihr mit der Jagd weitermachen wollt, dann sucht ihr hier ein paar Tieren, die immer hier sind. Insgesamt sind es sechs, aber es sind drei verschiedene Arten. Zwei Arten gab es schon vor einigen Millionen Jahren und haben sich seitdem kaum weiterentwickelt. Wie heißt die Tierart, die sich als letztes entwickelt hat?

Notiert die Antwort. Für die Lösung braucht Ihr die ersten drei Buchstaben.

## Schritt 6

Verlasst wieder den Park aus dem Eingang aus dem gekommen seid, und geht über den Zebrastreifen. Jetzt geht Ihr noch auf den Grünstreifen in der Mitte der Straße, sucht Euch eine Bank und löst das Rätsel.

Ihr müsst die richtige Kombination von Buchstaben und Zahlen in das Textfeld eingeben. Wenn Ihr richtig liegt, könnt Ihr dann den Knopf drücken und gelangt zum nächsten Teil der Jagd.

Achja, alle Buchstaben bitte kleinschreiben.

<div style="margin-top: 2rem; display: flex; gap: 1rem; align-items: center;">
  <input
    id="code-input"
    type="text"
    placeholder="Code eingeben"
    style="padding: 0.5rem 1rem; font-size: 1rem; border: 2px solid #ccc; border-radius: 4px;"
  />
  <button
    id="weiter-btn"
    disabled
    onclick="window.location.href='/die-loesung'"
    style="padding: 0.5rem 1.5rem; font-size: 1rem; border: none; border-radius: 4px; cursor: pointer; background-color: rgb(255 85 11); color: white; opacity: 0.5; text-decoration: line-through;"
  >
    Weiter
  </button>
</div>

<script>
  const input = document.getElementById('code-input');
  const btn = document.getElementById('weiter-btn');
  input.addEventListener('input', () => {
    const correct = input.value === 'itin13ele';
    btn.disabled = !correct;
    btn.style.opacity = correct ? '1' : '0.5';
    btn.style.textDecoration = correct ? 'none' : 'line-through';
  });
</script>
