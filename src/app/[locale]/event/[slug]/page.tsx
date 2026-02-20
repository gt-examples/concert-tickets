import { T, Var, Currency, Num, DateTime, Branch } from "gt-next";
import { getGT } from "gt-next/server";
import { LocaleSelector } from "gt-next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getConcertBySlug, getConcerts } from "@/data/concerts";

export async function generateStaticParams() {
  const concerts = getConcerts((s) => s);
  return concerts.map((c) => ({ slug: c.slug }));
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const t = await getGT();
  const concert = getConcertBySlug(slug, t);

  if (!concert) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200">
      <header className="border-b border-neutral-800 bg-neutral-950">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href="https://generaltranslation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-400 hover:text-neutral-200 transition-colors"
            >
              General Translation
            </a>
            <span className="text-neutral-700">/</span>
            <Link
              href="/"
              className="text-sm font-semibold text-neutral-400 hover:text-neutral-200 transition-colors"
            >
              Concert Tickets
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/gt-examples/concert-tickets"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-200 transition-colors"
              aria-label="View on GitHub"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <LocaleSelector />
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-neutral-200 transition-colors mb-8"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <T>All Events</T>
        </Link>

        {/* Event Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3 flex-wrap">
            <h2 className="text-2xl font-semibold text-neutral-100">
              {concert.artist}
            </h2>
            <Branch
              branch={concert.status}
              on-sale={
                <span className="inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-emerald-900/50 text-emerald-400 border border-emerald-800">
                  <T>On Sale</T>
                </span>
              }
              presale={
                <span className="inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-amber-900/50 text-amber-400 border border-amber-800">
                  <T>Presale</T>
                </span>
              }
              sold-out={
                <span className="inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-red-900/50 text-red-400 border border-red-800">
                  <T>Sold Out</T>
                </span>
              }
            />
          </div>
          <p className="text-base text-neutral-400 leading-relaxed">
            {concert.description}
          </p>
        </div>

        {/* Event Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-neutral-900/50 rounded-lg border border-neutral-800 p-5">
            <h3 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">
              <T>Date & Time</T>
            </h3>
            <p className="text-sm text-neutral-200">
              <DateTime>{concert.date}</DateTime>
            </p>
            <p className="text-sm text-neutral-400 mt-1">
              <T>
                Doors open at <Var>{concert.doorsOpen}</Var>
              </T>
            </p>
          </div>
          <div className="bg-neutral-900/50 rounded-lg border border-neutral-800 p-5">
            <h3 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">
              <T>Venue</T>
            </h3>
            <p className="text-sm text-neutral-200">{concert.venue}</p>
            <p className="text-sm text-neutral-400 mt-1">{concert.venueCity}</p>
          </div>
          <div className="bg-neutral-900/50 rounded-lg border border-neutral-800 p-5">
            <h3 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">
              <T>Starting From</T>
            </h3>
            <p className="text-sm text-neutral-200">
              <Currency currency="USD">{concert.price}</Currency>
            </p>
          </div>
          <div className="bg-neutral-900/50 rounded-lg border border-neutral-800 p-5">
            <h3 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">
              <T>Availability</T>
            </h3>
            <p className="text-sm text-neutral-200">
              {concert.status === "sold-out" ? (
                <T>Sold Out</T>
              ) : (
                <T>
                  <Num>{concert.seatsRemaining}</Num> seats remaining
                </T>
              )}
            </p>
          </div>
        </div>

        {/* Lineup */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-neutral-100 mb-4">
            <T>Lineup</T>
          </h3>
          <div className="bg-neutral-900/50 rounded-lg border border-neutral-800">
            {concert.lineup.map((act, i) => (
              <div
                key={i}
                className="px-5 py-3.5 border-b border-neutral-800 last:border-b-0 flex items-center gap-3"
              >
                <span className="text-xs text-neutral-600 font-mono w-5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-neutral-200">{act}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Ticket Tiers */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-neutral-100 mb-4">
            <T>Ticket Options</T>
          </h3>
          <div className="space-y-3">
            {concert.ticketTiers.map((tier) => (
              <div
                key={tier.name}
                className="bg-neutral-900/50 rounded-lg border border-neutral-800 p-5 flex items-center justify-between gap-4"
              >
                <div>
                  <p className="text-sm font-medium text-neutral-100">
                    {tier.name}
                  </p>
                  <p className="text-sm text-neutral-500 mt-0.5">
                    {tier.perks}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-base font-medium text-neutral-200">
                    <Currency currency="USD">{tier.price}</Currency>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Venue Details */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-neutral-100 mb-4">
            <T>About the Venue</T>
          </h3>
          <div className="bg-neutral-900/50 rounded-lg border border-neutral-800 p-5">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <p className="text-sm font-medium text-neutral-100">
                  {concert.venue}
                </p>
                <p className="text-sm text-neutral-500 mt-0.5">
                  {concert.venueCity}
                </p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-xs text-neutral-500">
                  <T>Capacity</T>
                </p>
                <p className="text-sm text-neutral-300">
                  <Num>{concert.venueCapacity}</Num>
                </p>
              </div>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {concert.venueDescription}
            </p>
          </div>
        </div>

        <div className="p-4 rounded-lg border border-neutral-800 bg-neutral-900/30 text-sm text-neutral-500 text-center">
          <T>
            This is an example application built with General Translation to
            demonstrate internationalization features including DateTime,
            Currency, Num, Plural, and Branch components.
          </T>
        </div>
      </main>
    </div>
  );
}
