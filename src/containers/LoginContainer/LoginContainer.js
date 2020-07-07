import React from 'react'
import { View, Image } from 'react-native'

import { Images } from '../../assets'
import { styles } from './styles'
import {
  Layout, Button, Input,
} from '../../components'

export default () => (
  <Layout>
    <View style={styles.container}>
      <View style={styles.logoBackground}>
        <Image
          source={Images.ICEBEAR_LOGO}
          style={styles.logoImage}
        />
      </View>
      <View style={styles.inputContainer}>
        <Input marginBottom={28} />
        <Input marginBottom={28} secureTextEntry />
        <Button label="LOGIN" maxWidth={368} fontWeight="bold" />
      </View>
    </View>
  </Layout>
)
