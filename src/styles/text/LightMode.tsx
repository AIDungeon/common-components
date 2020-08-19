import { StyleSheet } from 'react-native'
import type { Style } from '../StyleTypes'

const lmt: Style = StyleSheet.create<Style>({
  primaryText: {
    color: '#000000',
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

export { lmt }
