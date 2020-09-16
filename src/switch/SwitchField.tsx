import React from 'react'
import { Switch, Text, View } from 'react-native'

import { getStyles, styles } from '../styles/Styles'
import { getColors } from '../styles/colors/Colors'

export interface SwitchFieldProps {
  label?: string
  info?: string
  value?: boolean
  mode?: string
  theme?: string
  onChange?(value?: boolean): void
}

const SwitchField: React.FC<SwitchFieldProps> = (props) => {
  const { label, info, value, onChange, mode, theme } = props
  const textStyles = getStyles(mode)
  const colors = getColors(theme)

  return (
    <View style={styles.container}>
      <Text accessible={true} style={[textStyles.primaryTextLarge, styles.textSpacingSmall]}>
        {label}
      </Text>
      <Text accessible={true} style={[textStyles.secondaryTextMedium, styles.textSpacingMedium]}>
        {info}
      </Text>

      <Switch
        accessibilityLabel={label}
        trackColor={{ true: colors.primaryFaded, false: '#DDDDDD' }}
        thumbColor={value ? colors.primary : '#888888'}
        ios_backgroundColor={value ? colors.primaryFaded : ''}
        onValueChange={onChange}
        value={value}
      />
    </View>
  )
}

export { SwitchField }
