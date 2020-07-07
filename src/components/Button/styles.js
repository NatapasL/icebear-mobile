import { StyleSheet } from 'react-native'
import { Colors } from '../../styles'

const { CYAN, BLACK } = Colors

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: CYAN,
    padding: 22,
    width: '100%',
    borderRadius: 8,
  },
  text: {
    fontSize: 22,
    color: BLACK,
  },
})
