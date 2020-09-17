import type { Style } from './StyleTypes'
import { StyleSheet } from 'react-native'
import { dmt } from './text/DarkMode'
import { lmt } from './text/LightMode'
import { avatar } from './spacing/Avatar'
import { row } from './flex/Row'
import { icon } from './text/Icon'
import { textSpacing } from './spacing/Text'

const containerStyle: Style = StyleSheet.create<Style>({
  container: {
    width: '100%',
    marginBottom: 32,
    alignItems: 'flex-start',
  },
  tagContainer: {
    flexDirection: 'row',
    borderWidth: 0.5,
    borderRadius: 20,
    marginRight: 5,
    marginBottom: 5,
    paddingVertical: 3,
    paddingHorizontal: 7,
  },
})

const getStyles = (mode: string = 'dark'): Style => {
  const textStyle = mode === 'light' ? lmt : dmt

  return { ...textStyle, ...containerStyle }
}

const styles = {
  ...avatar,
  ...row,
  ...icon,
  ...textSpacing,
  ...containerStyle,
  ...dmt,
}

export { getStyles, styles }
