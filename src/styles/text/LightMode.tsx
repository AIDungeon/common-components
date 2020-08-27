import { StyleSheet } from 'react-native'
import type { Style } from '../StyleTypes'
import { fontSizes } from './FontSizes'
import LightText from '../colors/LightText'

const primaryText = {
  color: LightText.primary,
  fontFamily: 'HelveticaNeueLight',
}
const secondaryText = {
  color: LightText.secondary,
  fontFamily: 'HelveticaNeueLight',
}

const lmt: Style = StyleSheet.create<Style>({
  primaryTextXLarge: {
    ...primaryText,
    fontSize: fontSizes.xLarge,
  },
  primaryTextLarge: {
    ...primaryText,
    fontSize: fontSizes.large,
  },
  primaryTextMedium: {
    ...primaryText,
    fontSize: fontSizes.medium,
  },
  primaryTextSmall: {
    ...primaryText,
    fontSize: fontSizes.small,
  },
  primaryTextXSmall: {
    ...primaryText,
    fontSize: fontSizes.xSmall,
  },
  secondaryTextXLarge: {
    ...secondaryText,
    fontSize: fontSizes.xLarge,
  },
  secondaryTextLarge: {
    ...secondaryText,
    fontSize: fontSizes.large,
  },
  secondaryTextMedium: {
    ...secondaryText,
    fontSize: fontSizes.medium,
  },
  secondaryTextSmall: {
    ...secondaryText,
    fontSize: fontSizes.small,
  },
  secondaryTextXSmall: {
    ...secondaryText,
    fontSize: fontSizes.xSmall,
  },
})

export { lmt }
