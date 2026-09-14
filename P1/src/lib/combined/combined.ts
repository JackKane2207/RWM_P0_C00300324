// src/lib/combined/combined.ts
import { moduloLoop } from '$lib/filters/moduloFirst';
// Prefer importing from the peer package root (they should export from index.ts)
import { modulo3 } from 'peer-filter-c299313';

export function combinedFilter(xs: number[]): number[] {
  const afterMine = moduloLoop(xs);
  return modulo3(afterMine);
}
