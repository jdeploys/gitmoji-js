export enum GitmojiCategory {
  WorkOrIssue = 'WorkOrIssue',
  Style = 'Style',
  Code = 'Code',
  Dependency = 'Dependency',
  Document = 'Document',
  Deploy = 'Deploy',
  Configuration = 'Configuration',
  Etc = 'Etc',
}

export interface GitmojiData {
  emoji: string;
  key: string;
  category: GitmojiCategory;
}

export const gitmojiData: GitmojiData[] = [
  {
    emoji: '🎉',
    key: 'tada',
    category: GitmojiCategory.WorkOrIssue,
  },
  {
    emoji: '✨',
    key: 'sparkles',
    category: GitmojiCategory.WorkOrIssue,
  },
  {
    emoji: '🐛',
    key: 'bug',
    category: GitmojiCategory.WorkOrIssue,
  },
  {
    emoji: '🚑️',
    key: 'ambulance',
    category: GitmojiCategory.WorkOrIssue,
  },
  { key: 'construction', emoji: '🚧', category: GitmojiCategory.WorkOrIssue },
  {
    key: 'adhesive_bandage',
    emoji: '🩹',
    category: GitmojiCategory.WorkOrIssue,
  },
  { key: 'lock', emoji: '🔒️', category: GitmojiCategory.WorkOrIssue },
  { key: 'boom', emoji: '💥', category: GitmojiCategory.WorkOrIssue },
  { key: 'alembic', emoji: '⚗️', category: GitmojiCategory.WorkOrIssue },
  { key: 'mag', emoji: '🔍️', category: GitmojiCategory.WorkOrIssue },
  {
    key: 'passport_control',
    emoji: '🛂',
    category: GitmojiCategory.WorkOrIssue,
  },
  {
    emoji: '💄',
    key: 'lipstick',
    category: GitmojiCategory.Style,
  },
  { key: 'speech_balloon', emoji: '💬', category: GitmojiCategory.Style },
  {
    key: 'globe_with_meridians',
    emoji: '🌐',
    category: GitmojiCategory.Style,
  },
  { key: 'bento', emoji: '🍱', category: GitmojiCategory.Style },
  { key: 'wheelchair', emoji: '♿️', category: GitmojiCategory.Style },
  {
    key: 'children_crossing',
    emoji: '🚸',
    category: GitmojiCategory.Style,
  },
  { key: 'iphone', emoji: '📱', category: GitmojiCategory.Style },
  { key: 'dizzy', emoji: '💫', category: GitmojiCategory.Style },
  {
    emoji: '🎨',
    key: 'art',
    category: GitmojiCategory.Code,
  },
  {
    emoji: '⚡',
    key: 'zap',
    category: GitmojiCategory.Code,
  },
  {
    emoji: '🔥',
    key: 'fire',
    category: GitmojiCategory.Code,
  },
  { key: 'white_check_mark', emoji: '✅', category: GitmojiCategory.Code },
  { key: 'rotating_light', emoji: '🚨', category: GitmojiCategory.Code },
  {
    key: 'chart_with_upwards_trend',
    emoji: '📈',
    category: GitmojiCategory.Code,
  },
  { key: 'recycle', emoji: '♻️', category: GitmojiCategory.Code },
  { key: 'pencil2', emoji: '✏️', category: GitmojiCategory.Code },
  { key: 'package', emoji: '📦️', category: GitmojiCategory.Code },
  { key: 'alien', emoji: '👽️', category: GitmojiCategory.Code },
  { key: 'truck', emoji: '🚚', category: GitmojiCategory.Code },
  {
    key: 'building_construction',
    emoji: '🏗️',
    category: GitmojiCategory.Code,
  },
  { key: 'clown_face', emoji: '🤡', category: GitmojiCategory.Code },
  { key: 'bulb', emoji: '💡', category: GitmojiCategory.Code },
  { key: 'camera_flash', emoji: '📸', category: GitmojiCategory.Code },
  { key: 'label', emoji: '🏷️', category: GitmojiCategory.Code },
  { key: 'goal_net', emoji: '🥅', category: GitmojiCategory.Code },
  { key: 'wastebasket', emoji: '🗑️', category: GitmojiCategory.Code },
  { key: 'monocle_face', emoji: '🧐', category: GitmojiCategory.Code },
  { key: 'coffin', emoji: '⚰️', category: GitmojiCategory.Code },
  { key: 'arrow_down', emoji: '⬇️', category: GitmojiCategory.Dependency },
  { key: 'arrow_up', emoji: '⬆️', category: GitmojiCategory.Dependency },
  { key: 'pushpin', emoji: '📌', category: GitmojiCategory.Dependency },
  {
    key: 'heavy_plus_sign',
    emoji: '➕',
    category: GitmojiCategory.Dependency,
  },
  {
    key: 'heavy_minus_sign',
    emoji: '➖',
    category: GitmojiCategory.Dependency,
  },
  {
    emoji: '📝',
    key: 'memo',
    category: GitmojiCategory.Document,
  },
  { key: 'page_facing_up', emoji: '📄', category: GitmojiCategory.Document },
  { key: 'loud_sound', emoji: '🔊', category: GitmojiCategory.Document },
  { key: 'mute', emoji: '🔇', category: GitmojiCategory.Document },
  {
    key: 'busts_in_silhouette',
    emoji: '👥',
    category: GitmojiCategory.Document,
  },
  {
    emoji: '🚀',
    key: 'rocket',
    category: GitmojiCategory.Deploy,
  },
  { key: 'bookmark', emoji: '🔖', category: GitmojiCategory.Deploy },
  { key: 'green_heart', emoji: '💚', category: GitmojiCategory.Deploy },
  {
    key: 'construction_worker',
    emoji: '👷',
    category: GitmojiCategory.Deploy,
  },

  { key: 'wrench', emoji: '🔧', category: GitmojiCategory.Configuration },
  { key: 'hammer', emoji: '🔨', category: GitmojiCategory.Configuration },
  {
    key: 'card_file_box',
    emoji: '🗃️',
    category: GitmojiCategory.Configuration,
  },
  { key: 'see_no_evil', emoji: '🙈', category: GitmojiCategory.Configuration },
  { key: 'seedling', emoji: '🌱', category: GitmojiCategory.Configuration },
  {
    key: 'triangular_flag_on_post',
    emoji: '🚩',
    category: GitmojiCategory.Configuration,
  },
  { key: 'poop', emoji: '💩', category: GitmojiCategory.Etc },
  { key: 'rewind', emoji: '⏪️', category: GitmojiCategory.Etc },
  {
    key: 'twisted_rightwards_arrows',
    emoji: '🔀',
    category: GitmojiCategory.Etc,
  },
  { key: 'beers', emoji: '🍻', category: GitmojiCategory.Etc },
  { key: 'egg', emoji: '🥚', category: GitmojiCategory.Etc },
];
