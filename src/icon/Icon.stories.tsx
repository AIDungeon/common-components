import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import type { Story, Meta } from '@storybook/react/types-6-0'

import { Icon, IconProps } from './Icon'

export default {
  title: 'Example/Icon',
  component: Icon,
} as Meta

const Template: Story<IconProps> = (args) => {
  return (
    <>
      <Icon {...args} iconName="pin" />
      <Icon {...args} iconName="play" type="font-awesome" theme="terminal" />
    </>
  )
}

export const DarkTheme = Template.bind({})
DarkTheme.args = {
  mode: 'dark',
}
DarkTheme.parameters = {
  backgrounds: { default: 'DarkMode' },
}

export const LightTheme = Template.bind({})
LightTheme.args = {
  mode: 'light',
}
