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

/**
 * `TouchableFloatingEmojis` is a functional component that renders the `FloatingEmojis` component
 * and a `TouchableOpacity` component as its child. When the `TouchableOpacity` is pressed, it triggers
 * the `onNewEmoji` function from `FloatingEmojis` and the `onPress` prop (if provided).
 *
 * @component
 * @param {object} props - The properties object.
 * @param {ReactNode} props.children - The child components to be rendered within the `TouchableOpacity`.
 * @param {boolean} [props.disabled=false] - If true, the `onPress` function will not be triggered.
 * @param {Array<string> | string} [props.emojis] - The emojis to be used in the `FloatingEmojis` component.
 * @param {Array<ImageSource> | ImageSource} [props.images] - The images to be used in the `FloatingEmojis` component.
 * @param {function} [props.onPress] - The function to be triggered when the `TouchableOpacity` is pressed.
 * @returns {ReactElement} The rendered `TouchableFloatingEmojis` component.
 */
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
