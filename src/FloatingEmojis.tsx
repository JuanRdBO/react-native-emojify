import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Animated, View } from 'react-native';
import FloatingEmoji from './FloatingEmoji';
import { useTimeout } from './hooks';
import { getEmojiData, emojiList } from './utils';
import type { ImageSource } from 'expo-image';
import GravityEmoji from './GravityEmoji';
import type { Item } from './types';

const EMPTY_ARRAY: any[] = [];
const getItem = (items: (string | ImageSource)[]) =>
  Math.floor(Math.random() * items.length);
const getRandomNumber = (min: number, max: number) =>
  Math.random() * (max - min) + min;

interface FloatingEmojisProps {
  centerVertically?: boolean;
  children?:
    | React.ReactNode
    | (({
        onNewEmoji,
      }: {
        onNewEmoji: (x?: number, y?: number) => void;
      }) => React.ReactNode);
  disableHorizontalMovement?: boolean;
  disableVerticalMovement?: boolean;
  distance?: number;
  duration?: number;
  emojis?:
    | (typeof emojiList)[keyof typeof emojiList]['name'][]
    | (typeof emojiList)[keyof typeof emojiList]['name'];
  images?: ImageSource[] | ImageSource;
  fadeOut?: boolean;
  gravityEnabled?: boolean;
  marginTop?: number;
  opacityThreshold?: number;
  range?: number[];
  scaleTo?: number;
  setOnNewEmoji?: (callback: (x: number, y: number) => void) => void;
  size: number;
  wiggleFactor?: number;
}

const FloatingEmojis: React.FC<FloatingEmojisProps> = ({
  centerVertically,
  children,
  disableHorizontalMovement,
  disableVerticalMovement,
  distance = 130,
  duration = 2000,
  emojis = ['thumbs_up'],
  images = [],
  fadeOut = true,
  gravityEnabled,
  marginTop,
  opacityThreshold,
  range = [0, 10],
  scaleTo = 1,
  setOnNewEmoji,
  size = 30,
  wiggleFactor = 0.5,
  ...props
}) => {
  const emojisArray = useMemo(
    () => (Array.isArray(emojis) ? emojis : [emojis]),
    [emojis]
  );

  const itemsArray = useMemo(() => {
    const imagesArray = Array.isArray(images) ? images : [images];
    return [...emojisArray, ...imagesArray];
  }, [emojisArray, images]);

  const emojisMap = getEmojiData({ emojis: emojisArray });

  const [floatingItems, setItems] = useState<Item[]>(EMPTY_ARRAY);

  const [startTimeout, stopTimeout] = useTimeout();
  const clearItems = useCallback(() => setItems(EMPTY_ARRAY), []);

  const onNewEmoji = useCallback(
    (x?: number, y?: number) => {
      if (!range || (range && range.length !== 2)) {
        throw new Error('Range must be an array of two numbers');
      }

      stopTimeout();
      startTimeout(clearItems, duration! * 1.1);

      setItems((existingItems) => {
        const itemToRenderName =
          itemsArray.length === 1
            ? itemsArray[0]
            : itemsArray[getItem(itemsArray)];

        const maybeEmoji = emojisMap.get(itemToRenderName as any);

        const itemToRender = maybeEmoji ?? itemToRenderName;

        if (!itemToRender) return existingItems;

        const newItem: Item = {
          itemToRender,
          x: x
            ? x - getRandomNumber(-20, 20)
            : getRandomNumber(range[0]!, range[1]!),
          y: y || 0,
          type: maybeEmoji ? 'emoji' : 'image',
        };

        return [...existingItems, newItem];
      });
    },
    [
      clearItems,
      duration,
      itemsArray,
      range,
      startTimeout,
      stopTimeout,
      emojisMap,
    ]
  );

  useEffect(() => {
    if (typeof setOnNewEmoji === 'function') {
      console.log('set on new emoji called');

      setOnNewEmoji(onNewEmoji);
      return () => setOnNewEmoji(() => {});
    }
    return;
  }, [setOnNewEmoji, onNewEmoji]);

  return (
    <View style={{ zIndex: 1 }} {...props}>
      {typeof children === 'function' ? children({ onNewEmoji }) : children}
      <Animated.View pointerEvents="none">
        {gravityEnabled
          ? floatingItems.map((item, index) => (
              <GravityEmoji
                key={index}
                distance={Math.ceil(distance!)}
                item={item}
                left={item.x}
                size={size}
                top={item.y}
              />
            ))
          : floatingItems.map((item, index) => (
              <FloatingEmoji
                centerVertically={centerVertically}
                disableHorizontalMovement={disableHorizontalMovement}
                disableVerticalMovement={disableVerticalMovement}
                distance={Math.ceil(distance!)}
                duration={duration!}
                item={item}
                fadeOut={fadeOut}
                index={index}
                key={index}
                left={item.x}
                marginTop={marginTop}
                opacityThreshold={opacityThreshold}
                // range={range}
                scaleTo={scaleTo ?? 0}
                size={size}
                top={item.y}
                wiggleFactor={wiggleFactor}
              />
            ))}
      </Animated.View>
    </View>
  );
};

export default FloatingEmojis;
