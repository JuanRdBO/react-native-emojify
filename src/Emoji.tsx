import { Text } from 'react-native';
import { Image } from 'expo-image';
import React from 'react';
import type { Item } from './types';
import { StyleSheet } from 'react-native';

type Props = {
  children?: React.ReactNode;
  size?: number;
  item: Item;
};

const Emoji = ({ children, size, item }: Props) => {
  if (item.type === 'image') {
    return <Image source={item.itemToRender} style={styles.image} />;
  }

  if (item.type === 'emoji') {
    return (
      <Text style={[styles.text, { fontSize: size }]}>{item.itemToRender}</Text>
    );
  }

  if (children) return <>children;</>;

  return null;
};

export default Emoji;

const styles = StyleSheet.create({
  image: { width: 100, height: 100 },
  text: { width: '100%' },
});
