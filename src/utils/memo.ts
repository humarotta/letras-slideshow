const unset = Symbol();

/**
 * Returns a function that computes and caches a value, reusing it on subsequent
 * calls.
 */
export function memo<T>(compute: () => T): () => T {
  let value: T | typeof unset = unset;
  return () => {
    if (value === unset) value = compute();
    return value;
  };
}
