import type { Style } from './StyleTypes'
import { StyleSheet } from 'react-native'
import { dmt } from './text/DarkMode'
import { lmt } from './text/LightMode'
import { avatar } from './spacing/Avatar'
import { row } from './flex/Row'

const containerStyle: Style = StyleSheet.create<Style>({
  container: {
    width: '100%',
    marginBottom: 45,
    alignItems: 'flex-start',
  },
})

const getStyles = (mode: string = 'dark'): Style => {
  const textStyle = mode === 'light' ? lmt : dmt

  return { ...textStyle, ...containerStyle }
}

const styles = {
  ...avatar,
  ...row,
}

export { getStyles, styles }
