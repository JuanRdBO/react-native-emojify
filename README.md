# react-native-emojify

Send Emojis flying!

## Installation

```sh
npm install react-native-emojify
```

## What

This library allows you to send emojis flying across the screen. It's a fun way to add some flair to your app. This library is a rewrite of [Rainbow Wallet's](rainbow.me) [FloatingEmojis](https://github.com/rainbow-me/rainbow) component, which is written in JS.

This library is written in TS and supports images as well as emojis.

## Usage

```ts
import { TouchableFloatingEmojis } from 'react-native-emojify';

// ...

<TouchableFloatingEmojis
  gravityEnabled
  emojis={['thumbs_up', 'hot_beverage', 'money_with_wings']}
  images={[
    require('../assets/icon.png'),
    require('../assets/solana-logo.png'),
    require('../assets/stellar-logo.png'),
    require('../assets/moneygram-logo.webp'),
  ]}
>
  <Text style={styles.text}>🦄 Press me</Text>
</TouchableFloatingEmojis>;
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
