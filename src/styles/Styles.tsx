import { ViewStyle, TextStyle, StyleSheet } from 'react-native'

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

export default styles
