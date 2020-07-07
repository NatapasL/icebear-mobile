import { StyleSheet } from 'react-native'
import { Colors } from '../../styles'

const { PURPLE } = Colors

export const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingTop: 85,
    alignItems: 'center',
  },
  logoBackground: {
    borderRadius: (273 + 273) / 2,
    width: 273,
    height: 273,
    backgroundColor: PURPLE,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 28,
    overflow: 'hidden',
  },
  logoImage: {
    width: 172,
    height: 172,
  },
  inputContainer: {
    alignSelf: 'stretch',
  },
  input: {
    marginBottom: 28,
  },
})
