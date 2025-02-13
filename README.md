# Letter Stats

A TypeScript library for analyzing text statistics, providing detailed information about word count, sentence count, character count, and frequency analysis.

## Installation

```ts
import { analyzeText } from "jsr:@nicolas-borlet/letter-stats";
```

## Usage

```ts
const text = "Hello, world!";
const stats = analyzeText(text);
console.log(stats);
```

## API

### analyzeText(text: string)

Analyzes the given text and returns an object containing various statistics.

### getWordCount(text: string)

Counts the number of words in the given text.

### getSentenceCount(text: string)

Counts the number of sentences in the given text.

### getCharacterCount(text: string)

Counts the number of characters in the given text.

### getFrequencyAnalysis(text: string)

Returns an object containing the frequency analysis of the given text.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
