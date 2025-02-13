import { assertEquals, assertObjectMatch } from "@std/assert";
import { analyzeText, type LetterStats } from "./main.ts";

Deno.test("analyzeText - basic text analysis", () => {
  const text = "Hello, world! This is a test. How are you?";
  const stats = analyzeText(text);

  assertEquals(stats.wordCount, 9);
  assertEquals(stats.sentenceCount, 3);
  assertEquals(stats.characterCount, 41);

  assertObjectMatch(stats.wordFrequency, {
    "hello": 1,
    "world": 1,
    "this": 1,
    "is": 1,
    "a": 1,
    "test": 1,
    "how": 1,
    "are": 1,
    "you": 1
  });

  assertObjectMatch(stats.letterFrequency, {
    "h": 2,
    "e": 3,
    "l": 3,
    "o": 4,
    "w": 1,
    "r": 2,
    "d": 1,
    "t": 2,
    "s": 2,
    "a": 1,
    "y": 1,
    "u": 1
  });

  assertObjectMatch(stats.symbolFrequency, {
    ",": 1,
    "!": 1,
    ".": 1,
    "?": 1
  });
});

Deno.test("analyzeText - empty text", () => {
  const stats = analyzeText("");
  assertEquals(stats.wordCount, 0);
  assertEquals(stats.sentenceCount, 0);
  assertEquals(stats.characterCount, 0);
  assertEquals(Object.keys(stats.wordFrequency).length, 0);
  assertEquals(Object.keys(stats.letterFrequency).length, 0);
  assertEquals(Object.keys(stats.symbolFrequency).length, 0);
});

Deno.test("analyzeText - text with repeated words", () => {
  const text = "The cat and the cat sat on the mat.";
  const stats = analyzeText(text);
  assertEquals(stats.wordFrequency["the"], 3);
  assertEquals(stats.wordFrequency["cat"], 2);
});

Deno.test("analyzeText - text with special characters", () => {
  const text = "Hello!!! @#$ World???";
  const stats = analyzeText(text);
  assertEquals(stats.symbolFrequency["!"], 3);
  assertEquals(stats.symbolFrequency["?"], 3);
  assertEquals(stats.symbolFrequency["@"], 1);
  assertEquals(stats.symbolFrequency["#"], 1);
  assertEquals(stats.symbolFrequency["$"], 1);
});
