import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import type { Story, Meta } from '@storybook/react/types-6-0'
import { View } from 'react-native'

import { UserTitle, UserTitleProps } from './UserTitle'

export default {
  title: 'Example/UserTitle',
  component: UserTitle,
} as Meta

const Template: Story<UserTitleProps> = (args) => {
  return (
    <>
      <UserTitle {...args} userType="dev" />
      <View style={{ marginTop: 30 }} />
      <UserTitle {...args} userType="subscriber" />
      <View style={{ marginTop: 30 }} />
      <UserTitle {...args} />
    </>
  )
}

export const DarkTheme = Template.bind({})
DarkTheme.args = {
  username: 'Squibs',
  avatarSource: { uri: 'https://aidungeon-images.s3.us-east-2.amazonaws.com/portraits/contrib1.png' },
  mode: 'dark',
}
DarkTheme.parameters = {
  backgrounds: { default: 'DarkMode' },
}

export const LightTheme = Template.bind({})
LightTheme.args = {
  username: 'Squibs',
  avatarSource: { uri: 'https://aidungeon-images.s3.us-east-2.amazonaws.com/portraits/contrib1.png' },
  mode: 'light',
}
