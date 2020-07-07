import React from 'react'
import { View, Text } from 'react-native'

import { Colors } from '../../styles'
import { styles } from './styles'
import { Circle } from '../Circle'

const { BLACK } = Colors

const Component = ({ label, marginRight }) => (
  <View style={[styles.container, { marginRight }]}>
    <Circle size={28} backgroundColor={BLACK} />
    <Text style={styles.label}>{label}</Text>
  </View>
)

export default Component
