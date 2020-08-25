import React from 'react'
import { TouchableOpacity, Text, ImageURISource } from 'react-native'
import { Avatar } from 'react-native-elements'

import { getStyles } from '../styles/Styles'

export interface UserTitleProps {
  username: string
  avatarSource?: ImageURISource
  onPress?: () => void
  type?: string
  color?: string
  mode?: string
}

const UserTitle: React.FC<UserTitleProps> = (props) => {
  const { avatarSource, username, onPress, mode } = props
  const styles = getStyles(mode)

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.userContainer}
      accessibilityLabel="Profile"
      accessibilityRole="button"
    >
      {!!avatarSource && (
        <Avatar
          rounded
          size="small"
          source={avatarSource}
          containerStyle={{ backgroundColor: styles.userTheme.primary }}
          titleStyle={{ color: styles.userTheme.text }}
        />
      )}
      {!avatarSource && (
        <Avatar
          rounded
          size="small"
          title={username?.charAt(0).toUpperCase()}
          containerStyle={{ backgroundColor: styles.userTheme.primary }}
          titleStyle={{ color: styles.userTheme.text }}
        />
      )}

      <Text style={styles.usernameText}>{username}</Text>
      {/* type === 'supporter' && (
        <Icon name="medal" size={20} color={styles.userTheme.primary} style={{ marginLeft: 5 }} />
      )}
      {type === 'dev' && <Icon name="crown" size={20} color={styles.userTheme.primary} style={{ marginLeft: 5 }} /> */}
    </TouchableOpacity>
  )
}

export { UserTitle }
