import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import type { Story, Meta } from '@storybook/react/types-6-0'

import { SwitchField, SwitchFieldProps } from '../switch/SwitchField'

export default {
  title: 'Example/Switch',
  component: SwitchField,
} as Meta

const Template: Story<SwitchFieldProps> = (args) => <SwitchField {...args} />

export const LightTheme = Template.bind({})
LightTheme.args = {
  label: 'Light Theme Label',
  info: 'info text for the light theme',
  value: true,
  mode: 'light',
  color: 'terminal',
}
