import { useMemo } from 'react';
import { turkeyStats, TurkeyStats } from '@/config/turkeyStats';

/**
 * Hook that returns the Turkey ranking data.
 *
 * The hook can optionally filter by a specific category name (e.g. "gamingSector").
 * If no category is provided it returns the full stats object.
 */
export const useTurkeyRank = <K extends keyof TurkeyStats>(
  category?: K,
) => {
  const result = useMemo(() => {
    if (category) {
      return turkeyStats[category];
    }
    return turkeyStats;
  }, [category]);

  return result as K extends keyof TurkeyStats ? TurkeyStats[K] : TurkeyStats;
};
