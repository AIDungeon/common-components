import { StyleSheet } from 'react-native'
import type { Style } from '../StyleTypes'
import { fontSizes } from './FontSizes'

const lmt: Style = StyleSheet.create<Style>({
  primaryText: {
    color: '#000000',
    fontFamily: 'HelveticaNeueMedium',
    fontSize: fontSizes.large,
    marginBottom: 5,
  },
  secondaryText: {
    color: '#999999',
    fontFamily: 'HelveticaNeueMedium',
    fontSize: fontSizes.medium,
    marginBottom: 10,
  },
})

export { lmt }
