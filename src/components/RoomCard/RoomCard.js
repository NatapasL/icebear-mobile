import React from 'react'
import {
  View,
  Text,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'

import { Colors } from '../../styles'
import { styles } from './styles'

const { WHITE, GREY_2 } = Colors

const LINEAR_GRADIENT_COLOR_0 = `${WHITE}00`
const LINEAR_GRADIENT_COLOR_1 = GREY_2

const Component = ({
  name,
  numberOfDevices,
  imageUrl,
}) => {
  const navigation = useNavigation()
  const onPress = () => navigation.navigate('room', { name })

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <ImageBackground
        source={{ uri: imageUrl }}
        style={styles.imageBackground}
      >
        <LinearGradient
          colors={[
            LINEAR_GRADIENT_COLOR_0,
            LINEAR_GRADIENT_COLOR_1,
          ]}
          style={styles.textContainer}
        >
          <View style={styles.titleContainer}>
            <Text style={[styles.title, styles.titleBold]}>{name}</Text>
            <Text style={styles.title}>
              {' '}
              room
            </Text>
          </View>
          <Text style={styles.subtitle}>
            {numberOfDevices}
            {' '}
            devices
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableWithoutFeedback>
  )
}

export default Component
