import React from 'react'
import { Icon as NativeIcon } from 'react-native-elements'

import { getTextColors, getColors } from '../styles/colors/Colors'

export interface IconProps {
  iconName: string
  mode: string
  type?: string
  theme?: string
  size?: number
  color?: string
}

const Icon: React.FC<IconProps> = (props) => {
  const { iconName, type, mode, theme, color, size } = props

  const textColors = getTextColors(mode)
  const colors = getColors(theme)
  const iconColor = theme ? colors.primary : textColors.primary

  return (
    <NativeIcon
      name={iconName}
      color={color || iconColor}
      type={type || 'material-community'}
      containerStyle={{ marginLeft: 5, width: 20 }}
      size={size}
    />
  )
}

export { Icon }
