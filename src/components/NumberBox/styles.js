import { StyleSheet } from 'react-native'
import { Colors } from '../../styles'

const { WHITE, BLACK } = Colors

export const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    borderColor: WHITE,
    borderWidth: 4,
    borderRadius: 24,
    alignItems: 'center',
    padding: 12,
  },
  label: {
    color: BLACK,
    fontSize: 18,
    marginTop: 4,
  },
})
