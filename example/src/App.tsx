import React, { useState } from 'react'
import { SwitchField } from 'latitude-common-components'

export default function App() {
  const [toggle, setToggle] = useState(true)
  return (
    <SwitchField
      label="label"
      info="info"
      value={toggle}
      mode="light"
      color="amber"
      onChange={(value: boolean) => {
        setToggle(value)
      }}
    />
  )
}
