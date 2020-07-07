import { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

const IS_AUTH = true

export const useAuthentication = () => {
  const navigation = useNavigation()
  const route = useRoute()

  useEffect(() => {
    if (!IS_AUTH && route.name !== 'login') {
      navigation.replace('login')
    }
  }, [])

  return IS_AUTH
}

export default useAuthentication
