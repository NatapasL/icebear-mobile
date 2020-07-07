import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import { styles } from './styles'

const Component = ({
  label,
  maxWidth,
  fontWeight,
  color,
  backgroundColor,
}) => {
  const containerStyle = { maxWidth }
  if (backgroundColor) containerStyle.backgroundColor = backgroundColor

  const textStyle = { fontWeight }
  if (color) textStyle.color = color

  return (
    <TouchableOpacity style={[styles.container, containerStyle]}>
      <Text style={[styles.text, textStyle]}>{label}</Text>
    </TouchableOpacity>
  )
}

Component.defaultProps = {
  fontWeight: 'normal',
}

export default Component
