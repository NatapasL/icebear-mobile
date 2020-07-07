import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { Colors } from '../../styles'
import { styles } from './styles'
import { Circle } from '../Circle'

const { WHITE, BLACK } = Colors

const MAX_LABEL_LENGTH = 7

const Component = ({ active, label, onPress }) => {
  const shortLabel = label.length > MAX_LABEL_LENGTH
    ? `${label.substring(0, MAX_LABEL_LENGTH - 1)}...`
    : label

  return (
    <TouchableOpacity
      style={[
        styles.container,
        active ? styles.containerActive : null,
      ]}
      onPress={onPress}
    >
      <Circle
        size={28}
        backgroundColor={active ? WHITE : BLACK}
      />
      <Text style={[styles.label, active ? styles.labelActive : null]}>
        {shortLabel}
      </Text>
    </TouchableOpacity>
  )
}

Component.defaultProps = {
  label: '',
}

export default Component
