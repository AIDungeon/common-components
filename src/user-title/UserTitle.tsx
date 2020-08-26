import React from 'react'
import { TouchableOpacity, Text, ImageURISource, View } from 'react-native'
import { Avatar } from 'react-native-elements'

import { styles, getStyles } from '../styles/Styles'
import { getColors } from '../styles/colors/Colors'
import { Icon } from '../icon/Icon'
import DarkText from '../styles/colors/DarkText'

export interface UserTitleProps {
  username: string
  avatarSource?: ImageURISource
  mode: string
  onPress?: () => void
  userType?: string
  color?: string
}

const UserTitle: React.FC<UserTitleProps> = (props) => {
  const { avatarSource, username, onPress, color, mode, userType } = props
  const colors = getColors(color)
  const textStyles = getStyles(mode)
  const iconName = userType === 'dev' ? 'crown' : 'medal'

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
            titleStyle={{ color: DarkText.primary }}
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
            titleStyle={{ color: DarkText.primary }}
          />
        </View>
      )}

      <Text style={textStyles.primaryTextMedium}>{username}</Text>
      {!!userType && <Icon mode={mode} iconName={iconName} size={20} color={colors.primary} />}
    </TouchableOpacity>
  )
}

export { UserTitle }
