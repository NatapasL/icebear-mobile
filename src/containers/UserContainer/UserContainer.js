import React from 'react'
import { Text, View } from 'react-native'

import { styles } from './styles'
import { Colors } from '../../styles'
import { Layout, Circle, Button } from '../../components'

const { PURPLE, WHITE } = Colors

const Component = ({ name }) => {
  const [firstName, lastName] = name.split(/\s/)

  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.header}>
          <Circle />
          <View style={styles.titleContainer}>
            <View style={styles.nameContainer}>
              <Text style={[styles.name, styles.nameBold]}>{firstName}</Text>
              <Text style={styles.name}>
                {' '}
                {lastName}
              </Text>
            </View>
            <Text style={styles.subtitle}>
              icebear home
            </Text>
          </View>
        </View>
        <View style={styles.logoutButtonContainer}>
          <Button
            label="LOGOUT"
            color={WHITE}
            backgroundColor={PURPLE}
            fontWeight="bold"
          />
        </View>
      </View>
    </Layout>
  )
}

Component.defaultProps = {
  name: 'Thirawit Kaeophirom',
}

export default Component
