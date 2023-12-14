export type EmojiList = {
  [key: string]: {
    name: string;
    group?: string;
  };
};

const emojiList = {
  '😀': {
    name: 'grinning_face',
    group: 'Smileys & Emotion',
  },
  '😃': {
    name: 'grinning_face_with_big_eyes',
    group: 'Smileys & Emotion',
  },
  '😄': {
    name: 'grinning_face_with_smiling_eyes',
    group: 'Smileys & Emotion',
  },
  '😁': {
    name: 'beaming_face_with_smiling_eyes',
    group: 'Smileys & Emotion',
  },
  '😆': {
    name: 'grinning_squinting_face',
    group: 'Smileys & Emotion',
  },
  '😅': {
    name: 'grinning_face_with_sweat',
    group: 'Smileys & Emotion',
  },
  '🤣': {
    name: 'rolling_on_the_floor_laughing',
    group: 'Smileys & Emotion',
  },
  '😂': {
    name: 'face_with_tears_of_joy',
    group: 'Smileys & Emotion',
  },
  '🙂': {
    name: 'slightly_smiling_face',
    group: 'Smileys & Emotion',
  },
  '🙃': {
    name: 'upside_down_face',
    group: 'Smileys & Emotion',
  },
  '😉': {
    name: 'winking_face',
    group: 'Smileys & Emotion',
  },
  '😊': {
    name: 'smiling_face_with_smiling_eyes',
    group: 'Smileys & Emotion',
  },
  '😇': {
    name: 'smiling_face_with_halo',
    group: 'Smileys & Emotion',
  },
  '🥰': {
    name: 'smiling_face_with_hearts',
    group: 'Smileys & Emotion',
  },
  '😍': {
    name: 'smiling_face_with_heart_eyes',
    group: 'Smileys & Emotion',
  },
  '🤩': {
    name: 'star_struck',
    group: 'Smileys & Emotion',
  },
  '😘': {
    name: 'face_blowing_a_kiss',
    group: 'Smileys & Emotion',
  },
  '😗': {
    name: 'kissing_face',
    group: 'Smileys & Emotion',
  },
  '☺️': {
    name: 'smiling_face',
    group: 'Smileys & Emotion',
  },
  '😚': {
    name: 'kissing_face_with_closed_eyes',
    group: 'Smileys & Emotion',
  },
  '😙': {
    name: 'kissing_face_with_smiling_eyes',
    group: 'Smileys & Emotion',
  },
  '🥲': {
    name: 'smiling_face_with_tear',
    group: 'Smileys & Emotion',
  },
  '😋': {
    name: 'face_savoring_food',
    group: 'Smileys & Emotion',
  },
  '😛': {
    name: 'face_with_tongue',
    group: 'Smileys & Emotion',
  },
  '😜': {
    name: 'winking_face_with_tongue',
    group: 'Smileys & Emotion',
  },
  '🤪': {
    name: 'zany_face',
    group: 'Smileys & Emotion',
  },
  '😝': {
    name: 'squinting_face_with_tongue',
    group: 'Smileys & Emotion',
  },
  '🤑': {
    name: 'money_mouth_face',
    group: 'Smileys & Emotion',
  },
  '🤗': {
    name: 'hugging_face',
    group: 'Smileys & Emotion',
  },
  '🤭': {
    name: 'face_with_hand_over_mouth',
    group: 'Smileys & Emotion',
  },
  '🤫': {
    name: 'shushing_face',
    group: 'Smileys & Emotion',
  },
  '🤔': {
    name: 'thinking_face',
    group: 'Smileys & Emotion',
  },
  '🤐': {
    name: 'zipper_mouth_face',
    group: 'Smileys & Emotion',
  },
  '🤨': {
    name: 'face_with_raised_eyebrow',
    group: 'Smileys & Emotion',
  },
  '😐': {
    name: 'neutral_face',
    group: 'Smileys & Emotion',
  },
  '😑': {
    name: 'expressionless_face',
    group: 'Smileys & Emotion',
  },
  '😶': {
    name: 'face_without_mouth',
    group: 'Smileys & Emotion',
  },
  '😏': {
    name: 'smirking_face',
    group: 'Smileys & Emotion',
  },
  '😒': {
    name: 'unamused_face',
    group: 'Smileys & Emotion',
  },
  '🙄': {
    name: 'face_with_rolling_eyes',
    group: 'Smileys & Emotion',
  },
  '😬': {
    name: 'grimacing_face',
    group: 'Smileys & Emotion',
  },
  '🤥': {
    name: 'lying_face',
    group: 'Smileys & Emotion',
  },
  '😌': {
    name: 'relieved_face',
    group: 'Smileys & Emotion',
  },
  '😔': {
    name: 'pensive_face',
    group: 'Smileys & Emotion',
  },
  '😪': {
    name: 'sleepy_face',
    group: 'Smileys & Emotion',
  },
  '🤤': {
    name: 'drooling_face',
    group: 'Smileys & Emotion',
  },
  '😴': {
    name: 'sleeping_face',
    group: 'Smileys & Emotion',
  },
  '😷': {
    name: 'face_with_medical_mask',
    group: 'Smileys & Emotion',
  },
  '🤒': {
    name: 'face_with_thermometer',
    group: 'Smileys & Emotion',
  },
  '🤕': {
    name: 'face_with_head_bandage',
    group: 'Smileys & Emotion',
  },
  '🤢': {
    name: 'nauseated_face',
    group: 'Smileys & Emotion',
  },
  '🤮': {
    name: 'face_vomiting',
    group: 'Smileys & Emotion',
  },
  '🤧': {
    name: 'sneezing_face',
    group: 'Smileys & Emotion',
  },
  '🥵': {
    name: 'hot_face',
    group: 'Smileys & Emotion',
  },
  '🥶': {
    name: 'cold_face',
    group: 'Smileys & Emotion',
  },
  '🥴': {
    name: 'woozy_face',
    group: 'Smileys & Emotion',
  },
  '😵': {
    name: 'dizzy_face',
    group: 'Smileys & Emotion',
  },
  '🤯': {
    name: 'exploding_head',
    group: 'Smileys & Emotion',
  },
  '🤠': {
    name: 'cowboy_hat_face',
    group: 'Smileys & Emotion',
  },
  '🥳': {
    name: 'partying_face',
    group: 'Smileys & Emotion',
  },
  '🥸': {
    name: 'disguised_face',
    group: 'Smileys & Emotion',
  },
  '😎': {
    name: 'smiling_face_with_sunglasses',
    group: 'Smileys & Emotion',
  },
  '🤓': {
    name: 'nerd_face',
    group: 'Smileys & Emotion',
  },
  '🧐': {
    name: 'face_with_monocle',
    group: 'Smileys & Emotion',
  },
  '😕': {
    name: 'confused_face',
    group: 'Smileys & Emotion',
  },
  '😟': {
    name: 'worried_face',
    group: 'Smileys & Emotion',
  },
  '🙁': {
    name: 'slightly_frowning_face',
    group: 'Smileys & Emotion',
  },
  '☹️': {
    name: 'frowning_face',
    group: 'Smileys & Emotion',
  },
  '😮': {
    name: 'face_with_open_mouth',
    group: 'Smileys & Emotion',
  },
  '😯': {
    name: 'hushed_face',
    group: 'Smileys & Emotion',
  },
  '😲': {
    name: 'astonished_face',
    group: 'Smileys & Emotion',
  },
  '😳': {
    name: 'flushed_face',
    group: 'Smileys & Emotion',
  },
  '🥺': {
    name: 'pleading_face',
    group: 'Smileys & Emotion',
  },
  '😦': {
    name: 'frowning_face_with_open_mouth',
    group: 'Smileys & Emotion',
  },
  '😧': {
    name: 'anguished_face',
    group: 'Smileys & Emotion',
  },
  '😨': {
    name: 'fearful_face',
    group: 'Smileys & Emotion',
  },
  '😰': {
    name: 'anxious_face_with_sweat',
    group: 'Smileys & Emotion',
  },
  '😥': {
    name: 'sad_but_relieved_face',
    group: 'Smileys & Emotion',
  },
  '😢': {
    name: 'crying_face',
    group: 'Smileys & Emotion',
  },
  '😭': {
    name: 'loudly_crying_face',
    group: 'Smileys & Emotion',
  },
  '😱': {
    name: 'face_screaming_in_fear',
    group: 'Smileys & Emotion',
  },
  '😖': {
    name: 'confounded_face',
    group: 'Smileys & Emotion',
  },
  '😣': {
    name: 'persevering_face',
    group: 'Smileys & Emotion',
  },
  '😞': {
    name: 'disappointed_face',
    group: 'Smileys & Emotion',
  },
  '😓': {
    name: 'downcast_face_with_sweat',
    group: 'Smileys & Emotion',
  },
  '😩': {
    name: 'weary_face',
    group: 'Smileys & Emotion',
  },
  '😫': {
    name: 'tired_face',
    group: 'Smileys & Emotion',
  },
  '🥱': {
    name: 'yawning_face',
    group: 'Smileys & Emotion',
  },
  '😤': {
    name: 'face_with_steam_from_nose',
    group: 'Smileys & Emotion',
  },
  '😡': {
    name: 'pouting_face',
    group: 'Smileys & Emotion',
  },
  '😠': {
    name: 'angry_face',
    group: 'Smileys & Emotion',
  },
  '🤬': {
    name: 'face_with_symbols_on_mouth',
    group: 'Smileys & Emotion',
  },
  '😈': {
    name: 'smiling_face_with_horns',
    group: 'Smileys & Emotion',
  },
  '👿': {
    name: 'angry_face_with_horns',
    group: 'Smileys & Emotion',
  },
  '💀': {
    name: 'skull',
    group: 'Smileys & Emotion',
  },
  '☠️': {
    name: 'skull_and_crossbones',
    group: 'Smileys & Emotion',
  },
  '💩': {
    name: 'pile_of_poo',
    group: 'Smileys & Emotion',
  },
  '🤡': {
    name: 'clown_face',
    group: 'Smileys & Emotion',
  },
  '👹': {
    name: 'ogre',
    group: 'Smileys & Emotion',
  },
  '👺': {
    name: 'goblin',
    group: 'Smileys & Emotion',
  },
  '👻': {
    name: 'ghost',
    group: 'Smileys & Emotion',
  },
  '👽': {
    name: 'alien',
    group: 'Smileys & Emotion',
  },
  '👾': {
    name: 'alien_monster',
    group: 'Smileys & Emotion',
  },
  '🤖': {
    name: 'robot',
    group: 'Smileys & Emotion',
  },
  '😺': {
    name: 'grinning_cat',
    group: 'Smileys & Emotion',
  },
  '😸': {
    name: 'grinning_cat_with_smiling_eyes',
    group: 'Smileys & Emotion',
  },
  '😹': {
    name: 'cat_with_tears_of_joy',
    group: 'Smileys & Emotion',
  },
  '😻': {
    name: 'smiling_cat_with_heart_eyes',
    group: 'Smileys & Emotion',
  },
  '😼': {
    name: 'cat_with_wry_smile',
    group: 'Smileys & Emotion',
  },
  '😽': {
    name: 'kissing_cat',
    group: 'Smileys & Emotion',
  },
  '🙀': {
    name: 'weary_cat',
    group: 'Smileys & Emotion',
  },
  '😿': {
    name: 'crying_cat',
    group: 'Smileys & Emotion',
  },
  '😾': {
    name: 'pouting_cat',
    group: 'Smileys & Emotion',
  },
  '🙈': {
    name: 'see_no_evil_monkey',
    group: 'Smileys & Emotion',
  },
  '🙉': {
    name: 'hear_no_evil_monkey',
    group: 'Smileys & Emotion',
  },
  '🙊': {
    name: 'speak_no_evil_monkey',
    group: 'Smileys & Emotion',
  },
  '💋': {
    name: 'kiss_mark',
    group: 'Smileys & Emotion',
  },
  '💌': {
    name: 'love_letter',
    group: 'Smileys & Emotion',
  },
  '💘': {
    name: 'heart_with_arrow',
    group: 'Smileys & Emotion',
  },
  '💝': {
    name: 'heart_with_ribbon',
    group: 'Smileys & Emotion',
  },
  '💖': {
    name: 'sparkling_heart',
    group: 'Smileys & Emotion',
  },
  '💗': {
    name: 'growing_heart',
    group: 'Smileys & Emotion',
  },
  '💓': {
    name: 'beating_heart',
    group: 'Smileys & Emotion',
  },
  '💞': {
    name: 'revolving_hearts',
    group: 'Smileys & Emotion',
  },
  '💕': {
    name: 'two_hearts',
    group: 'Smileys & Emotion',
  },
  '💟': {
    name: 'heart_decoration',
    group: 'Smileys & Emotion',
  },
  '❣️': {
    name: 'heart_exclamation',
    group: 'Smileys & Emotion',
  },
  '💔': {
    name: 'broken_heart',
    group: 'Smileys & Emotion',
  },
  '❤️': {
    name: 'red_heart',
    group: 'Smileys & Emotion',
  },
  '🧡': {
    name: 'orange_heart',
    group: 'Smileys & Emotion',
  },
  '💛': {
    name: 'yellow_heart',
    group: 'Smileys & Emotion',
  },
  '💚': {
    name: 'green_heart',
    group: 'Smileys & Emotion',
  },
  '💙': {
    name: 'blue_heart',
    group: 'Smileys & Emotion',
  },
  '💜': {
    name: 'purple_heart',
    group: 'Smileys & Emotion',
  },
  '🤎': {
    name: 'brown_heart',
    group: 'Smileys & Emotion',
  },
  '🖤': {
    name: 'black_heart',
    group: 'Smileys & Emotion',
  },
  '🤍': {
    name: 'white_heart',
    group: 'Smileys & Emotion',
  },
  '💯': {
    name: 'hundred_points',
    group: 'Smileys & Emotion',
  },
  '💢': {
    name: 'anger_symbol',
    group: 'Smileys & Emotion',
  },
  '💥': {
    name: 'collision',
    group: 'Smileys & Emotion',
  },
  '💫': {
    name: 'dizzy',
    group: 'Smileys & Emotion',
  },
  '💦': {
    name: 'sweat_droplets',
    group: 'Smileys & Emotion',
  },
  '💨': {
    name: 'dashing_away',
    group: 'Smileys & Emotion',
  },
  '🕳️': {
    name: 'hole',
    group: 'Smileys & Emotion',
  },
  '💣': {
    name: 'bomb',
    group: 'Smileys & Emotion',
  },
  '💬': {
    name: 'speech_balloon',
    group: 'Smileys & Emotion',
  },
  '👁️‍🗨️': {
    name: 'eye_in_speech_bubble',
    group: 'Smileys & Emotion',
  },
  '🗨️': {
    name: 'left_speech_bubble',
    group: 'Smileys & Emotion',
  },
  '🗯️': {
    name: 'right_anger_bubble',
    group: 'Smileys & Emotion',
  },
  '💭': {
    name: 'thought_balloon',
    group: 'Smileys & Emotion',
  },
  '💤': {
    name: 'zzz',
    group: 'Smileys & Emotion',
  },
  '👋': {
    name: 'waving_hand',
    group: 'People & Body',
  },
  '🤚': {
    name: 'raised_back_of_hand',
    group: 'People & Body',
  },
  '🖐️': {
    name: 'hand_with_fingers_splayed',
    group: 'People & Body',
  },
  '✋': {
    name: 'raised_hand',
    group: 'People & Body',
  },
  '🖖': {
    name: 'vulcan_salute',
    group: 'People & Body',
  },
  '👌': {
    name: 'ok_hand',
    group: 'People & Body',
  },
  '🤌': {
    name: 'pinched_fingers',
    group: 'People & Body',
  },
  '🤏': {
    name: 'pinching_hand',
    group: 'People & Body',
  },
  '✌️': {
    name: 'victory_hand',
    group: 'People & Body',
  },
  '🤞': {
    name: 'crossed_fingers',
    group: 'People & Body',
  },
  '🤟': {
    name: 'love_you_gesture',
    group: 'People & Body',
  },
  '🤘': {
    name: 'sign_of_the_horns',
    group: 'People & Body',
  },
  '🤙': {
    name: 'call_me_hand',
    group: 'People & Body',
  },
  '👈': {
    name: 'backhand_index_pointing_left',
    group: 'People & Body',
  },
  '👉': {
    name: 'backhand_index_pointing_right',
    group: 'People & Body',
  },
  '👆': {
    name: 'backhand_index_pointing_up',
    group: 'People & Body',
  },
  '🖕': {
    name: 'middle_finger',
    group: 'People & Body',
  },
  '👇': {
    name: 'backhand_index_pointing_down',
    group: 'People & Body',
  },
  '☝️': {
    name: 'index_pointing_up',
    group: 'People & Body',
  },
  '👍': {
    name: 'thumbs_up',
    group: 'People & Body',
  },
  '👎': {
    name: 'thumbs_down',
    group: 'People & Body',
  },
  '✊': {
    name: 'raised_fist',
    group: 'People & Body',
  },
  '👊': {
    name: 'oncoming_fist',
    group: 'People & Body',
  },
  '🤛': {
    name: 'left_facing_fist',
    group: 'People & Body',
  },
  '🤜': {
    name: 'right_facing_fist',
    group: 'People & Body',
  },
  '👏': {
    name: 'clapping_hands',
    group: 'People & Body',
  },
  '🙌': {
    name: 'raising_hands',
    group: 'People & Body',
  },
  '👐': {
    name: 'open_hands',
    group: 'People & Body',
  },
  '🤲': {
    name: 'palms_up_together',
    group: 'People & Body',
  },
  '🤝': {
    name: 'handshake',
    group: 'People & Body',
  },
  '🙏': {
    name: 'folded_hands',
    group: 'People & Body',
  },
  '✍️': {
    name: 'writing_hand',
    group: 'People & Body',
  },
  '💅': {
    name: 'nail_polish',
    group: 'People & Body',
  },
  '🤳': {
    name: 'selfie',
    group: 'People & Body',
  },
  '💪': {
    name: 'flexed_biceps',
    group: 'People & Body',
  },
  '🦾': {
    name: 'mechanical_arm',
    group: 'People & Body',
  },
  '🦿': {
    name: 'mechanical_leg',
    group: 'People & Body',
  },
  '🦵': {
    name: 'leg',
    group: 'People & Body',
  },
  '🦶': {
    name: 'foot',
    group: 'People & Body',
  },
  '👂': {
    name: 'ear',
    group: 'People & Body',
  },
  '🦻': {
    name: 'ear_with_hearing_aid',
    group: 'People & Body',
  },
  '👃': {
    name: 'nose',
    group: 'People & Body',
  },
  '🧠': {
    name: 'brain',
    group: 'People & Body',
  },
  '🫀': {
    name: 'anatomical_heart',
    group: 'People & Body',
  },
  '🫁': {
    name: 'lungs',
    group: 'People & Body',
  },
  '🦷': {
    name: 'tooth',
    group: 'People & Body',
  },
  '🦴': {
    name: 'bone',
    group: 'People & Body',
  },
  '👀': {
    name: 'eyes',
    group: 'People & Body',
  },
  '👁️': {
    name: 'eye',
    group: 'People & Body',
  },
  '👅': {
    name: 'tongue',
    group: 'People & Body',
  },
  '👄': {
    name: 'mouth',
    group: 'People & Body',
  },
  '👶': {
    name: 'baby',
    group: 'People & Body',
  },
  '🧒': {
    name: 'child',
    group: 'People & Body',
  },
  '👦': {
    name: 'boy',
    group: 'People & Body',
  },
  '👧': {
    name: 'girl',
    group: 'People & Body',
  },
  '🧑': {
    name: 'person',
    group: 'People & Body',
  },
  '👱': {
    name: 'person_blond_hair',
    group: 'People & Body',
  },
  '👨': {
    name: 'man',
    group: 'People & Body',
  },
  '🧔': {
    name: 'man_beard',
    group: 'People & Body',
  },
  '👨‍🦰': {
    name: 'man_red_hair',
    group: 'People & Body',
  },
  '👨‍🦱': {
    name: 'man_curly_hair',
    group: 'People & Body',
  },
  '👨‍🦳': {
    name: 'man_white_hair',
    group: 'People & Body',
  },
  '👨‍🦲': {
    name: 'man_bald',
    group: 'People & Body',
  },
  '👩': {
    name: 'woman',
    group: 'People & Body',
  },
  '👩‍🦰': {
    name: 'woman_red_hair',
    group: 'People & Body',
  },
  '🧑‍🦰': {
    name: 'person_red_hair',
    group: 'People & Body',
  },
  '👩‍🦱': {
    name: 'woman_curly_hair',
    group: 'People & Body',
  },
  '🧑‍🦱': {
    name: 'person_curly_hair',
    group: 'People & Body',
  },
  '👩‍🦳': {
    name: 'woman_white_hair',
    group: 'People & Body',
  },
  '🧑‍🦳': {
    name: 'person_white_hair',
    group: 'People & Body',
  },
  '👩‍🦲': {
    name: 'woman_bald',
    group: 'People & Body',
  },
  '🧑‍🦲': {
    name: 'person_bald',
    group: 'People & Body',
  },
  '👱‍♀️': {
    name: 'woman_blond_hair',
    group: 'People & Body',
  },
  '👱‍♂️': {
    name: 'man_blond_hair',
    group: 'People & Body',
  },
  '🧓': {
    name: 'older_person',
    group: 'People & Body',
  },
  '👴': {
    name: 'old_man',
    group: 'People & Body',
  },
  '👵': {
    name: 'old_woman',
    group: 'People & Body',
  },
  '🙍': {
    name: 'person_frowning',
    group: 'People & Body',
  },
  '🙍‍♂️': {
    name: 'man_frowning',
    group: 'People & Body',
  },
  '🙍‍♀️': {
    name: 'woman_frowning',
    group: 'People & Body',
  },
  '🙎': {
    name: 'person_pouting',
    group: 'People & Body',
  },
  '🙎‍♂️': {
    name: 'man_pouting',
    group: 'People & Body',
  },
  '🙎‍♀️': {
    name: 'woman_pouting',
    group: 'People & Body',
  },
  '🙅': {
    name: 'person_gesturing_no',
    group: 'People & Body',
  },
  '🙅‍♂️': {
    name: 'man_gesturing_no',
    group: 'People & Body',
  },
  '🙅‍♀️': {
    name: 'woman_gesturing_no',
    group: 'People & Body',
  },
  '🙆': {
    name: 'person_gesturing_ok',
    group: 'People & Body',
  },
  '🙆‍♂️': {
    name: 'man_gesturing_ok',
    group: 'People & Body',
  },
  '🙆‍♀️': {
    name: 'woman_gesturing_ok',
    group: 'People & Body',
  },
  '💁': {
    name: 'person_tipping_hand',
    group: 'People & Body',
  },
  '💁‍♂️': {
    name: 'man_tipping_hand',
    group: 'People & Body',
  },
  '💁‍♀️': {
    name: 'woman_tipping_hand',
    group: 'People & Body',
  },
  '🙋': {
    name: 'person_raising_hand',
    group: 'People & Body',
  },
  '🙋‍♂️': {
    name: 'man_raising_hand',
    group: 'People & Body',
  },
  '🙋‍♀️': {
    name: 'woman_raising_hand',
    group: 'People & Body',
  },
  '🧏': {
    name: 'deaf_person',
    group: 'People & Body',
  },
  '🧏‍♂️': {
    name: 'deaf_man',
    group: 'People & Body',
  },
  '🧏‍♀️': {
    name: 'deaf_woman',
    group: 'People & Body',
  },
  '🙇': {
    name: 'person_bowing',
    group: 'People & Body',
  },
  '🙇‍♂️': {
    name: 'man_bowing',
    group: 'People & Body',
  },
  '🙇‍♀️': {
    name: 'woman_bowing',
    group: 'People & Body',
  },
  '🤦': {
    name: 'person_facepalming',
    group: 'People & Body',
  },
  '🤦‍♂️': {
    name: 'man_facepalming',
    group: 'People & Body',
  },
  '🤦‍♀️': {
    name: 'woman_facepalming',
    group: 'People & Body',
  },
  '🤷': {
    name: 'person_shrugging',
    group: 'People & Body',
  },
  '🤷‍♂️': {
    name: 'man_shrugging',
    group: 'People & Body',
  },
  '🤷‍♀️': {
    name: 'woman_shrugging',
    group: 'People & Body',
  },
  '🧑‍⚕️': {
    name: 'health_worker',
    group: 'People & Body',
  },
  '👨‍⚕️': {
    name: 'man_health_worker',
    group: 'People & Body',
  },
  '👩‍⚕️': {
    name: 'woman_health_worker',
    group: 'People & Body',
  },
  '🧑‍🎓': {
    name: 'student',
    group: 'People & Body',
  },
  '👨‍🎓': {
    name: 'man_student',
    group: 'People & Body',
  },
  '👩‍🎓': {
    name: 'woman_student',
    group: 'People & Body',
  },
  '🧑‍🏫': {
    name: 'teacher',
    group: 'People & Body',
  },
  '👨‍🏫': {
    name: 'man_teacher',
    group: 'People & Body',
  },
  '👩‍🏫': {
    name: 'woman_teacher',
    group: 'People & Body',
  },
  '🧑‍⚖️': {
    name: 'judge',
    group: 'People & Body',
  },
  '👨‍⚖️': {
    name: 'man_judge',
    group: 'People & Body',
  },
  '👩‍⚖️': {
    name: 'woman_judge',
    group: 'People & Body',
  },
  '🧑‍🌾': {
    name: 'farmer',
    group: 'People & Body',
  },
  '👨‍🌾': {
    name: 'man_farmer',
    group: 'People & Body',
  },
  '👩‍🌾': {
    name: 'woman_farmer',
    group: 'People & Body',
  },
  '🧑‍🍳': {
    name: 'cook',
    group: 'People & Body',
  },
  '👨‍🍳': {
    name: 'man_cook',
    group: 'People & Body',
  },
  '👩‍🍳': {
    name: 'woman_cook',
    group: 'People & Body',
  },
  '🧑‍🔧': {
    name: 'mechanic',
    group: 'People & Body',
  },
  '👨‍🔧': {
    name: 'man_mechanic',
    group: 'People & Body',
  },
  '👩‍🔧': {
    name: 'woman_mechanic',
    group: 'People & Body',
  },
  '🧑‍🏭': {
    name: 'factory_worker',
    group: 'People & Body',
  },
  '👨‍🏭': {
    name: 'man_factory_worker',
    group: 'People & Body',
  },
  '👩‍🏭': {
    name: 'woman_factory_worker',
    group: 'People & Body',
  },
  '🧑‍💼': {
    name: 'office_worker',
    group: 'People & Body',
  },
  '👨‍💼': {
    name: 'man_office_worker',
    group: 'People & Body',
  },
  '👩‍💼': {
    name: 'woman_office_worker',
    group: 'People & Body',
  },
  '🧑‍🔬': {
    name: 'scientist',
    group: 'People & Body',
  },
  '👨‍🔬': {
    name: 'man_scientist',
    group: 'People & Body',
  },
  '👩‍🔬': {
    name: 'woman_scientist',
    group: 'People & Body',
  },
  '🧑‍💻': {
    name: 'technologist',
    group: 'People & Body',
  },
  '👨‍💻': {
    name: 'man_technologist',
    group: 'People & Body',
  },
  '👩‍💻': {
    name: 'woman_technologist',
    group: 'People & Body',
  },
  '🧑‍🎤': {
    name: 'singer',
    group: 'People & Body',
  },
  '👨‍🎤': {
    name: 'man_singer',
    group: 'People & Body',
  },
  '👩‍🎤': {
    name: 'woman_singer',
    group: 'People & Body',
  },
  '🧑‍🎨': {
    name: 'artist',
    group: 'People & Body',
  },
  '👨‍🎨': {
    name: 'man_artist',
    group: 'People & Body',
  },
  '👩‍🎨': {
    name: 'woman_artist',
    group: 'People & Body',
  },
  '🧑‍✈️': {
    name: 'pilot',
    group: 'People & Body',
  },
  '👨‍✈️': {
    name: 'man_pilot',
    group: 'People & Body',
  },
  '👩‍✈️': {
    name: 'woman_pilot',
    group: 'People & Body',
  },
  '🧑‍🚀': {
    name: 'astronaut',
    group: 'People & Body',
  },
  '👨‍🚀': {
    name: 'man_astronaut',
    group: 'People & Body',
  },
  '👩‍🚀': {
    name: 'woman_astronaut',
    group: 'People & Body',
  },
  '🧑‍🚒': {
    name: 'firefighter',
    group: 'People & Body',
  },
  '👨‍🚒': {
    name: 'man_firefighter',
    group: 'People & Body',
  },
  '👩‍🚒': {
    name: 'woman_firefighter',
    group: 'People & Body',
  },
  '👮': {
    name: 'police_officer',
    group: 'People & Body',
  },
  '👮‍♂️': {
    name: 'man_police_officer',
    group: 'People & Body',
  },
  '👮‍♀️': {
    name: 'woman_police_officer',
    group: 'People & Body',
  },
  '🕵️': {
    name: 'detective',
    group: 'People & Body',
  },
  '🕵️‍♂️': {
    name: 'man_detective',
    group: 'People & Body',
  },
  '🕵️‍♀️': {
    name: 'woman_detective',
    group: 'People & Body',
  },
  '💂': {
    name: 'guard',
    group: 'People & Body',
  },
  '💂‍♂️': {
    name: 'man_guard',
    group: 'People & Body',
  },
  '💂‍♀️': {
    name: 'woman_guard',
    group: 'People & Body',
  },
  '🥷': {
    name: 'ninja',
    group: 'People & Body',
  },
  '👷': {
    name: 'construction_worker',
    group: 'People & Body',
  },
  '👷‍♂️': {
    name: 'man_construction_worker',
    group: 'People & Body',
  },
  '👷‍♀️': {
    name: 'woman_construction_worker',
    group: 'People & Body',
  },
  '🤴': {
    name: 'prince',
    group: 'People & Body',
  },
  '👸': {
    name: 'princess',
    group: 'People & Body',
  },
  '👳': {
    name: 'person_wearing_turban',
    group: 'People & Body',
  },
  '👳‍♂️': {
    name: 'man_wearing_turban',
    group: 'People & Body',
  },
  '👳‍♀️': {
    name: 'woman_wearing_turban',
    group: 'People & Body',
  },
  '👲': {
    name: 'person_with_skullcap',
    group: 'People & Body',
  },
  '🧕': {
    name: 'woman_with_headscarf',
    group: 'People & Body',
  },
  '🤵': {
    name: 'person_in_tuxedo',
    group: 'People & Body',
  },
  '🤵‍♂️': {
    name: 'man_in_tuxedo',
    group: 'People & Body',
  },
  '🤵‍♀️': {
    name: 'woman_in_tuxedo',
    group: 'People & Body',
  },
  '👰': {
    name: 'person_with_veil',
    group: 'People & Body',
  },
  '👰‍♂️': {
    name: 'man_with_veil',
    group: 'People & Body',
  },
  '👰‍♀️': {
    name: 'woman_with_veil',
    group: 'People & Body',
  },
  '🤰': {
    name: 'pregnant_woman',
    group: 'People & Body',
  },
  '🤱': {
    name: 'breast_feeding',
    group: 'People & Body',
  },
  '👩‍🍼': {
    name: 'woman_feeding_baby',
    group: 'People & Body',
  },
  '👨‍🍼': {
    name: 'man_feeding_baby',
    group: 'People & Body',
  },
  '🧑‍🍼': {
    name: 'person_feeding_baby',
    group: 'People & Body',
  },
  '👼': {
    name: 'baby_angel',
    group: 'People & Body',
  },
  '🎅': {
    name: 'santa_claus',
    group: 'People & Body',
  },
  '🤶': {
    name: 'mrs_claus',
    group: 'People & Body',
  },
  '🧑‍🎄': {
    name: 'mx_claus',
    group: 'People & Body',
  },
  '🦸': {
    name: 'superhero',
    group: 'People & Body',
  },
  '🦸‍♂️': {
    name: 'man_superhero',
    group: 'People & Body',
  },
  '🦸‍♀️': {
    name: 'woman_superhero',
    group: 'People & Body',
  },
  '🦹': {
    name: 'supervillain',
    group: 'People & Body',
  },
  '🦹‍♂️': {
    name: 'man_supervillain',
    group: 'People & Body',
  },
  '🦹‍♀️': {
    name: 'woman_supervillain',
    group: 'People & Body',
  },
  '🧙': {
    name: 'mage',
    group: 'People & Body',
  },
  '🧙‍♂️': {
    name: 'man_mage',
    group: 'People & Body',
  },
  '🧙‍♀️': {
    name: 'woman_mage',
    group: 'People & Body',
  },
  '🧚': {
    name: 'fairy',
    group: 'People & Body',
  },
  '🧚‍♂️': {
    name: 'man_fairy',
    group: 'People & Body',
  },
  '🧚‍♀️': {
    name: 'woman_fairy',
    group: 'People & Body',
  },
  '🧛': {
    name: 'vampire',
    group: 'People & Body',
  },
  '🧛‍♂️': {
    name: 'man_vampire',
    group: 'People & Body',
  },
  '🧛‍♀️': {
    name: 'woman_vampire',
    group: 'People & Body',
  },
  '🧜': {
    name: 'merperson',
    group: 'People & Body',
  },
  '🧜‍♂️': {
    name: 'merman',
    group: 'People & Body',
  },
  '🧜‍♀️': {
    name: 'mermaid',
    group: 'People & Body',
  },
  '🧝': {
    name: 'elf',
    group: 'People & Body',
  },
  '🧝‍♂️': {
    name: 'man_elf',
    group: 'People & Body',
  },
  '🧝‍♀️': {
    name: 'woman_elf',
    group: 'People & Body',
  },
  '🧞': {
    name: 'genie',
    group: 'People & Body',
  },
  '🧞‍♂️': {
    name: 'man_genie',
    group: 'People & Body',
  },
  '🧞‍♀️': {
    name: 'woman_genie',
    group: 'People & Body',
  },
  '🧟': {
    name: 'zombie',
    group: 'People & Body',
  },
  '🧟‍♂️': {
    name: 'man_zombie',
    group: 'People & Body',
  },
  '🧟‍♀️': {
    name: 'woman_zombie',
    group: 'People & Body',
  },
  '💆': {
    name: 'person_getting_massage',
    group: 'People & Body',
  },
  '💆‍♂️': {
    name: 'man_getting_massage',
    group: 'People & Body',
  },
  '💆‍♀️': {
    name: 'woman_getting_massage',
    group: 'People & Body',
  },
  '💇': {
    name: 'person_getting_haircut',
    group: 'People & Body',
  },
  '💇‍♂️': {
    name: 'man_getting_haircut',
    group: 'People & Body',
  },
  '💇‍♀️': {
    name: 'woman_getting_haircut',
    group: 'People & Body',
  },
  '🚶': {
    name: 'person_walking',
    group: 'People & Body',
  },
  '🚶‍♂️': {
    name: 'man_walking',
    group: 'People & Body',
  },
  '🚶‍♀️': {
    name: 'woman_walking',
    group: 'People & Body',
  },
  '🧍': {
    name: 'person_standing',
    group: 'People & Body',
  },
  '🧍‍♂️': {
    name: 'man_standing',
    group: 'People & Body',
  },
  '🧍‍♀️': {
    name: 'woman_standing',
    group: 'People & Body',
  },
  '🧎': {
    name: 'person_kneeling',
    group: 'People & Body',
  },
  '🧎‍♂️': {
    name: 'man_kneeling',
    group: 'People & Body',
  },
  '🧎‍♀️': {
    name: 'woman_kneeling',
    group: 'People & Body',
  },
  '🧑‍🦯': {
    name: 'person_with_white_cane',
    group: 'People & Body',
  },
  '👨‍🦯': {
    name: 'man_with_white_cane',
    group: 'People & Body',
  },
  '👩‍🦯': {
    name: 'woman_with_white_cane',
    group: 'People & Body',
  },
  '🧑‍🦼': {
    name: 'person_in_motorized_wheelchair',
    group: 'People & Body',
  },
  '👨‍🦼': {
    name: 'man_in_motorized_wheelchair',
    group: 'People & Body',
  },
  '👩‍🦼': {
    name: 'woman_in_motorized_wheelchair',
    group: 'People & Body',
  },
  '🧑‍🦽': {
    name: 'person_in_manual_wheelchair',
    group: 'People & Body',
  },
  '👨‍🦽': {
    name: 'man_in_manual_wheelchair',
    group: 'People & Body',
  },
  '👩‍🦽': {
    name: 'woman_in_manual_wheelchair',
    group: 'People & Body',
  },
  '🏃': {
    name: 'person_running',
    group: 'People & Body',
  },
  '🏃‍♂️': {
    name: 'man_running',
    group: 'People & Body',
  },
  '🏃‍♀️': {
    name: 'woman_running',
    group: 'People & Body',
  },
  '💃': {
    name: 'woman_dancing',
    group: 'People & Body',
  },
  '🕺': {
    name: 'man_dancing',
    group: 'People & Body',
  },
  '🕴️': {
    name: 'person_in_suit_levitating',
    group: 'People & Body',
  },
  '👯': {
    name: 'people_with_bunny_ears',
    group: 'People & Body',
  },
  '👯‍♂️': {
    name: 'men_with_bunny_ears',
    group: 'People & Body',
  },
  '👯‍♀️': {
    name: 'women_with_bunny_ears',
    group: 'People & Body',
  },
  '🧖': {
    name: 'person_in_steamy_room',
    group: 'People & Body',
  },
  '🧖‍♂️': {
    name: 'man_in_steamy_room',
    group: 'People & Body',
  },
  '🧖‍♀️': {
    name: 'woman_in_steamy_room',
    group: 'People & Body',
  },
  '🧗': {
    name: 'person_climbing',
    group: 'People & Body',
  },
  '🧗‍♂️': {
    name: 'man_climbing',
    group: 'People & Body',
  },
  '🧗‍♀️': {
    name: 'woman_climbing',
    group: 'People & Body',
  },
  '🤺': {
    name: 'person_fencing',
    group: 'People & Body',
  },
  '🏇': {
    name: 'horse_racing',
    group: 'People & Body',
  },
  '⛷️': {
    name: 'skier',
    group: 'People & Body',
  },
  '🏂': {
    name: 'snowboarder',
    group: 'People & Body',
  },
  '🏌️': {
    name: 'person_golfing',
    group: 'People & Body',
  },
  '🏌️‍♂️': {
    name: 'man_golfing',
    group: 'People & Body',
  },
  '🏌️‍♀️': {
    name: 'woman_golfing',
    group: 'People & Body',
  },
  '🏄': {
    name: 'person_surfing',
    group: 'People & Body',
  },
  '🏄‍♂️': {
    name: 'man_surfing',
    group: 'People & Body',
  },
  '🏄‍♀️': {
    name: 'woman_surfing',
    group: 'People & Body',
  },
  '🚣': {
    name: 'person_rowing_boat',
    group: 'People & Body',
  },
  '🚣‍♂️': {
    name: 'man_rowing_boat',
    group: 'People & Body',
  },
  '🚣‍♀️': {
    name: 'woman_rowing_boat',
    group: 'People & Body',
  },
  '🏊': {
    name: 'person_swimming',
    group: 'People & Body',
  },
  '🏊‍♂️': {
    name: 'man_swimming',
    group: 'People & Body',
  },
  '🏊‍♀️': {
    name: 'woman_swimming',
    group: 'People & Body',
  },
  '⛹️': {
    name: 'person_bouncing_ball',
    group: 'People & Body',
  },
  '⛹️‍♂️': {
    name: 'man_bouncing_ball',
    group: 'People & Body',
  },
  '⛹️‍♀️': {
    name: 'woman_bouncing_ball',
    group: 'People & Body',
  },
  '🏋️': {
    name: 'person_lifting_weights',
    group: 'People & Body',
  },
  '🏋️‍♂️': {
    name: 'man_lifting_weights',
    group: 'People & Body',
  },
  '🏋️‍♀️': {
    name: 'woman_lifting_weights',
    group: 'People & Body',
  },
  '🚴': {
    name: 'person_biking',
    group: 'People & Body',
  },
  '🚴‍♂️': {
    name: 'man_biking',
    group: 'People & Body',
  },
  '🚴‍♀️': {
    name: 'woman_biking',
    group: 'People & Body',
  },
  '🚵': {
    name: 'person_mountain_biking',
    group: 'People & Body',
  },
  '🚵‍♂️': {
    name: 'man_mountain_biking',
    group: 'People & Body',
  },
  '🚵‍♀️': {
    name: 'woman_mountain_biking',
    group: 'People & Body',
  },
  '🤸': {
    name: 'person_cartwheeling',
    group: 'People & Body',
  },
  '🤸‍♂️': {
    name: 'man_cartwheeling',
    group: 'People & Body',
  },
  '🤸‍♀️': {
    name: 'woman_cartwheeling',
    group: 'People & Body',
  },
  '🤼': {
    name: 'people_wrestling',
    group: 'People & Body',
  },
  '🤼‍♂️': {
    name: 'men_wrestling',
    group: 'People & Body',
  },
  '🤼‍♀️': {
    name: 'women_wrestling',
    group: 'People & Body',
  },
  '🤽': {
    name: 'person_playing_water_polo',
    group: 'People & Body',
  },
  '🤽‍♂️': {
    name: 'man_playing_water_polo',
    group: 'People & Body',
  },
  '🤽‍♀️': {
    name: 'woman_playing_water_polo',
    group: 'People & Body',
  },
  '🤾': {
    name: 'person_playing_handball',
    group: 'People & Body',
  },
  '🤾‍♂️': {
    name: 'man_playing_handball',
    group: 'People & Body',
  },
  '🤾‍♀️': {
    name: 'woman_playing_handball',
    group: 'People & Body',
  },
  '🤹': {
    name: 'person_juggling',
    group: 'People & Body',
  },
  '🤹‍♂️': {
    name: 'man_juggling',
    group: 'People & Body',
  },
  '🤹‍♀️': {
    name: 'woman_juggling',
    group: 'People & Body',
  },
  '🧘': {
    name: 'person_in_lotus_position',
    group: 'People & Body',
  },
  '🧘‍♂️': {
    name: 'man_in_lotus_position',
    group: 'People & Body',
  },
  '🧘‍♀️': {
    name: 'woman_in_lotus_position',
    group: 'People & Body',
  },
  '🛀': {
    name: 'person_taking_bath',
    group: 'People & Body',
  },
  '🛌': {
    name: 'person_in_bed',
    group: 'People & Body',
  },
  '🧑‍🤝‍🧑': {
    name: 'people_holding_hands',
    group: 'People & Body',
  },
  '👭': {
    name: 'women_holding_hands',
    group: 'People & Body',
  },
  '👫': {
    name: 'woman_and_man_holding_hands',
    group: 'People & Body',
  },
  '👬': {
    name: 'men_holding_hands',
    group: 'People & Body',
  },
  '💏': {
    name: 'kiss',
    group: 'People & Body',
  },
  '👩‍❤️‍💋‍👨': {
    name: 'kiss_woman_man',
    group: 'People & Body',
  },
  '👨‍❤️‍💋‍👨': {
    name: 'kiss_man_man',
    group: 'People & Body',
  },
  '👩‍❤️‍💋‍👩': {
    name: 'kiss_woman_woman',
    group: 'People & Body',
  },
  '💑': {
    name: 'couple_with_heart',
    group: 'People & Body',
  },
  '👩‍❤️‍👨': {
    name: 'couple_with_heart_woman_man',
    group: 'People & Body',
  },
  '👨‍❤️‍👨': {
    name: 'couple_with_heart_man_man',
    group: 'People & Body',
  },
  '👩‍❤️‍👩': {
    name: 'couple_with_heart_woman_woman',
    group: 'People & Body',
  },
  '👪': {
    name: 'family',
    group: 'People & Body',
  },
  '👨‍👩‍👦': {
    name: 'family_man_woman_boy',
    group: 'People & Body',
  },
  '👨‍👩‍👧': {
    name: 'family_man_woman_girl',
    group: 'People & Body',
  },
  '👨‍👩‍👧‍👦': {
    name: 'family_man_woman_girl_boy',
    group: 'People & Body',
  },
  '👨‍👩‍👦‍👦': {
    name: 'family_man_woman_boy_boy',
    group: 'People & Body',
  },
  '👨‍👩‍👧‍👧': {
    name: 'family_man_woman_girl_girl',
    group: 'People & Body',
  },
  '👨‍👨‍👦': {
    name: 'family_man_man_boy',
    group: 'People & Body',
  },
  '👨‍👨‍👧': {
    name: 'family_man_man_girl',
    group: 'People & Body',
  },
  '👨‍👨‍👧‍👦': {
    name: 'family_man_man_girl_boy',
    group: 'People & Body',
  },
  '👨‍👨‍👦‍👦': {
    name: 'family_man_man_boy_boy',
    group: 'People & Body',
  },
  '👨‍👨‍👧‍👧': {
    name: 'family_man_man_girl_girl',
    group: 'People & Body',
  },
  '👩‍👩‍👦': {
    name: 'family_woman_woman_boy',
    group: 'People & Body',
  },
  '👩‍👩‍👧': {
    name: 'family_woman_woman_girl',
    group: 'People & Body',
  },
  '👩‍👩‍👧‍👦': {
    name: 'family_woman_woman_girl_boy',
    group: 'People & Body',
  },
  '👩‍👩‍👦‍👦': {
    name: 'family_woman_woman_boy_boy',
    group: 'People & Body',
  },
  '👩‍👩‍👧‍👧': {
    name: 'family_woman_woman_girl_girl',
    group: 'People & Body',
  },
  '👨‍👦': {
    name: 'family_man_boy',
    group: 'People & Body',
  },
  '👨‍👦‍👦': {
    name: 'family_man_boy_boy',
    group: 'People & Body',
  },
  '👨‍👧': {
    name: 'family_man_girl',
    group: 'People & Body',
  },
  '👨‍👧‍👦': {
    name: 'family_man_girl_boy',
    group: 'People & Body',
  },
  '👨‍👧‍👧': {
    name: 'family_man_girl_girl',
    group: 'People & Body',
  },
  '👩‍👦': {
    name: 'family_woman_boy',
    group: 'People & Body',
  },
  '👩‍👦‍👦': {
    name: 'family_woman_boy_boy',
    group: 'People & Body',
  },
  '👩‍👧': {
    name: 'family_woman_girl',
    group: 'People & Body',
  },
  '👩‍👧‍👦': {
    name: 'family_woman_girl_boy',
    group: 'People & Body',
  },
  '👩‍👧‍👧': {
    name: 'family_woman_girl_girl',
    group: 'People & Body',
  },
  '🗣️': {
    name: 'speaking_head',
    group: 'People & Body',
  },
  '👤': {
    name: 'bust_in_silhouette',
    group: 'People & Body',
  },
  '👥': {
    name: 'busts_in_silhouette',
    group: 'People & Body',
  },
  '🫂': {
    name: 'people_hugging',
    group: 'People & Body',
  },
  '👣': {
    name: 'footprints',
    group: 'People & Body',
  },
  '🐵': {
    name: 'monkey_face',
    group: 'Animals & Nature',
  },
  '🐒': {
    name: 'monkey',
    group: 'Animals & Nature',
  },
  '🦍': {
    name: 'gorilla',
    group: 'Animals & Nature',
  },
  '🦧': {
    name: 'orangutan',
    group: 'Animals & Nature',
  },
  '🐶': {
    name: 'dog_face',
    group: 'Animals & Nature',
  },
  '🐕': {
    name: 'dog',
    group: 'Animals & Nature',
  },
  '🦮': {
    name: 'guide_dog',
    group: 'Animals & Nature',
  },
  '🐕‍🦺': {
    name: 'service_dog',
    group: 'Animals & Nature',
  },
  '🐩': {
    name: 'poodle',
    group: 'Animals & Nature',
  },
  '🐺': {
    name: 'wolf',
    group: 'Animals & Nature',
  },
  '🦊': {
    name: 'fox',
    group: 'Animals & Nature',
  },
  '🦝': {
    name: 'raccoon',
    group: 'Animals & Nature',
  },
  '🐱': {
    name: 'cat_face',
    group: 'Animals & Nature',
  },
  '🐈': {
    name: 'cat',
    group: 'Animals & Nature',
  },
  '🐈‍⬛': {
    name: 'black_cat',
    group: 'Animals & Nature',
  },
  '🦁': {
    name: 'lion',
    group: 'Animals & Nature',
  },
  '🐯': {
    name: 'tiger_face',
    group: 'Animals & Nature',
  },
  '🐅': {
    name: 'tiger',
    group: 'Animals & Nature',
  },
  '🐆': {
    name: 'leopard',
    group: 'Animals & Nature',
  },
  '🐴': {
    name: 'horse_face',
    group: 'Animals & Nature',
  },
  '🐎': {
    name: 'horse',
    group: 'Animals & Nature',
  },
  '🦄': {
    name: 'unicorn',
    group: 'Animals & Nature',
  },
  '🦓': {
    name: 'zebra',
    group: 'Animals & Nature',
  },
  '🦌': {
    name: 'deer',
    group: 'Animals & Nature',
  },
  '🦬': {
    name: 'bison',
    group: 'Animals & Nature',
  },
  '🐮': {
    name: 'cow_face',
    group: 'Animals & Nature',
  },
  '🐂': {
    name: 'ox',
    group: 'Animals & Nature',
  },
  '🐃': {
    name: 'water_buffalo',
    group: 'Animals & Nature',
  },
  '🐄': {
    name: 'cow',
    group: 'Animals & Nature',
  },
  '🐷': {
    name: 'pig_face',
    group: 'Animals & Nature',
  },
  '🐖': {
    name: 'pig',
    group: 'Animals & Nature',
  },
  '🐗': {
    name: 'boar',
    group: 'Animals & Nature',
  },
  '🐽': {
    name: 'pig_nose',
    group: 'Animals & Nature',
  },
  '🐏': {
    name: 'ram',
    group: 'Animals & Nature',
  },
  '🐑': {
    name: 'ewe',
    group: 'Animals & Nature',
  },
  '🐐': {
    name: 'goat',
    group: 'Animals & Nature',
  },
  '🐪': {
    name: 'camel',
    group: 'Animals & Nature',
  },
  '🐫': {
    name: 'two_hump_camel',
    group: 'Animals & Nature',
  },
  '🦙': {
    name: 'llama',
    group: 'Animals & Nature',
  },
  '🦒': {
    name: 'giraffe',
    group: 'Animals & Nature',
  },
  '🐘': {
    name: 'elephant',
    group: 'Animals & Nature',
  },
  '🦣': {
    name: 'mammoth',
    group: 'Animals & Nature',
  },
  '🦏': {
    name: 'rhinoceros',
    group: 'Animals & Nature',
  },
  '🦛': {
    name: 'hippopotamus',
    group: 'Animals & Nature',
  },
  '🐭': {
    name: 'mouse_face',
    group: 'Animals & Nature',
  },
  '🐁': {
    name: 'mouse',
    group: 'Animals & Nature',
  },
  '🐀': {
    name: 'rat',
    group: 'Animals & Nature',
  },
  '🐹': {
    name: 'hamster',
    group: 'Animals & Nature',
  },
  '🐰': {
    name: 'rabbit_face',
    group: 'Animals & Nature',
  },
  '🐇': {
    name: 'rabbit',
    group: 'Animals & Nature',
  },
  '🐿️': {
    name: 'chipmunk',
    group: 'Animals & Nature',
  },
  '🦫': {
    name: 'beaver',
    group: 'Animals & Nature',
  },
  '🦔': {
    name: 'hedgehog',
    group: 'Animals & Nature',
  },
  '🦇': {
    name: 'bat',
    group: 'Animals & Nature',
  },
  '🐻': {
    name: 'bear',
    group: 'Animals & Nature',
  },
  '🐻‍❄️': {
    name: 'polar_bear',
    group: 'Animals & Nature',
  },
  '🐨': {
    name: 'koala',
    group: 'Animals & Nature',
  },
  '🐼': {
    name: 'panda',
    group: 'Animals & Nature',
  },
  '🦥': {
    name: 'sloth',
    group: 'Animals & Nature',
  },
  '🦦': {
    name: 'otter',
    group: 'Animals & Nature',
  },
  '🦨': {
    name: 'skunk',
    group: 'Animals & Nature',
  },
  '🦘': {
    name: 'kangaroo',
    group: 'Animals & Nature',
  },
  '🦡': {
    name: 'badger',
    group: 'Animals & Nature',
  },
  '🐾': {
    name: 'paw_prints',
    group: 'Animals & Nature',
  },
  '🦃': {
    name: 'turkey',
    group: 'Animals & Nature',
  },
  '🐔': {
    name: 'chicken',
    group: 'Animals & Nature',
  },
  '🐓': {
    name: 'rooster',
    group: 'Animals & Nature',
  },
  '🐣': {
    name: 'hatching_chick',
    group: 'Animals & Nature',
  },
  '🐤': {
    name: 'baby_chick',
    group: 'Animals & Nature',
  },
  '🐥': {
    name: 'front_facing_baby_chick',
    group: 'Animals & Nature',
  },
  '🐦': {
    name: 'bird',
    group: 'Animals & Nature',
  },
  '🐧': {
    name: 'penguin',
    group: 'Animals & Nature',
  },
  '🕊️': {
    name: 'dove',
    group: 'Animals & Nature',
  },
  '🦅': {
    name: 'eagle',
    group: 'Animals & Nature',
  },
  '🦆': {
    name: 'duck',
    group: 'Animals & Nature',
  },
  '🦢': {
    name: 'swan',
    group: 'Animals & Nature',
  },
  '🦉': {
    name: 'owl',
    group: 'Animals & Nature',
  },
  '🦤': {
    name: 'dodo',
    group: 'Animals & Nature',
  },
  '🪶': {
    name: 'feather',
    group: 'Animals & Nature',
  },
  '🦩': {
    name: 'flamingo',
    group: 'Animals & Nature',
  },
  '🦚': {
    name: 'peacock',
    group: 'Animals & Nature',
  },
  '🦜': {
    name: 'parrot',
    group: 'Animals & Nature',
  },
  '🐸': {
    name: 'frog',
    group: 'Animals & Nature',
  },
  '🐊': {
    name: 'crocodile',
    group: 'Animals & Nature',
  },
  '🐢': {
    name: 'turtle',
    group: 'Animals & Nature',
  },
  '🦎': {
    name: 'lizard',
    group: 'Animals & Nature',
  },
  '🐍': {
    name: 'snake',
    group: 'Animals & Nature',
  },
  '🐲': {
    name: 'dragon_face',
    group: 'Animals & Nature',
  },
  '🐉': {
    name: 'dragon',
    group: 'Animals & Nature',
  },
  '🦕': {
    name: 'sauropod',
    group: 'Animals & Nature',
  },
  '🦖': {
    name: 't_rex',
    group: 'Animals & Nature',
  },
  '🐳': {
    name: 'spouting_whale',
    group: 'Animals & Nature',
  },
  '🐋': {
    name: 'whale',
    group: 'Animals & Nature',
  },
  '🐬': {
    name: 'dolphin',
    group: 'Animals & Nature',
  },
  '🦭': {
    name: 'seal',
    group: 'Animals & Nature',
  },
  '🐟': {
    name: 'fish',
    group: 'Animals & Nature',
  },
  '🐠': {
    name: 'tropical_fish',
    group: 'Animals & Nature',
  },
  '🐡': {
    name: 'blowfish',
    group: 'Animals & Nature',
  },
  '🦈': {
    name: 'shark',
    group: 'Animals & Nature',
  },
  '🐙': {
    name: 'octopus',
    group: 'Animals & Nature',
  },
  '🐚': {
    name: 'spiral_shell',
    group: 'Animals & Nature',
  },
  '🐌': {
    name: 'snail',
    group: 'Animals & Nature',
  },
  '🦋': {
    name: 'butterfly',
    group: 'Animals & Nature',
  },
  '🐛': {
    name: 'bug',
    group: 'Animals & Nature',
  },
  '🐜': {
    name: 'ant',
    group: 'Animals & Nature',
  },
  '🐝': {
    name: 'honeybee',
    group: 'Animals & Nature',
  },
  '🪲': {
    name: 'beetle',
    group: 'Animals & Nature',
  },
  '🐞': {
    name: 'lady_beetle',
    group: 'Animals & Nature',
  },
  '🦗': {
    name: 'cricket',
    group: 'Animals & Nature',
  },
  '🪳': {
    name: 'cockroach',
    group: 'Animals & Nature',
  },
  '🕷️': {
    name: 'spider',
    group: 'Animals & Nature',
  },
  '🕸️': {
    name: 'spider_web',
    group: 'Animals & Nature',
  },
  '🦂': {
    name: 'scorpion',
    group: 'Animals & Nature',
  },
  '🦟': {
    name: 'mosquito',
    group: 'Animals & Nature',
  },
  '🪰': {
    name: 'fly',
    group: 'Animals & Nature',
  },
  '🪱': {
    name: 'worm',
    group: 'Animals & Nature',
  },
  '🦠': {
    name: 'microbe',
    group: 'Animals & Nature',
  },
  '💐': {
    name: 'bouquet',
    group: 'Animals & Nature',
  },
  '🌸': {
    name: 'cherry_blossom',
    group: 'Animals & Nature',
  },
  '💮': {
    name: 'white_flower',
    group: 'Animals & Nature',
  },
  '🏵️': {
    name: 'rosette',
    group: 'Animals & Nature',
  },
  '🌹': {
    name: 'rose',
    group: 'Animals & Nature',
  },
  '🥀': {
    name: 'wilted_flower',
    group: 'Animals & Nature',
  },
  '🌺': {
    name: 'hibiscus',
    group: 'Animals & Nature',
  },
  '🌻': {
    name: 'sunflower',
    group: 'Animals & Nature',
  },
  '🌼': {
    name: 'blossom',
    group: 'Animals & Nature',
  },
  '🌷': {
    name: 'tulip',
    group: 'Animals & Nature',
  },
  '🌱': {
    name: 'seedling',
    group: 'Animals & Nature',
  },
  '🪴': {
    name: 'potted_plant',
    group: 'Animals & Nature',
  },
  '🌲': {
    name: 'evergreen_tree',
    group: 'Animals & Nature',
  },
  '🌳': {
    name: 'deciduous_tree',
    group: 'Animals & Nature',
  },
  '🌴': {
    name: 'palm_tree',
    group: 'Animals & Nature',
  },
  '🌵': {
    name: 'cactus',
    group: 'Animals & Nature',
  },
  '🌾': {
    name: 'sheaf_of_rice',
    group: 'Animals & Nature',
  },
  '🌿': {
    name: 'herb',
    group: 'Animals & Nature',
  },
  '☘️': {
    name: 'shamrock',
    group: 'Animals & Nature',
  },
  '🍀': {
    name: 'four_leaf_clover',
    group: 'Animals & Nature',
  },
  '🍁': {
    name: 'maple_leaf',
    group: 'Animals & Nature',
  },
  '🍂': {
    name: 'fallen_leaf',
    group: 'Animals & Nature',
  },
  '🍃': {
    name: 'leaf_fluttering_in_wind',
    group: 'Animals & Nature',
  },
  '🍇': {
    name: 'grapes',
    group: 'Food & Drink',
  },
  '🍈': {
    name: 'melon',
    group: 'Food & Drink',
  },
  '🍉': {
    name: 'watermelon',
    group: 'Food & Drink',
  },
  '🍊': {
    name: 'tangerine',
    group: 'Food & Drink',
  },
  '🍋': {
    name: 'lemon',
    group: 'Food & Drink',
  },
  '🍌': {
    name: 'banana',
    group: 'Food & Drink',
  },
  '🍍': {
    name: 'pineapple',
    group: 'Food & Drink',
  },
  '🥭': {
    name: 'mango',
    group: 'Food & Drink',
  },
  '🍎': {
    name: 'red_apple',
    group: 'Food & Drink',
  },
  '🍏': {
    name: 'green_apple',
    group: 'Food & Drink',
  },
  '🍐': {
    name: 'pear',
    group: 'Food & Drink',
  },
  '🍑': {
    name: 'peach',
    group: 'Food & Drink',
  },
  '🍒': {
    name: 'cherries',
    group: 'Food & Drink',
  },
  '🍓': {
    name: 'strawberry',
    group: 'Food & Drink',
  },
  '🫐': {
    name: 'blueberries',
    group: 'Food & Drink',
  },
  '🥝': {
    name: 'kiwi_fruit',
    group: 'Food & Drink',
  },
  '🍅': {
    name: 'tomato',
    group: 'Food & Drink',
  },
  '🫒': {
    name: 'olive',
    group: 'Food & Drink',
  },
  '🥥': {
    name: 'coconut',
    group: 'Food & Drink',
  },
  '🥑': {
    name: 'avocado',
    group: 'Food & Drink',
  },
  '🍆': {
    name: 'eggplant',
    group: 'Food & Drink',
  },
  '🥔': {
    name: 'potato',
    group: 'Food & Drink',
  },
  '🥕': {
    name: 'carrot',
    group: 'Food & Drink',
  },
  '🌽': {
    name: 'ear_of_corn',
    group: 'Food & Drink',
  },
  '🌶️': {
    name: 'hot_pepper',
    group: 'Food & Drink',
  },
  '🫑': {
    name: 'bell_pepper',
    group: 'Food & Drink',
  },
  '🥒': {
    name: 'cucumber',
    group: 'Food & Drink',
  },
  '🥬': {
    name: 'leafy_green',
    group: 'Food & Drink',
  },
  '🥦': {
    name: 'broccoli',
    group: 'Food & Drink',
  },
  '🧄': {
    name: 'garlic',
    group: 'Food & Drink',
  },
  '🧅': {
    name: 'onion',
    group: 'Food & Drink',
  },
  '🍄': {
    name: 'mushroom',
    group: 'Food & Drink',
  },
  '🥜': {
    name: 'peanuts',
    group: 'Food & Drink',
  },
  '🌰': {
    name: 'chestnut',
    group: 'Food & Drink',
  },
  '🍞': {
    name: 'bread',
    group: 'Food & Drink',
  },
  '🥐': {
    name: 'croissant',
    group: 'Food & Drink',
  },
  '🥖': {
    name: 'baguette_bread',
    group: 'Food & Drink',
  },
  '🫓': {
    name: 'flatbread',
    group: 'Food & Drink',
  },
  '🥨': {
    name: 'pretzel',
    group: 'Food & Drink',
  },
  '🥯': {
    name: 'bagel',
    group: 'Food & Drink',
  },
  '🥞': {
    name: 'pancakes',
    group: 'Food & Drink',
  },
  '🧇': {
    name: 'waffle',
    group: 'Food & Drink',
  },
  '🧀': {
    name: 'cheese_wedge',
    group: 'Food & Drink',
  },
  '🍖': {
    name: 'meat_on_bone',
    group: 'Food & Drink',
  },
  '🍗': {
    name: 'poultry_leg',
    group: 'Food & Drink',
  },
  '🥩': {
    name: 'cut_of_meat',
    group: 'Food & Drink',
  },
  '🥓': {
    name: 'bacon',
    group: 'Food & Drink',
  },
  '🍔': {
    name: 'hamburger',
    group: 'Food & Drink',
  },
  '🍟': {
    name: 'french_fries',
    group: 'Food & Drink',
  },
  '🍕': {
    name: 'pizza',
    group: 'Food & Drink',
  },
  '🌭': {
    name: 'hot_dog',
    group: 'Food & Drink',
  },
  '🥪': {
    name: 'sandwich',
    group: 'Food & Drink',
  },
  '🌮': {
    name: 'taco',
    group: 'Food & Drink',
  },
  '🌯': {
    name: 'burrito',
    group: 'Food & Drink',
  },
  '🫔': {
    name: 'tamale',
    group: 'Food & Drink',
  },
  '🥙': {
    name: 'stuffed_flatbread',
    group: 'Food & Drink',
  },
  '🧆': {
    name: 'falafel',
    group: 'Food & Drink',
  },
  '🥚': {
    name: 'egg',
    group: 'Food & Drink',
  },
  '🍳': {
    name: 'cooking',
    group: 'Food & Drink',
  },
  '🥘': {
    name: 'shallow_pan_of_food',
    group: 'Food & Drink',
  },
  '🍲': {
    name: 'pot_of_food',
    group: 'Food & Drink',
  },
  '🫕': {
    name: 'fondue',
    group: 'Food & Drink',
  },
  '🥣': {
    name: 'bowl_with_spoon',
    group: 'Food & Drink',
  },
  '🥗': {
    name: 'green_salad',
    group: 'Food & Drink',
  },
  '🍿': {
    name: 'popcorn',
    group: 'Food & Drink',
  },
  '🧈': {
    name: 'butter',
    group: 'Food & Drink',
  },
  '🧂': {
    name: 'salt',
    group: 'Food & Drink',
  },
  '🥫': {
    name: 'canned_food',
    group: 'Food & Drink',
  },
  '🍱': {
    name: 'bento_box',
    group: 'Food & Drink',
  },
  '🍘': {
    name: 'rice_cracker',
    group: 'Food & Drink',
  },
  '🍙': {
    name: 'rice_ball',
    group: 'Food & Drink',
  },
  '🍚': {
    name: 'cooked_rice',
    group: 'Food & Drink',
  },
  '🍛': {
    name: 'curry_rice',
    group: 'Food & Drink',
  },
  '🍜': {
    name: 'steaming_bowl',
    group: 'Food & Drink',
  },
  '🍝': {
    name: 'spaghetti',
    group: 'Food & Drink',
  },
  '🍠': {
    name: 'roasted_sweet_potato',
    group: 'Food & Drink',
  },
  '🍢': {
    name: 'oden',
    group: 'Food & Drink',
  },
  '🍣': {
    name: 'sushi',
    group: 'Food & Drink',
  },
  '🍤': {
    name: 'fried_shrimp',
    group: 'Food & Drink',
  },
  '🍥': {
    name: 'fish_cake_with_swirl',
    group: 'Food & Drink',
  },
  '🥮': {
    name: 'moon_cake',
    group: 'Food & Drink',
  },
  '🍡': {
    name: 'dango',
    group: 'Food & Drink',
  },
  '🥟': {
    name: 'dumpling',
    group: 'Food & Drink',
  },
  '🥠': {
    name: 'fortune_cookie',
    group: 'Food & Drink',
  },
  '🥡': {
    name: 'takeout_box',
    group: 'Food & Drink',
  },
  '🦀': {
    name: 'crab',
    group: 'Food & Drink',
  },
  '🦞': {
    name: 'lobster',
    group: 'Food & Drink',
  },
  '🦐': {
    name: 'shrimp',
    group: 'Food & Drink',
  },
  '🦑': {
    name: 'squid',
    group: 'Food & Drink',
  },
  '🦪': {
    name: 'oyster',
    group: 'Food & Drink',
  },
  '🍦': {
    name: 'soft_ice_cream',
    group: 'Food & Drink',
  },
  '🍧': {
    name: 'shaved_ice',
    group: 'Food & Drink',
  },
  '🍨': {
    name: 'ice_cream',
    group: 'Food & Drink',
  },
  '🍩': {
    name: 'doughnut',
    group: 'Food & Drink',
  },
  '🍪': {
    name: 'cookie',
    group: 'Food & Drink',
  },
  '🎂': {
    name: 'birthday_cake',
    group: 'Food & Drink',
  },
  '🍰': {
    name: 'shortcake',
    group: 'Food & Drink',
  },
  '🧁': {
    name: 'cupcake',
    group: 'Food & Drink',
  },
  '🥧': {
    name: 'pie',
    group: 'Food & Drink',
  },
  '🍫': {
    name: 'chocolate_bar',
    group: 'Food & Drink',
  },
  '🍬': {
    name: 'candy',
    group: 'Food & Drink',
  },
  '🍭': {
    name: 'lollipop',
    group: 'Food & Drink',
  },
  '🍮': {
    name: 'custard',
    group: 'Food & Drink',
  },
  '🍯': {
    name: 'honey_pot',
    group: 'Food & Drink',
  },
  '🍼': {
    name: 'baby_bottle',
    group: 'Food & Drink',
  },
  '🥛': {
    name: 'glass_of_milk',
    group: 'Food & Drink',
  },
  '☕': {
    name: 'hot_beverage',
    group: 'Food & Drink',
  },
  '🫖': {
    name: 'teapot',
    group: 'Food & Drink',
  },
  '🍵': {
    name: 'teacup_without_handle',
    group: 'Food & Drink',
  },
  '🍶': {
    name: 'sake',
    group: 'Food & Drink',
  },
  '🍾': {
    name: 'bottle_with_popping_cork',
    group: 'Food & Drink',
  },
  '🍷': {
    name: 'wine_glass',
    group: 'Food & Drink',
  },
  '🍸': {
    name: 'cocktail_glass',
    group: 'Food & Drink',
  },
  '🍹': {
    name: 'tropical_drink',
    group: 'Food & Drink',
  },
  '🍺': {
    name: 'beer_mug',
    group: 'Food & Drink',
  },
  '🍻': {
    name: 'clinking_beer_mugs',
    group: 'Food & Drink',
  },
  '🥂': {
    name: 'clinking_glasses',
    group: 'Food & Drink',
  },
  '🥃': {
    name: 'tumbler_glass',
    group: 'Food & Drink',
  },
  '🥤': {
    name: 'cup_with_straw',
    group: 'Food & Drink',
  },
  '🧋': {
    name: 'bubble_tea',
    group: 'Food & Drink',
  },
  '🧃': {
    name: 'beverage_box',
    group: 'Food & Drink',
  },
  '🧉': {
    name: 'mate',
    group: 'Food & Drink',
  },
  '🧊': {
    name: 'ice',
    group: 'Food & Drink',
  },
  '🥢': {
    name: 'chopsticks',
    group: 'Food & Drink',
  },
  '🍽️': {
    name: 'fork_and_knife_with_plate',
    group: 'Food & Drink',
  },
  '🍴': {
    name: 'fork_and_knife',
    group: 'Food & Drink',
  },
  '🥄': {
    name: 'spoon',
    group: 'Food & Drink',
  },
  '🔪': {
    name: 'kitchen_knife',
    group: 'Food & Drink',
  },
  '🏺': {
    name: 'amphora',
    group: 'Food & Drink',
  },
  '🌍': {
    name: 'globe_showing_europe_africa',
    group: 'Travel & Places',
  },
  '🌎': {
    name: 'globe_showing_americas',
    group: 'Travel & Places',
  },
  '🌏': {
    name: 'globe_showing_asia_australia',
    group: 'Travel & Places',
  },
  '🌐': {
    name: 'globe_with_meridians',
    group: 'Travel & Places',
  },
  '🗺️': {
    name: 'world_map',
    group: 'Travel & Places',
  },
  '🗾': {
    name: 'map_of_japan',
    group: 'Travel & Places',
  },
  '🧭': {
    name: 'compass',
    group: 'Travel & Places',
  },
  '🏔️': {
    name: 'snow_capped_mountain',
    group: 'Travel & Places',
  },
  '⛰️': {
    name: 'mountain',
    group: 'Travel & Places',
  },
  '🌋': {
    name: 'volcano',
    group: 'Travel & Places',
  },
  '🗻': {
    name: 'mount_fuji',
    group: 'Travel & Places',
  },
  '🏕️': {
    name: 'camping',
    group: 'Travel & Places',
  },
  '🏖️': {
    name: 'beach_with_umbrella',
    group: 'Travel & Places',
  },
  '🏜️': {
    name: 'desert',
    group: 'Travel & Places',
  },
  '🏝️': {
    name: 'desert_island',
    group: 'Travel & Places',
  },
  '🏞️': {
    name: 'national_park',
    group: 'Travel & Places',
  },
  '🏟️': {
    name: 'stadium',
    group: 'Travel & Places',
  },
  '🏛️': {
    name: 'classical_building',
    group: 'Travel & Places',
  },
  '🏗️': {
    name: 'building_construction',
    group: 'Travel & Places',
  },
  '🧱': {
    name: 'brick',
    group: 'Travel & Places',
  },
  '🪨': {
    name: 'rock',
    group: 'Travel & Places',
  },
  '🪵': {
    name: 'wood',
    group: 'Travel & Places',
  },
  '🛖': {
    name: 'hut',
    group: 'Travel & Places',
  },
  '🏘️': {
    name: 'houses',
    group: 'Travel & Places',
  },
  '🏚️': {
    name: 'derelict_house',
    group: 'Travel & Places',
  },
  '🏠': {
    name: 'house',
    group: 'Travel & Places',
  },
  '🏡': {
    name: 'house_with_garden',
    group: 'Travel & Places',
  },
  '🏢': {
    name: 'office_building',
    group: 'Travel & Places',
  },
  '🏣': {
    name: 'japanese_post_office',
    group: 'Travel & Places',
  },
  '🏤': {
    name: 'post_office',
    group: 'Travel & Places',
  },
  '🏥': {
    name: 'hospital',
    group: 'Travel & Places',
  },
  '🏦': {
    name: 'bank',
    group: 'Travel & Places',
  },
  '🏨': {
    name: 'hotel',
    group: 'Travel & Places',
  },
  '🏩': {
    name: 'love_hotel',
    group: 'Travel & Places',
  },
  '🏪': {
    name: 'convenience_store',
    group: 'Travel & Places',
  },
  '🏫': {
    name: 'school',
    group: 'Travel & Places',
  },
  '🏬': {
    name: 'department_store',
    group: 'Travel & Places',
  },
  '🏭': {
    name: 'factory',
    group: 'Travel & Places',
  },
  '🏯': {
    name: 'japanese_castle',
    group: 'Travel & Places',
  },
  '🏰': {
    name: 'castle',
    group: 'Travel & Places',
  },
  '💒': {
    name: 'wedding',
    group: 'Travel & Places',
  },
  '🗼': {
    name: 'tokyo_tower',
    group: 'Travel & Places',
  },
  '🗽': {
    name: 'statue_of_liberty',
    group: 'Travel & Places',
  },
  '⛪': {
    name: 'church',
    group: 'Travel & Places',
  },
  '🕌': {
    name: 'mosque',
    group: 'Travel & Places',
  },
  '🛕': {
    name: 'hindu_temple',
    group: 'Travel & Places',
  },
  '🕍': {
    name: 'synagogue',
    group: 'Travel & Places',
  },
  '⛩️': {
    name: 'shinto_shrine',
    group: 'Travel & Places',
  },
  '🕋': {
    name: 'kaaba',
    group: 'Travel & Places',
  },
  '⛲': {
    name: 'fountain',
    group: 'Travel & Places',
  },
  '⛺': {
    name: 'tent',
    group: 'Travel & Places',
  },
  '🌁': {
    name: 'foggy',
    group: 'Travel & Places',
  },
  '🌃': {
    name: 'night_with_stars',
    group: 'Travel & Places',
  },
  '🏙️': {
    name: 'cityscape',
    group: 'Travel & Places',
  },
  '🌄': {
    name: 'sunrise_over_mountains',
    group: 'Travel & Places',
  },
  '🌅': {
    name: 'sunrise',
    group: 'Travel & Places',
  },
  '🌆': {
    name: 'cityscape_at_dusk',
    group: 'Travel & Places',
  },
  '🌇': {
    name: 'sunset',
    group: 'Travel & Places',
  },
  '🌉': {
    name: 'bridge_at_night',
    group: 'Travel & Places',
  },
  '♨️': {
    name: 'hot_springs',
    group: 'Travel & Places',
  },
  '🎠': {
    name: 'carousel_horse',
    group: 'Travel & Places',
  },
  '🎡': {
    name: 'ferris_wheel',
    group: 'Travel & Places',
  },
  '🎢': {
    name: 'roller_coaster',
    group: 'Travel & Places',
  },
  '💈': {
    name: 'barber_pole',
    group: 'Travel & Places',
  },
  '🎪': {
    name: 'circus_tent',
    group: 'Travel & Places',
  },
  '🚂': {
    name: 'locomotive',
    group: 'Travel & Places',
  },
  '🚃': {
    name: 'railway_car',
    group: 'Travel & Places',
  },
  '🚄': {
    name: 'high_speed_train',
    group: 'Travel & Places',
  },
  '🚅': {
    name: 'bullet_train',
    group: 'Travel & Places',
  },
  '🚆': {
    name: 'train',
    group: 'Travel & Places',
  },
  '🚇': {
    name: 'metro',
    group: 'Travel & Places',
  },
  '🚈': {
    name: 'light_rail',
    group: 'Travel & Places',
  },
  '🚉': {
    name: 'station',
    group: 'Travel & Places',
  },
  '🚊': {
    name: 'tram',
    group: 'Travel & Places',
  },
  '🚝': {
    name: 'monorail',
    group: 'Travel & Places',
  },
  '🚞': {
    name: 'mountain_railway',
    group: 'Travel & Places',
  },
  '🚋': {
    name: 'tram_car',
    group: 'Travel & Places',
  },
  '🚌': {
    name: 'bus',
    group: 'Travel & Places',
  },
  '🚍': {
    name: 'oncoming_bus',
    group: 'Travel & Places',
  },
  '🚎': {
    name: 'trolleybus',
    group: 'Travel & Places',
  },
  '🚐': {
    name: 'minibus',
    group: 'Travel & Places',
  },
  '🚑': {
    name: 'ambulance',
    group: 'Travel & Places',
  },
  '🚒': {
    name: 'fire_engine',
    group: 'Travel & Places',
  },
  '🚓': {
    name: 'police_car',
    group: 'Travel & Places',
  },
  '🚔': {
    name: 'oncoming_police_car',
    group: 'Travel & Places',
  },
  '🚕': {
    name: 'taxi',
    group: 'Travel & Places',
  },
  '🚖': {
    name: 'oncoming_taxi',
    group: 'Travel & Places',
  },
  '🚗': {
    name: 'automobile',
    group: 'Travel & Places',
  },
  '🚘': {
    name: 'oncoming_automobile',
    group: 'Travel & Places',
  },
  '🚙': {
    name: 'sport_utility_vehicle',
    group: 'Travel & Places',
  },
  '🛻': {
    name: 'pickup_truck',
    group: 'Travel & Places',
  },
  '🚚': {
    name: 'delivery_truck',
    group: 'Travel & Places',
  },
  '🚛': {
    name: 'articulated_lorry',
    group: 'Travel & Places',
  },
  '🚜': {
    name: 'tractor',
    group: 'Travel & Places',
  },
  '🏎️': {
    name: 'racing_car',
    group: 'Travel & Places',
  },
  '🏍️': {
    name: 'motorcycle',
    group: 'Travel & Places',
  },
  '🛵': {
    name: 'motor_scooter',
    group: 'Travel & Places',
  },
  '🦽': {
    name: 'manual_wheelchair',
    group: 'Travel & Places',
  },
  '🦼': {
    name: 'motorized_wheelchair',
    group: 'Travel & Places',
  },
  '🛺': {
    name: 'auto_rickshaw',
    group: 'Travel & Places',
  },
  '🚲': {
    name: 'bicycle',
    group: 'Travel & Places',
  },
  '🛴': {
    name: 'kick_scooter',
    group: 'Travel & Places',
  },
  '🛹': {
    name: 'skateboard',
    group: 'Travel & Places',
  },
  '🛼': {
    name: 'roller_skate',
    group: 'Travel & Places',
  },
  '🚏': {
    name: 'bus_stop',
    group: 'Travel & Places',
  },
  '🛣️': {
    name: 'motorway',
    group: 'Travel & Places',
  },
  '🛤️': {
    name: 'railway_track',
    group: 'Travel & Places',
  },
  '🛢️': {
    name: 'oil_drum',
    group: 'Travel & Places',
  },
  '⛽': {
    name: 'fuel_pump',
    group: 'Travel & Places',
  },
  '🚨': {
    name: 'police_car_light',
    group: 'Travel & Places',
  },
  '🚥': {
    name: 'horizontal_traffic_light',
    group: 'Travel & Places',
  },
  '🚦': {
    name: 'vertical_traffic_light',
    group: 'Travel & Places',
  },
  '🛑': {
    name: 'stop_sign',
    group: 'Travel & Places',
  },
  '🚧': {
    name: 'construction',
    group: 'Travel & Places',
  },
  '⚓': {
    name: 'anchor',
    group: 'Travel & Places',
  },
  '⛵': {
    name: 'sailboat',
    group: 'Travel & Places',
  },
  '🛶': {
    name: 'canoe',
    group: 'Travel & Places',
  },
  '🚤': {
    name: 'speedboat',
    group: 'Travel & Places',
  },
  '🛳️': {
    name: 'passenger_ship',
    group: 'Travel & Places',
  },
  '⛴️': {
    name: 'ferry',
    group: 'Travel & Places',
  },
  '🛥️': {
    name: 'motor_boat',
    group: 'Travel & Places',
  },
  '🚢': {
    name: 'ship',
    group: 'Travel & Places',
  },
  '✈️': {
    name: 'airplane',
    group: 'Travel & Places',
  },
  '🛩️': {
    name: 'small_airplane',
    group: 'Travel & Places',
  },
  '🛫': {
    name: 'airplane_departure',
    group: 'Travel & Places',
  },
  '🛬': {
    name: 'airplane_arrival',
    group: 'Travel & Places',
  },
  '🪂': {
    name: 'parachute',
    group: 'Travel & Places',
  },
  '💺': {
    name: 'seat',
    group: 'Travel & Places',
  },
  '🚁': {
    name: 'helicopter',
    group: 'Travel & Places',
  },
  '🚟': {
    name: 'suspension_railway',
    group: 'Travel & Places',
  },
  '🚠': {
    name: 'mountain_cableway',
    group: 'Travel & Places',
  },
  '🚡': {
    name: 'aerial_tramway',
    group: 'Travel & Places',
  },
  '🛰️': {
    name: 'satellite',
    group: 'Travel & Places',
  },
  '🚀': {
    name: 'rocket',
    group: 'Travel & Places',
  },
  '🛸': {
    name: 'flying_saucer',
    group: 'Travel & Places',
  },
  '🛎️': {
    name: 'bellhop_bell',
    group: 'Travel & Places',
  },
  '🧳': {
    name: 'luggage',
    group: 'Travel & Places',
  },
  '⌛': {
    name: 'hourglass_done',
    group: 'Travel & Places',
  },
  '⏳': {
    name: 'hourglass_not_done',
    group: 'Travel & Places',
  },
  '⌚': {
    name: 'watch',
    group: 'Travel & Places',
  },
  '⏰': {
    name: 'alarm_clock',
    group: 'Travel & Places',
  },
  '⏱️': {
    name: 'stopwatch',
    group: 'Travel & Places',
  },
  '⏲️': {
    name: 'timer_clock',
    group: 'Travel & Places',
  },
  '🕰️': {
    name: 'mantelpiece_clock',
    group: 'Travel & Places',
  },
  '🕛': {
    name: 'twelve_o_clock',
    group: 'Travel & Places',
  },
  '🕧': {
    name: 'twelve_thirty',
    group: 'Travel & Places',
  },
  '🕐': {
    name: 'one_o_clock',
    group: 'Travel & Places',
  },
  '🕜': {
    name: 'one_thirty',
    group: 'Travel & Places',
  },
  '🕑': {
    name: 'two_o_clock',
    group: 'Travel & Places',
  },
  '🕝': {
    name: 'two_thirty',
    group: 'Travel & Places',
  },
  '🕒': {
    name: 'three_o_clock',
    group: 'Travel & Places',
  },
  '🕞': {
    name: 'three_thirty',
    group: 'Travel & Places',
  },
  '🕓': {
    name: 'four_o_clock',
    group: 'Travel & Places',
  },
  '🕟': {
    name: 'four_thirty',
    group: 'Travel & Places',
  },
  '🕔': {
    name: 'five_o_clock',
    group: 'Travel & Places',
  },
  '🕠': {
    name: 'five_thirty',
    group: 'Travel & Places',
  },
  '🕕': {
    name: 'six_o_clock',
    group: 'Travel & Places',
  },
  '🕡': {
    name: 'six_thirty',
    group: 'Travel & Places',
  },
  '🕖': {
    name: 'seven_o_clock',
    group: 'Travel & Places',
  },
  '🕢': {
    name: 'seven_thirty',
    group: 'Travel & Places',
  },
  '🕗': {
    name: 'eight_o_clock',
    group: 'Travel & Places',
  },
  '🕣': {
    name: 'eight_thirty',
    group: 'Travel & Places',
  },
  '🕘': {
    name: 'nine_o_clock',
    group: 'Travel & Places',
  },
  '🕤': {
    name: 'nine_thirty',
    group: 'Travel & Places',
  },
  '🕙': {
    name: 'ten_o_clock',
    group: 'Travel & Places',
  },
  '🕥': {
    name: 'ten_thirty',
    group: 'Travel & Places',
  },
  '🕚': {
    name: 'eleven_o_clock',
    group: 'Travel & Places',
  },
  '🕦': {
    name: 'eleven_thirty',
    group: 'Travel & Places',
  },
  '🌑': {
    name: 'new_moon',
    group: 'Travel & Places',
  },
  '🌒': {
    name: 'waxing_crescent_moon',
    group: 'Travel & Places',
  },
  '🌓': {
    name: 'first_quarter_moon',
    group: 'Travel & Places',
  },
  '🌔': {
    name: 'waxing_gibbous_moon',
    group: 'Travel & Places',
  },
  '🌕': {
    name: 'full_moon',
    group: 'Travel & Places',
  },
  '🌖': {
    name: 'waning_gibbous_moon',
    group: 'Travel & Places',
  },
  '🌗': {
    name: 'last_quarter_moon',
    group: 'Travel & Places',
  },
  '🌘': {
    name: 'waning_crescent_moon',
    group: 'Travel & Places',
  },
  '🌙': {
    name: 'crescent_moon',
    group: 'Travel & Places',
  },
  '🌚': {
    name: 'new_moon_face',
    group: 'Travel & Places',
  },
  '🌛': {
    name: 'first_quarter_moon_face',
    group: 'Travel & Places',
  },
  '🌜': {
    name: 'last_quarter_moon_face',
    group: 'Travel & Places',
  },
  '🌡️': {
    name: 'thermometer',
    group: 'Travel & Places',
  },
  '☀️': {
    name: 'sun',
    group: 'Travel & Places',
  },
  '🌝': {
    name: 'full_moon_face',
    group: 'Travel & Places',
  },
  '🌞': {
    name: 'sun_with_face',
    group: 'Travel & Places',
  },
  '🪐': {
    name: 'ringed_planet',
    group: 'Travel & Places',
  },
  '⭐': {
    name: 'star',
    group: 'Travel & Places',
  },
  '🌟': {
    name: 'glowing_star',
    group: 'Travel & Places',
  },
  '🌠': {
    name: 'shooting_star',
    group: 'Travel & Places',
  },
  '🌌': {
    name: 'milky_way',
    group: 'Travel & Places',
  },
  '☁️': {
    name: 'cloud',
    group: 'Travel & Places',
  },
  '⛅': {
    name: 'sun_behind_cloud',
    group: 'Travel & Places',
  },
  '⛈️': {
    name: 'cloud_with_lightning_and_rain',
    group: 'Travel & Places',
  },
  '🌤️': {
    name: 'sun_behind_small_cloud',
    group: 'Travel & Places',
  },
  '🌥️': {
    name: 'sun_behind_large_cloud',
    group: 'Travel & Places',
  },
  '🌦️': {
    name: 'sun_behind_rain_cloud',
    group: 'Travel & Places',
  },
  '🌧️': {
    name: 'cloud_with_rain',
    group: 'Travel & Places',
  },
  '🌨️': {
    name: 'cloud_with_snow',
    group: 'Travel & Places',
  },
  '🌩️': {
    name: 'cloud_with_lightning',
    group: 'Travel & Places',
  },
  '🌪️': {
    name: 'tornado',
    group: 'Travel & Places',
  },
  '🌫️': {
    name: 'fog',
    group: 'Travel & Places',
  },
  '🌬️': {
    name: 'wind_face',
    group: 'Travel & Places',
  },
  '🌀': {
    name: 'cyclone',
    group: 'Travel & Places',
  },
  '🌈': {
    name: 'rainbow',
    group: 'Travel & Places',
  },
  '🌂': {
    name: 'closed_umbrella',
    group: 'Travel & Places',
  },
  '☂️': {
    name: 'umbrella',
    group: 'Travel & Places',
  },
  '☔': {
    name: 'umbrella_with_rain_drops',
    group: 'Travel & Places',
  },
  '⛱️': {
    name: 'umbrella_on_ground',
    group: 'Travel & Places',
  },
  '⚡': {
    name: 'high_voltage',
    group: 'Travel & Places',
  },
  '❄️': {
    name: 'snowflake',
    group: 'Travel & Places',
  },
  '☃️': {
    name: 'snowman',
    group: 'Travel & Places',
  },
  '⛄': {
    name: 'snowman_without_snow',
    group: 'Travel & Places',
  },
  '☄️': {
    name: 'comet',
    group: 'Travel & Places',
  },
  '🔥': {
    name: 'fire',
    group: 'Travel & Places',
  },
  '💧': {
    name: 'droplet',
    group: 'Travel & Places',
  },
  '🌊': {
    name: 'water_wave',
    group: 'Travel & Places',
  },
  '🎃': {
    name: 'jack_o_lantern',
    group: 'Activities',
  },
  '🎄': {
    name: 'christmas_tree',
    group: 'Activities',
  },
  '🎆': {
    name: 'fireworks',
    group: 'Activities',
  },
  '🎇': {
    name: 'sparkler',
    group: 'Activities',
  },
  '🧨': {
    name: 'firecracker',
    group: 'Activities',
  },
  '✨': {
    name: 'sparkles',
    group: 'Activities',
  },
  '🎈': {
    name: 'balloon',
    group: 'Activities',
  },
  '🎉': {
    name: 'party_popper',
    group: 'Activities',
  },
  '🎊': {
    name: 'confetti_ball',
    group: 'Activities',
  },
  '🎋': {
    name: 'tanabata_tree',
    group: 'Activities',
  },
  '🎍': {
    name: 'pine_decoration',
    group: 'Activities',
  },
  '🎎': {
    name: 'japanese_dolls',
    group: 'Activities',
  },
  '🎏': {
    name: 'carp_streamer',
    group: 'Activities',
  },
  '🎐': {
    name: 'wind_chime',
    group: 'Activities',
  },
  '🎑': {
    name: 'moon_viewing_ceremony',
    group: 'Activities',
  },
  '🧧': {
    name: 'red_envelope',
    group: 'Activities',
  },
  '🎀': {
    name: 'ribbon',
    group: 'Activities',
  },
  '🎁': {
    name: 'wrapped_gift',
    group: 'Activities',
  },
  '🎗️': {
    name: 'reminder_ribbon',
    group: 'Activities',
  },
  '🎟️': {
    name: 'admission_tickets',
    group: 'Activities',
  },
  '🎫': {
    name: 'ticket',
    group: 'Activities',
  },
  '🎖️': {
    name: 'military_medal',
    group: 'Activities',
  },
  '🏆': {
    name: 'trophy',
    group: 'Activities',
  },
  '🏅': {
    name: 'sports_medal',
    group: 'Activities',
  },
  '🥇': {
    name: '1st_place_medal',
    group: 'Activities',
  },
  '🥈': {
    name: '2nd_place_medal',
    group: 'Activities',
  },
  '🥉': {
    name: '3rd_place_medal',
    group: 'Activities',
  },
  '⚽': {
    name: 'soccer_ball',
    group: 'Activities',
  },
  '⚾': {
    name: 'baseball',
    group: 'Activities',
  },
  '🥎': {
    name: 'softball',
    group: 'Activities',
  },
  '🏀': {
    name: 'basketball',
    group: 'Activities',
  },
  '🏐': {
    name: 'volleyball',
    group: 'Activities',
  },
  '🏈': {
    name: 'american_football',
    group: 'Activities',
  },
  '🏉': {
    name: 'rugby_football',
    group: 'Activities',
  },
  '🎾': {
    name: 'tennis',
    group: 'Activities',
  },
  '🥏': {
    name: 'flying_disc',
    group: 'Activities',
  },
  '🎳': {
    name: 'bowling',
    group: 'Activities',
  },
  '🏏': {
    name: 'cricket_game',
    group: 'Activities',
  },
  '🏑': {
    name: 'field_hockey',
    group: 'Activities',
  },
  '🏒': {
    name: 'ice_hockey',
    group: 'Activities',
  },
  '🥍': {
    name: 'lacrosse',
    group: 'Activities',
  },
  '🏓': {
    name: 'ping_pong',
    group: 'Activities',
  },
  '🏸': {
    name: 'badminton',
    group: 'Activities',
  },
  '🥊': {
    name: 'boxing_glove',
    group: 'Activities',
  },
  '🥋': {
    name: 'martial_arts_uniform',
    group: 'Activities',
  },
  '🥅': {
    name: 'goal_net',
    group: 'Activities',
  },
  '⛳': {
    name: 'flag_in_hole',
    group: 'Activities',
  },
  '⛸️': {
    name: 'ice_skate',
    group: 'Activities',
  },
  '🎣': {
    name: 'fishing_pole',
    group: 'Activities',
  },
  '🤿': {
    name: 'diving_mask',
    group: 'Activities',
  },
  '🎽': {
    name: 'running_shirt',
    group: 'Activities',
  },
  '🎿': {
    name: 'skis',
    group: 'Activities',
  },
  '🛷': {
    name: 'sled',
    group: 'Activities',
  },
  '🥌': {
    name: 'curling_stone',
    group: 'Activities',
  },
  '🎯': {
    name: 'direct_hit',
    group: 'Activities',
  },
  '🪀': {
    name: 'yo_yo',
    group: 'Activities',
  },
  '🪁': {
    name: 'kite',
    group: 'Activities',
  },
  '🎱': {
    name: 'pool_8_ball',
    group: 'Activities',
  },
  '🔮': {
    name: 'crystal_ball',
    group: 'Activities',
  },
  '🪄': {
    name: 'magic_wand',
    group: 'Activities',
  },
  '🧿': {
    name: 'nazar_amulet',
    group: 'Activities',
  },
  '🎮': {
    name: 'video_game',
    group: 'Activities',
  },
  '🕹️': {
    name: 'joystick',
    group: 'Activities',
  },
  '🎰': {
    name: 'slot_machine',
    group: 'Activities',
  },
  '🎲': {
    name: 'game_die',
    group: 'Activities',
  },
  '🧩': {
    name: 'puzzle_piece',
    group: 'Activities',
  },
  '🧸': {
    name: 'teddy_bear',
    group: 'Activities',
  },
  '🪅': {
    name: 'pi_ata',
    group: 'Activities',
  },
  '🪆': {
    name: 'nesting_dolls',
    group: 'Activities',
  },
  '♠️': {
    name: 'spade_suit',
    group: 'Activities',
  },
  '♥️': {
    name: 'heart_suit',
    group: 'Activities',
  },
  '♦️': {
    name: 'diamond_suit',
    group: 'Activities',
  },
  '♣️': {
    name: 'club_suit',
    group: 'Activities',
  },
  '♟️': {
    name: 'chess_pawn',
    group: 'Activities',
  },
  '🃏': {
    name: 'joker',
    group: 'Activities',
  },
  '🀄': {
    name: 'mahjong_red_dragon',
    group: 'Activities',
  },
  '🎴': {
    name: 'flower_playing_cards',
    group: 'Activities',
  },
  '🎭': {
    name: 'performing_arts',
    group: 'Activities',
  },
  '🖼️': {
    name: 'framed_picture',
    group: 'Activities',
  },
  '🎨': {
    name: 'artist_palette',
    group: 'Activities',
  },
  '🧵': {
    name: 'thread',
    group: 'Activities',
  },
  '🪡': {
    name: 'sewing_needle',
    group: 'Activities',
  },
  '🧶': {
    name: 'yarn',
    group: 'Activities',
  },
  '🪢': {
    name: 'knot',
    group: 'Activities',
  },
  '👓': {
    name: 'glasses',
    group: 'Objects',
  },
  '🕶️': {
    name: 'sunglasses',
    group: 'Objects',
  },
  '🥽': {
    name: 'goggles',
    group: 'Objects',
  },
  '🥼': {
    name: 'lab_coat',
    group: 'Objects',
  },
  '🦺': {
    name: 'safety_vest',
    group: 'Objects',
  },
  '👔': {
    name: 'necktie',
    group: 'Objects',
  },
  '👕': {
    name: 't_shirt',
    group: 'Objects',
  },
  '👖': {
    name: 'jeans',
    group: 'Objects',
  },
  '🧣': {
    name: 'scarf',
    group: 'Objects',
  },
  '🧤': {
    name: 'gloves',
    group: 'Objects',
  },
  '🧥': {
    name: 'coat',
    group: 'Objects',
  },
  '🧦': {
    name: 'socks',
    group: 'Objects',
  },
  '👗': {
    name: 'dress',
    group: 'Objects',
  },
  '👘': {
    name: 'kimono',
    group: 'Objects',
  },
  '🥻': {
    name: 'sari',
    group: 'Objects',
  },
  '🩱': {
    name: 'one_piece_swimsuit',
    group: 'Objects',
  },
  '🩲': {
    name: 'briefs',
    group: 'Objects',
  },
  '🩳': {
    name: 'shorts',
    group: 'Objects',
  },
  '👙': {
    name: 'bikini',
    group: 'Objects',
  },
  '👚': {
    name: 'woman_s_clothes',
    group: 'Objects',
  },
  '👛': {
    name: 'purse',
    group: 'Objects',
  },
  '👜': {
    name: 'handbag',
    group: 'Objects',
  },
  '👝': {
    name: 'clutch_bag',
    group: 'Objects',
  },
  '🛍️': {
    name: 'shopping_bags',
    group: 'Objects',
  },
  '🎒': {
    name: 'backpack',
    group: 'Objects',
  },
  '🩴': {
    name: 'thong_sandal',
    group: 'Objects',
  },
  '👞': {
    name: 'man_s_shoe',
    group: 'Objects',
  },
  '👟': {
    name: 'running_shoe',
    group: 'Objects',
  },
  '🥾': {
    name: 'hiking_boot',
    group: 'Objects',
  },
  '🥿': {
    name: 'flat_shoe',
    group: 'Objects',
  },
  '👠': {
    name: 'high_heeled_shoe',
    group: 'Objects',
  },
  '👡': {
    name: 'woman_s_sandal',
    group: 'Objects',
  },
  '🩰': {
    name: 'ballet_shoes',
    group: 'Objects',
  },
  '👢': {
    name: 'woman_s_boot',
    group: 'Objects',
  },
  '👑': {
    name: 'crown',
    group: 'Objects',
  },
  '👒': {
    name: 'woman_s_hat',
    group: 'Objects',
  },
  '🎩': {
    name: 'top_hat',
    group: 'Objects',
  },
  '🎓': {
    name: 'graduation_cap',
    group: 'Objects',
  },
  '🧢': {
    name: 'billed_cap',
    group: 'Objects',
  },
  '🪖': {
    name: 'military_helmet',
    group: 'Objects',
  },
  '⛑️': {
    name: 'rescue_worker_s_helmet',
    group: 'Objects',
  },
  '📿': {
    name: 'prayer_beads',
    group: 'Objects',
  },
  '💄': {
    name: 'lipstick',
    group: 'Objects',
  },
  '💍': {
    name: 'ring',
    group: 'Objects',
  },
  '💎': {
    name: 'gem_stone',
    group: 'Objects',
  },
  '🔇': {
    name: 'muted_speaker',
    group: 'Objects',
  },
  '🔈': {
    name: 'speaker_low_volume',
    group: 'Objects',
  },
  '🔉': {
    name: 'speaker_medium_volume',
    group: 'Objects',
  },
  '🔊': {
    name: 'speaker_high_volume',
    group: 'Objects',
  },
  '📢': {
    name: 'loudspeaker',
    group: 'Objects',
  },
  '📣': {
    name: 'megaphone',
    group: 'Objects',
  },
  '📯': {
    name: 'postal_horn',
    group: 'Objects',
  },
  '🔔': {
    name: 'bell',
    group: 'Objects',
  },
  '🔕': {
    name: 'bell_with_slash',
    group: 'Objects',
  },
  '🎼': {
    name: 'musical_score',
    group: 'Objects',
  },
  '🎵': {
    name: 'musical_note',
    group: 'Objects',
  },
  '🎶': {
    name: 'musical_notes',
    group: 'Objects',
  },
  '🎙️': {
    name: 'studio_microphone',
    group: 'Objects',
  },
  '🎚️': {
    name: 'level_slider',
    group: 'Objects',
  },
  '🎛️': {
    name: 'control_knobs',
    group: 'Objects',
  },
  '🎤': {
    name: 'microphone',
    group: 'Objects',
  },
  '🎧': {
    name: 'headphone',
    group: 'Objects',
  },
  '📻': {
    name: 'radio',
    group: 'Objects',
  },
  '🎷': {
    name: 'saxophone',
    group: 'Objects',
  },
  '🪗': {
    name: 'accordion',
    group: 'Objects',
  },
  '🎸': {
    name: 'guitar',
    group: 'Objects',
  },
  '🎹': {
    name: 'musical_keyboard',
    group: 'Objects',
  },
  '🎺': {
    name: 'trumpet',
    group: 'Objects',
  },
  '🎻': {
    name: 'violin',
    group: 'Objects',
  },
  '🪕': {
    name: 'banjo',
    group: 'Objects',
  },
  '🥁': {
    name: 'drum',
    group: 'Objects',
  },
  '🪘': {
    name: 'long_drum',
    group: 'Objects',
  },
  '📱': {
    name: 'mobile_phone',
    group: 'Objects',
  },
  '📲': {
    name: 'mobile_phone_with_arrow',
    group: 'Objects',
  },
  '☎️': {
    name: 'telephone',
    group: 'Objects',
  },
  '📞': {
    name: 'telephone_receiver',
    group: 'Objects',
  },
  '📟': {
    name: 'pager',
    group: 'Objects',
  },
  '📠': {
    name: 'fax_machine',
    group: 'Objects',
  },
  '🔋': {
    name: 'battery',
    group: 'Objects',
  },
  '🔌': {
    name: 'electric_plug',
    group: 'Objects',
  },
  '💻': {
    name: 'laptop',
    group: 'Objects',
  },
  '🖥️': {
    name: 'desktop_computer',
    group: 'Objects',
  },
  '🖨️': {
    name: 'printer',
    group: 'Objects',
  },
  '⌨️': {
    name: 'keyboard',
    group: 'Objects',
  },
  '🖱️': {
    name: 'computer_mouse',
    group: 'Objects',
  },
  '🖲️': {
    name: 'trackball',
    group: 'Objects',
  },
  '💽': {
    name: 'computer_disk',
    group: 'Objects',
  },
  '💾': {
    name: 'floppy_disk',
    group: 'Objects',
  },
  '💿': {
    name: 'optical_disk',
    group: 'Objects',
  },
  '📀': {
    name: 'dvd',
    group: 'Objects',
  },
  '🧮': {
    name: 'abacus',
    group: 'Objects',
  },
  '🎥': {
    name: 'movie_camera',
    group: 'Objects',
  },
  '🎞️': {
    name: 'film_frames',
    group: 'Objects',
  },
  '📽️': {
    name: 'film_projector',
    group: 'Objects',
  },
  '🎬': {
    name: 'clapper_board',
    group: 'Objects',
  },
  '📺': {
    name: 'television',
    group: 'Objects',
  },
  '📷': {
    name: 'camera',
    group: 'Objects',
  },
  '📸': {
    name: 'camera_with_flash',
    group: 'Objects',
  },
  '📹': {
    name: 'video_camera',
    group: 'Objects',
  },
  '📼': {
    name: 'videocassette',
    group: 'Objects',
  },
  '🔍': {
    name: 'magnifying_glass_tilted_left',
    group: 'Objects',
  },
  '🔎': {
    name: 'magnifying_glass_tilted_right',
    group: 'Objects',
  },
  '🕯️': {
    name: 'candle',
    group: 'Objects',
  },
  '💡': {
    name: 'light_bulb',
    group: 'Objects',
  },
  '🔦': {
    name: 'flashlight',
    group: 'Objects',
  },
  '🏮': {
    name: 'red_paper_lantern',
    group: 'Objects',
  },
  '🪔': {
    name: 'diya_lamp',
    group: 'Objects',
  },
  '📔': {
    name: 'notebook_with_decorative_cover',
    group: 'Objects',
  },
  '📕': {
    name: 'closed_book',
    group: 'Objects',
  },
  '📖': {
    name: 'open_book',
    group: 'Objects',
  },
  '📗': {
    name: 'green_book',
    group: 'Objects',
  },
  '📘': {
    name: 'blue_book',
    group: 'Objects',
  },
  '📙': {
    name: 'orange_book',
    group: 'Objects',
  },
  '📚': {
    name: 'books',
    group: 'Objects',
  },
  '📓': {
    name: 'notebook',
    group: 'Objects',
  },
  '📒': {
    name: 'ledger',
    group: 'Objects',
  },
  '📃': {
    name: 'page_with_curl',
    group: 'Objects',
  },
  '📜': {
    name: 'scroll',
    group: 'Objects',
  },
  '📄': {
    name: 'page_facing_up',
    group: 'Objects',
  },
  '📰': {
    name: 'newspaper',
    group: 'Objects',
  },
  '🗞️': {
    name: 'rolled_up_newspaper',
    group: 'Objects',
  },
  '📑': {
    name: 'bookmark_tabs',
    group: 'Objects',
  },
  '🔖': {
    name: 'bookmark',
    group: 'Objects',
  },
  '🏷️': {
    name: 'label',
    group: 'Objects',
  },
  '💰': {
    name: 'money_bag',
    group: 'Objects',
  },
  '🪙': {
    name: 'coin',
    group: 'Objects',
  },
  '💴': {
    name: 'yen_banknote',
    group: 'Objects',
  },
  '💵': {
    name: 'dollar_banknote',
    group: 'Objects',
  },
  '💶': {
    name: 'euro_banknote',
    group: 'Objects',
  },
  '💷': {
    name: 'pound_banknote',
    group: 'Objects',
  },
  '💸': {
    name: 'money_with_wings',
    group: 'Objects',
  },
  '💳': {
    name: 'credit_card',
    group: 'Objects',
  },
  '🧾': {
    name: 'receipt',
    group: 'Objects',
  },
  '💹': {
    name: 'chart_increasing_with_yen',
    group: 'Objects',
  },
  '✉️': {
    name: 'envelope',
    group: 'Objects',
  },
  '📧': {
    name: 'e_mail',
    group: 'Objects',
  },
  '📨': {
    name: 'incoming_envelope',
    group: 'Objects',
  },
  '📩': {
    name: 'envelope_with_arrow',
    group: 'Objects',
  },
  '📤': {
    name: 'outbox_tray',
    group: 'Objects',
  },
  '📥': {
    name: 'inbox_tray',
    group: 'Objects',
  },
  '📦': {
    name: 'package',
    group: 'Objects',
  },
  '📫': {
    name: 'closed_mailbox_with_raised_flag',
    group: 'Objects',
  },
  '📪': {
    name: 'closed_mailbox_with_lowered_flag',
    group: 'Objects',
  },
  '📬': {
    name: 'open_mailbox_with_raised_flag',
    group: 'Objects',
  },
  '📭': {
    name: 'open_mailbox_with_lowered_flag',
    group: 'Objects',
  },
  '📮': {
    name: 'postbox',
    group: 'Objects',
  },
  '🗳️': {
    name: 'ballot_box_with_ballot',
    group: 'Objects',
  },
  '✏️': {
    name: 'pencil',
    group: 'Objects',
  },
  '✒️': {
    name: 'black_nib',
    group: 'Objects',
  },
  '🖋️': {
    name: 'fountain_pen',
    group: 'Objects',
  },
  '🖊️': {
    name: 'pen',
    group: 'Objects',
  },
  '🖌️': {
    name: 'paintbrush',
    group: 'Objects',
  },
  '🖍️': {
    name: 'crayon',
    group: 'Objects',
  },
  '📝': {
    name: 'memo',
    group: 'Objects',
  },
  '💼': {
    name: 'briefcase',
    group: 'Objects',
  },
  '📁': {
    name: 'file_folder',
    group: 'Objects',
  },
  '📂': {
    name: 'open_file_folder',
    group: 'Objects',
  },
  '🗂️': {
    name: 'card_index_dividers',
    group: 'Objects',
  },
  '📅': {
    name: 'calendar',
    group: 'Objects',
  },
  '📆': {
    name: 'tear_off_calendar',
    group: 'Objects',
  },
  '🗒️': {
    name: 'spiral_notepad',
    group: 'Objects',
  },
  '🗓️': {
    name: 'spiral_calendar',
    group: 'Objects',
  },
  '📇': {
    name: 'card_index',
    group: 'Objects',
  },
  '📈': {
    name: 'chart_increasing',
    group: 'Objects',
  },
  '📉': {
    name: 'chart_decreasing',
    group: 'Objects',
  },
  '📊': {
    name: 'bar_chart',
    group: 'Objects',
  },
  '📋': {
    name: 'clipboard',
    group: 'Objects',
  },
  '📌': {
    name: 'pushpin',
    group: 'Objects',
  },
  '📍': {
    name: 'round_pushpin',
    group: 'Objects',
  },
  '📎': {
    name: 'paperclip',
    group: 'Objects',
  },
  '🖇️': {
    name: 'linked_paperclips',
    group: 'Objects',
  },
  '📏': {
    name: 'straight_ruler',
    group: 'Objects',
  },
  '📐': {
    name: 'triangular_ruler',
    group: 'Objects',
  },
  '✂️': {
    name: 'scissors',
    group: 'Objects',
  },
  '🗃️': {
    name: 'card_file_box',
    group: 'Objects',
  },
  '🗄️': {
    name: 'file_cabinet',
    group: 'Objects',
  },
  '🗑️': {
    name: 'wastebasket',
    group: 'Objects',
  },
  '🔒': {
    name: 'locked',
    group: 'Objects',
  },
  '🔓': {
    name: 'unlocked',
    group: 'Objects',
  },
  '🔏': {
    name: 'locked_with_pen',
    group: 'Objects',
  },
  '🔐': {
    name: 'locked_with_key',
    group: 'Objects',
  },
  '🔑': {
    name: 'key',
    group: 'Objects',
  },
  '🗝️': {
    name: 'old_key',
    group: 'Objects',
  },
  '🔨': {
    name: 'hammer',
    group: 'Objects',
  },
  '🪓': {
    name: 'axe',
    group: 'Objects',
  },
  '⛏️': {
    name: 'pick',
    group: 'Objects',
  },
  '⚒️': {
    name: 'hammer_and_pick',
    group: 'Objects',
  },
  '🛠️': {
    name: 'hammer_and_wrench',
    group: 'Objects',
  },
  '🗡️': {
    name: 'dagger',
    group: 'Objects',
  },
  '⚔️': {
    name: 'crossed_swords',
    group: 'Objects',
  },
  '🔫': {
    name: 'pistol',
    group: 'Objects',
  },
  '🪃': {
    name: 'boomerang',
    group: 'Objects',
  },
  '🏹': {
    name: 'bow_and_arrow',
    group: 'Objects',
  },
  '🛡️': {
    name: 'shield',
    group: 'Objects',
  },
  '🪚': {
    name: 'carpentry_saw',
    group: 'Objects',
  },
  '🔧': {
    name: 'wrench',
    group: 'Objects',
  },
  '🪛': {
    name: 'screwdriver',
    group: 'Objects',
  },
  '🔩': {
    name: 'nut_and_bolt',
    group: 'Objects',
  },
  '⚙️': {
    name: 'gear',
    group: 'Objects',
  },
  '🗜️': {
    name: 'clamp',
    group: 'Objects',
  },
  '⚖️': {
    name: 'balance_scale',
    group: 'Objects',
  },
  '🦯': {
    name: 'white_cane',
    group: 'Objects',
  },
  '🔗': {
    name: 'link',
    group: 'Objects',
  },
  '⛓️': {
    name: 'chains',
    group: 'Objects',
  },
  '🪝': {
    name: 'hook',
    group: 'Objects',
  },
  '🧰': {
    name: 'toolbox',
    group: 'Objects',
  },
  '🧲': {
    name: 'magnet',
    group: 'Objects',
  },
  '🪜': {
    name: 'ladder',
    group: 'Objects',
  },
  '⚗️': {
    name: 'alembic',
    group: 'Objects',
  },
  '🧪': {
    name: 'test_tube',
    group: 'Objects',
  },
  '🧫': {
    name: 'petri_dish',
    group: 'Objects',
  },
  '🧬': {
    name: 'dna',
    group: 'Objects',
  },
  '🔬': {
    name: 'microscope',
    group: 'Objects',
  },
  '🔭': {
    name: 'telescope',
    group: 'Objects',
  },
  '📡': {
    name: 'satellite_antenna',
    group: 'Objects',
  },
  '💉': {
    name: 'syringe',
    group: 'Objects',
  },
  '🩸': {
    name: 'drop_of_blood',
    group: 'Objects',
  },
  '💊': {
    name: 'pill',
    group: 'Objects',
  },
  '🩹': {
    name: 'adhesive_bandage',
    group: 'Objects',
  },
  '🩺': {
    name: 'stethoscope',
    group: 'Objects',
  },
  '🚪': {
    name: 'door',
    group: 'Objects',
  },
  '🛗': {
    name: 'elevator',
    group: 'Objects',
  },
  '🪞': {
    name: 'mirror',
    group: 'Objects',
  },
  '🪟': {
    name: 'window',
    group: 'Objects',
  },
  '🛏️': {
    name: 'bed',
    group: 'Objects',
  },
  '🛋️': {
    name: 'couch_and_lamp',
    group: 'Objects',
  },
  '🪑': {
    name: 'chair',
    group: 'Objects',
  },
  '🚽': {
    name: 'toilet',
    group: 'Objects',
  },
  '🪠': {
    name: 'plunger',
    group: 'Objects',
  },
  '🚿': {
    name: 'shower',
    group: 'Objects',
  },
  '🛁': {
    name: 'bathtub',
    group: 'Objects',
  },
  '🪤': {
    name: 'mouse_trap',
    group: 'Objects',
  },
  '🪒': {
    name: 'razor',
    group: 'Objects',
  },
  '🧴': {
    name: 'lotion_bottle',
    group: 'Objects',
  },
  '🧷': {
    name: 'safety_pin',
    group: 'Objects',
  },
  '🧹': {
    name: 'broom',
    group: 'Objects',
  },
  '🧺': {
    name: 'basket',
    group: 'Objects',
  },
  '🧻': {
    name: 'roll_of_paper',
    group: 'Objects',
  },
  '🪣': {
    name: 'bucket',
    group: 'Objects',
  },
  '🧼': {
    name: 'soap',
    group: 'Objects',
  },
  '🪥': {
    name: 'toothbrush',
    group: 'Objects',
  },
  '🧽': {
    name: 'sponge',
    group: 'Objects',
  },
  '🧯': {
    name: 'fire_extinguisher',
    group: 'Objects',
  },
  '🛒': {
    name: 'shopping_cart',
    group: 'Objects',
  },
  '🚬': {
    name: 'cigarette',
    group: 'Objects',
  },
  '⚰️': {
    name: 'coffin',
    group: 'Objects',
  },
  '🪦': {
    name: 'headstone',
    group: 'Objects',
  },
  '⚱️': {
    name: 'funeral_urn',
    group: 'Objects',
  },
  '🗿': {
    name: 'moai',
    group: 'Objects',
  },
  '🪧': {
    name: 'placard',
    group: 'Objects',
  },
  '🏧': {
    name: 'atm_sign',
    group: 'Symbols',
  },
  '🚮': {
    name: 'litter_in_bin_sign',
    group: 'Symbols',
  },
  '🚰': {
    name: 'potable_water',
    group: 'Symbols',
  },
  '♿': {
    name: 'wheelchair_symbol',
    group: 'Symbols',
  },
  '🚹': {
    name: 'men_s_room',
    group: 'Symbols',
  },
  '🚺': {
    name: 'women_s_room',
    group: 'Symbols',
  },
  '🚻': {
    name: 'restroom',
    group: 'Symbols',
  },
  '🚼': {
    name: 'baby_symbol',
    group: 'Symbols',
  },
  '🚾': {
    name: 'water_closet',
    group: 'Symbols',
  },
  '🛂': {
    name: 'passport_control',
    group: 'Symbols',
  },
  '🛃': {
    name: 'customs',
    group: 'Symbols',
  },
  '🛄': {
    name: 'baggage_claim',
    group: 'Symbols',
  },
  '🛅': {
    name: 'left_luggage',
    group: 'Symbols',
  },
  '⚠️': {
    name: 'warning',
    group: 'Symbols',
  },
  '🚸': {
    name: 'children_crossing',
    group: 'Symbols',
  },
  '⛔': {
    name: 'no_entry',
    group: 'Symbols',
  },
  '🚫': {
    name: 'prohibited',
    group: 'Symbols',
  },
  '🚳': {
    name: 'no_bicycles',
    group: 'Symbols',
  },
  '🚭': {
    name: 'no_smoking',
    group: 'Symbols',
  },
  '🚯': {
    name: 'no_littering',
    group: 'Symbols',
  },
  '🚱': {
    name: 'non_potable_water',
    group: 'Symbols',
  },
  '🚷': {
    name: 'no_pedestrians',
    group: 'Symbols',
  },
  '📵': {
    name: 'no_mobile_phones',
    group: 'Symbols',
  },
  '🔞': {
    name: 'no_one_under_eighteen',
    group: 'Symbols',
  },
  '☢️': {
    name: 'radioactive',
    group: 'Symbols',
  },
  '☣️': {
    name: 'biohazard',
    group: 'Symbols',
  },
  '⬆️': {
    name: 'up_arrow',
    group: 'Symbols',
  },
  '↗️': {
    name: 'up_right_arrow',
    group: 'Symbols',
  },
  '➡️': {
    name: 'right_arrow',
    group: 'Symbols',
  },
  '↘️': {
    name: 'down_right_arrow',
    group: 'Symbols',
  },
  '⬇️': {
    name: 'down_arrow',
    group: 'Symbols',
  },
  '↙️': {
    name: 'down_left_arrow',
    group: 'Symbols',
  },
  '⬅️': {
    name: 'left_arrow',
    group: 'Symbols',
  },
  '↖️': {
    name: 'up_left_arrow',
    group: 'Symbols',
  },
  '↕️': {
    name: 'up_down_arrow',
    group: 'Symbols',
  },
  '↔️': {
    name: 'left_right_arrow',
    group: 'Symbols',
  },
  '↩️': {
    name: 'right_arrow_curving_left',
    group: 'Symbols',
  },
  '↪️': {
    name: 'left_arrow_curving_right',
    group: 'Symbols',
  },
  '⤴️': {
    name: 'right_arrow_curving_up',
    group: 'Symbols',
  },
  '⤵️': {
    name: 'right_arrow_curving_down',
    group: 'Symbols',
  },
  '🔃': {
    name: 'clockwise_vertical_arrows',
    group: 'Symbols',
  },
  '🔄': {
    name: 'counterclockwise_arrows_button',
    group: 'Symbols',
  },
  '🔙': {
    name: 'back_arrow',
    group: 'Symbols',
  },
  '🔚': {
    name: 'end_arrow',
    group: 'Symbols',
  },
  '🔛': {
    name: 'on_arrow',
    group: 'Symbols',
  },
  '🔜': {
    name: 'soon_arrow',
    group: 'Symbols',
  },
  '🔝': {
    name: 'top_arrow',
    group: 'Symbols',
  },
  '🛐': {
    name: 'place_of_worship',
    group: 'Symbols',
  },
  '⚛️': {
    name: 'atom_symbol',
    group: 'Symbols',
  },
  '🕉️': {
    name: 'om',
    group: 'Symbols',
  },
  '✡️': {
    name: 'star_of_david',
    group: 'Symbols',
  },
  '☸️': {
    name: 'wheel_of_dharma',
    group: 'Symbols',
  },
  '☯️': {
    name: 'yin_yang',
    group: 'Symbols',
  },
  '✝️': {
    name: 'latin_cross',
    group: 'Symbols',
  },
  '☦️': {
    name: 'orthodox_cross',
    group: 'Symbols',
  },
  '☪️': {
    name: 'star_and_crescent',
    group: 'Symbols',
  },
  '☮️': {
    name: 'peace_symbol',
    group: 'Symbols',
  },
  '🕎': {
    name: 'menorah',
    group: 'Symbols',
  },
  '🔯': {
    name: 'dotted_six_pointed_star',
    group: 'Symbols',
  },
  '♈': {
    name: 'aries',
    group: 'Symbols',
  },
  '♉': {
    name: 'taurus',
    group: 'Symbols',
  },
  '♊': {
    name: 'gemini',
    group: 'Symbols',
  },
  '♋': {
    name: 'cancer',
    group: 'Symbols',
  },
  '♌': {
    name: 'leo',
    group: 'Symbols',
  },
  '♍': {
    name: 'virgo',
    group: 'Symbols',
  },
  '♎': {
    name: 'libra',
    group: 'Symbols',
  },
  '♏': {
    name: 'scorpio',
    group: 'Symbols',
  },
  '♐': {
    name: 'sagittarius',
    group: 'Symbols',
  },
  '♑': {
    name: 'capricorn',
    group: 'Symbols',
  },
  '♒': {
    name: 'aquarius',
    group: 'Symbols',
  },
  '♓': {
    name: 'pisces',
    group: 'Symbols',
  },
  '⛎': {
    name: 'ophiuchus',
    group: 'Symbols',
  },
  '🔀': {
    name: 'shuffle_tracks_button',
    group: 'Symbols',
  },
  '🔁': {
    name: 'repeat_button',
    group: 'Symbols',
  },
  '🔂': {
    name: 'repeat_single_button',
    group: 'Symbols',
  },
  '▶️': {
    name: 'play_button',
    group: 'Symbols',
  },
  '⏩': {
    name: 'fast_forward_button',
    group: 'Symbols',
  },
  '⏭️': {
    name: 'next_track_button',
    group: 'Symbols',
  },
  '⏯️': {
    name: 'play_or_pause_button',
    group: 'Symbols',
  },
  '◀️': {
    name: 'reverse_button',
    group: 'Symbols',
  },
  '⏪': {
    name: 'fast_reverse_button',
    group: 'Symbols',
  },
  '⏮️': {
    name: 'last_track_button',
    group: 'Symbols',
  },
  '🔼': {
    name: 'upwards_button',
    group: 'Symbols',
  },
  '⏫': {
    name: 'fast_up_button',
    group: 'Symbols',
  },
  '🔽': {
    name: 'downwards_button',
    group: 'Symbols',
  },
  '⏬': {
    name: 'fast_down_button',
    group: 'Symbols',
  },
  '⏸️': {
    name: 'pause_button',
    group: 'Symbols',
  },
  '⏹️': {
    name: 'stop_button',
    group: 'Symbols',
  },
  '⏺️': {
    name: 'record_button',
    group: 'Symbols',
  },
  '⏏️': {
    name: 'eject_button',
    group: 'Symbols',
  },
  '🎦': {
    name: 'cinema',
    group: 'Symbols',
  },
  '🔅': {
    name: 'dim_button',
    group: 'Symbols',
  },
  '🔆': {
    name: 'bright_button',
    group: 'Symbols',
  },
  '📶': {
    name: 'antenna_bars',
    group: 'Symbols',
  },
  '📳': {
    name: 'vibration_mode',
    group: 'Symbols',
  },
  '📴': {
    name: 'mobile_phone_off',
    group: 'Symbols',
  },
  '♀️': {
    name: 'female_sign',
    group: 'Symbols',
  },
  '♂️': {
    name: 'male_sign',
    group: 'Symbols',
  },
  '⚧️': {
    name: 'transgender_symbol',
    group: 'Symbols',
  },
  '✖️': {
    name: 'multiply',
    group: 'Symbols',
  },
  '➕': {
    name: 'plus',
    group: 'Symbols',
  },
  '➖': {
    name: 'minus',
    group: 'Symbols',
  },
  '➗': {
    name: 'divide',
    group: 'Symbols',
  },
  '♾️': {
    name: 'infinity',
    group: 'Symbols',
  },
  '‼️': {
    name: 'double_exclamation_mark',
    group: 'Symbols',
  },
  '⁉️': {
    name: 'exclamation_question_mark',
    group: 'Symbols',
  },
  '❓': {
    name: 'question_mark',
    group: 'Symbols',
  },
  '❔': {
    name: 'white_question_mark',
    group: 'Symbols',
  },
  '❕': {
    name: 'white_exclamation_mark',
    group: 'Symbols',
  },
  '❗': {
    name: 'exclamation_mark',
    group: 'Symbols',
  },
  '〰️': {
    name: 'wavy_dash',
    group: 'Symbols',
  },
  '💱': {
    name: 'currency_exchange',
    group: 'Symbols',
  },
  '💲': {
    name: 'heavy_dollar_sign',
    group: 'Symbols',
  },
  '⚕️': {
    name: 'medical_symbol',
    group: 'Symbols',
  },
  '♻️': {
    name: 'recycling_symbol',
    group: 'Symbols',
  },
  '⚜️': {
    name: 'fleur_de_lis',
    group: 'Symbols',
  },
  '🔱': {
    name: 'trident_emblem',
    group: 'Symbols',
  },
  '📛': {
    name: 'name_badge',
    group: 'Symbols',
  },
  '🔰': {
    name: 'japanese_symbol_for_beginner',
    group: 'Symbols',
  },
  '⭕': {
    name: 'hollow_red_circle',
    group: 'Symbols',
  },
  '✅': {
    name: 'check_mark_button',
    group: 'Symbols',
  },
  '☑️': {
    name: 'check_box_with_check',
    group: 'Symbols',
  },
  '✔️': {
    name: 'check_mark',
    group: 'Symbols',
  },
  '❌': {
    name: 'cross_mark',
    group: 'Symbols',
  },
  '❎': {
    name: 'cross_mark_button',
    group: 'Symbols',
  },
  '➰': {
    name: 'curly_loop',
    group: 'Symbols',
  },
  '➿': {
    name: 'double_curly_loop',
    group: 'Symbols',
  },
  '〽️': {
    name: 'part_alternation_mark',
    group: 'Symbols',
  },
  '✳️': {
    name: 'eight_spoked_asterisk',
    group: 'Symbols',
  },
  '✴️': {
    name: 'eight_pointed_star',
    group: 'Symbols',
  },
  '❇️': {
    name: 'sparkle',
    group: 'Symbols',
  },
  '©️': {
    name: 'copyright',
    group: 'Symbols',
  },
  '®️': {
    name: 'registered',
    group: 'Symbols',
  },
  '™️': {
    name: 'trade_mark',
    group: 'Symbols',
  },
  '#️⃣': {
    name: 'keycap_',
    group: 'Symbols',
  },
  '*️⃣': {
    name: 'keycap_',
    group: 'Symbols',
  },
  '0️⃣': {
    name: 'keycap_0',
    group: 'Symbols',
  },
  '1️⃣': {
    name: 'keycap_1',
    group: 'Symbols',
  },
  '2️⃣': {
    name: 'keycap_2',
    group: 'Symbols',
  },
  '3️⃣': {
    name: 'keycap_3',
    group: 'Symbols',
  },
  '4️⃣': {
    name: 'keycap_4',
    group: 'Symbols',
  },
  '5️⃣': {
    name: 'keycap_5',
    group: 'Symbols',
  },
  '6️⃣': {
    name: 'keycap_6',
    group: 'Symbols',
  },
  '7️⃣': {
    name: 'keycap_7',
    group: 'Symbols',
  },
  '8️⃣': {
    name: 'keycap_8',
    group: 'Symbols',
  },
  '9️⃣': {
    name: 'keycap_9',
    group: 'Symbols',
  },
  '🔟': {
    name: 'keycap_10',
    group: 'Symbols',
  },
  '🔠': {
    name: 'input_latin_uppercase',
    group: 'Symbols',
  },
  '🔡': {
    name: 'input_latin_lowercase',
    group: 'Symbols',
  },
  '🔢': {
    name: 'input_numbers',
    group: 'Symbols',
  },
  '🔣': {
    name: 'input_symbols',
    group: 'Symbols',
  },
  '🔤': {
    name: 'input_latin_letters',
    group: 'Symbols',
  },
  '🅰️': {
    name: 'a_button',
    group: 'Symbols',
  },
  '🆎': {
    name: 'ab_button',
    group: 'Symbols',
  },
  '🅱️': {
    name: 'b_button',
    group: 'Symbols',
  },
  '🆑': {
    name: 'cl_button',
    group: 'Symbols',
  },
  '🆒': {
    name: 'cool_button',
    group: 'Symbols',
  },
  '🆓': {
    name: 'free_button',
    group: 'Symbols',
  },
  'ℹ️': {
    name: 'information',
    group: 'Symbols',
  },
  '🆔': {
    name: 'id_button',
    group: 'Symbols',
  },
  'Ⓜ️': {
    name: 'circled_m',
    group: 'Symbols',
  },
  '🆕': {
    name: 'new_button',
    group: 'Symbols',
  },
  '🆖': {
    name: 'ng_button',
    group: 'Symbols',
  },
  '🅾️': {
    name: 'o_button',
    group: 'Symbols',
  },
  '🆗': {
    name: 'ok_button',
    group: 'Symbols',
  },
  '🅿️': {
    name: 'p_button',
    group: 'Symbols',
  },
  '🆘': {
    name: 'sos_button',
    group: 'Symbols',
  },
  '🆙': {
    name: 'up_button',
    group: 'Symbols',
  },
  '🆚': {
    name: 'vs_button',
    group: 'Symbols',
  },
  '🈁': {
    name: 'japanese_here_button',
    group: 'Symbols',
  },
  '🈂️': {
    name: 'japanese_service_charge_button',
    group: 'Symbols',
  },
  '🈷️': {
    name: 'japanese_monthly_amount_button',
    group: 'Symbols',
  },
  '🈶': {
    name: 'japanese_not_free_of_charge_button',
    group: 'Symbols',
  },
  '🈯': {
    name: 'japanese_reserved_button',
    group: 'Symbols',
  },
  '🉐': {
    name: 'japanese_bargain_button',
    group: 'Symbols',
  },
  '🈹': {
    name: 'japanese_discount_button',
    group: 'Symbols',
  },
  '🈚': {
    name: 'japanese_free_of_charge_button',
    group: 'Symbols',
  },
  '🈲': {
    name: 'japanese_prohibited_button',
    group: 'Symbols',
  },
  '🉑': {
    name: 'japanese_acceptable_button',
    group: 'Symbols',
  },
  '🈸': {
    name: 'japanese_application_button',
    group: 'Symbols',
  },
  '🈴': {
    name: 'japanese_passing_grade_button',
    group: 'Symbols',
  },
  '🈳': {
    name: 'japanese_vacancy_button',
    group: 'Symbols',
  },
  '㊗️': {
    name: 'japanese_congratulations_button',
    group: 'Symbols',
  },
  '㊙️': {
    name: 'japanese_secret_button',
    group: 'Symbols',
  },
  '🈺': {
    name: 'japanese_open_for_business_button',
    group: 'Symbols',
  },
  '🈵': {
    name: 'japanese_no_vacancy_button',
    group: 'Symbols',
  },
  '🔴': {
    name: 'red_circle',
    group: 'Symbols',
  },
  '🟠': {
    name: 'orange_circle',
    group: 'Symbols',
  },
  '🟡': {
    name: 'yellow_circle',
    group: 'Symbols',
  },
  '🟢': {
    name: 'green_circle',
    group: 'Symbols',
  },
  '🔵': {
    name: 'blue_circle',
    group: 'Symbols',
  },
  '🟣': {
    name: 'purple_circle',
    group: 'Symbols',
  },
  '🟤': {
    name: 'brown_circle',
    group: 'Symbols',
  },
  '⚫': {
    name: 'black_circle',
    group: 'Symbols',
  },
  '⚪': {
    name: 'white_circle',
    group: 'Symbols',
  },
  '🟥': {
    name: 'red_square',
    group: 'Symbols',
  },
  '🟧': {
    name: 'orange_square',
    group: 'Symbols',
  },
  '🟨': {
    name: 'yellow_square',
    group: 'Symbols',
  },
  '🟩': {
    name: 'green_square',
    group: 'Symbols',
  },
  '🟦': {
    name: 'blue_square',
    group: 'Symbols',
  },
  '🟪': {
    name: 'purple_square',
    group: 'Symbols',
  },
  '🟫': {
    name: 'brown_square',
    group: 'Symbols',
  },
  '⬛': {
    name: 'black_large_square',
    group: 'Symbols',
  },
  '⬜': {
    name: 'white_large_square',
    group: 'Symbols',
  },
  '◼️': {
    name: 'black_medium_square',
    group: 'Symbols',
  },
  '◻️': {
    name: 'white_medium_square',
    group: 'Symbols',
  },
  '◾': {
    name: 'black_medium_small_square',
    group: 'Symbols',
  },
  '◽': {
    name: 'white_medium_small_square',
    group: 'Symbols',
  },
  '▪️': {
    name: 'black_small_square',
    group: 'Symbols',
  },
  '▫️': {
    name: 'white_small_square',
    group: 'Symbols',
  },
  '🔶': {
    name: 'large_orange_diamond',
    group: 'Symbols',
  },
  '🔷': {
    name: 'large_blue_diamond',
    group: 'Symbols',
  },
  '🔸': {
    name: 'small_orange_diamond',
    group: 'Symbols',
  },
  '🔹': {
    name: 'small_blue_diamond',
    group: 'Symbols',
  },
  '🔺': {
    name: 'red_triangle_pointed_up',
    group: 'Symbols',
  },
  '🔻': {
    name: 'red_triangle_pointed_down',
    group: 'Symbols',
  },
  '💠': {
    name: 'diamond_with_a_dot',
    group: 'Symbols',
  },
  '🔘': {
    name: 'radio_button',
    group: 'Symbols',
  },
  '🔳': {
    name: 'white_square_button',
    group: 'Symbols',
  },
  '🔲': {
    name: 'black_square_button',
    group: 'Symbols',
  },
  '🏁': {
    name: 'chequered_flag',
    group: 'Flags',
  },
  '🚩': {
    name: 'triangular_flag',
    group: 'Flags',
  },
  '🎌': {
    name: 'crossed_flags',
    group: 'Flags',
  },
  '🏴': {
    name: 'black_flag',
    group: 'Flags',
  },
  '🏳️': {
    name: 'white_flag',
    group: 'Flags',
  },
  '🏳️‍🌈': {
    name: 'rainbow_flag',
    group: 'Flags',
  },
  '🏳️‍⚧️': {
    name: 'transgender_flag',
    group: 'Flags',
  },
  '🏴‍☠️': {
    name: 'pirate_flag',
    group: 'Flags',
  },
  '🇦🇨': {
    name: 'flag_ascension_island',
    group: 'Flags',
  },
  '🇦🇩': {
    name: 'flag_andorra',
    group: 'Flags',
  },
  '🇦🇪': {
    name: 'flag_united_arab_emirates',
    group: 'Flags',
  },
  '🇦🇫': {
    name: 'flag_afghanistan',
    group: 'Flags',
  },
  '🇦🇬': {
    name: 'flag_antigua_barbuda',
    group: 'Flags',
  },
  '🇦🇮': {
    name: 'flag_anguilla',
    group: 'Flags',
  },
  '🇦🇱': {
    name: 'flag_albania',
    group: 'Flags',
  },
  '🇦🇲': {
    name: 'flag_armenia',
    group: 'Flags',
  },
  '🇦🇴': {
    name: 'flag_angola',
    group: 'Flags',
  },
  '🇦🇶': {
    name: 'flag_antarctica',
    group: 'Flags',
  },
  '🇦🇷': {
    name: 'flag_argentina',
    group: 'Flags',
  },
  '🇦🇸': {
    name: 'flag_american_samoa',
    group: 'Flags',
  },
  '🇦🇹': {
    name: 'flag_austria',
    group: 'Flags',
  },
  '🇦🇺': {
    name: 'flag_australia',
    group: 'Flags',
  },
  '🇦🇼': {
    name: 'flag_aruba',
    group: 'Flags',
  },
  '🇦🇽': {
    name: 'flag_land_islands',
    group: 'Flags',
  },
  '🇦🇿': {
    name: 'flag_azerbaijan',
    group: 'Flags',
  },
  '🇧🇦': {
    name: 'flag_bosnia_herzegovina',
    group: 'Flags',
  },
  '🇧🇧': {
    name: 'flag_barbados',
    group: 'Flags',
  },
  '🇧🇩': {
    name: 'flag_bangladesh',
    group: 'Flags',
  },
  '🇧🇪': {
    name: 'flag_belgium',
    group: 'Flags',
  },
  '🇧🇫': {
    name: 'flag_burkina_faso',
    group: 'Flags',
  },
  '🇧🇬': {
    name: 'flag_bulgaria',
    group: 'Flags',
  },
  '🇧🇭': {
    name: 'flag_bahrain',
    group: 'Flags',
  },
  '🇧🇮': {
    name: 'flag_burundi',
    group: 'Flags',
  },
  '🇧🇯': {
    name: 'flag_benin',
    group: 'Flags',
  },
  '🇧🇱': {
    name: 'flag_st_barth_lemy',
    group: 'Flags',
  },
  '🇧🇲': {
    name: 'flag_bermuda',
    group: 'Flags',
  },
  '🇧🇳': {
    name: 'flag_brunei',
    group: 'Flags',
  },
  '🇧🇴': {
    name: 'flag_bolivia',
    group: 'Flags',
  },
  '🇧🇶': {
    name: 'flag_caribbean_netherlands',
    group: 'Flags',
  },
  '🇧🇷': {
    name: 'flag_brazil',
    group: 'Flags',
  },
  '🇧🇸': {
    name: 'flag_bahamas',
    group: 'Flags',
  },
  '🇧🇹': {
    name: 'flag_bhutan',
    group: 'Flags',
  },
  '🇧🇻': {
    name: 'flag_bouvet_island',
    group: 'Flags',
  },
  '🇧🇼': {
    name: 'flag_botswana',
    group: 'Flags',
  },
  '🇧🇾': {
    name: 'flag_belarus',
    group: 'Flags',
  },
  '🇧🇿': {
    name: 'flag_belize',
    group: 'Flags',
  },
  '🇨🇦': {
    name: 'flag_canada',
    group: 'Flags',
  },
  '🇨🇨': {
    name: 'flag_cocos_islands',
    group: 'Flags',
  },
  '🇨🇩': {
    name: 'flag_congo_kinshasa',
    group: 'Flags',
  },
  '🇨🇫': {
    name: 'flag_central_african_republic',
    group: 'Flags',
  },
  '🇨🇬': {
    name: 'flag_congo_brazzaville',
    group: 'Flags',
  },
  '🇨🇭': {
    name: 'flag_switzerland',
    group: 'Flags',
  },
  '🇨🇮': {
    name: 'flag_c_te_d_ivoire',
    group: 'Flags',
  },
  '🇨🇰': {
    name: 'flag_cook_islands',
    group: 'Flags',
  },
  '🇨🇱': {
    name: 'flag_chile',
    group: 'Flags',
  },
  '🇨🇲': {
    name: 'flag_cameroon',
    group: 'Flags',
  },
  '🇨🇳': {
    name: 'flag_china',
    group: 'Flags',
  },
  '🇨🇴': {
    name: 'flag_colombia',
    group: 'Flags',
  },
  '🇨🇵': {
    name: 'flag_clipperton_island',
    group: 'Flags',
  },
  '🇨🇷': {
    name: 'flag_costa_rica',
    group: 'Flags',
  },
  '🇨🇺': {
    name: 'flag_cuba',
    group: 'Flags',
  },
  '🇨🇻': {
    name: 'flag_cape_verde',
    group: 'Flags',
  },
  '🇨🇼': {
    name: 'flag_cura_ao',
    group: 'Flags',
  },
  '🇨🇽': {
    name: 'flag_christmas_island',
    group: 'Flags',
  },
  '🇨🇾': {
    name: 'flag_cyprus',
    group: 'Flags',
  },
  '🇨🇿': {
    name: 'flag_czechia',
    group: 'Flags',
  },
  '🇩🇪': {
    name: 'flag_germany',
    group: 'Flags',
  },
  '🇩🇬': {
    name: 'flag_diego_garcia',
    group: 'Flags',
  },
  '🇩🇯': {
    name: 'flag_djibouti',
    group: 'Flags',
  },
  '🇩🇰': {
    name: 'flag_denmark',
    group: 'Flags',
  },
  '🇩🇲': {
    name: 'flag_dominica',
    group: 'Flags',
  },
  '🇩🇴': {
    name: 'flag_dominican_republic',
    group: 'Flags',
  },
  '🇩🇿': {
    name: 'flag_algeria',
    group: 'Flags',
  },
  '🇪🇦': {
    name: 'flag_ceuta_melilla',
    group: 'Flags',
  },
  '🇪🇨': {
    name: 'flag_ecuador',
    group: 'Flags',
  },
  '🇪🇪': {
    name: 'flag_estonia',
    group: 'Flags',
  },
  '🇪🇬': {
    name: 'flag_egypt',
    group: 'Flags',
  },
  '🇪🇭': {
    name: 'flag_western_sahara',
    group: 'Flags',
  },
  '🇪🇷': {
    name: 'flag_eritrea',
    group: 'Flags',
  },
  '🇪🇸': {
    name: 'flag_spain',
    group: 'Flags',
  },
  '🇪🇹': {
    name: 'flag_ethiopia',
    group: 'Flags',
  },
  '🇪🇺': {
    name: 'flag_european_union',
    group: 'Flags',
  },
  '🇫🇮': {
    name: 'flag_finland',
    group: 'Flags',
  },
  '🇫🇯': {
    name: 'flag_fiji',
    group: 'Flags',
  },
  '🇫🇰': {
    name: 'flag_falkland_islands',
    group: 'Flags',
  },
  '🇫🇲': {
    name: 'flag_micronesia',
    group: 'Flags',
  },
  '🇫🇴': {
    name: 'flag_faroe_islands',
    group: 'Flags',
  },
  '🇫🇷': {
    name: 'flag_france',
    group: 'Flags',
  },
  '🇬🇦': {
    name: 'flag_gabon',
    group: 'Flags',
  },
  '🇬🇧': {
    name: 'flag_united_kingdom',
    group: 'Flags',
  },
  '🇬🇩': {
    name: 'flag_grenada',
    group: 'Flags',
  },
  '🇬🇪': {
    name: 'flag_georgia',
    group: 'Flags',
  },
  '🇬🇫': {
    name: 'flag_french_guiana',
    group: 'Flags',
  },
  '🇬🇬': {
    name: 'flag_guernsey',
    group: 'Flags',
  },
  '🇬🇭': {
    name: 'flag_ghana',
    group: 'Flags',
  },
  '🇬🇮': {
    name: 'flag_gibraltar',
    group: 'Flags',
  },
  '🇬🇱': {
    name: 'flag_greenland',
    group: 'Flags',
  },
  '🇬🇲': {
    name: 'flag_gambia',
    group: 'Flags',
  },
  '🇬🇳': {
    name: 'flag_guinea',
    group: 'Flags',
  },
  '🇬🇵': {
    name: 'flag_guadeloupe',
    group: 'Flags',
  },
  '🇬🇶': {
    name: 'flag_equatorial_guinea',
    group: 'Flags',
  },
  '🇬🇷': {
    name: 'flag_greece',
    group: 'Flags',
  },
  '🇬🇸': {
    name: 'flag_south_georgia_south_sandwich_islands',
    group: 'Flags',
  },
  '🇬🇹': {
    name: 'flag_guatemala',
    group: 'Flags',
  },
  '🇬🇺': {
    name: 'flag_guam',
    group: 'Flags',
  },
  '🇬🇼': {
    name: 'flag_guinea_bissau',
    group: 'Flags',
  },
  '🇬🇾': {
    name: 'flag_guyana',
    group: 'Flags',
  },
  '🇭🇰': {
    name: 'flag_hong_kong_sar_china',
    group: 'Flags',
  },
  '🇭🇲': {
    name: 'flag_heard_mcdonald_islands',
    group: 'Flags',
  },
  '🇭🇳': {
    name: 'flag_honduras',
    group: 'Flags',
  },
  '🇭🇷': {
    name: 'flag_croatia',
    group: 'Flags',
  },
  '🇭🇹': {
    name: 'flag_haiti',
    group: 'Flags',
  },
  '🇭🇺': {
    name: 'flag_hungary',
    group: 'Flags',
  },
  '🇮🇨': {
    name: 'flag_canary_islands',
    group: 'Flags',
  },
  '🇮🇩': {
    name: 'flag_indonesia',
    group: 'Flags',
  },
  '🇮🇪': {
    name: 'flag_ireland',
    group: 'Flags',
  },
  '🇮🇱': {
    name: 'flag_israel',
    group: 'Flags',
  },
  '🇮🇲': {
    name: 'flag_isle_of_man',
    group: 'Flags',
  },
  '🇮🇳': {
    name: 'flag_india',
    group: 'Flags',
  },
  '🇮🇴': {
    name: 'flag_british_indian_ocean_territory',
    group: 'Flags',
  },
  '🇮🇶': {
    name: 'flag_iraq',
    group: 'Flags',
  },
  '🇮🇷': {
    name: 'flag_iran',
    group: 'Flags',
  },
  '🇮🇸': {
    name: 'flag_iceland',
    group: 'Flags',
  },
  '🇮🇹': {
    name: 'flag_italy',
    group: 'Flags',
  },
  '🇯🇪': {
    name: 'flag_jersey',
    group: 'Flags',
  },
  '🇯🇲': {
    name: 'flag_jamaica',
    group: 'Flags',
  },
  '🇯🇴': {
    name: 'flag_jordan',
    group: 'Flags',
  },
  '🇯🇵': {
    name: 'flag_japan',
    group: 'Flags',
  },
  '🇰🇪': {
    name: 'flag_kenya',
    group: 'Flags',
  },
  '🇰🇬': {
    name: 'flag_kyrgyzstan',
    group: 'Flags',
  },
  '🇰🇭': {
    name: 'flag_cambodia',
    group: 'Flags',
  },
  '🇰🇮': {
    name: 'flag_kiribati',
    group: 'Flags',
  },
  '🇰🇲': {
    name: 'flag_comoros',
    group: 'Flags',
  },
  '🇰🇳': {
    name: 'flag_st_kitts_nevis',
    group: 'Flags',
  },
  '🇰🇵': {
    name: 'flag_north_korea',
    group: 'Flags',
  },
  '🇰🇷': {
    name: 'flag_south_korea',
    group: 'Flags',
  },
  '🇰🇼': {
    name: 'flag_kuwait',
    group: 'Flags',
  },
  '🇰🇾': {
    name: 'flag_cayman_islands',
    group: 'Flags',
  },
  '🇰🇿': {
    name: 'flag_kazakhstan',
    group: 'Flags',
  },
  '🇱🇦': {
    name: 'flag_laos',
    group: 'Flags',
  },
  '🇱🇧': {
    name: 'flag_lebanon',
    group: 'Flags',
  },
  '🇱🇨': {
    name: 'flag_st_lucia',
    group: 'Flags',
  },
  '🇱🇮': {
    name: 'flag_liechtenstein',
    group: 'Flags',
  },
  '🇱🇰': {
    name: 'flag_sri_lanka',
    group: 'Flags',
  },
  '🇱🇷': {
    name: 'flag_liberia',
    group: 'Flags',
  },
  '🇱🇸': {
    name: 'flag_lesotho',
    group: 'Flags',
  },
  '🇱🇹': {
    name: 'flag_lithuania',
    group: 'Flags',
  },
  '🇱🇺': {
    name: 'flag_luxembourg',
    group: 'Flags',
  },
  '🇱🇻': {
    name: 'flag_latvia',
    group: 'Flags',
  },
  '🇱🇾': {
    name: 'flag_libya',
    group: 'Flags',
  },
  '🇲🇦': {
    name: 'flag_morocco',
    group: 'Flags',
  },
  '🇲🇨': {
    name: 'flag_monaco',
    group: 'Flags',
  },
  '🇲🇩': {
    name: 'flag_moldova',
    group: 'Flags',
  },
  '🇲🇪': {
    name: 'flag_montenegro',
    group: 'Flags',
  },
  '🇲🇫': {
    name: 'flag_st_martin',
    group: 'Flags',
  },
  '🇲🇬': {
    name: 'flag_madagascar',
    group: 'Flags',
  },
  '🇲🇭': {
    name: 'flag_marshall_islands',
    group: 'Flags',
  },
  '🇲🇰': {
    name: 'flag_north_macedonia',
    group: 'Flags',
  },
  '🇲🇱': {
    name: 'flag_mali',
    group: 'Flags',
  },
  '🇲🇲': {
    name: 'flag_myanmar',
    group: 'Flags',
  },
  '🇲🇳': {
    name: 'flag_mongolia',
    group: 'Flags',
  },
  '🇲🇴': {
    name: 'flag_macao_sar_china',
    group: 'Flags',
  },
  '🇲🇵': {
    name: 'flag_northern_mariana_islands',
    group: 'Flags',
  },
  '🇲🇶': {
    name: 'flag_martinique',
    group: 'Flags',
  },
  '🇲🇷': {
    name: 'flag_mauritania',
    group: 'Flags',
  },
  '🇲🇸': {
    name: 'flag_montserrat',
    group: 'Flags',
  },
  '🇲🇹': {
    name: 'flag_malta',
    group: 'Flags',
  },
  '🇲🇺': {
    name: 'flag_mauritius',
    group: 'Flags',
  },
  '🇲🇻': {
    name: 'flag_maldives',
    group: 'Flags',
  },
  '🇲🇼': {
    name: 'flag_malawi',
    group: 'Flags',
  },
  '🇲🇽': {
    name: 'flag_mexico',
    group: 'Flags',
  },
  '🇲🇾': {
    name: 'flag_malaysia',
    group: 'Flags',
  },
  '🇲🇿': {
    name: 'flag_mozambique',
    group: 'Flags',
  },
  '🇳🇦': {
    name: 'flag_namibia',
    group: 'Flags',
  },
  '🇳🇨': {
    name: 'flag_new_caledonia',
    group: 'Flags',
  },
  '🇳🇪': {
    name: 'flag_niger',
    group: 'Flags',
  },
  '🇳🇫': {
    name: 'flag_norfolk_island',
    group: 'Flags',
  },
  '🇳🇬': {
    name: 'flag_nigeria',
    group: 'Flags',
  },
  '🇳🇮': {
    name: 'flag_nicaragua',
    group: 'Flags',
  },
  '🇳🇱': {
    name: 'flag_netherlands',
    group: 'Flags',
  },
  '🇳🇴': {
    name: 'flag_norway',
    group: 'Flags',
  },
  '🇳🇵': {
    name: 'flag_nepal',
    group: 'Flags',
  },
  '🇳🇷': {
    name: 'flag_nauru',
    group: 'Flags',
  },
  '🇳🇺': {
    name: 'flag_niue',
    group: 'Flags',
  },
  '🇳🇿': {
    name: 'flag_new_zealand',
    group: 'Flags',
  },
  '🇴🇲': {
    name: 'flag_oman',
    group: 'Flags',
  },
  '🇵🇦': {
    name: 'flag_panama',
    group: 'Flags',
  },
  '🇵🇪': {
    name: 'flag_peru',
    group: 'Flags',
  },
  '🇵🇫': {
    name: 'flag_french_polynesia',
    group: 'Flags',
  },
  '🇵🇬': {
    name: 'flag_papua_new_guinea',
    group: 'Flags',
  },
  '🇵🇭': {
    name: 'flag_philippines',
    group: 'Flags',
  },
  '🇵🇰': {
    name: 'flag_pakistan',
    group: 'Flags',
  },
  '🇵🇱': {
    name: 'flag_poland',
    group: 'Flags',
  },
  '🇵🇲': {
    name: 'flag_st_pierre_miquelon',
    group: 'Flags',
  },
  '🇵🇳': {
    name: 'flag_pitcairn_islands',
    group: 'Flags',
  },
  '🇵🇷': {
    name: 'flag_puerto_rico',
    group: 'Flags',
  },
  '🇵🇸': {
    name: 'flag_palestinian_territories',
    group: 'Flags',
  },
  '🇵🇹': {
    name: 'flag_portugal',
    group: 'Flags',
  },
  '🇵🇼': {
    name: 'flag_palau',
    group: 'Flags',
  },
  '🇵🇾': {
    name: 'flag_paraguay',
    group: 'Flags',
  },
  '🇶🇦': {
    name: 'flag_qatar',
    group: 'Flags',
  },
  '🇷🇪': {
    name: 'flag_r_union',
    group: 'Flags',
  },
  '🇷🇴': {
    name: 'flag_romania',
    group: 'Flags',
  },
  '🇷🇸': {
    name: 'flag_serbia',
    group: 'Flags',
  },
  '🇷🇺': {
    name: 'flag_russia',
    group: 'Flags',
  },
  '🇷🇼': {
    name: 'flag_rwanda',
    group: 'Flags',
  },
  '🇸🇦': {
    name: 'flag_saudi_arabia',
    group: 'Flags',
  },
  '🇸🇧': {
    name: 'flag_solomon_islands',
    group: 'Flags',
  },
  '🇸🇨': {
    name: 'flag_seychelles',
    group: 'Flags',
  },
  '🇸🇩': {
    name: 'flag_sudan',
    group: 'Flags',
  },
  '🇸🇪': {
    name: 'flag_sweden',
    group: 'Flags',
  },
  '🇸🇬': {
    name: 'flag_singapore',
    group: 'Flags',
  },
  '🇸🇭': {
    name: 'flag_st_helena',
    group: 'Flags',
  },
  '🇸🇮': {
    name: 'flag_slovenia',
    group: 'Flags',
  },
  '🇸🇯': {
    name: 'flag_svalbard_jan_mayen',
    group: 'Flags',
  },
  '🇸🇰': {
    name: 'flag_slovakia',
    group: 'Flags',
  },
  '🇸🇱': {
    name: 'flag_sierra_leone',
    group: 'Flags',
  },
  '🇸🇲': {
    name: 'flag_san_marino',
    group: 'Flags',
  },
  '🇸🇳': {
    name: 'flag_senegal',
    group: 'Flags',
  },
  '🇸🇴': {
    name: 'flag_somalia',
    group: 'Flags',
  },
  '🇸🇷': {
    name: 'flag_suriname',
    group: 'Flags',
  },
  '🇸🇸': {
    name: 'flag_south_sudan',
    group: 'Flags',
  },
  '🇸🇹': {
    name: 'flag_s_o_tom_pr_ncipe',
    group: 'Flags',
  },
  '🇸🇻': {
    name: 'flag_el_salvador',
    group: 'Flags',
  },
  '🇸🇽': {
    name: 'flag_sint_maarten',
    group: 'Flags',
  },
  '🇸🇾': {
    name: 'flag_syria',
    group: 'Flags',
  },
  '🇸🇿': {
    name: 'flag_eswatini',
    group: 'Flags',
  },
  '🇹🇦': {
    name: 'flag_tristan_da_cunha',
    group: 'Flags',
  },
  '🇹🇨': {
    name: 'flag_turks_caicos_islands',
    group: 'Flags',
  },
  '🇹🇩': {
    name: 'flag_chad',
    group: 'Flags',
  },
  '🇹🇫': {
    name: 'flag_french_southern_territories',
    group: 'Flags',
  },
  '🇹🇬': {
    name: 'flag_togo',
    group: 'Flags',
  },
  '🇹🇭': {
    name: 'flag_thailand',
    group: 'Flags',
  },
  '🇹🇯': {
    name: 'flag_tajikistan',
    group: 'Flags',
  },
  '🇹🇰': {
    name: 'flag_tokelau',
    group: 'Flags',
  },
  '🇹🇱': {
    name: 'flag_timor_leste',
    group: 'Flags',
  },
  '🇹🇲': {
    name: 'flag_turkmenistan',
    group: 'Flags',
  },
  '🇹🇳': {
    name: 'flag_tunisia',
    group: 'Flags',
  },
  '🇹🇴': {
    name: 'flag_tonga',
    group: 'Flags',
  },
  '🇹🇷': {
    name: 'flag_turkey',
    group: 'Flags',
  },
  '🇹🇹': {
    name: 'flag_trinidad_tobago',
    group: 'Flags',
  },
  '🇹🇻': {
    name: 'flag_tuvalu',
    group: 'Flags',
  },
  '🇹🇼': {
    name: 'flag_taiwan',
    group: 'Flags',
  },
  '🇹🇿': {
    name: 'flag_tanzania',
    group: 'Flags',
  },
  '🇺🇦': {
    name: 'flag_ukraine',
    group: 'Flags',
  },
  '🇺🇬': {
    name: 'flag_uganda',
    group: 'Flags',
  },
  '🇺🇲': {
    name: 'flag_u_s_outlying_islands',
    group: 'Flags',
  },
  '🇺🇳': {
    name: 'flag_united_nations',
    group: 'Flags',
  },
  '🇺🇸': {
    name: 'flag_united_states',
    group: 'Flags',
  },
  '🇺🇾': {
    name: 'flag_uruguay',
    group: 'Flags',
  },
  '🇺🇿': {
    name: 'flag_uzbekistan',
    group: 'Flags',
  },
  '🇻🇦': {
    name: 'flag_vatican_city',
    group: 'Flags',
  },
  '🇻🇨': {
    name: 'flag_st_vincent_grenadines',
    group: 'Flags',
  },
  '🇻🇪': {
    name: 'flag_venezuela',
    group: 'Flags',
  },
  '🇻🇬': {
    name: 'flag_british_virgin_islands',
    group: 'Flags',
  },
  '🇻🇮': {
    name: 'flag_u_s_virgin_islands',
    group: 'Flags',
  },
  '🇻🇳': {
    name: 'flag_vietnam',
    group: 'Flags',
  },
  '🇻🇺': {
    name: 'flag_vanuatu',
    group: 'Flags',
  },
  '🇼🇫': {
    name: 'flag_wallis_futuna',
    group: 'Flags',
  },
  '🇼🇸': {
    name: 'flag_samoa',
    group: 'Flags',
  },
  '🇽🇰': {
    name: 'flag_kosovo',
    group: 'Flags',
  },
  '🇾🇪': {
    name: 'flag_yemen',
    group: 'Flags',
  },
  '🇾🇹': {
    name: 'flag_mayotte',
    group: 'Flags',
  },
  '🇿🇦': {
    name: 'flag_south_africa',
    group: 'Flags',
  },
  '🇿🇲': {
    name: 'flag_zambia',
    group: 'Flags',
  },
  '🇿🇼': {
    name: 'flag_zimbabwe',
    group: 'Flags',
  },
  '🏴󠁧󠁢󠁥󠁮󠁧󠁿': {
    name: 'flag_england',
    group: 'Flags',
  },
  '🏴󠁧󠁢󠁳󠁣󠁴󠁿': {
    name: 'flag_scotland',
    group: 'Flags',
  },
  '🏴󠁧󠁢󠁷󠁬󠁳󠁿': {
    name: 'flag_wales',
    group: 'Flags',
  },
} as const;

export default emojiList;
