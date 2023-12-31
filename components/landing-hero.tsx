"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl space-y-5 font-extrabold">
        <h1>Craft your unique anime universe with AniHub</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <TypewriterComponent
            options={{
              strings: [
                "Top 15 Anime Curation",
                "Iconic Character Showcase",
                "Unforgettable Anime Quotes",
                "Effortless Watchlist Management",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        Dive into the captivating world of anime with AniHub! Create your own
        curated collection of top 15 anime titles, explore iconic characters,
        cherish memorable quotes, and manage your watchlist with ease. AniHub
        offers a personalized space for anime aficionados to celebrate their
        passion and build their unique anime universe.
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button
            variant="premium"
            className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
          >
            Let&apos;s get started...
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
        King of the Pirates ❤️
      </div>
    </div>
  );
};
