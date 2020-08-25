import { StyleSheet } from 'react-native'
import type { Style } from '../StyleTypes'
import { fontSizes } from './FontSizes'
import LightText from '../colors/LightText'

const lmt: Style = StyleSheet.create<Style>({
  primaryText: {
    color: LightText.primary,
    fontFamily: 'HelveticaNeueMedium',
    fontSize: fontSizes.large,
    marginBottom: 5,
  },
  secondaryText: {
    color: LightText.secondary,
    fontFamily: 'HelveticaNeueMedium',
    fontSize: fontSizes.medium,
    marginBottom: 10,
  },
})

export { lmt }
