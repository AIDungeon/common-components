import React from 'react'
import { Switch, Text, View } from 'react-native'

import styles from '../styles/Styles'

interface Props {
  label?: string
  info?: string
  value?: boolean
  onChange?(value?: boolean): void
}

const SwitchField: React.FC<Props> = (props) => {
  const { label, info, value, onChange } = props

  return (
    <View style={styles.container}>
      <Text accessible={true} style={styles.labelText}>
        {label}
      </Text>
      <Text accessible={true} style={styles.infoText}>
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
