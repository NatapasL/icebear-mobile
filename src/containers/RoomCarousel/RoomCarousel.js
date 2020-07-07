import React from 'react'
import Carousel from 'react-native-snap-carousel'
import { Dimensions } from 'react-native'

import { RoomCard } from '../../components'

const CAROUSEL_ITEMS = [
  {
    title: 'Living room',
    numberOfDivices: 6,
    imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/holly-kopman-4-1580422693.jpg',
  },
  {
    title: 'Bath room',
    numberOfDivices: 2,
    imageUrl: 'https://i.pinimg.com/originals/c6/4f/d1/c64fd10e0bb16ecf689e232046a37df4.jpg',
  },
  {
    title: 'Kitchen room',
    numberOfDivices: 3,
    imageUrl: 'https://www.ikea.com/images/bodbyn-edd32a51cf5cffe99d8be656e98ca3ba.jpg?f=s',
  },
]

const CarouselItem = ({ item }) => {
  const {
    title,
    numberOfDivices,
    imageUrl,
  } = item
  const roomName = title.replace(/\sroom/i, '')

  return (
    <RoomCard
      name={roomName}
      numberOfDevices={numberOfDivices}
      imageUrl={imageUrl}
    />
  )
}

const Component = () => (
  <Carousel
    layout="default"
    data={CAROUSEL_ITEMS}
    sliderWidth={Dimensions.get('window').width - 48}
    itemWidth={234}
    renderItem={CarouselItem}
    inactiveSlideOpacity={1}
    inactiveSlideScale={1}
    activeSlideAlignment="start"
  />
)

export default Component
