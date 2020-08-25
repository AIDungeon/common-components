import { StyleSheet } from 'react-native'
import type { Style } from '../StyleTypes'
import { fontSizes } from './FontSizes'
import DarkText from '../colors/DarkText'

const dmt: Style = StyleSheet.create<Style>({
  primaryText: {
    color: DarkText.primary,
    fontFamily: 'HelveticaNeueMedium',
    fontSize: fontSizes.large,
    marginBottom: 5,
  },
  secondaryText: {
    color: DarkText.secondary,
    fontFamily: 'HelveticaNeueMedium',
    fontSize: fontSizes.medium,
    marginBottom: 10,
  },
})

export { dmt }
