// lib/chebyshev.ts

// Fungsi untuk menghitung Chebyshev Polynomial orde n pada titik x
export function chebyshevPolynomial(n: number, x: number): number {
  if (n === 0) return 1;
  if (n === 1) return x;

  let prev = 1;
  let curr = x;

  for (let i = 2; i <= n; i++) {
    const next = 2 * x * curr - prev;
    prev = curr;
    curr = next;
  }

  return curr;
}
