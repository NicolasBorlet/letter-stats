/**
 * A module for analyzing text statistics.
 *
 * This module provides utilities to analyze text and extract various statistics
 * such as word count and other metrics.
 *
 * @module
 */

/**
 * Interface représentant les statistiques d'analyse de texte
 * @interface
 */
export interface LetterStats {
  /** Nombre total de mots dans le texte */
  wordCount: number;
  /** Nombre total de phrases dans le texte */
  sentenceCount: number;
  /** Nombre total de caractères dans le texte */
  characterCount: number;
  /** Fréquence d'apparition de chaque mot */
  wordFrequency: Record<string, number>;
  /** Fréquence d'apparition de chaque lettre */
  letterFrequency: Record<string, number>;
  /** Fréquence d'apparition de chaque symbole */
  symbolFrequency: Record<string, number>;
}

/**
 * Analyse un texte et retourne des statistiques détaillées
 * @param text - Le texte à analyser
 * @returns Un objet contenant les statistiques d'analyse
 * @example
 * ```ts
 * const stats = analyzeText("Hello, world!");
 * console.log(stats.wordCount); // 2
 * ```
 */
export function analyzeText(text: string): LetterStats {
  const words = text.match(/\b\w+\b/g) || [];
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [];

  const wordFrequency: Record<string, number> = {};
  const letterFrequency: Record<string, number> = {};
  const symbolFrequency: Record<string, number> = {};

  // Analyse des mots
  words.forEach((word) => {
    const normalizedWord = word.toLowerCase();
    wordFrequency[normalizedWord] = (wordFrequency[normalizedWord] || 0) + 1;
  });

  // Analyse des lettres et symboles
  [...text].forEach((char) => {
    if (/[a-zA-Z]/.test(char)) {
      const normalizedChar = char.toLowerCase();
      letterFrequency[normalizedChar] = (letterFrequency[normalizedChar] || 0) + 1;
    } else if (/[^a-zA-Z\s]/.test(char)) {
      symbolFrequency[char] = (symbolFrequency[char] || 0) + 1;
    }
  });

  return {
    wordCount: words.length,
    sentenceCount: sentences.length,
    characterCount: text.length,
    wordFrequency,
    letterFrequency,
    symbolFrequency,
  };
}

// Example usage if run directly
if (import.meta.main) {
  const example = "Hello, world! This is a test.";
  console.log(analyzeText(example));
}
