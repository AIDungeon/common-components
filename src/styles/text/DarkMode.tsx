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
  fontFamily: 'HelveticaNeueLight',
}

const alertText = {
  color: DarkText.alert,
  fontFamily: 'HelveticaNeueLight',
}

const dmt: Style = StyleSheet.create<Style>({
  primaryText,
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
  secondaryText,
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
  alertText,
  alertTextXLarge: {
    ...alertText,
    fontSize: fontSizes.xLarge,
  },
  alertTextLarge: {
    ...alertText,
    fontSize: fontSizes.large,
  },
  alertTextMedium: {
    ...alertText,
    fontSize: fontSizes.medium,
  },
  alertTextSmall: {
    ...alertText,
    fontSize: fontSizes.small,
  },
  alertTextXSmall: {
    ...alertText,
    fontSize: fontSizes.xSmall,
  },
})

export { dmt }
