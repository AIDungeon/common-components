import { StyleSheet } from 'react-native'
import type { Style } from '../StyleTypes'

const textSpacing: Style = StyleSheet.create<Style>({
  textSpacingSmall: {
    marginBottom: 5,
  },
  textSpacingMedium: {
    marginBottom: 10,
  },
})

export { textSpacing }
