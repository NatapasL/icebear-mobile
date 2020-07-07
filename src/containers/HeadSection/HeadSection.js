import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import { styles } from './styles'
import { Circle } from '../../components'

const Component = ({
  titleBold,
  title,
  subtitle,
  children,
  borderBottomLeftRadius,
}) => {
  const route = useRoute()
  const navigation = useNavigation()

  return (
    <View style={[styles.container, { borderBottomLeftRadius }]}>
      <View style={styles.topRightSection}>
        <Circle />
      </View>
      {route.name !== 'home' && (
        <TouchableOpacity style={styles.backButtonContainer} onPress={() => navigation.goBack()}>
          <FontAwesomeIcon icon={faArrowLeft} size={30} />
        </TouchableOpacity>
      )}
      <View style={styles.titleContainer}>
        <Text style={[styles.title, styles.titleBold]}>
          {titleBold}
        </Text>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <View style={styles.childrenContainer}>
        {children}
      </View>
    </View>
  )
}

Component.defaultProps = {
  borderBottomLeftRadius: 42,
}

export default Component
