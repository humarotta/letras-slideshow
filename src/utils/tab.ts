import type { MessageType } from "@/types";

export async function sendToTab<T = unknown>(
  type: MessageType,
): Promise<T | null> {
  const [tab] = await browser.tabs.query({ active: true, currentWindow: true });
  if (!tab?.id) return null;

  return browser.tabs.sendMessage(tab.id, { type }) as Promise<T>;
}
