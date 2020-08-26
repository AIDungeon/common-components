import { StyleSheet } from 'react-native'
import type { Style } from '../StyleTypes'
import { fontSizes } from './FontSizes'
import DarkText from '../colors/DarkText'

const primaryText = {
  color: DarkText.primary,
  fontFamily: 'HelveticaNeueMedium',
}
const secondaryText = {
  color: DarkText.secondary,
  fontFamily: 'HelveticaNeueMedium',
}

const dmt: Style = StyleSheet.create<Style>({
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

export { dmt }
