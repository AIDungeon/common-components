import React from 'react'
import { Icon as NativeIcon } from 'react-native-elements'

import { getColors, getTextColors } from '../styles/colors/Colors'
import { styles } from '../styles/Styles'

export interface IconProps {
  iconName: string
  mode: string
  type?: string
  color?: string
  size?: number
}

const Icon: React.FC<IconProps> = (props) => {
  const { iconName, type, mode, color, size } = props

  const textColors = getTextColors(mode)
  const colors = getColors(color)
  const iconColor = color ? colors.primary : textColors.primary

  return (
    <NativeIcon name={iconName} color={iconColor} type={type || 'material-community'} style={styles.icon} size={size} />
  )
}

export { Icon }
