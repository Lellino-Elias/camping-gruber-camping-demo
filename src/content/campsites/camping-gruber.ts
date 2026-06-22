import type { CampsiteConfig } from "../types";

const IMG = "/campsites/camping-gruber";

const campingGruber: CampsiteConfig = {
  name: "Camping beim Gruber",
  shortName: "Gruber",
  slug: "camping-gruber",
  ort: "Spielberg",
  region: "Steiermark",
  brandKind: "Camping am Red Bull Ring",
  regionLong: "Murtal · Steiermark · Österreich",

  heroVariant: "center",

  claim: "Dein Basislager am Red Bull Ring",
  claimEmphasis: "am Red Bull Ring",
  emailDetail: "eure Lage nur zwei Kilometer vom Red Bull Ring",
  intro:
    "Nur rund zwei Kilometer vom Red Bull Ring entfernt: ein Hektar ebene Wiese für dein Zelt, deinen Wohnwagen oder dein Wohnmobil — beschildert, jederzeit befahrbar und mit Blick auf die Berge des Murtals.",

  logo: { src: `${IMG}/logo.png`, alt: "Camping beim Gruber Logo" },

  statement: {
    text: "Zwischen Bundesstraße und Bergpanorama stellst du dein Zelt mitten ins Renngeschehen — und doch eine Spur abseits vom großen Trubel.",
    emphasis: "mitten ins Renngeschehen",
  },

  pillars: [
    {
      title: "Mittendrin — und doch abseits",
      text: "Nur durch die Bundesstraße vom Trubel getrennt: Du bist mitten im Eventgeschehen und kannst trotzdem jederzeit kommen und gehen.",
      image: { src: `${IMG}/pillar-lage.webp`, alt: "Das Red Bull Ring Wahrzeichen bei Spielberg — der ikonische Stier, zwei Kilometer vom Camping beim Gruber entfernt" },
    },
    {
      title: "Ebenes Wiesengelände",
      text: "Ein Hektar ebene Wiese — für Zelt, Wohnwagen oder Wohnmobil. Dein Fahrzeug parkst du direkt neben dem Stellplatz.",
      image: { src: `${IMG}/pillar-wiese.webp`, alt: "Zelte und Wohnmobile auf der Eventwiese beim Camping Gruber, dahinter Schloss Spielberg und die Berge des Murtals" },
    },
    {
      title: "Einfach zu finden",
      text: "Die Zufahrt ist direkt von der Bundesstraße beschildert — die Einfahrt liegt an der Triesterstraße, nach der Burg auf der linken Seite.",
      image: { src: `${IMG}/pillar-sign.webp`, alt: "Wegweiser „Camping Fam. Gruber“ an der Zufahrt zum Platz" },
    },
  ],

  usps: [
    "Gepflegte Sanitäranlagen",
    "Stromanschluss 230 V",
    "Red Bull Ring in 2 km",
    "Hunde auf Anfrage",
    "Einkauf in Gehweite",
    "Gastronomie gegenüber",
  ],

  trust: {
    heading: "Direkt am Ring — und trotzdem deine Ruhe",
    headingEmphasis: "deine Ruhe",
    intro:
      "Acht WC, acht Duschen mit Warm- und Kaltwasser, Stromanschluss am Platz und befestigte Wege fürs Wohnmobil — dazu Einkauf und zwei Gasthäuser gleich gegenüber. Du bist mittendrin und kommst trotzdem jederzeit raus.",
  },

  awards: [],

  hero: {
    aerial: { src: `${IMG}/hero.webp`, alt: "Camping beim Gruber: Stellplätze auf der Wiese mit Blick auf die Berge des Murtals" },
  },

  camping: {
    heading: "Dein Stellplatz beim Gruber",
    intro:
      "Ein Hektar ebenes Wiesengelände, befestigte Zufahrt und Platz auch für sehr große Wohnmobile — dazu gepflegte Sanitäranlagen mit Warm- und Kaltwasser. Strom gibt es am Platz.",
    features: [
      {
        title: "Befestigte Zufahrt",
        text: "Die Zufahrt erfolgt direkt von der Bundesstraße und ist gut beschildert — die festen Wege machen auch großen Gespannen die Anfahrt leicht.",
        image: { src: `${IMG}/feature-zufahrt.webp`, alt: "Befestigte Zufahrt und Servicegebäude am Campingplatz Gruber" },
      },
      {
        title: "Platz für große Wohnmobile",
        text: "Das ebene Wiesengelände ist auch für sehr große Wohnmobile geeignet — dein Fahrzeug steht direkt neben Zelt oder Wohnwagen.",
        image: { src: `${IMG}/feature-wohnmobile.webp`, alt: "Wohnmobile auf dem ebenen Wiesengelände, dahinter das weite Murtal" },
      },
      {
        title: "Ein Hektar ebene Wiese",
        text: "Rund ein Hektar Wiese, eben und übersichtlich — genug Raum für Zelt, Wohnwagen und Wohnmobil, ohne dass es eng wird.",
        image: { src: `${IMG}/feature-wiese.webp`, alt: "Zelte und Wohnmobile auf der ebenen Wiese beim Gruber, dahinter Kirchturm und die Berge des Murtals" },
      },
    ],
  },

  anreise: {
    heading: "Von der S 36 direkt zu uns",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die S 36 (Murtal Schnellstraße), Abfahrt Zeltweg Ost Richtung Spielberg — von der Abfahrt sind es nur rund 1,1 km. Folge nicht dem Navi in die Dorfstraße: Die Einfahrt liegt an der Triesterstraße, nach der Burg auf der linken Seite.",
      },
      {
        title: "Zu Fuß & mit dem Rad zum Ring",
        text: "Bei Großveranstaltungen erreichst du den Red Bull Ring (ca. 2 km) bequem zu Fuß oder mit dem Rad über einen asphaltierten Weg — unabhängig vom Verkehrsleitsystem.",
      },
      {
        title: "Mit der Bahn",
        text: "Nächster Bahnhof ist Zeltweg, nur wenige Fahrminuten entfernt; der Flughafen Graz liegt rund eine Stunde mit dem Auto entfernt.",
      },
    ],
  },

  galerie: {
    heading: "Volle Wiese, große Wochenenden",
    headingEmphasis: "Volle Wiese",
    intro:
      "Formel 1, MotoGP, Airpower — wenn am Red Bull Ring die Motoren laufen, füllt sich die Wiese. Ein paar Eindrücke von Camping beim Gruber.",
    tag: "Geöffnet zu den Großevents",
    images: [
      { src: `${IMG}/gallery-1.webp`, alt: "Zelte und Wohnmobile auf der Wiese im Abendlicht, dahinter Bauernhof und Berge" },
      { src: `${IMG}/gallery-2.webp`, alt: "Eventcamping vor dem Schloss Spielberg in der Abendsonne" },
      { src: `${IMG}/gallery-3.webp`, alt: "Dicht belegte Wiese mit Zelten und Fahrzeugen, im Hintergrund Burg und Murtal" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz fürs Rennwochenende",
    headingEmphasis: "deinen Platz",
    intro:
      "Wähle Event und Stellplatzart — Familie Gruber bestätigt dir Verfügbarkeit und Anreise persönlich.",
    pricesArePlaceholder: false,
    priceNote:
      "Preise 2026 pro Nacht inkl. Strom; zusätzlich € 25 pro Person/Nacht inkl. € 2 Nächtigungsgebühr. Zahlung per Vorüberweisung oder bar bei Anreise — bitte bei der Anfrage bestätigen.",
    highlight: {
      title: "Unabhängige Zufahrt",
      text: "Zu- und Abfahrt sind jederzeit möglich — unabhängig vom Verkehrsleitsystem des Red Bull Rings.",
    },
    categories: [
      { id: "wohnmobil", label: "Wohnmobil / Wohnwagen", perNight: 25 },
      { id: "zelt", label: "PKW & Zelt", perNight: 20 },
    ],
  },

  kontakt: {
    tel: "+43 (0) 664 1110487",
    telHref: "tel:+436641110487",
    mail: "info@camping-gruber.com",
    adresse: "Dorfstraße 7 · 8724 Spielberg · Steiermark",
    coords: { lat: 47.211128, lng: 14.763611 },
  },

  languages: ["DE"],

  nav: [
    { label: "Camping", href: "#camping", children: [
      { label: "Stellplätze", href: "#camping" },
      { label: "Ausstattung", href: "#camping" },
    ]},
    { label: "Eindrücke", href: "#galerie" },
    { label: "Anreise", href: "#anreise" },
    { label: "Preise", href: "#booking" },
  ],
};

export default campingGruber;
