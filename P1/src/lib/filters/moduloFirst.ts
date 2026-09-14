// Pure function: cube a single integer
export function moduloFirst(x: number,n: number): number {
  return x % n;
}

// Map over a sequence
export function moduloLoop(xs: number[]): number[] {
    let n = xs[0];
  return xs.map((x) => moduloFirst(x, n))
}
