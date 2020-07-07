import React, { useState } from 'react'
import { View } from 'react-native'
import PickerSelect from 'react-native-picker-select'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import { styles } from './styles'
import { Layout } from '../../components'
import { HeadSection } from '../HeadSection'
import { NumberBoxList } from '../NumberBoxList'
import { RoomCarousel } from '../RoomCarousel'

const SELECT_ITEMS = [
  { label: 'A101', value: 'A101' },
  { label: 'A102', value: 'A102' },
  { label: 'A103', value: 'A101]3' },
]

const DropdownIcon = () => (
  <FontAwesomeIcon
    icon={faChevronDown}
    size={24}
    style={styles.dropdownIcon}
  />
)

const Component = ({ userName }) => {
  const [code, setCode] = useState(SELECT_ITEMS[0].value)

  return (
    <Layout>
      <HeadSection
        titleBold="Hello"
        title={userName}
        subtitle="Welcome to icebear home"
      >
        <NumberBoxList />
      </HeadSection>
      <View style={styles.body}>
        <RoomCarousel />
        <View style={styles.dropdownContainer}>
          <PickerSelect
            value={code}
            placeholder={{}}
            items={SELECT_ITEMS}
            Icon={DropdownIcon}
            style={{
              inputIOS: styles.dropdownInput,
              inputAndroid: styles.dropdownInput,
              iconContainer: styles.dropdownIconContainer,
            }}
            onValueChange={(value) => setCode(value)}
          />
        </View>
      </View>
    </Layout>
  )
}

Component.defaultProps = {
  userName: 'Thirawit',
}

export default Component
