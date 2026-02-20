import { T, Currency, Num, DateTime, Plural, Branch } from "gt-next";
import { getGT } from "gt-next/server";
import { LocaleSelector } from "gt-next";
import Link from "next/link";
import { getConcerts, Concert } from "@/data/concerts";

function StatusBadge({ status }: { status: Concert["status"] }) {
  return (
    <Branch
      branch={status}
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
  );
}

function ConcertCard({ concert }: { concert: Concert }) {
  return (
    <Link
      href={`/event/${concert.slug}`}
      className="block py-5 border-b border-neutral-800 last:border-b-0 hover:bg-neutral-800/30 -mx-6 px-6 transition-colors"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-base font-medium text-neutral-100">
              {concert.artist}
            </h3>
            <StatusBadge status={concert.status} />
          </div>
          <p className="text-sm text-neutral-500 mt-1">
            {concert.venue} · {concert.venueCity}
          </p>
          <p className="text-sm text-neutral-400 mt-1">
            <DateTime>{concert.date}</DateTime>
          </p>
        </div>
        <div className="text-right shrink-0">
          <div className="text-base font-medium text-neutral-200">
            <T>
              From <Currency currency="USD">{concert.price}</Currency>
            </T>
          </div>
          <div className="text-sm text-neutral-500 mt-1">
            {concert.status === "sold-out" ? (
              <T>No seats available</T>
            ) : (
              <T>
                <Plural
                  singular={
                    <>
                      <Num>{concert.seatsRemaining}</Num> seat remaining
                    </>
                  }
                  plural={
                    <>
                      <Num>{concert.seatsRemaining}</Num> seats remaining
                    </>
                  }
                  n={concert.seatsRemaining}
                />
              </T>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default async function Home() {
  const t = await getGT();
  const concerts = getConcerts(t);
  const totalConcerts = concerts.length;

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
            <h1 className="text-sm font-semibold text-neutral-100">
              Concert Tickets
            </h1>
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
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-neutral-100 mb-3">
            <T>Upcoming Concerts</T>
          </h2>
          <p className="text-base text-neutral-400 max-w-xl leading-relaxed">
            <T>
              Browse <Num>{totalConcerts}</Num> upcoming events with translated
              dates, locale-formatted prices, and real-time seat availability.
            </T>
          </p>
        </div>

        <div className="bg-neutral-900/50 rounded-lg border border-neutral-800 px-6">
          {concerts.map((concert) => (
            <ConcertCard key={concert.slug} concert={concert} />
          ))}
        </div>

        <div className="mt-8 p-4 rounded-lg border border-neutral-800 bg-neutral-900/30 text-sm text-neutral-500 text-center">
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
