import { StyleSheet } from 'react-native'

import { Colors } from '../../styles'

const { PURPLE, WHITE, BLACK } = Colors

export const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    borderRadius: 24,
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: WHITE,
  },
  'container:last-child': {
    marginRight: 0,
  },
  containerActive: {
    backgroundColor: PURPLE,
  },
  label: {
    marginTop: 4,
    fontSize: 18,
    overflow: 'hidden',
    maxHeight: 24,
    color: BLACK,
  },
  labelActive: {
    color: WHITE,
  },
})
