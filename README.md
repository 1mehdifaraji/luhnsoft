# Luhnsoft

This library implements [Luhn Algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm) to validate credit cards, IMEI [etc](https://en.wikipedia.org/wiki/Luhn_algorithm#Uses). It does support string (english, arabic or persian digits) or number as an input. It's also typed with typescript with zero dependency.

# Usage

First install the package with `npm` or `yarn` or `pnpm`.

```bash
npm install luhnsoft
```

or

```bash
yarn add luhnsoft
```

or

```bash
pnpm add luhnsoft
```

Then import `validate` from `luhnsoft` and put in the credit card or IMEI digits as an input.

```typescript
import validate from 'luhnsoft';

const isValid: boolean = validate(3570861********);
```

# API

- You can use `string` or `number` type digits.
- The `validate` function already converts `arabic` and `persian` digits to `english` and makes sure all extra characters are removed so you don't need to worry about removing characters like `-` or empty spaces from input beforehand.

# Testing

The tests are written with `vitest` that can be used to verify the package before usage.

# Contributing

Please submit an [issue](https://github.com/1mehdifaraji/luhnsoft/issues) or a [pull request](https://github.com/1mehdifaraji/luhnsoft/pulls) If you have any issues or ideas with the library.

# Author

[Mehdi Faraji](https://github.com/1mehdifaraji)

# License (MIT)

Copyright (c) 2024 Mehdi Faraji

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
