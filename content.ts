/**
 * Bruins Schilderwerken — alleen geverifieerde feiten
 * (bruinsschilderwerken.nl, 12 nov 2026).
 * Geen oprichtingsjaar (wel «25 jaar ervaring»), geen KvK/btw/uren/social,
 * geen tweede telefoonnummer, geen sterren. Aanhef offertemail: Goedendag.
 */
export const content = {
  slug: "bruins-demo",

  company: {
    name: "Bruins Schilderwerken",
    shortName: "Bruins",
    tagline: "Vakmanschap uit Rijssen — 25 jaar ervaring",
    description:
      "Bruins Schilderwerken is een kleurrijk en persoonlijk familiebedrijf uit Rijssen. U kunt bij ons terecht voor binnen-, buiten- en onderhoudsschilderwerk, en voor al uw glas- en behangwerk.",
    logo: "/logo.png",
    logoWidth: 250,
    logoHeight: 100,
    city: "Rijssen",
  },

  colors: {
    primary: "#00AEEF",
    primaryForeground: "#ffffff",
    accent: "#EB008C",
    background: "#F6F4EF",
    foreground: "#102930",
    muted: "#EFECE6",
    inkt: "#102930",
    papier: "#F6F4EF",
    vlak: "#EFECE6",
    wit: "#FFFFFF",
    cyaan: "#00AEEF",
    cyaanTekst: "#0A6E8F",
    magenta: "#EB008C",
    magentaTekst: "#A40062",
    groen: "#62B040",
  },

  seo: {
    title: "Bruins Schilderwerken | Schilder, glas en behang in Rijssen",
    description:
      "Familiebedrijf uit Rijssen, 25 jaar ervaring. Binnen-, buiten- en onderhoudsschilderwerk, glaswerk (enkelglas tot HR++) en behangwerk. Bel 06-36 12 44 88.",
    lang: "nl",
  },

  nav: [
    {
      label: "Wat wij doen",
      href: "/wat-we-doen",
      children: [
        { label: "Schilderwerk", href: "/schilderwerk" },
        { label: "Glaswerk", href: "/glaswerk" },
        { label: "Behangwerk", href: "/behangwerk" },
        { label: "Spuitwerk", href: "/spuitwerk" },
      ],
    },
    { label: "Projecten", href: "/projecten" },
    { label: "Over ons", href: "/over-ons" },
    { label: "Contact", href: "/contact" },
  ],

  hero: {
    title: "Is uw woning toe aan een opfrisbeurt?",
    subtitle:
      "De schilders van Bruins Schilderwerken uit Rijssen staan klaar voor uw binnenschilderwerk, behangwerk of wandafwerking. Kies eens voor nieuwe kleuren, met als resultaat een opgefriste woonkamer, keuken of slaapkamer. Wij adviseren u graag over het gebruik van kleur en materialen.",
    primaryCta: { label: "Bel 06-36 12 44 88", href: "tel:+31636124488" },
    secondaryCta: { label: "Offerte", href: "/offerte" },
    image: "/img/bussen.png",
    highlights: ["25 jaar ervaring", "Familiebedrijf uit Rijssen", "Binnen, buiten, glas en behang"],
  },

  facts: ["Rijssen", "25 jaar ervaring", "Binnen, buiten en onderhoud", "Glas en behang"],

  advice: "Wij adviseren u graag over het gebruik van kleur en materialen.",
  glassTypes: ["Enkelglas", "Meervoudig isolatieglas", "Figuurglas", "Glas in lood", "HR++"],
  onderhoud:
    "U kunt bij ons terecht voor binnen-, buiten- en onderhoudsschilderwerk. En uiteraard ook voor al uw glas- en behangwerk.",
  schilderHook: "Bij nieuwbouw, onderhoud of renovatie bent u bij ons aan het juiste adres.",
  behangHook: "Uw kamer voorzien van een nieuw behang? Wij helpen u graag.",
  featured: [
    "keimwerk",
    "monumentale-boerderij",
    "muurverf-spuitwerk",
    "250m2-fotobehang-plakken",
  ],

  layers: [
    { nr: "01", label: "Ondergrond" },
    { nr: "02", label: "Grondlaag" },
    { nr: "03", label: "Tussenlaag" },
    { nr: "04", label: "Aflak" },
  ],

  services: {
    title: "Wat wij doen",
    intro:
      "Schilderwerk, glaswerk, behangwerk en spuitwerk — voor particulieren, bedrijven en gemeentelijke instellingen.",
    items: [
      {
        slug: "schilderwerk",
        title: "Schilderwerk",
        href: "/schilderwerk",
        icon: "",
        short:
          "Binnen, buiten en onderhoud, voor particulieren, bedrijven en gemeentelijke instellingen.",
        text: "Wij beschikken over gedegen vakmanschap en leveren kwalitatief hoogstaand schilderwerk aan particulieren, bedrijven en gemeentelijke instellingen. Bij nieuwbouw, onderhoud of renovatie bent u bij ons aan het juiste adres. U kunt bij ons terecht voor binnen-, buiten- en onderhoudsschilderwerk.",
      },
      {
        slug: "glaswerk",
        title: "Glaswerk",
        href: "/glaswerk",
        icon: "",
        short: "Van enkelglas tot en met HR++, ook figuurglas en glas in lood.",
        text: "Rekening houdend met uw wensen komen wij met een passende en zo voordelig mogelijke oplossing voor uw glaswerk. Wij leveren alle glassoorten van normaal enkelglas tot en met het best isolerende HR++. Onder beglazing verstaan wij het plaatsen van meervoudig isolatieglas, enkelglas, figuurglas en glas in lood.",
      },
      {
        slug: "behangwerk",
        title: "Behangwerk",
        href: "/behangwerk",
        icon: "",
        short: "Diverse soorten behang, ook glasweefsel (glasvlies).",
        text: "Met het plakken van diverse soorten behang hebben wij ook ruime ervaring. Daarnaast kunnen wij overweg met glasweefsel (ook wel glasvlies genoemd).",
      },
      {
        slug: "spuitwerk",
        title: "Spuitwerk",
        href: "/spuitwerk",
        icon: "",
        short: "Wanden en plafonds egaler en strakker dan met de roller.",
        text: "Het opspuiten van muurverf geeft een mooier, egaler resultaat dan rollen. Het rollen laat altijd een structuur na, terwijl u daar bij opspuiten geen last van hebt. Juist wanneer wanden en plafonds mooi glad zijn gestuct, zou het zonde zijn als dit teniet wordt gedaan door de structuur van een roller. Door de muurverf te spuiten krijgt u gladde, egale en strakke wanden en plafonds. Bovendien neemt het minder tijd in beslag.",
      },
    ],
  },

  about: {
    title: "Over ons",
    kicker: "Bruins Schilderwerken, 25 jaar ervaring!",
    intro: "Bruins Schilderwerken, vakmanschap en kwalitatief hoogstaand werk.",
    text: [
      "Maak kennis met ons bedrijf, een kleurrijk en persoonlijk familiebedrijf, waar een flexibel team van gespecialiseerde deskundigen voor u klaar staat. Kwaliteit leveren is ons doel.",
      "Wij zijn thuis in de afwerking en het onderhoud van glas- en schilderwerken, waarbij wij gebruik maken van de beste materialen en gereedschappen, snel schakelen, persoonlijk contact houden, snel, op tijd en nauwkeurig werken.",
    ],
    regionTitle: "Vakmanschap uit het Oosten des lands",
    region:
      "Wij richten ons met onze werkzaamheden op heel Nederland en met name op de regio Overijssel, Twente en Salland. Uiteraard zijn schilderklussen in Gelderland, Drenthe, Groningen en Utrecht ook geen enkel probleem.",
    photo: "/img/gerrit-en-robert.jpg",
    photoAlt: "Gerrit en Robert Bruins bij hun bussen.",
    photoCaption: "Gerrit en Robert Bruins bij hun bussen.",
    vans: "/img/bussen.png",
    vansAlt: "De werkbussen van Bruins Schilderwerken.",
    image: "/img/gerrit-en-robert.jpg",
    stats: [] as { value: string; label: string }[],
  },

  reviews: {
    title: "Klanten vertellen",
    items: [
      {
        name: "Familie Jansen uit Rijssen",
        text: "Bruins Schilderwerken levert echt vakwerk.",
        rating: 0,
      },
      {
        name: "Hans van der Stouw",
        text: "Dankzij Bruins Schilderwerken zit mijn huis prachtig in de verf.",
        rating: 0,
      },
      {
        name: "Henry Averesch",
        text: "Lekker strak in de lak!",
        rating: 0,
      },
      {
        name: "Tineke Laanstra",
        text: "Super netjes, vakmensen en afspraak is afspraak.",
        rating: 0,
      },
      {
        name: "Mevrouw Fuit",
        text: "Onze woning ziet er weer fris uit! Dank je wel!",
        rating: 0,
      },
    ],
  },

  projects: [
    {
      slug: "keimwerk",
      title: "Keimwerk",
      place: "Aalten",
      date: "29 augustus",
      client: "Westerhof Bouw",
      work: ["Schilderwerk"],
      cover: "/img/projecten/keimwerk/117.jpg",
      photos: [
        "/img/projecten/keimwerk/117.jpg",
        "/img/projecten/keimwerk/118.JPG",
        "/img/projecten/keimwerk/119.JPG",
      ],
      summary:
        "Nieuwbouwwoning van Westerhof Bouw, voorzien van keimwerk — de woning kreeg een compleet andere uitstraling.",
      text: [
        "Deze nieuwbouwwoning van Westerhof Bouw hebben wij voorzien van prachtig keimwerk.",
        "De woning kreeg met het gebruik van dit product een compleet andere uitstraling.",
      ],
    },
    {
      slug: "monumentale-boerderij",
      title: "Monumentale boerderij",
      place: "Hengelo",
      date: "5 oktober",
      client: "Fotowand.nl",
      work: ["Schilderwerk", "Glaswerk"],
      cover: "/img/projecten/monumentale-boerderij/91.jpg",
      photos: [
        "/img/projecten/monumentale-boerderij/91.jpg",
        "/img/projecten/monumentale-boerderij/92.jpg",
      ],
      summary:
        "In opdracht van Fotowand.nl de plafonds voorzien van akoestische behangafwerking van Vitrulan, tussen de oude balken.",
      text: [
        "In opdracht van Fotowand.nl de plafonds voorzien van akoestische behangafwerking.",
        "Het materiaal van Vitrulan filtert 20% van de vervelende tonen uit de ruimte.",
        "Het materiaal is tussen de oude balken geplakt, zo ontstaat een mooi glad geheel en is het afgewerkt met muurverf.",
      ],
    },
    {
      slug: "250m2-fotobehang-plakken",
      title: "250m2 Fotobehang plakken",
      place: "Oosterhout",
      date: "16 oktober",
      client: "Fotowand.nl",
      work: ["Behangwerk"],
      cover: "/img/projecten/250m2-fotobehang-plakken/87.jpg",
      photos: [
        "/img/projecten/250m2-fotobehang-plakken/87.jpg",
        "/img/projecten/250m2-fotobehang-plakken/88.jpg",
        "/img/projecten/250m2-fotobehang-plakken/89.jpg",
        "/img/projecten/250m2-fotobehang-plakken/90.jpg",
      ],
      summary:
        "In opdracht van onze partner Fotowand.nl 250m2 fotobehang plakken in Oosterhout.",
      text: [
        "In opdracht van onze partner Fotowand.nl 250m2 fotobehang plakken in Oosterhout.",
      ],
    },
    {
      slug: "muurverf-spuitwerk",
      title: "Muurverf spuitwerk",
      place: "Rijssen",
      date: "20 augustus",
      client: "Particulier",
      work: ["Schilderwerk"],
      cover: "/img/projecten/muurverf-spuitwerk/63.JPG",
      photos: [
        "/img/projecten/muurverf-spuitwerk/63.JPG",
        "/img/projecten/muurverf-spuitwerk/64.JPG",
        "/img/projecten/muurverf-spuitwerk/65.JPG",
      ],
      video: "https://www.youtube.com/watch?v=RaQCizRlet4",
      summary:
        "Muurverf gespoten in plaats van gerold: een gladder, egaler resultaat op wanden en plafonds.",
      text: [
        "Voor een klant van ons hebben wij gebruik gemaakt van spuitwerk.",
        "Het opspuiten van muurverf geeft een mooier resultaat dan met de verfroller rollen. Het rollen laat altijd een structuur na, terwijl u daar bij opspuiten geen last van hebt. Juist wanneer wanden en plafonds mooi glad zijn gestuct, zou het zonde zijn als dit teniet wordt gedaan door de nadelen van het rollen. Door de muurverf te spuiten krijgt u gladde, egale en strakke wanden en plafonds. Bovendien neemt het minder tijd in beslag.",
      ],
    },
    {
      slug: "opfrisbeurt-nodig-voor-uw-kantoor",
      title: "Opfrisbeurt nodig voor uw kantoor?",
      place: "Enschede",
      date: "7 april",
      client: "Akor Rijssen",
      work: ["Schilderwerk"],
      cover: "/img/projecten/opfrisbeurt-nodig-voor-uw-kantoor/123.JPG",
      photos: [
        "/img/projecten/opfrisbeurt-nodig-voor-uw-kantoor/123.JPG",
        "/img/projecten/opfrisbeurt-nodig-voor-uw-kantoor/124.JPG",
        "/img/projecten/opfrisbeurt-nodig-voor-uw-kantoor/125.JPG",
      ],
      summary:
        "Kantoor van Akor Rijssen in Enschede: muren, kabelgoten en wanden gespoten voor een strak resultaat.",
      text: [
        "Is uw kantoorruimte toe aan een opknapbeurt? En zijn de muren, kabelgoten en wanden vies en geel geworden?",
        "Wij spuiten dit alles voor u voor een strak en net resultaat.",
      ],
    },
    {
      slug: "schilderen-woning-hendrik-jan-van-opstalstraat",
      title: "Schilderen woning Hendrik-Jan van Opstalstraat",
      place: "Rijssen",
      date: "16 november",
      client: "",
      work: ["Schilderwerk"],
      cover: "/img/projecten/schilderen-woning-hendrik-jan-van-opstalstraat/82.jpg",
      photos: [
        "/img/projecten/schilderen-woning-hendrik-jan-van-opstalstraat/82.jpg",
        "/img/projecten/schilderen-woning-hendrik-jan-van-opstalstraat/83.jpg",
        "/img/projecten/schilderen-woning-hendrik-jan-van-opstalstraat/84.jpg",
      ],
      summary: "Deze mooie woning geheel aan de buitenkant voorzien van een nieuwe laklaag.",
      text: [
        "Deze mooie woning geheel aan de buitenkant voorzien van een nieuwe laklaag.",
      ],
    },
    {
      slug: "tuinhuis-optimaal-beschermen-tegen-het-nederlandse-weer",
      title: "Tuinhuis optimaal beschermen tegen het Nederlandse weer.",
      place: "Rijssen",
      date: "5 oktober",
      client: "Particulier",
      work: ["Schilderwerk"],
      cover: "/img/projecten/tuinhuis-optimaal-beschermen-tegen-het-nederlandse-weer/103.JPG",
      photos: [
        "/img/projecten/tuinhuis-optimaal-beschermen-tegen-het-nederlandse-weer/103.JPG",
        "/img/projecten/tuinhuis-optimaal-beschermen-tegen-het-nederlandse-weer/105.JPG",
      ],
      summary: "Buiten houtwerk van een tuinhuis beschermd met olie, zodat de houtnerf zichtbaar blijft.",
      text: [
        "Het is weer tijd om het buiten houtwerk te beschermen.",
        "Bij dit project hebben wij gekozen om het tuinhout te beschermen met een olie. Hierdoor blijft de houtnerf zichtbaar.",
      ],
    },
    {
      slug: "hottube-in-olie",
      title: "Hottube in olie",
      place: "Rijssen",
      date: "16 december",
      client: "",
      work: ["Schilderwerk", "Glaswerk", "Behangwerk"],
      cover: "/img/projecten/hottube-in-olie/93.jpg",
      photos: [
        "/img/projecten/hottube-in-olie/93.jpg",
        "/img/projecten/hottube-in-olie/94.jpg",
      ],
      summary: "Verweerde hottube in exterior olie gezet, met UV-bescherming en een matte, natuurlijke uitstraling.",
      text: [
        "Verweerde hottube in de exterior olie gezet. Deze olie wordt toegepast bij het onderhouden van nieuwe en eerder met olie behandelde houten onderdelen buiten. Terrassen, tuinmeubelen, gevelbekleding, etc.",
        "Watergedragen, sneldrogend, geeft een slijtvast mat oppervlak met natuurlijke uitstraling, met UV-bescherming, voorkomt aanslag en schimmelvorming, geschikt voor terrassen, tuinmeubelen, gevelbekledingen en schuttingen.",
      ],
    },
    {
      slug: "behandelen-aluminium-kozijnen",
      title: "Behandelen aluminium kozijnen",
      place: "Rijssen",
      date: "16 december",
      client: "Vaste opdrachtgever",
      work: ["Schilderwerk"],
      cover: "/img/projecten/behandelen-aluminium-kozijnen/95.jpg",
      photos: [
        "/img/projecten/behandelen-aluminium-kozijnen/95.jpg",
        "/img/projecten/behandelen-aluminium-kozijnen/96.jpg",
        "/img/projecten/behandelen-aluminium-kozijnen/97.jpg",
      ],
      summary:
        "Transparante, semi-permanente watergedragen acrylaatcoating op aluminium kozijnen, bescherming van ongeveer 5 jaar.",
      text: [
        "Voor een vaste opdrachtgever een transparante, semi-permanente watergedragen en reversibele coating op basis van acrylaat aangebracht.",
        "Deze laag biedt een bescherming van ongeveer 5 jaar.",
      ],
    },
  ],

  contact: {
    title: "Contact",
    text: "Bel of mail ons, of vraag een offerte aan.",
    mailSubject: "Bericht via website",
    phoneDisplay: "06-36 12 44 88",
    phoneTel: "+31636124488",
    email: "info@bruinsschilderwerken.nl",
    address: "Kryptonstraat 39b-09",
    postalCode: "7463 PB",
    city: "Rijssen",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Kryptonstraat+39b-09%2C+7463+PB+Rijssen",
    phone: "06-36 12 44 88",
    openingHours: [] as string[],
    whatsapp: "",
    cta: { label: "Bel 06-36 12 44 88", href: "tel:+31636124488" },
    footerPlaces:
      "Rijssen, Holten, Nijverdal, Markelo, Hellendoorn, Enter, Almelo, Borne, Goor, Deventer, Apeldoorn, Zwolle, Enschede, Hengelo — Overijssel, Twente, Salland, Gelderland, Drenthe, Groningen, Utrecht.",
  },

  offerte: {
    title: "Offerte aanvragen",
    intro:
      "Dit is een concept; uw eigen mailprogramma opent met het bericht. Er wordt niets automatisch verstuurd.",
    subject: "Offerteaanvraag via website",
    greeting: "Goedendag,",
    workOptions: [
      "Binnenschilderwerk",
      "Buitenschilderwerk",
      "Onderhoud",
      "Glaswerk",
      "Behangwerk",
      "Spuitwerk",
      "Anders",
    ],
  },

  privacy: {
    title: "Privacy",
    paragraphs: [
      "Bruins Schilderwerken, Kryptonstraat 39b-09, 7463 PB Rijssen. E-mail: info@bruinsschilderwerken.nl.",
      "Deze website is een concept van Sleads. Het is een demonstratie en geen live administratie van het schildersbedrijf.",
      "Het concept gebruikt alleen een cookieloos meetscript van Sleads. Dat script plaatst geen trackingcookies. Formulieren op deze site worden niet opgeslagen: uw mailprogramma opent met het bericht, en er wordt niets automatisch verstuurd.",
      "Een video over spuitwerk verwijst naar YouTube en speelt hier niet vanzelf af.",
      "Voor vragen over deze pagina mailt u naar info@bruinsschilderwerken.nl.",
    ],
  },

  footer: {
    kvk: "",
    socials: [] as { label: string; href: string }[],
  },
};

export function getProject(slug: string) {
  return content.projects.find((project) => project.slug === slug);
}

export type Content = typeof content;
