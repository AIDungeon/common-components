import { StyleSheet } from 'react-native'
import type { Style } from '../StyleTypes'

const dmt: Style = StyleSheet.create<Style>({
  primaryText: {
    color: '#FFFFFF',
    fontFamily: 'HelveticaNeueMedium',
    fontSize: 24,
    marginBottom: 5,
  },
  secondaryText: {
    color: '#999999',
    fontFamily: 'HelveticaNeueMedium',
    fontSize: 12,
    marginBottom: 10,
  },
})

export { dmt }
