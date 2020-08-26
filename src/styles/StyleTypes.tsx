import type { ViewStyle, TextStyle } from 'react-native'

export interface Style {
  container?: ViewStyle
  primaryTextXLarge?: TextStyle
  primaryTextLarge?: TextStyle
  primaryTextMedium?: TextStyle
  primaryTextSmall?: TextStyle
  primaryTextXSmall?: TextStyle
  secondaryTextXLarge?: TextStyle
  secondaryTextLarge?: TextStyle
  secondaryTextMedium?: TextStyle
  secondaryTextSmall?: TextStyle
  secondaryTextXSmall?: TextStyle
}

export interface UserDisplay {
  mode?: string
  theme?: string
}

export interface UserText {
  size?: string
  font?: string
}

export interface UserSettings extends UserDisplay, UserText {}
