import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { TouchableFloatingEmojis } from 'react-native-emojify';

export default function App() {
  return (
    <View style={styles.container}>
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
      </TouchableFloatingEmojis>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    padding: 10,
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: '#f3b4d7',
    overflow: 'hidden',
  },
});
