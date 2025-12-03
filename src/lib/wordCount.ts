// src/utils/wordCount.ts

export function countWords(text: string | null | undefined): number {
  if (!text || typeof text !== 'string') return 0;
  return text.trim().split(/\s+/).filter(word => word.length > 0).length;
}

export function getReadingTime(
  text: string | null | undefined, 
  wordsPerMinute: number = 200
): number {
  const words = countWords(text);
  return Math.ceil(words / wordsPerMinute);
}
