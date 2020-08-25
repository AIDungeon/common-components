import React from 'react'
import { TouchableOpacity, Text, ImageURISource } from 'react-native'
import { Avatar } from 'react-native-elements'

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
  const textColors = getTextColors(mode)

  return (
    <TouchableOpacity onPress={onPress} accessibilityLabel="Profile" accessibilityRole="button">
      {!!avatarSource && (
        <Avatar
          rounded
          size="small"
          source={avatarSource}
          containerStyle={{ backgroundColor: colors.primary }}
          titleStyle={{ color: textColors.primary }}
        />
      )}
      {!avatarSource && (
        <Avatar
          rounded
          size="small"
          title={username?.charAt(0).toUpperCase()}
          containerStyle={{ backgroundColor: colors.primary }}
          titleStyle={{ color: textColors.primary }}
        />
      )}

      <Text>{username}</Text>
      {/* type === 'supporter' && (
        <Icon name="medal" size={20} color={styles.userTheme.primary} style={{ marginLeft: 5 }} />
      )}
      {type === 'dev' && <Icon name="crown" size={20} color={styles.userTheme.primary} style={{ marginLeft: 5 }} /> */}
    </TouchableOpacity>
  )
}

export { UserTitle }
