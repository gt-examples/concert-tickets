# Concert Tickets

A multilingual concert ticket marketplace with locale-formatted dates, prices, and seat availability.

**[Live Demo](https://concert-tickets.generaltranslation.dev)** | **[General Translation Docs](https://generaltranslation.com/docs)**

## About

This example app demonstrates a concert ticket browsing experience with full internationalization support. It showcases locale-aware date formatting, currency display, pluralization for seat counts, and conditional status badges — all powered by [General Translation](https://generaltranslation.com)'s gt-next library.

Browse events at venues like [Madison Square Garden](https://www.msg.com/madison-square-garden), the [Sydney Opera House](https://www.sydneyoperahouse.com), and [Tokyo's Nippon Budokan](https://www.nipponbudokan.or.jp/english/) with prices, dates, and availability formatted for your locale.

## GT Features Used

- `<T>` — JSX translation
- `<Currency>` — Locale-aware currency formatting
- `<Num>` — Number formatting
- `<DateTime>` — Date/time formatting
- `<Plural>` — Pluralization
- `<Branch>` — Conditional rendering by locale
- `<Var>` — Dynamic value interpolation
- `<LocaleSelector>` — Language picker
- `getGT` — String translations
- `loadTranslations` — Local translation storage

## Getting Started

```bash
git clone https://github.com/gt-examples/concert-tickets.git
cd concert-tickets
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Built With

- [Next.js](https://nextjs.org)
- [General Translation](https://generaltranslation.com) (gt-next)
- [Tailwind CSS](https://tailwindcss.com)
