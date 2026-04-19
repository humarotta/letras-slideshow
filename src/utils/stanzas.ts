import { $$ } from "./selector";

export function extractStanzas(container: HTMLElement): string[][] {
  const stanzas: string[][] = [];

  for (const p of $$("p", container)) {
    const verses: string[] = [];

    for (let line of (p.innerHTML || "").split("\n")) {
      line = line.trim();
      if (line !== "") verses.push(line);
    }

    if (verses.length > 0) stanzas.push(verses);
  }

  return stanzas;
}
