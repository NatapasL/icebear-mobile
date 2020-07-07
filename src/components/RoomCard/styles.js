import { StyleSheet } from 'react-native'
import { Colors } from '../../styles'

const { BLACK } = Colors

export const styles = StyleSheet.create({
  imageBackground: {
    width: 210,
    height: 350,
    borderRadius: 24,
    overflow: 'hidden',
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '50%',
    paddingBottom: 36,
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: 'flex-end',
  },
  titleContainer: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 28,
    color: BLACK,
    marginBottom: 8,
  },
  titleBold: {
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
  },
})
