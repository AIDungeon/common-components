import { deviceValue } from '../DeviceValues'

const fontSizes = {
  xLarge: deviceValue({ default: 36, iPhone5: 25, tablet: 38, tabletLarge: 38 }),
  large: deviceValue({ default: 24, iPhone5: 18, tablet: 26, tabletLarge: 28 }),
  medium: deviceValue({ default: 18, iPhone5: 14, tablet: 20, tabletLarge: 24 }),
  small: deviceValue({ default: 14, iPhone5: 10, tablet: 18, tabletLarge: 20 }),
  xSmall: deviceValue({ default: 12, iPhone5: 9, tablet: 16, tabletLarge: 16 }),
  iconButton: 24,
}

export { fontSizes }
