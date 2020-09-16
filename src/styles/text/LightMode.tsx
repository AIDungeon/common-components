import { StyleSheet } from 'react-native'
import type { Style } from '../StyleTypes'
import { fontSizes } from './FontSizes'
import LightText from '../colors/LightText'

const primaryText = {
  color: LightText.primary,
  fontFamily: 'HelveticaNeueMedium',
}
const secondaryText = {
  color: LightText.secondary,
  fontFamily: 'HelveticaNeueLight',
}

const alertText = {
  color: LightText.alert,
  fontFamily: 'HelveticaNeueLight',
}

const lmt: Style = StyleSheet.create<Style>({
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

export { lmt }
