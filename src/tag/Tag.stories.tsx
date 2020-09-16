import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import type { Story, Meta } from '@storybook/react/types-6-0'

import { Tag, TagProps } from './Tag'

export default {
  title: 'Example/Tag',
  component: Tag,
} as Meta

const Template: Story<TagProps> = (args) => {
  return (
    <>
      <Tag {...args} />
      <Tag
        {...args}
        nsfw={true}
        edit={true}
        onDelete={() =>
          console.log(
            "Oh wow good for you, oh man we're all out of cookies... well shoot, I guess go ahead and pat yourself on the back or something."
          )
        }
      />
    </>
  )
}

export const DarkTheme = Template.bind({})
DarkTheme.args = {
  mode: 'dark',
  tag: 'tagging',
  hash: false,
}
DarkTheme.parameters = {
  backgrounds: { default: 'DarkMode' },
}

export const LightTheme = Template.bind({})
LightTheme.args = {
  mode: 'light',
  tag: 'lagging',
}
