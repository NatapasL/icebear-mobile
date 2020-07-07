import React from 'react'
import { View } from 'react-native'

import { styles } from './styles'
import { NumberBox } from '../../components'

const Component = () => (
  <View style={styles.container}>
    <View style={styles.numberBoxContainer}>
      <NumberBox label="34°C" />
    </View>
    <View style={styles.numberBoxContainer}>
      <NumberBox label="21°C" />
    </View>
    <View style={styles.numberBoxContainer}>
      <NumberBox label="84%" />
    </View>
    <View style={styles.numberBoxContainer}>
      <NumberBox label="8" />
    </View>
  </View>
)

export default Component
