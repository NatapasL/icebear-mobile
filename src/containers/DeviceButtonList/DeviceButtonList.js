import React, { useState } from 'react'
import { View } from 'react-native'

import { styles } from './styles'
import { DeviceButton } from '../../components'

const Component = ({ devices }) => {
  const [active, setActive] = useState(0)

  const handlePressButton = (index) => () => setActive(index)

  return (
    <View style={styles.container}>
      {devices && devices.map((device, index) => (
        <DeviceButton
          key={device.name}
          label={device.name}
          active={active === index}
          onPress={handlePressButton(index)}
        />
      ))}
    </View>
  )
}

Component.defaultProps = {
  devices: [],
}

export default Component
