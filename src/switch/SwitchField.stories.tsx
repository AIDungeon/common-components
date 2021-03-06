import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import type { Story, Meta } from '@storybook/react/types-6-0'

import { SwitchField, SwitchFieldProps } from './SwitchField'

export default {
  title: 'Example/Switch',
  component: SwitchField,
} as Meta

const Template: Story<SwitchFieldProps> = (args) => {
  return (
    <>
      <SwitchField {...args} />
      <SwitchField {...args} value={false} />
    </>
  )
}

export const DarkTheme = Template.bind({})
DarkTheme.args = {
  label: 'Dark Theme Label',
  info: 'info text for the dark theme',
  value: true,
  mode: 'dark',
  theme: 'terminal',
}
DarkTheme.parameters = {
  backgrounds: { default: 'DarkMode' },
}

export const LightTheme = Template.bind({})
LightTheme.args = {
  label: 'Light Theme Label',
  info: 'info text for the light theme',
  value: true,
  mode: 'light',
  theme: 'terminal',
}
