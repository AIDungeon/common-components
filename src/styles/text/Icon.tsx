import { StyleSheet } from 'react-native'
import type { Style } from '../StyleTypes'
import { fontSizes } from './FontSizes'

const icon: Style = StyleSheet.create<Style>({
  icon: {
    fontSize: fontSizes.iconButton,
    textAlign: 'center',
    width: 40,
    padding: 8,
  },
})

export { icon }
