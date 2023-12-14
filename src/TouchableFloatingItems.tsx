import React, { memo, type FC, type ReactNode } from 'react';
import { TouchableOpacity } from 'react-native';
import FloatingEmojis from './FloatingEmojis';
import type { emojiList } from './utils';
import type { ImageSource } from 'expo-image';

type CopyFloatingEmojisProps = {
  children: ReactNode;
  disabled?: boolean;
  emojis?:
    | (typeof emojiList)[keyof typeof emojiList]['name'][]
    | (typeof emojiList)[keyof typeof emojiList]['name'];
  images?: ImageSource[] | ImageSource;
  onPress?: () => void;
} & Partial<React.ComponentProps<typeof FloatingEmojis>>;

const TouchableFloatingEmojis: FC<CopyFloatingEmojisProps> = ({
  children,
  disabled,
  onPress,
  emojis,
  images,
  ...props
}) => (
  <FloatingEmojis
    {...props}
    emojis={emojis}
    images={images}
    distance={550}
    duration={props.gravityEnabled ? 5000 : 600}
    fadeOut={false}
    scaleTo={0}
    size={120}
    wiggleFactor={0}
  >
    {({ onNewEmoji }) => {
      return (
        <TouchableOpacity
          onPress={() => {
            if (!disabled) {
              onNewEmoji();
              onPress && onPress();
            }
          }}
        >
          {children}
        </TouchableOpacity>
      );
    }}
  </FloatingEmojis>
);

export default memo(TouchableFloatingEmojis);
