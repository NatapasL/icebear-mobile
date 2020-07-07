import { StyleSheet } from 'react-native'

import { Colors } from '../../styles'

const { CYAN, GREY_1 } = Colors

export const styles = StyleSheet.create({
  body: {
    backgroundColor: CYAN,
  },
  bodyInner: {
    backgroundColor: GREY_1,
    borderTopLeftRadius: 42,
    borderTopRightRadius: 42,
    paddingTop: 42,
  },
})
