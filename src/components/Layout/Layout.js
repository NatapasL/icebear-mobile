import React, { useEffect } from 'react'
import { Platform, KeyboardAvoidingView } from 'react-native'
import { useRoute } from '@react-navigation/native'
import SplashScreen from 'react-native-splash-screen'

import { useAuthentication } from '../../hooks'
import DefaultLayout from './DefaultLayout'

const LAYOUT_COMPONENTS = {
  default: DefaultLayout,
}

const behaviorKeyboard = Platform.select({ android: null, ios: 'padding' })

const Component = ({ layout, authenticationRequired, ...rest }) => {
  useEffect(() => {
    SplashScreen.hide()
  })

  if (authenticationRequired) {
    const route = useRoute()
    const isAuthenticated = useAuthentication()

    if (!isAuthenticated && route.name !== 'login') {
      return null
    }
  }

  const LayoutComponent = LAYOUT_COMPONENTS[layout] || DefaultLayout

  return (
    <KeyboardAvoidingView behavior={behaviorKeyboard}>
      <LayoutComponent {...rest} />
    </KeyboardAvoidingView>
  )
}

Component.defaultProps = {
  layout: 'default',
  authenticationRequired: true,
}

export default React.memo(Component)
