// Severity ranking + frequency-rank → rating-class mapping. Shared by the
// per-day and aggregate views so the visual severity scale stays consistent.

export const SEV_RANK: Record<string, number> = {
  Mild: 1,
  Light: 1,
  Moderate: 2,
  Medium: 2,
  Severe: 3,
  Heavy: 3,
};

// Maps a sorted-by-frequency index to a rating class.
// Items with count=1 are always Mild regardless of rank.
export const rankCls = (i: number, total: number, n: number): string => {
  if (n === 1) return "rating-Mild";
  if (total <= 1) return "rating-Severe";
  const t = i / (total - 1);
  if (t < 0.34) return "rating-Severe";
  if (t < 0.67) return "rating-Moderate";
  return "rating-Mild";
};
