import React from 'react'
import { Icon as NativeIcon } from 'react-native-elements'

import { getTextColors, getColors } from '../styles/colors/Colors'

export interface IconProps {
  iconName: string
  mode: string
  type?: string
  color?: string
  size?: number
}

const Icon: React.FC<IconProps> = (props) => {
  const { iconName, type, mode, color, size } = props

  console.log({ color, mode })
  const textColors = getTextColors(mode)
  const colors = getColors(color)
  const iconColor = color ? colors.primary : textColors.primary

  return (
    <NativeIcon
      name={iconName}
      color={iconColor}
      type={type || 'material-community'}
      containerStyle={{ marginLeft: 5, width: 20 }}
      size={size}
    />
  )
}

export { Icon }
