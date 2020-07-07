import { StyleSheet } from 'react-native'
import { Colors } from '../../styles'

const { PURPLE, WHITE } = Colors

export const styles = StyleSheet.create({
  body: {
    padding: 24,
  },
  dropdownContainer: {
    marginTop: 32,
  },
  dropdownInput: {
    backgroundColor: PURPLE,
    width: 184,
    textAlign: 'center',
    height: 64,
    fontSize: 24,
    color: WHITE,
    borderRadius: 14,
  },
  dropdownIconContainer: {
    left: 28,
    right: 'auto',
    top: 20,
  },
  dropdownIcon: {
    color: WHITE,
  },
})
