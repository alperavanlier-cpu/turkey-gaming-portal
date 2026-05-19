/**
 * Centralised statistics for Turkey across various global categories.
 * In a real implementation these values would be fetched from an API
 * or a cloud database, but for now we keep a static shape that can be
 * swapped out later.
 */

export interface StatCategory<T> {
  /** Human‑readable label for the category */
  label: string;
  /** The numeric rank of Turkey (1‑based) */
  turkeyRank: number;
  /** Total number of entities measured (e.g., countries, regions) */
  total: number;
  /** Additional optional data specific to the category */
  data?: T;
}

export interface GamingData {
  /** Rank within Europe */
  europeRank: number;
  /** Global rank */
  globalRank: number;
  /** Approximate market size in USD billions */
  marketSize: number;
}

export interface EsportsData {
  /** Number of players participating in major tournaments */
  participants: number;
  /** Global rank for tournament participation */
  globalRank: number;
}

export interface InternetData {
  /** Average internet speed in Mbps */
  avgSpeedMbps: number;
  /** Global rank for speed */
  speedRank: number;
  /** Rank for infrastructure quality */
  infraRank: number;
}

export interface PopulationData {
  /** Total population (millions) */
  populationM: number;
  /** Internet penetration % */
  internetPenetration: number;
  /** Social‑media usage % */
  socialMediaUsage: number;
}

export const turkeyStats = {
  gamingSector: {
    label: 'Gaming sector (Europe & Global)',
    turkeyRank: 12,
    total: 50,
    data: {
      europeRank: 8,
      globalRank: 12,
      marketSize: 4.2,
    } as GamingData,
  },
  esportsParticipation: {
    label: 'E‑sports tournament participation',
    turkeyRank: 15,
    total: 60,
    data: {
      participants: 3500,
      globalRank: 15,
    } as EsportsData,
  },
  internetInfrastructure: {
    label: 'Internet infrastructure & speed',
    turkeyRank: 10,
    total: 70,
    data: {
      avgSpeedMbps: 45,
      speedRank: 10,
      infraRank: 9,
    } as InternetData,
  },
  populationUsage: {
    label: 'Population & Internet/Social‑media usage',
    turkeyRank: 6,
    total: 195,
    data: {
      populationM: 85,
      internetPenetration: 79,
      socialMediaUsage: 68,
    } as PopulationData,
  },
} as const;

export type TurkeyStats = typeof turkeyStats;
