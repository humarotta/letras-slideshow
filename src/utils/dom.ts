/**
 * Returns the first element that matches a CSS selector, or null when nothing
 * matches.
 */
export const $ = <T extends HTMLElement>(
  selector: string,
  root: ParentNode = document,
): T => root.querySelector<T>(selector) as T;

/**
 * Returns all elements that match a CSS selector.
 */
export const $$ = <T extends HTMLElement>(
  selector: string,
  root: ParentNode = document,
): NodeListOf<T> => root.querySelectorAll<T>(selector);

/**
 * Returns the trimmed text content of an element, or an empty string if the
 * element or its text content is null.
 */
export const textOf = (element: Element): string =>
  element?.textContent?.trim() ?? "";

/**
 * Returns a two-dimensional array of paragraphs and their lines.
 *
 * The internal HTML of each paragraph is separated by line breaks and trimmed.
 * Empty lines and paragraphs are discarded.
 */
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
