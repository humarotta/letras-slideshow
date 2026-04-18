export const $ = <T extends HTMLElement>(
  selector: string,
  root: ParentNode = document,
): T => root.querySelector<T>(selector) as T;

export const $$ = <T extends HTMLElement>(
  selector: string,
  root: ParentNode = document,
): NodeListOf<T> => root.querySelectorAll<T>(selector);
