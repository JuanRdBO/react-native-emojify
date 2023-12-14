import React, { useLayoutEffect } from 'react';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Emoji from './Emoji';
import type { Item } from './types';

interface FloatingEmojiProps {
  centerVertically?: boolean;
  disableHorizontalMovement?: boolean;
  disableVerticalMovement?: boolean;
  distance: number;
  duration: number;
  item: Item;
  fadeOut?: boolean;
  index?: number;
  left: number;
  marginTop?: number;
  opacityThreshold?: number;
  scaleTo: number;
  size: number;
  top?: number;
  wiggleFactor?: number;
}

const FloatingEmoji: React.FC<FloatingEmojiProps> = ({
  centerVertically,
  disableHorizontalMovement,
  disableVerticalMovement,
  distance,
  duration,
  fadeOut,
  index = 0,
  left,
  marginTop,
  opacityThreshold,
  scaleTo,
  size,
  top,
  wiggleFactor = 0,
  item,
}) => {
  const animation = useSharedValue(0);

  useLayoutEffect(() => {
    animation.value = withTiming(1, {
      duration,
      easing: Easing.linear,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    const progress = interpolate(animation.value, [0, 1], [0, distance]);

    const opacity = interpolate(
      progress,
      [0, distance * (opacityThreshold ?? 0.5), distance - size],
      [1, fadeOut ? 0.89 : 1, fadeOut ? 0 : 1]
    );

    const rotate =
      interpolate(
        progress,
        [0, distance / 4, distance / 3, distance / 2, distance],
        [0, -2, 0, 2, 0]
      ) + 'deg';

    const scale = interpolate(
      progress,
      [0, 15, 30, 50, distance],
      [0, 1.2, 1.1, 1, scaleTo]
    );

    const everyThirdEmojiMultiplier = index % 3 === 0 ? 3 : 2;
    const everySecondEmojiMultiplier = index % 2 === 0 ? -1 : 1;
    const translateXComponentA =
      animation.value *
      size *
      everySecondEmojiMultiplier *
      everyThirdEmojiMultiplier;

    /*
    We don't really know why these concrete numbers are used there.
    Original Author of these numbers: Mike Demarais
     */
    const wiggleMultiplierA = Math.sin(progress * (distance / 23.3));
    const wiggleMultiplierB = interpolate(
      progress,
      [0, distance / 10, distance],
      [10 * wiggleFactor, 6.9 * wiggleFactor, 4.2137 * wiggleFactor]
    );
    const translateXComponentB = wiggleMultiplierA * wiggleMultiplierB;

    const translateX = disableHorizontalMovement
      ? 0
      : translateXComponentA + translateXComponentB;

    const translateY = disableVerticalMovement ? 0 : -progress;

    return {
      opacity,
      transform: [{ rotate }, { scale }, { translateX }, { translateY }],
    };
  }, []);

  return (
    <Animated.View
      style={[
        {
          left,
          marginTop,
          position: 'absolute',
          top: centerVertically ? null : top || size * -0.5,
        },
        animatedStyle,
      ]}
    >
      <Emoji size={size} item={item} />
    </Animated.View>
  );
};

const neverRerender = () => true;
export default React.memo(FloatingEmoji, neverRerender);
