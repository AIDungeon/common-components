import React from 'react'
import { TouchableOpacity, Text, ImageURISource, View } from 'react-native'
import { Avatar } from 'react-native-elements'

import { styles, getStyles } from '../styles/Styles'
import { getColors, getTextColors } from '../styles/colors/Colors'

export interface UserTitleProps {
  username: string
  avatarSource?: ImageURISource
  onPress?: () => void
  type?: string
  color?: string
  mode?: string
}

const UserTitle: React.FC<UserTitleProps> = (props) => {
  const { avatarSource, username, onPress, color, mode } = props
  const colors = getColors(color)
  const textStyles = getStyles(mode)
  const textColors = getTextColors(mode)

  return (
    <TouchableOpacity
      style={styles.flexContainer}
      onPress={onPress}
      accessibilityLabel="Profile"
      accessibilityRole="button"
    >
      {!!avatarSource && (
        <View style={styles.avatarContainer}>
          <Avatar
            rounded
            size="small"
            source={avatarSource}
            containerStyle={{ backgroundColor: colors.primary }}
            titleStyle={{ color: textColors.primary }}
          />
        </View>
      )}
      {!avatarSource && (
        <View style={styles.avatarContainer}>
          <Avatar
            rounded
            size="small"
            title={username?.charAt(0).toUpperCase()}
            containerStyle={{ backgroundColor: colors.primary }}
            titleStyle={{ color: textColors.primary }}
          />
        </View>
      )}

      <Text style={textStyles.primaryTextMedium}>{username}</Text>
      {/* type === 'supporter' && (
        <Icon name="medal" size={20} color={styles.userTheme.primary} style={{ marginLeft: 5 }} />
      )}
      {type === 'dev' && <Icon name="crown" size={20} color={styles.userTheme.primary} style={{ marginLeft: 5 }} /> */}
    </TouchableOpacity>
  )
}

export { UserTitle }
