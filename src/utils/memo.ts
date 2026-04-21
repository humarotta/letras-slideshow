const unset = Symbol();

export function memo<T>(compute: () => T): () => T {
  let value: T | typeof unset = unset;
  return () => {
    if (value === unset) value = compute();
    return value;
  };
}
