import { StyleSheet } from 'react-native'
import type { Style } from '../StyleTypes'
import { fontSizes } from './FontSizes'

const dmt: Style = StyleSheet.create<Style>({
  primaryText: {
    color: '#FFFFFF',
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

export { dmt }
