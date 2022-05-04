# mutache-styler

Mustache Styler is a theme management tool aimed to improve the developer experience when handling multiple themes and component variants.

## Things to test when implementing this lib

- Test with a button implementation (complete, with, Disabled, primary, secondary, with icon, without icon, etc).
- Test with at least two themes, and change it dynamically.
- (Optional) Test interaction/compatibility with Reanimated.

### Preconditions

- A hook must return a style corresponding to your desired component.
- Test that dynamic changes apply the styles (Like, dynamically disabling a button, input, etc).

## Installation

```sh
npm install mutache-styler
```

<!-- ## Usage

```js
import { multiply } from "mutache-styler";

// ...

const result = await multiply(3, 7);
``` -->

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
