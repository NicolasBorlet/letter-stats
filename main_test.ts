import { assertEquals } from "@std/assert";
import { analyzeText } from "./main.ts";

Deno.test("analyzeText - basic text analysis", () => {
  const text = "Hello world";
  const result = analyzeText(text);

  // Debugging
  console.log("Text:", JSON.stringify(text));
  console.log("Length:", text.length);
  console.log("Characters:", [...text].map(c => `'${c}'`).join(", "));
  console.log("Result:", result);

  // Tests
  assertEquals(result.wordCount, 2);
  assertEquals(result.sentenceCount, 0);
  assertEquals(result.characterCount, text.length);  // Utilisons la longueur réelle du texte
  assertEquals(result.wordFrequency["hello"], 1);
  assertEquals(result.wordFrequency["world"], 1);
  assertEquals(result.letterFrequency["h"], 1);
  assertEquals(result.letterFrequency["e"], 1);
  assertEquals(result.letterFrequency["l"], 3);
  assertEquals(result.letterFrequency["o"], 2);
  assertEquals(result.letterFrequency["w"], 1);
  assertEquals(result.letterFrequency["r"], 1);
  assertEquals(result.letterFrequency["d"], 1);
});
