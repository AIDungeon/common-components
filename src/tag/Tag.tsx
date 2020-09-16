import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { Icon } from '../icon/Icon'
import { getStyles } from '../styles/Styles'
import { getTextColors } from '../styles/colors/Colors'

export interface TagProps {
  tag: string
  nsfw?: boolean
  hash?: boolean
  edit?: boolean
  mode?: string
  onDelete?: (tag: string) => void | undefined
}

const Tag: React.FC<TagProps> = (props) => {
  const { tag, onDelete, nsfw = false, hash = true, edit = false, mode = 'dark' } = props
  const styles = getStyles(mode)
  const colors = getTextColors(mode)

  const text = hash ? `#${tag}` : tag
  const textColor = nsfw ? colors.alert : colors.secondary
  let textStyle = nsfw ? styles.alertTextXSmall : styles.secondaryTextXSmall
  if (edit) {
    textStyle = nsfw ? styles.alertTextSmall : styles.secondaryTextSmall
  }

  return (
    <View style={[styles.tagContainer, { borderColor: textColor }]}>
      <Text style={textStyle}>{text}</Text>
      {edit && (
        <TouchableOpacity
          style={{ paddingTop: 1 }}
          onPress={() => {
            if (onDelete) onDelete(tag)
          }}
        >
          <Icon iconName="close" size={15} mode="light" color={textColor} />
        </TouchableOpacity>
      )}
    </View>
  )
}

export { Tag }
