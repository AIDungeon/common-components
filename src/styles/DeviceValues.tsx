import { Dimensions, Platform } from 'react-native'

const platformTextSize = (textSize: number) => {
  const textSizeModifier: number = deviceValue({
    default: 1.0,
    iPhone5: 1.0,
    tablet: 1.6,
    tabletLarge: 1.6,
  })
  const modifiedTextSize = Math.floor(textSizeModifier * textSize)
  return modifiedTextSize
}

const deviceValue = (options: Options): number => {
  const { width, height } = Dimensions.get('window')

  if (Platform.OS === 'android') {
    return options.android ?? options.default
  }

  if (Platform.OS === 'ios' && (width === 568 || height === 568)) {
    return options.iPhone5 ?? options.default
  }

  if (Platform.OS === 'ios' && (width === 812 || height === 812)) {
    return options.iPhoneX ?? options.default
  }

  if (Platform.OS === 'ios' && (width === 896 || height === 896)) {
    return options.iPhoneXR ?? options.iPhoneX ?? options.default
  }

  if (Platform.OS === 'web' && width >= 800) {
    return options.webWide ?? options.web ?? options.tabletLarge ?? options.default
  }

  if (Platform.OS === 'web' && width >= 600) {
    return options.web ?? options.tablet ?? options.default
  }

  if (options.tablet && width >= 1000) {
    return options.tabletLarge ?? options.tablet ?? options.default
  }

  if (options.tablet && width >= 768) {
    return options.tablet ?? options.default
  }

  return options.default
}

export { deviceValue, platformTextSize }

interface Options {
  default: number
  android?: number
  iPhone5?: number
  iPhoneX?: number
  iPhoneXR?: number
  web?: number
  webWide?: number
  tablet?: number
  tabletLarge?: number
}
