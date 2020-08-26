import { StyleSheet } from 'react-native'
import type { Style } from '../StyleTypes'

const row: Style = StyleSheet.create<Style>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export { row }
