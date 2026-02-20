export type TicketTier = {
  name: string;
  price: number;
  perks: string;
};

export type Concert = {
  slug: string;
  artist: string;
  venue: string;
  venueCity: string;
  venueCapacity: number;
  venueDescription: string;
  date: Date;
  doorsOpen: string;
  price: number;
  seatsRemaining: number;
  status: "on-sale" | "presale" | "sold-out";
  description: string;
  lineup: string[];
  ticketTiers: TicketTier[];
};

export function getConcerts(t: (s: string) => string): Concert[] {
  return [
    {
      slug: "aurora-strings-quartet",
      artist: t("Aurora Strings Quartet"),
      venue: t("Royal Concert Hall"),
      venueCity: t("London, United Kingdom"),
      venueCapacity: 2500,
      venueDescription: t(
        "One of London's premier classical music venues, the Royal Concert Hall features world-class acoustics and elegant Victorian architecture. Located in the heart of the South Bank cultural district."
      ),
      date: new Date("2026-04-15T20:00:00"),
      doorsOpen: "19:00",
      price: 75,
      seatsRemaining: 342,
      status: "on-sale",
      description: t(
        "Experience the Aurora Strings Quartet's spellbinding performance featuring works by Dvořák, Shostakovich, and a world premiere by contemporary composer Elina Mäkelä. Known for their emotionally rich interpretations and flawless ensemble work, this is an evening of chamber music at its finest."
      ),
      lineup: [
        t("Aurora Strings Quartet"),
        t("Elina Mäkelä — Guest Composer"),
      ],
      ticketTiers: [
        {
          name: t("Standard"),
          price: 75,
          perks: t("Balcony seating"),
        },
        {
          name: t("Premium"),
          price: 120,
          perks: t("Stalls seating with program booklet"),
        },
        {
          name: t("VIP"),
          price: 200,
          perks: t("Front row seating, meet-and-greet, signed program"),
        },
      ],
    },
    {
      slug: "neon-pulse",
      artist: t("Neon Pulse"),
      venue: t("Madison Square Garden"),
      venueCity: t("New York, United States"),
      venueCapacity: 20000,
      venueDescription: t(
        "The world's most famous arena, Madison Square Garden has hosted legendary performances for over a century. Located in Midtown Manhattan, it remains the gold standard for live entertainment."
      ),
      date: new Date("2026-05-22T19:30:00"),
      doorsOpen: "18:00",
      price: 120,
      seatsRemaining: 58,
      status: "on-sale",
      description: t(
        "Neon Pulse brings their electrifying synthwave show to New York for one night only. Expect a sensory overload of pulsing lights, thunderous bass, and their signature blend of retro-futuristic soundscapes. Their 'Chromatic Dreams' world tour has sold out arenas across three continents."
      ),
      lineup: [
        t("Neon Pulse"),
        t("Synthia Vox — Opening Act"),
        t("DJ Parallax — Pre-show Set"),
      ],
      ticketTiers: [
        {
          name: t("General Admission"),
          price: 120,
          perks: t("Standing floor access"),
        },
        {
          name: t("Reserved Seating"),
          price: 180,
          perks: t("Assigned seat in lower bowl"),
        },
        {
          name: t("VIP Experience"),
          price: 350,
          perks: t("Backstage tour, early entry, exclusive merchandise"),
        },
      ],
    },
    {
      slug: "the-velvet-echoes",
      artist: t("The Velvet Echoes"),
      venue: t("Olympia Hall"),
      venueCity: t("Paris, France"),
      venueCapacity: 2800,
      venueDescription: t(
        "A legendary Parisian music hall dating back to 1893, Olympia Hall has hosted the greatest names in music from Édith Piaf to The Beatles. Its intimate atmosphere and rich history make every performance unforgettable."
      ),
      date: new Date("2026-06-10T21:00:00"),
      doorsOpen: "19:30",
      price: 95,
      seatsRemaining: 1,
      status: "presale",
      description: t(
        "The Velvet Echoes return to Paris with their hauntingly beautiful indie folk sound. This intimate acoustic evening will feature songs from their critically acclaimed album 'Whispered Lanterns' alongside new unreleased material. An evening of storytelling through music."
      ),
      lineup: [
        t("The Velvet Echoes"),
        t("Lune Dorée — Support Act"),
      ],
      ticketTiers: [
        {
          name: t("Standard"),
          price: 95,
          perks: t("General seating"),
        },
        {
          name: t("Gold"),
          price: 160,
          perks: t("Priority seating, complimentary drink"),
        },
      ],
    },
    {
      slug: "crimson-tide-orchestra",
      artist: t("Crimson Tide Orchestra"),
      venue: t("Sydney Opera House"),
      venueCity: t("Sydney, Australia"),
      venueCapacity: 5738,
      venueDescription: t(
        "An architectural masterpiece and UNESCO World Heritage Site, the Sydney Opera House is one of the most iconic performing arts venues on Earth. Its Concert Hall offers superb acoustics beneath distinctive sail-shaped roofs."
      ),
      date: new Date("2026-07-04T18:00:00"),
      doorsOpen: "16:30",
      price: 150,
      seatsRemaining: 0,
      status: "sold-out",
      description: t(
        "The Crimson Tide Orchestra presents an epic evening of cinematic scores, performing iconic soundtracks from Hans Zimmer, John Williams, and Ennio Morricone with a full 80-piece orchestra. A must-attend for film and music lovers alike."
      ),
      lineup: [
        t("Crimson Tide Orchestra — 80 Musicians"),
        t("Maestro Richard Fenn — Conductor"),
        t("Aria Chen — Solo Violin"),
      ],
      ticketTiers: [
        {
          name: t("Standard"),
          price: 150,
          perks: t("Upper gallery seating"),
        },
        {
          name: t("Premium"),
          price: 250,
          perks: t("Orchestra-level seating"),
        },
        {
          name: t("Platinum"),
          price: 400,
          perks: t("Front section, interval champagne, signed poster"),
        },
      ],
    },
    {
      slug: "silent-frequency",
      artist: t("Silent Frequency"),
      venue: t("Budokan Hall"),
      venueCity: t("Tokyo, Japan"),
      venueCapacity: 14471,
      venueDescription: t(
        "Originally built for the 1964 Olympics, Nippon Budokan has become Japan's most revered music venue. Its octagonal design and spiritual atmosphere have made it a pilgrimage site for artists worldwide."
      ),
      date: new Date("2026-08-18T19:00:00"),
      doorsOpen: "17:30",
      price: 85,
      seatsRemaining: 1200,
      status: "on-sale",
      description: t(
        "Silent Frequency's ambient electronic project transforms the sacred Budokan into an immersive audiovisual experience. Using 360-degree projection mapping and spatial audio, this is not just a concert — it is a meditation on sound and light."
      ),
      lineup: [
        t("Silent Frequency"),
        t("Yuki Tanaka — Visual Artist"),
        t("Kaze Collective — Opening Performance"),
      ],
      ticketTiers: [
        {
          name: t("Standard"),
          price: 85,
          perks: t("Arena seating"),
        },
        {
          name: t("Immersive"),
          price: 140,
          perks: t("Floor seating with spatial audio headset"),
        },
        {
          name: t("Creator Pass"),
          price: 250,
          perks: t("Front row, post-show artist talk, recording of the show"),
        },
      ],
    },
    {
      slug: "glass-horizon",
      artist: t("Glass Horizon"),
      venue: t("Palau de la Música"),
      venueCity: t("Barcelona, Spain"),
      venueCapacity: 2049,
      venueDescription: t(
        "A UNESCO World Heritage Site designed by Lluís Domènech i Montaner, the Palau de la Música is a masterpiece of Catalan modernist architecture. Its stained glass skylight and ornate sculptures create a breathtaking setting for live music."
      ),
      date: new Date("2026-09-02T20:30:00"),
      doorsOpen: "19:00",
      price: 65,
      seatsRemaining: 15,
      status: "presale",
      description: t(
        "Glass Horizon brings their genre-defying fusion of jazz, electronic, and world music to one of Europe's most beautiful concert halls. Their improvisational style and use of traditional instruments from around the globe create a truly unique listening experience."
      ),
      lineup: [
        t("Glass Horizon"),
        t("Mar Vidal — Flamenco Guitar"),
        t("Ousmane Diallo — Kora"),
      ],
      ticketTiers: [
        {
          name: t("Standard"),
          price: 65,
          perks: t("Balcony seating"),
        },
        {
          name: t("Preferred"),
          price: 110,
          perks: t("Main floor seating"),
        },
        {
          name: t("Patron"),
          price: 195,
          perks: t("Box seating, pre-show reception with wine tasting"),
        },
      ],
    },
  ];
}

export function getConcertBySlug(
  slug: string,
  t: (s: string) => string
): Concert | undefined {
  return getConcerts(t).find((c) => c.slug === slug);
}
