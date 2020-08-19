import AmberTheme from './Amber'
import type { Color } from './ColorTypes'

const getColors = (color?: string): Color => {
  switch (color) {
    case 'amber':
      return AmberTheme
    default:
      return {
        primary: 'blue',
        primaryFaded: 'red',
      }
  }
}

export default getColors
