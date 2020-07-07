import { StyleSheet, Dimensions } from 'react-native'

import { Colors } from '../../styles'

const { BLACK } = Colors
const BLACK_TRANSPARENT = `${BLACK}50`

export const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    position: 'relative',
    minHeight: '100%',
  },
  header: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleContainer: {
    alignItems: 'flex-end',
  },
  nameContainer: {
    flexDirection: 'row',
  },
  name: {
    fontSize: 28,
    color: BLACK,
  },
  nameBold: {
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    color: BLACK_TRANSPARENT,
    marginTop: 4,
  },
  logoutButtonContainer: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    paddingLeft: 20,
    paddingRight: 20,
  },
})
