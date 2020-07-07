import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'

import { styles } from './styles'

export default ({ children }) => (
  <SafeAreaView>
    <ScrollView>
      <View style={styles.defaultLayoutInner}>
        {children}
      </View>
    </ScrollView>
  </SafeAreaView>
)
