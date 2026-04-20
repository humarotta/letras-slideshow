export const $ = <T extends HTMLElement>(
  selector: string,
  root: ParentNode = document,
): T => root.querySelector<T>(selector) as T;

export const $$ = <T extends HTMLElement>(
  selector: string,
  root: ParentNode = document,
): NodeListOf<T> => root.querySelectorAll<T>(selector);

export function extractParagraphs(container: HTMLElement): string[][] {
  const paragraphs: string[][] = [];

  for (const p of $$("p", container)) {
    const lines: string[] = [];

    for (let line of (p.innerHTML || "").split("\n")) {
      line = line.trim();
      if (line !== "") lines.push(line);
    }

    if (lines.length > 0) paragraphs.push(lines);
  }

  return paragraphs;
}
