import { StyleSheet } from 'react-native'
import { Colors } from '../../styles'

const { GREY_2 } = Colors

export const styles = StyleSheet.create({
  input: {
    height: 48,
    backgroundColor: GREY_2,
    borderRadius: 8,
    maxWidth: 368,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    fontSize: 18,
  }
})
