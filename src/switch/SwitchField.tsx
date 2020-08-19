import React from 'react'
import { Switch, Text, View } from 'react-native'

import { getStyles } from '../styles/Styles'
import type { UserText } from 'src/styles/StyleTypes'

interface Props {
  label?: string
  info?: string
  value?: boolean
  userText?: UserText
  mode?: string
  color?: string
  onChange?(value?: boolean): void
}

const SwitchField: React.FC<Props> = (props) => {
  const { label, info, value, onChange, mode } = props
  const styles = getStyles(mode)

  return (
    <View style={styles.container}>
      <Text accessible={true} style={styles.primaryText}>
        {label}
      </Text>
      <Text accessible={true} style={styles.secondaryText}>
        {info}
      </Text>

      <Switch
        accessibilityLabel={label}
        thumbColor="blue"
        ios_backgroundColor="red"
        onValueChange={onChange}
        value={value}
      />
    </View>
  )
}

export default SwitchField
