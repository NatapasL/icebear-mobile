import React from 'react'
import { View } from 'react-native'

import { Colors } from '../../styles'

const { PURPLE } = Colors

const Component = ({ size, backgroundColor }) => (
  <View style={{
    height: size,
    width: size,
    borderRadius: size,
    backgroundColor,
  }}
  />
)

Component.defaultProps = {
  size: 48,
  backgroundColor: PURPLE,
}

export default Component
