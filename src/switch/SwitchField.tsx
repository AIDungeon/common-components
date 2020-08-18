import React from 'react'
import {
  Switch,
  Text,
  View,
  ViewStyle,
  TextStyle,
  StyleSheet,
} from 'react-native'

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

interface Style {
  container: ViewStyle
  labelText: TextStyle
  infoText: TextStyle
}

const styles = StyleSheet.create<Style>({
  container: {
    width: '100%',
    marginBottom: 45,
    alignItems: 'flex-start',
  },
  labelText: {
    fontFamily: 'HelveticaNeueMedium',
    fontSize: 24,
    color: 'black',
    marginBottom: 5,
  },
  infoText: {
    color: 'grey',
    fontFamily: 'HelveticaNeueMedium',
    fontSize: 12,
    marginBottom: 10,
  },
})

export default SwitchField
