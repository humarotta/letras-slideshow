import type { MessageType } from "@/types";

/**
 * Sends a message to the active tab in the current window.
 *
 * Returns the content script response, or null when the active tab cannot be
 * accessed.
 */
export async function sendToTab<T = unknown>(
  type: MessageType,
): Promise<T | null> {
  const [tab] = await browser.tabs.query({ active: true, currentWindow: true });
  if (!tab?.id) return null;

  return browser.tabs.sendMessage(tab.id, { type }) as Promise<T>;
}
