import React from 'react'
import { Icon as NativeIcon } from 'react-native-elements'
import type { ViewStyle } from 'react-native'

import { getTextColors } from '../styles/colors/Colors'
import { styles } from '../styles/Styles'

export interface IconProps {
  iconName: string
  mode: string
  type?: string
  color?: string
  size?: number
  style?: ViewStyle
}

const Icon: React.FC<IconProps> = (props) => {
  const { iconName, type, mode, color, size } = props

  const textColors = getTextColors(mode)
  const iconColor = color || textColors.primary

  console.log({ iconColor, color })

  return (
    <NativeIcon
      name={iconName}
      color={iconColor}
      type={type || 'material-community'}
      iconStyle={styles.icon}
      containerStyle={{ marginLeft: 5, width: 20 }}
      size={size}
    />
  )
}

export { Icon }
