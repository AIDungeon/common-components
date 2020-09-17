import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { Icon } from '../icon/Icon'
import { getStyles } from '../styles/Styles'
import { getTextColors } from '../styles/colors/Colors'

export interface TagProps {
  tag: string
  hash?: boolean
  edit?: boolean
  mode?: string
  onDelete?: (tag: string) => void | undefined
}

const Tag: React.FC<TagProps> = (props) => {
  const { tag, onDelete, hash = true, edit = false, mode = 'dark' } = props
  const styles = getStyles(mode)
  const colors = getTextColors(mode)
  const nsfw = tag.trim().toLowerCase() === 'nsfw'

  const text = hash ? `#${tag}` : tag
  const textColor = nsfw ? colors.alert : colors.secondary
  let textStyle = nsfw ? styles.alertTextXSmall : styles.secondaryTextXSmall
  if (edit) {
    textStyle = nsfw ? styles.alertTextSmall : styles.secondaryTextSmall
  }

  return (
    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
      <View style={[styles.tagContainer, { flex: 1, borderColor: textColor }]}>
        <Text style={textStyle}>{text}</Text>
        {edit && (
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center' }}
            onPress={() => {
              if (onDelete) onDelete(tag)
            }}
          >
            <Icon iconName="close" size={18} mode="light" color={textColor} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export { Tag }
