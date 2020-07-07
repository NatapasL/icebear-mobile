import React, { useState, useEffect } from 'react'
import { View } from 'react-native'

import { styles } from './styles'
import { Layout } from '../../components'
import { HeadSection } from '../HeadSection'
import { DeviceButtonList } from '../DeviceButtonList'

const DEVICES_MOCK = [
  { name: 'Lamp' },
  { name: 'Heating' },
  { name: 'Fan' },
  { name: 'Sound' },
]

const Component = ({ route }) => {
  const [devices, setDevices] = useState([])

  const { name } = route.params
  const roomName = name.replace(/\sroom/i, '')

  useEffect(() => {
    setDevices(DEVICES_MOCK)
  }, [])

  return (
    <Layout>
      <HeadSection
        borderBottomLeftRadius={0}
        titleBold={roomName}
        title="room"
        subtitle="Manage your home"
      >
        <DeviceButtonList devices={devices} />
      </HeadSection>
      <View style={styles.body}>
        <View style={styles.bodyInner} />
      </View>
    </Layout>
  )
}

export default Component
