import React from 'react'
import { Text, View } from 'react-native'
import { Switch } from 'react-native-switch'

import { getStyles } from '../styles/Styles'
import getColors from '../styles/colors/Colors'
import type { UserText } from 'src/styles/StyleTypes'

const SwitchField: React.FC<Props> = (props) => {
  const { label, info, value, onChange, mode, color } = props
  const styles = getStyles(mode)
  const colors = getColors(color)

  return (
    <View style={styles.container}>
      <Text accessible={true} style={styles.primaryText}>
        {label}
      </Text>
      <Text accessible={true} style={styles.secondaryText}>
        {info}
      </Text>

      <Switch
        backgroundActive={colors.primaryFaded}
        backgroundInactive="#DDDDDD"
        circleActiveColor={colors.primary}
        circleBorderInactiveColor="#999999"
        onValueChange={onChange}
        value={value}
      />
    </View>
  )
}

export default SwitchField

interface Props {
  label?: string
  info?: string
  value?: boolean
  userText?: UserText
  mode?: string
  color?: string
  onChange?(value?: boolean): void
}
