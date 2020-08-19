import type { ViewStyle, TextStyle } from 'react-native'

export interface Style {
  container: ViewStyle
  labelText: TextStyle
  infoText: TextStyle
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
