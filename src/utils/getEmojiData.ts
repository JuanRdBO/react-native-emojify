import emojiList, { type EmojiList } from './emojiList';

type Props = {
  emojis?: (typeof emojiList)[keyof typeof emojiList]['name'][];
};

function getEmojiData({ emojis }: Props): Map<string, string> {
  let finalEmojiList: EmojiList = {};

  if (emojis) {
    // filter emojiList by emojis
    finalEmojiList = Object.entries(emojiList)
      .filter(([_, { name }]) => emojis.includes(name))
      .reduce((obj, [key, value]) => {
        obj[key as keyof typeof emojiList] = value;
        return obj;
      }, {} as EmojiList);
  } else {
    finalEmojiList = emojiList;
  }

  const emojiData = Object.entries(finalEmojiList).map(([emoji, { name }]) => {
    return [name, emoji] as [string, string];
  });

  // console.log('EmojIData', emojiData.slice(0, 3));

  const emoji = new Map(emojiData.slice(0, 3));

  // console.log('Emoji', emoji);

  return emoji;
}

export default getEmojiData;
