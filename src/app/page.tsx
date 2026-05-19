"use client";

import UserProfileCard from "@/components/UserProfileCard";
import TurkeyStatsWidget from "@/components/TurkeyStatsWidget";
import LeaderboardWidget from "@/components/LeaderboardWidget";
import MediaGallery from "@/components/MediaGallery";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      {/* Top bar – shows the logged‑in user profile */}
      <section className="mb-8">
        <UserProfileCard />
      </section>

      {/* Main dashboard – two‑column layout on md+ screens */}
      <section className="grid gap-8 md:grid-cols-2">
        {/* Left column – core stats and leaderboard */}
        <div className="space-y-8">
          <TurkeyStatsWidget />
          <LeaderboardWidget limit={5} />
        </div>

        {/* Right column – media gallery */}
        <div className="space-y-8">
          <MediaGallery limit={12} />
        </div>
      </section>
    </main>
  );
}
